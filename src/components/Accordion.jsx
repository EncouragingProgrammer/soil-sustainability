import { useState } from 'react';
import '../styles/Accordion.css'; // Assuming you’ll add styles here!

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion-container">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <button
            onClick={() => toggle(index)}
            className={`accordion-header ${openIndex === index ? 'open' : ''}`}
          >
            <span className="accordion-question">{item.question}</span>
            <span className="accordion-icon">{openIndex === index ? '−' : '+'}</span>
          </button>

          <div
            className={`accordion-content ${openIndex === index ? 'open' : ''}`}
          >
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
