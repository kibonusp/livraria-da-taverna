import { useNavigate, Link } from "react-router-dom"
import logo from "../assets/logo.png"
import { NavHeader, UserPhoto, Profile, Logo, Utils, Links, Sair, Search } from "../styles/componentsStyles/NavbarStyle"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { userImages } from "../images"
import { useState, useEffect} from "react"
import axios from "axios";
import { getCookie, parseJwt } from "../auth"


export default function Navbar({data, setData}) {
    const navigate = useNavigate();
    const [user, setUser] = useState("");
    const [image, setImage] = useState("")
    const [check, setCheck] = useState(true)
    
    useEffect(() => {
        const token = parseJwt(getCookie("token"));
        if (token !== "") {
            axios.get(`http://localhost:11323/user/${token.id}`, {
                headers: {
                    'authorization': `Bearer ${getCookie("token")}`
                }
            }).then(response => {
                setUser(response.data)
                if(response.data.photo !== image) {
                    setImage(response.data.photo)
                    setCheck(!check)
                }
            }).catch(error => {
                console.log(error);
            })
        }
    })
    const signOut = () => {
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        setData({logged: false})
    }

    const sendSearch = e => {
        if(e.key === 'Enter'){
            navigate("/search")
        }
    }
    
    return (
        <NavHeader>
            <Profile>
                {
                    user
                    ? 
                        <>
                            {
                                check
                                ?
                                <UserPhoto src={`http://localhost:11323/user/${user._id}/image`} alt="Foto do usuário" />
                                :
                                <UserPhoto src={`http://localhost:11323/user/${user._id}/image`} alt="Foto do usuário" />
                            }
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
                    <Search placeholder="pesquise aqui..." onInput={e => setData({...data, search: e.target.value})} onKeyDown={sendSearch}/>
                </Links>
            </Utils>
        </NavHeader>
    )
}