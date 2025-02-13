import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

// import './App.css'

function App() {

    const dataSlogan = 'Molisana, pasta sanissima!';

    return (
        <>
            <Header slogan={dataSlogan} />
            <Main />
            <Footer slogan={dataSlogan} />
        </>
    )
}

export default App
