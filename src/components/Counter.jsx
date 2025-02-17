import { useState } from 'react';


const Counter = () => {

    // utilizzo dello useState per la variabile di conteggio
    const [count, setCount] = useState(0);

    function incrementa() {
        setCount(count + 1);
        setCount(count + 1);
        // setCount((current) => current + 1);
        // setCount((current) => current + 1);
    }

    return (
        <div className="container">
            <h1>Contatore</h1>
            <p className="count">{count}</p>
            <div className="count__buttons">
                <button className="btn" onClick={incrementa}>
                    +
                </button>
                <button className="btn" onClick={() => setCount(count - 1)}>
                    -
                </button>
            </div>
        </div>
    )
}

export default Counter