// Header.jsx

// importiamo componente Logo
import Logo from "./Logo.jsx";
// importiamo componente Logo
import Navbar from "./Navbar.jsx";


export default function Header(props) {

    // dati ricavati per la gestione dei link della Navbar
    const links = [
        { id: 1, text: 'Home', url: '/', current: true },
        { id: 2, text: 'About', url: '/about', current: false },
        { id: 3, text: 'Contacts', url: '/contacts', current: false },
        { id: 4, text: 'Pizze', url: '/pizze', current: false },
    ];

    return (
        <header>
            <Logo slogan={props.slogan} />
            <Navbar linksProp={links} />
        </header>
    );
}
