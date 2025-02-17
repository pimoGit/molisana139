import { useState } from 'react';


// componente
export default function Accordion(props) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="accordion">
            <div className="accordion__title">
                <h3>{props.titolo}</h3>
                <button className="accordion__btn"
                    onClick={() => setIsOpen((current) => !current)}
                >
                    {isOpen ? "-" : "+"}
                </button>
            </div>
            {isOpen && props.contenuto}
        </div>
    )

}