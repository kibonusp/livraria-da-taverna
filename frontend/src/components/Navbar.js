import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
import userPhoto from "../assets/user.jpg"
import { NavHeader, UserPhoto, Profile, Logo, Utils, Links, Sair } from "../styles/componentsStyles/NavbarStyle"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCartShopping} from '@fortawesome/free-solid-svg-icons'



export default function Navbar() {
    return (
        <NavHeader>
            <Profile>
                <UserPhoto src={userPhoto} alt="Foto do usuário" />
                <Link to="/myProfile">Oi, Gabriel!</Link>
                <Link to="/login">
                    <Sair>Sair</Sair>
                </Link>
            </Profile>
            <Link to="/"><Logo src={logo} alt="Logo da livraria" /></Link>
            <Utils>
                <Links>
                    <Link to="/genders">Gêneros</Link>
                    <Link to="/admin">Admin</Link>
                    <Link to="/cart"><FontAwesomeIcon icon={faCartShopping} /></Link>
                    <Link to="/search"><FontAwesomeIcon icon={faSearch} /></Link>
                </Links>
            </Utils>
        </NavHeader>
    )
}