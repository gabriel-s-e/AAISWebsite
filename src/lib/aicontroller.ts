import { OpenAI } from "openai"

/**
 * Convenience function used to help filter message results
 * from the openai api while maintaining strict type checks.
 */
function nullfilter<T>(__: T | null): __ is T {
    return __ !== null;
}

/**
 * Represents a signle message in a conversation with GPT.
 */
export type OpenAIMessage = {
    role: "system" | "user" | "assistant";
    name?: string;
    content: string;
}

type DescriptionEvent = {
    text: string
}

/**
 * Represents the user information required to generate meeting descriptions using GPT.
 */
export class Transaction {
    directive: string;
    minutes: string | null;
    descriptions: string[];
    descriptionEvents: DescriptionEvent[];

    constructor(directive: string) {
        this.directive = directive;
        this.minutes = null;
        this.descriptions = [];
        this.descriptionEvents = [];
    }

    /**
     * Returns empty if transaction is not valid.
     */
    toChatLog(): OpenAIMessage[] {
        if (this.minutes === null) { return []; }
        let messages: OpenAIMessage[] = [
            {"role": "system", "content": this.directive},
        ];
        messages.push({"role": "user", "name": "meeting minutes", "content": this.minutes});
        for(const d of this.descriptions) {
            messages.push({"role": "user", "name": "description", "content": d});
        }
        return messages;
    }

    /**
     * Takes a plain object and returns an instance of `Transaction`.
     */
    static fromObject(o: object): Transaction {
        let t: Transaction = new Transaction("");
        Object.assign(t, o);
        return t;
    }
}

/**
 * Returns a set of completions given a current transaction state.
 */
export async function queryGPT(transaction: Transaction): Promise<string[]> {
    let messages: OpenAIMessage[] = transaction.toChatLog();
    // TODO model params
    const comps = await (new OpenAI()).chat.completions.create({
        messages: messages,
        model: "gpt-3.5-turbo",
        max_tokens: 500,
        n: 3,
        temperature: 0.2,
    });
    // TODO : check finish reason
    return comps.choices.map((__) => __.message.content).filter(nullfilter);
}

