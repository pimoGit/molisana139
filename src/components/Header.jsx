// Header.jsx

// importiamo componente Logo
import Logo from "./Logo.jsx";
// importiamo componente Logo
import Navbar from "./Navbar.jsx";


export default function Header(props) {
    return (
        <header>
            <Logo slogan={props.slogan} />
            <Navbar />
        </header>
    );
}
