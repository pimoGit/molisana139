import { useState } from 'react';


// componente
export default function UserInput() {

    const [firstName, setFirstName] = useState('Marco');

    return (
        <>
            <input type="text" value={firstName}
                onChange={e => { setFirstName(e.target.value) }}
            />
            <p>Il tuo nome è {firstName}</p>
        </>
    )

}