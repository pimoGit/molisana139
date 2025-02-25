import { useState } from 'react';
// import navigate per navigazione programmatica dopo invio form
import { useNavigate } from "react-router-dom";
import axios from "axios";



const initialFormData = {
    name: "",
    image: "",
    ingredients: [],
};

const PizzasForm = () => {

    // utilizzo dello useState per la gestione dei data (array degli oggetti pizza)
    // const [menu, setMenu] = useState([]);
    // state per la gestione delle informazioni raccolte dai campi del form
    const [formData, setFormData] = useState(initialFormData);

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

    // utilizzo del navigate
    const navigate = useNavigate();

    // funzione di gestione dell'invio dell'intero form (tuue le info dei vari campi)
    function handleSubmit(e) {
        e.preventDefault();
        // chiamata verso la API in post con invio dati nuova pizza
        axios.post("http://localhost:3000/pizzas", formData)
            .then(res => {
                // console.log(res.data);
                // uso la risposta dell'API per creare il nuovo array menu
                // setMenu((currentMenu) => [...currentMenu, res.data])
                navigate("/pizze");
            }
            )
            .catch(err => console.log(err))

        // setMenu((currentMenu) => [...currentMenu, {
        //     id:
        //         currentMenu.length === 0 ? 1 : currentMenu[currentMenu.length - 1].id + 1,
        //     ...formData
        // }]);
        // resetto il form
        setFormData(initialFormData);
    }


    return (
        <>
            <h1>questo e il form delle pizze</h1>

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
                {/* valori ingredienti */}
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
        </>
    )

}

export default PizzasForm