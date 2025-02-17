// componente
export default function Accordion2(props) {

    return (
        <div className="accordion">
            <div className="accordion__title">
                <h3>{props.titolo}</h3>
                <button className="accordion__btn"
                    onClick={props.onToggle}
                >
                    {props.isOpen ? "-" : "+"}
                </button>
            </div>
            {props.isOpen && props.contenuto}
        </div>
    )

}