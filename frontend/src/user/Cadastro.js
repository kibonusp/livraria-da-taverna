import { Link } from "react-router-dom"
import { FormDiv, FormInput, FormLabel, Container, Description, Button, Box } from "../styles/userStyles/LoginStyles"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileArrowDown} from '@fortawesome/free-solid-svg-icons'


export default function Cadastro() {
    return (
        <Container>
            <Box>
                <Description>Cadastro</Description>
                
                <FormDiv>
                    <FormLabel>Nome</FormLabel>
                    <FormInput placeholder="Gabriel Freitas Ximenes Vasconcelos" readOnly="true"></FormInput>
                </FormDiv>
                <FormDiv>
                    <FormLabel>Email</FormLabel>
                    <FormInput placeholder="gabriel.vasconcelos@usp.br" readOnly="true"></FormInput>
                </FormDiv>
                <FormDiv>
                    <FormLabel>Telefone</FormLabel>
                    <FormInput placeholder="(61) 991436969" readOnly="true"></FormInput>
                </FormDiv>
                <FormDiv>
                    <FormLabel>Nome</FormLabel>
                    <FormInput placeholder="Rua Cleyton da Silva 69420" readOnly="true"></FormInput>
                </FormDiv>
                <FormDiv>
                    <FormLabel>Senha</FormLabel>
                    <FormInput placeholder="********" readOnly="true"></FormInput>
                </FormDiv>
                <FormDiv>
                    <FormLabel>Confirme senha</FormLabel>
                    <FormInput placeholder="********" readOnly="true"></FormInput>
                </FormDiv>
                <FormDiv>
                    <FormLabel>Foto</FormLabel>
                    <p>Faça upload da sua foto aqui</p>
                    <FontAwesomeIcon icon={faFileArrowDown} color="#502514"/>
                </FormDiv>
                <Link to="/">
                    <Button>Cadastrar</Button>
                </Link>
            </Box>
        </Container>

    )
}