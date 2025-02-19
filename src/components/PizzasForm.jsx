import { useState } from 'react';


// dati iniziali
const initialMenuData = [
    {
        id: 1,
        name: "Margherita",
        image: "http://localhost:3000/pizze/margherita.webp",
        description: "Sopravvissuto Margherita  non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni '60, con la diffusione dei fogli di caratteri trasferibili.",
        price: 10,
        available: true,
    }, {
        id: 2,
        name: "Marinara",
        image: "http://localhost:3000/pizze/marinara.jpeg",
        description: "Sopravvissuto Marinara non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni '60, con la diffusione dei fogli di caratteri trasferibili.",
        price: 7,
        available: true,
    }, {
        id: 3,
        name: "Diavola",
        image: "http://localhost:3000/pizze/diavola.jpeg",
        description: "Sopravvissuto Diavola non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni '60, con la diffusione dei fogli di caratteri trasferibili.",
        price: 14,
        available: true,
    }, {
        id: 4,
        name: "Bufalina",
        image: "http://localhost:3000/pizze/bufalina.jpeg",
        description: "Sopravvissuto Bufalina non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni '60, con la diffusione dei fogli di caratteri trasferibili.",
        price: 13,
        available: false,
    }, {
        id: 5,
        name: "4 formaggi",
        image: "http://localhost:3000/pizze/4_formaggi.jpeg",
        description: "Sopravvissuto 4 formaggi non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni '60, con la diffusione dei fogli di caratteri trasferibili.",
        price: 15,
        available: true,
    }
];


const initialFormData = {
    name: "",
    image: "",
    description: "",
    price: 0,
    available: false,
};

const PizzasForm = () => {

    // utilizzo dello useState per la gestione dei data (array degli oggetti pizza)
    const [menu, setMenu] = useState(initialMenuData);
    // state per la gestione delle informazioni raccolte dai campi del form
    const [formData, setFormData] = useState(initialFormData);


    // funzione di gestione delle info dei campi
    function handleFormData(e) {
        // gestione del value a seconda del tipo di input
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        // setta tramite setState l'oggetto con le info prese dai campi del form
        setFormData((currentFormData) => ({
            ...currentFormData,
            [e.target.name]: value,
        }));
    }

    // funzione di gestione dell'invio dell'intero form (tuue le info dei vari campi)
    function handleSubmit(e) {
        e.preventDefault();
        setMenu((currentMenu) => [...currentMenu, { id: currentMenu[currentMenu.length - 1].id + 1, ...formData }]);
        // resetto il form
        setFormData(initialFormData);
    }

    // funzione gestione cancellazione pizza
    function deletePizza(idPizza) {
        // creiamo il nuovo array da sostituire allo state menu
        const updatePizzas = menu.filter((pizza) => {
            return pizza.id !== idPizza;
        })
        // lo sostituiamo
        setMenu(updatePizzas);
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
                {/* valore descrizione */}
                <textarea
                    name="description"
                    onChange={handleFormData}
                    value={formData.description}
                    placeholder='Descrizione pizza'
                ></textarea>
                {/* valore prezzo */}
                <input
                    type="number"
                    name="price"
                    onChange={handleFormData}
                    value={formData.price}
                    placeholder='Prezzo pizza'
                />
                {/* valore disponibilità */}
                <label htmlFor="available">Disponibile</label>
                <input
                    type="checkbox"
                    name="available"
                    checked={formData.available}
                    onChange={handleFormData}
                    id="available"
                />
                {/* bottone di invio info */}
                <button>Aggiungi</button>
            </form>

            {
                menu.map((pizza) => (
                    <div className='pizzaItem' key={pizza.id}>
                        <h2>{pizza.name}</h2>
                        <img src={pizza.image} alt={pizza.name} />
                        <p>{pizza.description}</p>
                        <span className='price'>{pizza.price} €</span>
                        <span className='available'>{pizza.available ? "pizza disponibile" : "pizza non disponibile"}</span>
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

export default PizzasForm