
// import componente Card nel listato
import PizzasCard from "./PizzasCard";




const PizzasListUser = (props) => {

    return (
        <>

            {
                props.menuPropProps.map((pizza) => (
                    <PizzasCard key={pizza.id} pizza={pizza} />
                ))


            }
        </>
    )

}

export default PizzasListUser