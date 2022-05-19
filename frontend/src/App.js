import { Routes, Route } from "react-router-dom";
import Admin from "./admin/Admin";
import Genders from "./user/Genders";
import Home from "./user/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./user/Cart";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<App />} />
                <Route index element={<Home />} />
                <Route path="admin" element={<Admin />}/>
                <Route path="genders" element={<Genders />}/>
                <Route path="cart" element={<Cart />}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
