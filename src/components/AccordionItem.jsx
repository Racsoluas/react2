import React from 'react'

function AccordionItem({item}) {
  return (
    <div className="faq-1">
            <img className="faq-arrow" src="/Images/arrow-down.svg" alt="Pil ner" />
            <h1 className="faq-q1">{item.title}</h1>
            <p className="faq-a1">{item.content}</p>
        </div>
  )
}

export default AccordionItem