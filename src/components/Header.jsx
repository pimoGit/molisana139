// Header.jsx

// importiamo componente Logo
import Logo from "./Logo.jsx";
// importiamo componente Logo
import Navbar from "./Navbar.jsx";


export default function Header(props) {

    // dati ricavati per la gestione dei link della Navbar
    const links = [
        { id: 1, text: 'Home', url: '#', current: false },
        { id: 2, text: 'Prodotti', url: '#', current: true },
        { id: 3, text: 'Chi Siamo', url: '#', current: false },
        { id: 4, text: 'Contatti', url: '#', current: false },
    ];

    return (
        <header>
            <Logo slogan={props.slogan} />
            <Navbar linksProp={links} />
        </header>
    );
}
