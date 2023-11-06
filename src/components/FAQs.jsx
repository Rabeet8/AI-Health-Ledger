import React, { useState } from 'react';
import './FAQs.css';

const FAQs = () => {
  const faqs = [
    {
      question: 'Q) What is Lorem Ipsum?',
      answer:
        'A) Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      question: 'Q) Why do we use it?',
      answer:
        'A) It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      question: 'Q) Where does it come from?',
      answer:
        'A) Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.',
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

     
    
    <div className="faq-container" > //data-aos="fade-left" data-aos-offset="100"
        <h1 className='heading2' >
    <span className="cool-underline">Frequently Asked Questions</span>
        </h1>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div
            className={`faq-question ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
             <span className="dropdown-icon">
              {activeIndex === index ? '▼' : '▶'} {/* You can use any icon here */}
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
