export default function Navbar(props) {

    // const links = props.linksProp;
    // versione desstructuring
    // const {linksProp} = props;

    return (
        <nav>
            <ul>
                {props.linksProp.map((link) => (
                    <li key={link.id}>
                        <a href={link.url} className={link.current ? 'active' : ''}>
                            {link.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}