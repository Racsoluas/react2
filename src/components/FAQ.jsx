import React, { useEffect, useState } from 'react'
import AccordionItem from './AccordionItem'

function FAQ() {

    const [accordions, setAccordions] = useState([])
    const fetchFaq  = async () => {
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/faq')
        const data = await res.json()
        setAccordions(data)
    }
    
    useEffect(() => {
        fetchFaq()
    }, [])

  return (
    <div className="faq container">
    
    <div className="faq-contact">
        <h1>Any questions? Check out the FAQs</h1>
        <p>Still have unanswered questions and need to get in touch?</p>
    </div>

    <div className="faq-under">
    <div className="faq-call">
        <img className="icon-telefon" src="/Images/telephone-icon.svg" alt="telefon-ikon" />
        <p>Still have questions?</p>
        <a href="#">Contact us  →</a>
    </div>
    <div className="faq-chat">
        <img className="icon-telefon" src="/Images/chat-icon.svg" alt="chat-ikon" />
        <p>Don't like phone calls?</p>
        <a href="#">Contact us  →</a>
    </div>
</div>

    {/* <div className="faq-bar">
        <div className="faq-1 first">
            <img className="faq-arrow" src="/Images/arrow-down.svg" alt="Pil ner" />
            <h1 className="faq-q1">Is any of my personal information stored in the App?</h1>
        </div>
        <div className="faq-1 second">
            <img className="faq-arrow" src="/Images/arrow-down.svg" alt="Pil ner" />
            <h1 className="faq-q1">What format can i download my transaction history in?</h1>
        </div>
        <div className="faq-1  third">
            <img className="faq-arrow" src="/Images/arrow-down.svg" alt="Pil ner" />
            <h1 className="faq-q1">Can I schedule future transfers?</h1>
            <p className="faq-a1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex perspiciatis earum atque repudiandae eum quo sint officia illo, corrupti consequatur. Voluptatem ullam porro ipsa, at quod qui vero laboriosam eveniet voluptatum laborum accusantium! Harum delectus beatae placeat veniam! Maxime, vero. Numquam labore aut quod earum commodi in dolor eaque obcaecati consectetur, veniam minus mollitia asperiores ut velit vel error sed.</p>
        </div>
        <div className="faq-1 fourth">
            <img className="faq-arrow" src="/Images/arrow-down.svg" alt="Pil ner" />
            <h1 className="faq-q1">When can I use Banking App services?</h1>
        </div><div className="faq-1 fifth">
            <img className="faq-arrow" src="/Images/arrow-down.svg" alt="Pil ner" />
            <h1 className="faq-q1">Can I create my own passwordthat is easy for me to remember?</h1>
        </div><div className="faq-1 sixth">
            <img className="faq-arrow" src="/Images/arrow-down.svg" alt="Pil ner" />
            <h1 className="faq-q1">What happens if I forget or lose my password?</h1>
        </div>

    </div> */}
    <div className="faq-bar">
    {
    accordions.map((item) => (
        <AccordionItem key={item.id} item={item} />
    ))
    }
    </div>

 </div>
  )
}

export default FAQ