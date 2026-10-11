import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqs = [
    {
        question: "What is this app about?",
        answer: "This app helps users track and improve their daily habits.",
    },
    {
        question: "How do I reset my password?",
        answer:
            "Click on 'Forgot Password' on the login screen and follow instructions.",
    },
    {
        question: "Can I use this app offline?",
        answer: "Yes, some features are available offline after the initial setup.",
    },
];

function FaqAccordion() {
    const [activeIndex, setActiveIndex] = useState(null)
    const handleClick = (index) => {
        // Logic to toggle the display of the answer for the clicked question
        // This can be implemented using state to track which question is currently expanded
        setActiveIndex(index === activeIndex ? null : index)
    }
    return (
        <div className="faq-container">
            <h2 className="faq-title">Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
                <div
                    className="faq-item"
                    key={index}
                    data-testid={`faq-item-${index}`}
                >
                    <button
                        className="faq-question"
                        data-testid={`faq-question-${index}`}
                        onClick={() => handleClick(index)}
                    >
                        <span>{faq.question}</span>
                        <span className="faq-icon">
                            {index === activeIndex ? (
                                <FiChevronUp data-testid={`icon-up-${index}`} />
                            ) : (
                                <FiChevronDown data-testid={`icon-down-${index}`} />
                            )}
                        </span>
                    </button>

                    {index === activeIndex && (
                        <div
                            className="faq-answer"
                            data-testid={`faq-answer-${index}`}
                        >
                            {faq.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default FaqAccordion;
