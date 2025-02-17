import Accordion2 from "./Accordion2.jsx";
import { useState } from 'react';



// data accordion
const faqs = [
    {
        id: 1,
        title: "Accordion 1",
        content:
            "Lorem di 1 ipsum dolor sit amet consectetur adipisicing elit. Amet, enim rerum ducimus, ullam ipsam dolorum quo voluptatem tenetur laboriosam qui quia odio aspernatur ratione voluptate, adipisci illum saepe itaque. Corporis.",
    },
    {
        id: 2,
        title: "Accordion 2",
        content:
            "Lorem di 2 ipsum dolor sit amet consectetur adipisicing elit. Amet, enim rerum ducimus, ullam ipsam dolorum quo voluptatem tenetur laboriosam qui quia odio aspernatur ratione voluptate, adipisci illum saepe itaque. Corporis.",
    },
    {
        id: 3,
        title: "Accordion 3",
        content:
            "Lorem di 3 ipsum dolor sit amet consectetur adipisicing elit. Amet, enim rerum ducimus, ullam ipsam dolorum quo voluptatem tenetur laboriosam qui quia odio aspernatur ratione voluptate, adipisci illum saepe itaque. Corporis.",
    },
    {
        id: 4,
        title: "Accordion 4",
        content:
            "Lorem di 4 ipsum dolor sit amet consectetur adipisicing elit. Amet, enim rerum ducimus, ullam ipsam dolorum quo voluptatem tenetur laboriosam qui quia odio aspernatur ratione voluptate, adipisci illum saepe itaque. Corporis.",
    },
];

// componente
export default function AccordionList2() {

    const [activeAccordion, setActiveAccordion] = useState(null);


    function renderAccordion() {
        return faqs.map(faq => {
            return <Accordion2
                key={faq.id}
                titolo={faq.title}
                contenuto={faq.content}
                isOpen={activeAccordion === faq.id}
                onToggle={() => setActiveAccordion(faq.id)}
            />
        });
    }

    return (
        <div className="accordion-list">
            {renderAccordion()}
        </div>
    )

}