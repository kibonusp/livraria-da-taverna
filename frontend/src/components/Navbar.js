import { useNavigate, Link } from "react-router-dom"
import logo from "../assets/logo.png"
import { NavHeader, UserPhoto, Profile, Logo, Utils, Links, Sair, Search } from "../styles/componentsStyles/NavbarStyle"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { userImages } from "../images"
import { useState, useEffect } from "react"
import axios from "axios";
import { getCookie, parseJwt } from "../auth"

export default function Navbar({data, setData}) {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const [user, setUser] = useState("");
    
    useEffect(() => {
        const token = parseJwt(getCookie("token"));
        console.log(token);
        if (token !== "") {
            axios.get(`http://localhost:11323/user/${token.id}`, {
                headers: {
                    'authorization': `Bearer ${getCookie("token")}`
                }
            }).then(response => {
                setUser(response.data)
            }).catch(error => {
                console.log(error);
            })
        }
    }, [data.logged])

    const signOut = () => {
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        setData({logged: false})
    }

    const sendSearch = e => {
        if(e.key === 'Enter'){
            navigate("/search", {state: {"string": search}})
        }
    }

    useEffect(() => {
        console.log(user)
    }, [user])

    return (
        <NavHeader>
            <Profile>
                {
                    user
                     ? 
                        <>
                            <UserPhoto src={userImages[user.photo]} alt="Foto do usuário" />
                            <Link to="/myProfile">Olá, {user.name.split(' ')[0]}</Link>
                            <Link to="/login" onClick={() => signOut()}>
                                <Sair>Sair</Sair>
                            </Link>
                        </>
                    :   
                        <>
                            <UserPhoto src={userImages["anonymous"]} alt="Foto do usuário" />
                            <Link to="/login">Faça login ou cadastre-se</Link>
                        </>
                }
            </Profile>
            <Link to="/"><Logo src={logo} alt="Logo da livraria" /></Link>
            <Utils>
                <Links>
                    <Link to="/genders">Gêneros</Link>
                    {
                        user ? 
                            user.admin === true ?
                            <Link to="/admin">Admin</Link> 
                            :
                            ""
                        :
                        ""
                    }
                    <Link to="/cart"><FontAwesomeIcon icon={faCartShopping} /></Link>
                    <Link to="/search"><FontAwesomeIcon icon={faSearch} /></Link>
                    <Search placeholder="pesquise aqui..." onInput={e => setSearch(e.target.value)} onKeyDownCapture={sendSearch}/>
                </Links>
            </Utils>
        </NavHeader>
    )
}