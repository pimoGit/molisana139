// import degli elementi della libreria di gestione delle rotte
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import DefaultLayout from "./layouts/DefaultLayout";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactsPage from "./pages/ContactsPage";
import PizzasPage from "./pages/PizzasPage";
import PizzasCreatePage from "./pages/PizzasCreatePage";
import PizzasDetailPage from "./pages/PizzasDetailPage";












// import './App.css'

function App() {

    const dataSlogan = 'Molisana, pasta sanissima!';

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<DefaultLayout />} >
                    <Route index element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contacts" element={<ContactsPage />} />
                    <Route path="/pizze">
                        <Route index element={<PizzasPage />} />
                        <Route path="create" element={<PizzasCreatePage />} />
                        <Route path=":id" element={<PizzasDetailPage />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter >
    )
}

export default App
