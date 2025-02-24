// import degli elementi della libreria di gestione delle rotte
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import DefaultLayout from "./layouts/DefaultLayout";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactsPage from "./pages/ContactsPage";
import PizzasPage from "./pages/PizzasPage";











// import './App.css'

function App() {

    const dataSlogan = 'Molisana, pasta sanissima!';

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<DefaultLayout />} >
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contacts" element={<ContactsPage />} />
                    <Route path="/pizze" element={<PizzasPage />} />
                </Route>
            </Routes>
        </BrowserRouter >
    )
}

export default App
