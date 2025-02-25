import axios from "axios";
import { useState, useEffect } from 'react';
// import della parte di ritorno parametro rotta FE
import { useParams } from "react-router-dom";
// aggiunta  uso link per paginazione (prev next dettagli)
import { Link } from "react-router-dom";



export default function PizzasDetail() {

    // destructuring per ritornare l'id (proprietà id dell'oggetto param)
    const { id } = useParams();

    //  settaggio dello stato del componente
    const [pizza, setPizza] = useState({});

    // funzione di chiamata verso la rotta store
    function fetchPizza() {
        axios.get(`http://localhost:3000/pizzas/${id}`)
            .then(res => setPizza(res.data))
            .catch(err => console.log(err))
    }

    useEffect(
        () => fetchPizza(),
        [id])


    return (
        <>
            <nav>
                <Link to={`/pizze/${parseInt(id) - 1}`}>Prev</Link>
                <Link to={`/pizze/${parseInt(id) + 1}`}>Next</Link>
            </nav>
            <h2>Ciao sono la pagina di dettaglio della Pizza {pizza.name}</h2>
            <img src={pizza.image} alt={pizza.name} />
            {/* <p>{pizza.ingredients.join(", ")}</p> */}
        </>
    );
}