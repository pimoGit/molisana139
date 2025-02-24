import { Link, NavLink } from "react-router-dom";


export default function Navbar(props) {

    // const links = props.linksProp;
    // versione desstructuring
    // const {linksProp} = props;

    return (
        <nav>
            <ul>
                {props.linksProp.map((link) => (
                    <li key={link.id}>
                        <NavLink to={link.url}>
                            {link.text}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}