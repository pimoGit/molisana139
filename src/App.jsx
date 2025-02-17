import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import Alert from "./components/Alert.jsx";
import Counter from "./components/Counter.jsx";
// import AccordionList from "./components/AccordionList.jsx";
import AccordionList2 from "./components/accordionplus/AccordionList2.jsx";




// import './App.css'

function App() {

    const dataSlogan = 'Molisana, pasta sanissima!';

    return (
        <>
            <Header slogan={dataSlogan} />
            {/* componente con children props */}
            <Alert type="error">
                <ul>
                    <li>Messaggio di errore 1</li>
                    <li>Messaggio di errore 2</li>
                    <li>Messaggio di errore 3</li>
                </ul>
            </Alert>
            <Counter />
            {/* <AccordionList /> */}
            <AccordionList2 />
            <Main />
            <Footer slogan={dataSlogan} />
        </>
    )
}

export default App
