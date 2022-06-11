import { Routes, Route } from "react-router-dom";
import Admin from "./admin/HomeAdmin";
import Genders from "./user/Genders";
import Home from "./user/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./user/Cart";
import Book from "./user/Book";
import Search from "./user/Search";
import MyProfile from "./user/MyProfile";
import AddAdmin from "./admin/AddAdmin";
import RemoveAdmin from "./admin/RemoveAdmin";
import Admins from "./admin/Admins";
import Users from "./admin/Users";
import Products from "./admin/Products";
import AddProduct from "./admin/AddProduct";
import EditProduct from "./admin/EditProduct";
import EditProductForm from "./admin/EditProductForm";
import Finalizar from "./user/Finalizar";

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
                <Route path="admin/products/edit/form" element={<EditProductForm />}/>
                <Route path="genders" element={<Genders />} />
                <Route path="cart" element={<Cart />} />
                <Route path="book" element={<Book />} />
                <Route path="myProfile" element={<MyProfile />} />
                <Route path="search" element={<Search />} />
                <Route path="cart/confirm" element={<Finalizar />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
