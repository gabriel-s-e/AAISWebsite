'use client'

import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WindowTop from "../components/WindowTop";
import { MdQuestionAnswer } from "react-icons/md";
import styles from './FAQ.module.css';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    const contentRef = useRef(null);

    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.style.maxHeight = isOpen ? `${contentRef.current.scrollHeight}px` : '0px';
        }
    }, [isOpen]);

    return (
        <div className={styles.faqItem}>
            <button
                className={`${styles.faqQuestion} ${isOpen ? styles.faqQuestionActive : ''}`}
                onClick={onClick}
            >
                {question}
                {isOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            <div
                ref={contentRef}
                className={`${styles.faqAnswer} ${isOpen ? styles.faqAnswerActive : ''}`}
            >
                {answer}
            </div>
        </div>
    );
};

const faqData = [
    {
        question: "How do I join?",
        answer: (
            <>
                All you need to do is show up to our meetings. We meet biweekly in PETR 118, 6-7PM. Follow our{' '}
                <a href="https://www.instagram.com/tamuaais/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                    Instagram
                </a>{' '}
                and join our{' '}
                <a href="https://discord.com/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                    Discord
                </a>{' '}
                for updates on meetings!
            </>
        )
    },
    {
        question: "What kind of events are held?",
        answer: "Our general meetings go over how companies are using AI, as well as important business standpoints of incorporating AI into industry projects. We also host speaker events where people discuss their research, and go over tutorials where we teach different techniques for using AI."
    },
    {
        question: "What's in it for me?",
        answer: "Practical experience with AI techniques through tutorials and workshops, and learn how these technologies are used in industries!"
    },

];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={styles.entireContainer}>
            <Navbar />
            <div className={styles.contentContainer}>
                <div className={`${styles.window} ${styles.faqContainer}`}>
                    <WindowTop WindowIcon={MdQuestionAnswer} title="FAQ" />
                    <h2 className={styles.title}>Frequently Asked Questions</h2>
                    <div className={styles.faqList}>
                        {faqData.map((faq, index) => (
                            <FAQItem
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openIndex === index}
                                onClick={() => handleClick(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}