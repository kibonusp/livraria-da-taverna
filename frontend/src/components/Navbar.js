import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
import { NavHeader, UserPhoto, Profile, Logo, Utils, Links, Sair } from "../styles/componentsStyles/NavbarStyle"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { userImages } from "../images"
import { useEffect } from "react"



export default function Navbar({data, setData}) {

    useEffect(() => {
        if (data.logged)
            console.log("Usuário logou")
        else
            console.log("Usuário não logou")
    }, [data.logged])

    const signOut = () => {
        setData({...data, logged: false})
    }

    return (
        <NavHeader>
            <Profile>
                {
                    data.users[data.logged.user] ? 
                        <>
                            <UserPhoto src={userImages[data.users[data.logged.user].photo]} alt="Foto do usuário" />
                            <Link to="/myProfile">Olá, {data.users[data.logged.user].name.split(' ')[0]}</Link>
                        </>
                    :   
                        <>
                            <UserPhoto src={userImages["anonymous"]} alt="Foto do usuário" />
                            <Link to="/login">Olá, anônimo</Link>
                        </>
                }
                <Link to="/login" onClick={() => signOut()}>
                    <Sair>Sair</Sair>
                </Link>
            </Profile>
            <Link to="/"><Logo src={logo} alt="Logo da livraria" /></Link>
            <Utils>
                <Links>
                    <Link to="/genders">Gêneros</Link>
                    {
                        data.users[data.logged.user] ? 
                            data.users[data.logged.user].admin === true ?
                            <Link to="/admin">Admin</Link> 
                            :
                            ""
                        :
                        ""
                    }
                    <Link to="/cart"><FontAwesomeIcon icon={faCartShopping} /></Link>
                    <Link to="/search"><FontAwesomeIcon icon={faSearch} /></Link>
                </Links>
            </Utils>
        </NavHeader>
    )
}