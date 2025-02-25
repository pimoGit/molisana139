import { useState, useEffect } from 'react';
import axios from "axios";
// aggiunta per uso link in listato (per dettaglio pizza)
import { Link } from "react-router-dom";



const PizzasList = () => {

    // utilizzo dello useState per la gestione dei data (array degli oggetti pizza)
    const [menu, setMenu] = useState([]);


    // funzione di gestione chiamata all'API
    function fetchPizzas() {
        axios.get("http://localhost:3000/pizzas")
            .then((res) =>
                setMenu(res.data)
                // console.log(res.data)
            )
    }

    // richiamo la funzione di richiesta dati al caricamento del componente
    // fetchPizzas();
    // Solo al primo rendering
    useEffect(fetchPizzas, []);



    // funzione gestione cancellazione pizza
    function deletePizza(idPizza) {
        // creiamo il nuovo array da sostituire allo state menu
        const updatePizzas = menu.filter((pizza) => {
            return pizza.id !== idPizza;
        })

        // chiamata ad API sulla rotta di delete
        axios.delete(`http://localhost:3000/pizzas/${idPizza}`)
            .then(res =>
                console.log(res),
                // lo sostituiamo anche nel FE
                setMenu(updatePizzas)
            )
            .catch(err => console.log(err))


    }

    return (
        <>

            {
                menu.map((pizza) => (
                    <div className='pizzaItem' key={pizza.id}>
                        <h2>{pizza.name}</h2>
                        <img src={pizza.image} alt={pizza.name} />
                        <p>{pizza.ingredients.join(", ")}</p>
                        <Link to={`/pizze/${pizza.id}`}>Vai al dettaglio</Link>
                        <br />
                        <button onClick={() => deletePizza(pizza.id)}>
                            Cancella
                        </button>
                    </div>
                ))


            }
        </>
    )

}

export default PizzasList