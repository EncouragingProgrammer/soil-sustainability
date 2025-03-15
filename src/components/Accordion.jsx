import { useState } from 'react';

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border rounded-lg">
          <button
            onClick={() => toggle(index)}
            className="w-full text-left px-4 py-3 flex justify-between items-center bg-gray-100 hover:bg-gray-200"
          >
            <span className="font-medium">{item.question}</span>
            <span>{openIndex === index ? '-' : '+'}</span>
          </button>
          {openIndex === index && (
            <div className="px-4 py-3 text-gray-700 bg-white">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}
