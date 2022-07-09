import { useState } from "react";
import { FormDiv, FormInput, FormLabel, Container, Description, FormButton, Box } from "../styles/userStyles/LoginStyles"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import PopUp from "../components/PopUp";
import axios from "axios";

export default function Login({data, setData}) {
    const [user, setUser] = useState({email: undefined, password: undefined});
    const navigate = useNavigate();
    const [buttonPopUp, setButtonPopUp] = useState(false);
    const url = "http://localhost:11323/user/auth"

    const enterLogin = e => {
        e.preventDefault()

        axios.post(url, {
            email: user.email,
            password: user.password
        }).then(response => {
            document.cookie = `token=${response.data}`;
            setData({logged: true});
            navigate('/')
        }).catch(error => {
            console.log(error);
            setButtonPopUp(true);
        })
    }

    return (
        <Container>
            <Box>
                <Description>Login</Description>
                
                <FormDiv>
                    <FormLabel>Email</FormLabel>
                    <FormInput placeholder="email@gmail.com" onInput={e => setUser({...user, email: e.target.value})}></FormInput>
                </FormDiv>
                
                <FormDiv>
                    <FormLabel>Senha</FormLabel>
                    <FormInput type="password" placeholder="********" onInput={e => setUser({...user, password: e.target.value})} ></FormInput>
                </FormDiv>
                <Link to="/cadastro" className="cadastrar" >Não tem uma conta? Crie uma aqui</Link>
                <FormButton onClick={e => enterLogin(e)} value="Logar">Logar</FormButton>
            </Box>
            <PopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}>
                <p>Usuário e/ou senha incorretos</p>
            </PopUp>
        </Container>
    )
}