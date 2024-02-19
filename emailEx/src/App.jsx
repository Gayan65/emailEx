import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Blogs from "./components/Blogs";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/Blogs" element={<Blogs />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
