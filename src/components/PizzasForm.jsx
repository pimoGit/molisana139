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

const PizzasForm = () => {

    // utilizzo dello useState per la gestione dei data (array degli oggetti pizza)
    const [menu, setMenu] = useState(initialMenuData);
    // state per la gestione delle informazioni raccolte dai campi del form
    // const [formData, setFormData] = useState(initialFormData);



    return (
        <>
            <h1>questo e il form delle pizze</h1>

            {
                menu.map((pizza) => (
                    <div className='pizzaItem' key={pizza.id}>
                        <h2>{pizza.name}</h2>
                        <img src={pizza.image} alt={pizza.name} />
                        <p>{pizza.description}</p>
                        <span className='price'>{pizza.price} €</span>
                        <span className='available'>{pizza.available ? "pizza disponibile" : "pizza non disponibile"}</span>
                    </div>
                ))


            }
        </>
    )

}

export default PizzasForm