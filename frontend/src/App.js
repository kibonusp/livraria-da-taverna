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
import Login from "./user/Login";
import Cadastro from "./user/Cadastro";
import { useState } from "react";

function App() {
    const [data, setData] = useState({
        "logged": false,
        "cart": []
    });

    return (
        <>
            <Navbar key={data.logged} data={data} setData={setData} />
            <Routes>
                <Route path="/" element={<App />} />
                <Route index element={<Home data={data} setData={setData} />} />
                <Route path="admin" element={<Admin data={data} setData={setData} />}/>
                <Route path="admin/admins" element={<Admins data={data} setData={setData} />} />
                <Route path="admin/admins/add" element={<AddAdmin data={data} setData={setData} />} />
                <Route path="admin/admins/remove" element={<RemoveAdmin data={data} setData={setData} />} />
                <Route path="admin/users" element={<Users data={data} setData={setData} />} />
                <Route path="admin/products" element={<Products data={data} setData={setData} />} />
                <Route path="admin/products/add" element={<AddProduct data={data} setData={setData} />} />
                <Route path="admin/products/edit" element={<EditProduct data={data} setData={setData} />}/>
                <Route path="admin/products/edit/form" element={<EditProductForm data={data} setData={setData} />} />
                <Route path="genders" element={<Genders data={data} setData={setData} />} />
                <Route path="cart" element={<Cart data={data} setData={setData} />} />
                <Route path="book" element={<Book data={data} setData={setData} />} />
                <Route path="myProfile" element={<MyProfile data={data} setData={setData} />} />
                <Route path="search" element={<Search data={data} setData={setData} />} />
                <Route path="cart/confirm" element={<Finalizar data={data} setData={setData} />} />
                <Route path="login" element={<Login data={data} setData={setData} />} />
                <Route path="cadastro" element={<Cadastro data={data} setData={setData} />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
