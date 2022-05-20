import { Routes, Route } from "react-router-dom";
import Admin from "./admin/HomeAdmin";
import Genders from "./user/Genders";
import Home from "./user/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./user/Cart";
import Admins from "./admin/Admins";
import Users from "./admin/Users";
import Products from "./admin/Products";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<App />} />
                <Route index element={<Home />} />
                <Route path="admin" element={<Admin />}/>
                <Route path="admin/admins" element={<Admins />} />
                <Route path="admin/users" element={<Users />} />
                <Route path="admin/products" element={<Products />} />
                <Route path="genders" element={<Genders />} />
                <Route path="cart" element={<Cart />} />
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
