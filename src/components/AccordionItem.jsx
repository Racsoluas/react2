import React, { useState } from 'react'
/*  testar igen ny accordion*/


function AccordionItem({item}) {
const [isOpen, setIsOpen] = useState(false);

const toggleAccordion = () => {
    setIsOpen(!isOpen);
}

  return (
    <div className="faq-1">
      <div className={`accordion-item ${isOpen ? 'active' : ''}`}>
            <div className="btn-accordion" onClick={toggleAccordion}>
              <i className={`fas ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            <h1 className="accordion-title">{item.title}</h1>

            {isOpen && (
                <p className={`accordion-content ${isOpen ? 'active' : ''}`}>{item.content}</p>
            )}
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;