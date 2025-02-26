// import degli elementi della libreria di gestione delle rotte
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// gestione dati pizze per listato
import { useState, useEffect } from 'react';
import axios from "axios";

// Layout
import DefaultLayout from "./layouts/DefaultLayout";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactsPage from "./pages/ContactsPage";
import PizzasPage from "./pages/PizzasPage";
import PizzasCreatePage from "./pages/PizzasCreatePage";
import PizzasDetailPage from "./pages/PizzasDetailPage";
import NotFoundPage from "./pages/NotFoundPage";







// import './App.css'

function App() {

    const dataSlogan = 'Molisana, pasta sanissima!';

    // utilizzo dello useState per la gestione dei data (array degli oggetti pizza)
    const [menu, setMenu] = useState([]);


    // funzione di gestione chiamata all'API
    function fetchPizzas() {
        axios.get("http://localhost:3000/pizzas")
            .then((res) =>
                setMenu(res.data)
                // console.log(res.data)
            )
    }

    // richiamo la funzione di richiesta dati al caricamento del componente
    // fetchPizzas();
    // Solo al primo rendering
    useEffect(fetchPizzas, []);


    return (
        <BrowserRouter>
            <Routes>
                <Route element={<DefaultLayout />} >
                    <Route index element={<HomePage menuProp={menu} />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contacts" element={<ContactsPage />} />
                    {/* es. di redirect */}
                    <Route path="/lepizze" element={<Navigate to="/pizze" />} />
                    <Route path="/pizze">
                        <Route index element={<PizzasPage />} />
                        <Route path="create" element={<PizzasCreatePage />} />
                        <Route path=":id" element={<PizzasDetailPage />} />
                    </Route>
                    {/* rotta del 404 per rotte non previste */}
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </BrowserRouter >
    )
}

export default App
