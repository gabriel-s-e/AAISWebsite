import { Transaction, queryGPT } from "@/lib/aicontroller";
import { Suspense } from "react";

const DIRECTIVE = "You are trying to write a concise description of a discussion given some starting information."

type ReqType = {
    params: any
    searchParams: any
}

export function GeneratedDescriptions() {
    return <></>
}

export async function ContentForm(): Promise<JSX.Element> {
    let t = new Transaction(DIRECTIVE);
    let msgs = queryGPT(t);
    // TODO(FE)
    return <form>
        <label htmlFor="_is">Meeting Minutes</label><br />
        <input type="text" name="minutes" id="_is"/><br />
        <label htmlFor="_iu">User Text</label><br />
        <input type="text" name="usertext" id="_iu"/><br />
        <input id="_su" type="submit" value="Load Descriptions"/><br />
        <Suspense fallback={<p>Loading...</p>}>
            <GeneratedDescriptions />
        </Suspense>
    </form>
}

export default function Page(req: ReqType): JSX.Element {
    console.log(req.searchParams);
    // TODO(FE)
    return <>
        <p>This is the admin page. {Date.now()}</p>
        <Suspense fallback={<p>Loading...</p>}>
            <ContentForm />
        </Suspense>
    </>
}
