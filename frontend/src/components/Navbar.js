import { useNavigate, Link } from "react-router-dom"
import logo from "../assets/logo.png"
import { NavHeader, UserPhoto, Profile, Logo, Utils, Links, Sair, Search } from "../styles/componentsStyles/NavbarStyle"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { userImages } from "../images"
import { useEffect, useState } from "react"


export default function Navbar({data, setData}) {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (data.logged.situation)
            console.log("Usuário logou")
        else
            console.log("Usuário não logou")
    }, [data.logged])

    const signOut = () => {
        setData({...data, logged: {"situation": false, "user": undefined}})
    }

    const sendSearch = e => {
        let newProducts = [];
        if(e.key === 'Enter'){
            console.log("oiee")
            let formatedSearch = search.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
            for (let product of data.products) {
                let formatedProduct = product.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
                if (formatedProduct.includes(formatedSearch))
                    newProducts.push(product);
            }

            navigate("/search", {state: {"products": newProducts}})
        }
    }

    return (
        <NavHeader>
            <Profile>
                {
                    data.users[data.logged.user] ? 
                        <>
                            <UserPhoto src={userImages[data.users[data.logged.user].photo]} alt="Foto do usuário" />
                            <Link to="/myProfile">Olá, {data.users[data.logged.user].name.split(' ')[0]}</Link>
                            <Link to="/login" onClick={() => signOut()}>
                                <Sair>Sair</Sair>
                            </Link>
                        </>
                    :   
                        <>
                            <UserPhoto src={userImages["anonymous"]} alt="Foto do usuário" />
                            <Link to="/login">Faça login ou se cadastre</Link>
                        </>
                }
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
                    <Search placeholder="pesquise aqui..." onInput={e => setSearch(e.target.value)} onKeyDown={sendSearch}/>
                </Links>
            </Utils>
        </NavHeader>
    )
}