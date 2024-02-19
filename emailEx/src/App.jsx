import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Blogs from "./components/Blogs";
import NavBar from "./components/NavBar";

function App() {
    return (
        <>
            <h1>Hi</h1>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/" element={<Contact />}></Route>
                    <Route path="/login" element={<Blogs />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
