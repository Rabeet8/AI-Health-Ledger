import React, { useState } from "react";
import "./FAQs.css";

const FAQs = () => {
  const faqs = [
    {
      question: "What is AI-Health Ledger?",
      answer:
        "AI-Health Ledger is a medical diagnoses system powered by Blockchain and Artificial Intelligence .",
    },
    {
      question: "Why do we use it?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      question: "Where does it come from?",
      answer:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="faq-container">
      {" "}
      //data-aos="fade-left" data-aos-offset="100"
      <h1 className="heading2">
        <span className="cool-underline">Frequently Asked Questions</span>
      </h1>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div
            className={`faq-question ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleClick(index)}
          >
            <span className="dropdown-icon">
              {activeIndex === index ? "▼" : "▶"}{" "}
              {/* You can use any icon here */}
            </span>
            {faq.question}
          </div>
          {activeIndex === index && (
            <div className="faq-answer">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQs;
