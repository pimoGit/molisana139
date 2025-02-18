import { useState } from 'react';

// data della todolist
const initialTasks = ['Fare la spesa', 'Pulire casa', 'Fare il bucato'];



// componente
export default function TodoList() {

    // stato della todolist
    const [tasks, setTasks] = useState(initialTasks);
    // stato dell'input di inserimento nuovo task
    const [newTask, setNewTask] = useState('');

    // funzione di CB di aggiunta elemento alla todo
    const addTask = e => {
        e.preventDefault();
        // tasks.push(newTask); Non possibile per immutabilità dello stato
        // versione corretta con creazione nuovo array
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        // azzeriamo il valore di newtask
        setNewTask('');
    }

    // funzione di CB di cancellazione elemento dalla todo
    const removeTask = i => {
        const updatedTasks = tasks.filter((task, index) => {
            return index !== i
        });
        setTasks(updatedTasks);
    }

    return (
        <>
            <form onSubmit={addTask}>
                <input type="text" value={newTask}
                    onChange={event => { setNewTask(event.target.value) }}
                />
                <button>Invia</button>
            </form >

            {tasks.length === 0 ?
                <h2>La tua lista è vuota</h2>
                :
                <ul className='todolist'>
                    {tasks.map((task, i) => (
                        <li key={i}>
                            {task}
                            <button onClick={() => removeTask(i)}>
                                Elimina
                            </button>
                        </li>
                    ))}
                </ul >
            }
        </>
    )

}