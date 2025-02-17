import Accordion from "./Accordion.jsx";


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
];

// componente
export default function AccordionList() {

    function renderAccordion() {
        return faqs.map(faq => {
            return <Accordion
                key={faq.id}
                titolo={faq.title}
                contenuto={faq.content}
            />
        });
    }

    return (
        <div className="accordion-list">
            {renderAccordion()}
        </div>
    )

}