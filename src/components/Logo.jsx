export default function Logo(props) {
    return (
        <figure>
            <img src="/logo.png" alt="Logo" />
            {/* esempio di valore di defaul */}
            {/* <p>{props.slogan || "Pasta fresca di qualità"}</p> */}
            {/* esempio di rendering condizionale */}
            {props.slogan && <p>{props.slogan}</p>}
            {/* {props.slogan ? <p>{props.slogan}</p> : ""} */}
        </figure >
    );
}