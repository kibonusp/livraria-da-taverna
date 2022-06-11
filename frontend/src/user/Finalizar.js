import { Link } from "react-router-dom"
import { Titulo, Container, FormDiv, FormInput, FormLabel, Button } from "../styles/userStyles/FinalizarStyles"

export default function Finalizar() {
    return (
        <Container>
            <Titulo>Finalizar Compra</Titulo>
            <hr></hr>

            <FormDiv>
                <FormLabel>CPF</FormLabel>
                <FormInput placeholder="111.111.111-11" readOnly="true"></FormInput>
            </FormDiv>
            <FormDiv>
                <FormLabel>Número do Cartão</FormLabel>
                <FormInput placeholder="5426 5306 9148 3961" readOnly="true"></FormInput>
            </FormDiv>
            <FormDiv>
                <FormLabel>Código de Segurança - CVV</FormLabel>
                <FormInput placeholder="123" readOnly="true"></FormInput>
            </FormDiv>
            <FormDiv>
                <FormLabel>Endereço de Entrega</FormLabel>
                <FormInput placeholder="Rua Cleyton da Silva 69420" readOnly="true"></FormInput>
            </FormDiv>
            <Link to="/">
                <Button>Comprar</Button>
            </Link>
        </Container>
    )
}