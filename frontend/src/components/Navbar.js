import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
import userPhoto from "../assets/user.jpg"
import { NavHeader, UserPhoto, Profile, Logo, Utils, Links, Sair } from "../styles/componentsStyles/NavbarStyle"

export default function Navbar() {
    return (
        <NavHeader>
            <Profile>
                <UserPhoto src={userPhoto} alt="Foto do usuário" />
                <Link to="/myProfile">Oi, Gabriel!</Link>
                <Sair>Sair</Sair>
            </Profile>
            <Link to="/"><Logo src={logo} alt="Logo da livraria" /></Link>
            <Utils>
                <Links>
                    <Link to="/genders">Gêneros</Link>
                    <Link to="/admin">Admin</Link>
                    <Link to="/cart"><i class="fa fa-shopping-cart logos_nav" aria-hidden="true"></i></Link>
                    <Link to="/search"><i class="fa fa-search logos_nav" aria-hidden="true"></i></Link>
                </Links>
            </Utils>
        </NavHeader>
    )
}