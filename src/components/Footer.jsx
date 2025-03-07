// Footer.jsx
// importiamo componente Logo
import Logo from "./Logo.jsx";

export default function Footer(props) {
    return (
        <footer className="container">
            <nav className="footer-nav">
                <div className="footer-col">
                    <Logo slogan={props.slogan} />
                </div>
                <div className="footer-col">
                    <div>
                        <h4>Pastificio</h4>
                        <ul>
                            <li><a href="#">Il Pastificio</a></li>
                            <li><a href="#">Grano</a></li>
                            <li><a href="#">Filiera</a></li>
                            <li><a href="#">100 anni di pasta</a></li>
                            <li><a href="#">Sartoria della pasta</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-col">
                    <div>
                        <h4>Prodotti</h4>
                        <ul>
                            <li><a href="#">Le classiche</a></li>
                            <li><a href="#">Le Integrali</a></li>
                            <li><a href="#">Le Speciali</a></li>
                            <li><a href="#">Le Biologiche</a></li>
                            <li><a href="#">Le Gluten-free</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </footer>
    );
}
