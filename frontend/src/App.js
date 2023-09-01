import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Nav from "./components/layout/Nav";


import HomePage from "./pages/HomePage";
import NosotrosPage from "./pages/NosotrosPage";
import EquiposPage from "./pages/EquiposPage";
import ActualidadPage from "./pages/ActualidadPage";
import LoginPage from "./pages/LoginPage";
import RegistroPage from "./pages/RegistroPage";
import RiverPage from "./pages/RiverPage";
import BocaPage from "./pages/BocaPage";
import RojoPage from "./pages/RojoPage";
import RacingPage from "./pages/RacingPage";
import ContactoPage from "./pages/ContactoPage";

import './App.css';




function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Nav />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/registro" element={<RegistroPage />} />
                    <Route path="/contacto" element={<ContactoPage />} />
                    <Route path="/actualidad" element={<ActualidadPage />} />
                    <Route path="/nosotros" element={<NosotrosPage />} />
                    <Route path="/equipos" element={<EquiposPage />} />
                    <Route path="/riverplate" element={<RiverPage />} />
                    <Route path="/bocajuniors" element={<BocaPage />} />
                    <Route path="/independiente" element={<RojoPage />} />
                    <Route path="/racing" element={<RacingPage />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;

