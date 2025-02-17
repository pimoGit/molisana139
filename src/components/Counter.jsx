const Counter = () => {

    function saluta() {
        alert("ciao");
    }

    return (
        <div>
            <button onClick={saluta}>Saluta</button>
        </div>
    )
}

export default Counter