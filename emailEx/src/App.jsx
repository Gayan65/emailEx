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
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/Blogs" element={<Blogs />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
