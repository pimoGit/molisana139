import { useState, useEffect } from 'react';
import axios from "axios";



const initialFormData = {
    name: "",
    image: "",
    ingredients: [],
};

const PizzaCrudTest = () => {

    // utilizzo dello useState per la gestione dei data (array degli oggetti pizza)
    const [menu, setMenu] = useState([]);
    // state per la gestione delle informazioni raccolte dai campi del form
    const [formData, setFormData] = useState(initialFormData);


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

    // funzione di gestione delle info dei campi
    function handleFormData(e) {
        // gestione del value a seconda del tipo di input
        const value = e.target.name === "ingredients" ? e.target.value.split(",") : e.target.value;

        // setta tramite setState l'oggetto con le info prese dai campi del form
        setFormData((currentFormData) => ({
            ...currentFormData,
            [e.target.name]: value,
        }));
    }

    // funzione di gestione dell'invio dell'intero form (tuue le info dei vari campi)
    function handleSubmit(e) {
        e.preventDefault();

        // invio dati BE
        axios.post("http://localhost:3000/pizzas", formData)
            .then((res) =>
                // setMenu(res.data)
                setMenu((menu) => [...menu, res.data])
                // console.log(res.data)
            )
            .catch(err => {
                console.log(err)
            })
        // parte FE
        // setMenu((currentMenu) => [...currentMenu, {
        //     id:
        //         currentMenu.length === 0 ? 1 : currentMenu[currentMenu.length - 1].id + 1,
        //     ...formData
        // }]);
        // resetto il form
        setFormData(initialFormData);
    }

    // funzione gestione cancellazione pizza
    function deletePizza(idPizza) {

        const updatePizzas = menu.filter((pizza) => {
            return pizza.id !== idPizza;
        })
        // parte completa BE
        axios.delete(`http://localhost:3000/pizzas/${idPizza}`)
            .then((res) =>
                // console.log(res)
                setMenu(updatePizzas)
            )
            .catch(err => console.log(err))




    }

    return (
        <>
            <h1>questo e il form delle pizze</h1>

            {/* bottone di invio richiesta alla API pizzas */}
            {/* <button onClick={fetchPizzas}>Carica Pizze</button> */}

            <form id='formpizza' action="#" onSubmit={handleSubmit}>
                {/* valore nome pizza */}
                <input
                    type="text"
                    name="name"
                    onChange={handleFormData}
                    value={formData.name}
                    placeholder='Nome pizza'
                />
                {/* valore immagine */}
                <input
                    type="text"
                    name="image"
                    onChange={handleFormData}
                    value={formData.image}
                    placeholder='Imagine pizza'
                />
                {/* valore ingredienti */}
                <input
                    type="text"
                    name="ingredients"
                    onChange={handleFormData}
                    value={formData.ingredients}
                    placeholder='Ingredienti pizza'
                />
                {/* bottone di invio info */}
                <button>Aggiungi</button>
            </form>

            {
                menu.map((pizza) => (
                    <div className='pizzaItem' key={pizza.id}>
                        <h2>{pizza.name}</h2>
                        <img src={pizza.image} alt={pizza.name} />
                        <p>{pizza.ingredients.join(", ")}</p>
                        {/* <p>{pizza.description}</p>
                        <span className='price'>{pizza.price} €</span>
                        <span className='available'>{pizza.available ? "pizza disponibile" : "pizza non disponibile"}</span> */}
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

export default PizzaCrudTest