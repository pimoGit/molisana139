import { Link } from "react-router-dom";



const PizzasCard = (props) => {

    // destructuring dell'oggetto props
    const { pizza } = props;

    return (
        <>
            <div className='pizzaItem'>
                <h2>{pizza.name}</h2>
                <img src={pizza.image} alt={pizza.name} />
                <p>{pizza.ingredients.join(", ")}</p>
                <Link to={`/pizze/${pizza.id}`}>Vai al dettaglio</Link>
            </div>

        </>
    )

}

export default PizzasCard