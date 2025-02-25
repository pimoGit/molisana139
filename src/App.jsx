// import degli elementi della libreria di gestione delle rotte
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

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


    return (
        <BrowserRouter>
            <Routes>
                <Route element={<DefaultLayout />} >
                    <Route index element={<HomePage />} />
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
