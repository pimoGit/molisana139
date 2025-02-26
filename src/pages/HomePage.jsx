// importiamo il componente di listato Utente finale
import PizzasListUser from "./../components/PizzasListUser";


export default function HomePage(props) {
    return (
        <>
            <h2>Ciao sono la Home page</h2>
            <PizzasListUser menuPropProps={props.menuProp} />
        </>
    );
}
