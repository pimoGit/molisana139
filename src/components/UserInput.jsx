import { useState } from 'react';


// componente
export default function UserInput() {

    const [firstName, setFirstName] = useState('Marco');

    const handleSubmit = event => {
        event.preventDefault();
        console.log('Il nome inviato è:' + firstName)
        console.log(event);

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={firstName}
                    onChange={event => { setFirstName(event.target.value) }}
                />
                <button>Invia</button>
            </form >
            <p>Il tuo nome è {firstName}</p>
        </>
    )

}