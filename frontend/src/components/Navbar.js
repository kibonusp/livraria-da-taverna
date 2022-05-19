import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
import userPhoto from "../assets/user.jpg"
import search from "../assets/search.svg"
import cart from "../assets/cart.svg"
import { NavHeader, UserPhoto, Profile, Logo, Item, Utils, Links } from "../styles/NavbarStyle"

export default function Navbar() {
    return (
        <NavHeader>
            <Profile>
                <UserPhoto src={userPhoto} alt="Foto do usuário" />
                <p>Oi, Gabriel!</p>
            </Profile>
            <Link to="/"><Logo src={logo} alt="Logo da livraria" /></Link>
            <Utils>
                <Links>
                    <Link to="/genders">Gêneros</Link>
                    <Link to="/admin">Admin</Link>
                </Links>
                <div>
                    <a href="/cart"><Item src={cart} alt="Carrinho de compras" /></a>
                    <Item src={search} alt="Pesquisa" />
                </div>
            </Utils>
        </NavHeader>
    )
}