// importiamo il contesto globale e la parte REact di utilizzo dello stesso

import { useContext } from "react";
import GlobalContext from './../contexts/GlobalContext'

// import componente Card nel listato
import PizzasCard from "./PizzasCard";




const PizzasListUser = () => {

    // destrutturiamo l'esecuzione del useContext (oggetto di ritorno)
    const { menu } = useContext(GlobalContext);



    return (
        <>

            {
                menu.map((pizza) => (
                    <PizzasCard key={pizza.id} pizza={pizza} />
                ))


            }
        </>
    )

}

export default PizzasListUser