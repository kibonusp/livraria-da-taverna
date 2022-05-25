import { Link } from "react-router-dom"
import { Container, Description, Action, ActionDiv } from "../styles/adminStyles/HomeAdminStyle"

export default function Admins() {
    return (
        <Container>
            <Description>Escolha uma ação para realizar</Description>
            <ActionDiv width="50">
                <Action>
                    <Link to="/admin/admins/add"></Link>
                    <h2>Adicionar Admins</h2>
                </Action>
                <Action>
                    <Link to="/admin/admins/remove"></Link>
                    <h2>Remover Admins</h2>
                </Action>
            </ActionDiv>
        </Container>
    )
}