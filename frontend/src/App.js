import { Routes, Route } from "react-router-dom";
import Admin from "./admin/HomeAdmin";
import Genders from "./user/Genders";
import Home from "./user/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./user/Cart";
import Book from "./user/Book";
import AddAdmin from "./admin/AddAdmin";
import RemoveAdmin from "./admin/RemoveAdmin";
import Admins from "./admin/Admins";
import Users from "./admin/Users";
import Products from "./admin/Products";
import AddProduct from "./admin/AddProduct";
import EditProduct from "./admin/EditProduct";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<App />} />
                <Route index element={<Home />} />
                <Route path="admin" element={<Admin />}/>
                <Route path="admin/admins" element={<Admins />} />
                <Route path="admin/admins/add" element={<AddAdmin />} />
                <Route path="admin/admins/remove" element={<RemoveAdmin />} />
                <Route path="admin/users" element={<Users />} />
                <Route path="admin/products" element={<Products />} />
                <Route path="admin/products/add" element={<AddProduct />}/>
                <Route path="admin/products/edit" element={<EditProduct />}/>
                <Route path="genders" element={<Genders />} />
                <Route path="cart" element={<Cart />} />
                <Route path="book" element={<Book />} />
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
