import { Link } from "react-router-dom"
import { FormDiv, FormInput, FormLabel, Container, Description, Button, Box } from "../styles/userStyles/LoginStyles"


export default function Login() {
    return (
        <Container>
            <Box>
                <Description>Login</Description>
                
                <FormDiv>
                    <FormLabel>Email</FormLabel>
                    <FormInput placeholder="gabriel.vasconcelos@usp.br"></FormInput>
                </FormDiv>
                
                <FormDiv>
                    <FormLabel>Senha</FormLabel>
                    <FormInput placeholder="********" ></FormInput>
                </FormDiv>
                <a className="cadastrar" href="/cadastro" >Não tem uma conta? Crie uma aqui</a>
                <Link to="/">
                    <Button>Logar</Button>
                </Link>
            </Box>
        </Container>

    )
}