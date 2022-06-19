import { useState } from "react";
import { FormDiv, FormInput, FormLabel, Container, Description, FormButton, Box } from "../styles/userStyles/LoginStyles"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export default function Login({data, setData}) {
    const [user, setUser] = useState({email: undefined, password: undefined});
    const navigate = useNavigate();

    const enterLogin = e => {
        e.preventDefault()
        let i = 0;
        let found = false;
        console.log(data.users)
        while (i < data.users.length && !found) {
            if (data.users[i].email === user.email) {
                console.log("User Found");
                found = true;
                if (data.users[i].password === user.password) {
                    console.log("Correct password");
                    setData({...data, logged: {"situation": true, "user": i}});
                    navigate("/");
                }
                else
                    console.log("Wrong password");
            }
            i++;
        }
        if (!found)
            console.log("User not found")
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
        </Container>
    )
}