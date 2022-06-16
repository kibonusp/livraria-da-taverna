import { Link } from "react-router-dom"
import { Titulo, Container, FormDiv, FormInput, FormLabel, FormButton, ActionDiv, Row } from "../styles/userStyles/FinalizarStyles"

export default function Finalizar() {
    return (
        <Container>
            <Titulo>Finalizar Compra</Titulo>
            <hr></hr>
            <ActionDiv>
                <Row>
                    <FormDiv>
                        <FormLabel>CPF</FormLabel>
                        <FormInput placeholder="111.111.111-11"></FormInput>
                    </FormDiv>
                    <FormDiv>
                        <FormLabel>Número do Cartão</FormLabel>
                        <FormInput placeholder="5426 5306 9148 3961"></FormInput>
                    </FormDiv>
                </Row>
                <Row>
                    <FormDiv>
                        <FormLabel>Código de Segurança - CVV</FormLabel>
                        <FormInput placeholder="123"></FormInput>
                    </FormDiv>
                    <FormDiv>
                        <FormLabel>Endereço de Entrega</FormLabel>
                        <FormInput placeholder="Rua Cleyton da Silva 69420"></FormInput>
                    </FormDiv>
                </Row>
            </ActionDiv>
            <Link to="/">
                <FormButton>Comprar</FormButton>
            </Link>
            
        </Container>
    )
}