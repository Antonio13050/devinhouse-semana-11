import React from "react";
import Home from "../pages/home/Home";
import NotFound from "../pages/404/404";
import About from "../pages/about/About";
import Portifolio from "../pages/portfolio/Portifolio";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function RoutesApp() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                    <Route path="/about" element={<About />} />,
                    <Route
                        path="/portfolio/:username"
                        element={<Portifolio />}
                    />
                    ,
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default RoutesApp;
