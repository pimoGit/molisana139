export default function ProductCard(props) {

    // destrutturiamo l'oggetto ricevuto
    // const { src, title } = props.productInfo;

    return (
        <div className="prod-card">
            <img src={props.productSrc} alt={props.productTitle} />
            <h3>{props.productTitle}</h3>
        </div>
    );
}