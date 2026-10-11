import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import "../styles/FaqAccordion.css";

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
    const handleAccordion = (index) =>{
        console.log(index)
        setActiveIndex(index === activeIndex ? null : index)
    }
  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div className="faq-item" key={index}>
          <button className="faq-question" onClick={() =>handleAccordion(index)}>
            <span>{faq.question}</span>
            <span className="faq-icon">
              {
                index === activeIndex ? <FiChevronUp /> : <FiChevronDown />
              }
            </span>
          </button>
          {
            index === activeIndex && <p>{faq.answer}</p>
          }
        </div>
      ))}
    </div>
  );
}

export default FaqAccordion;
