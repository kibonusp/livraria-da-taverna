import { Link } from "react-router-dom"
import { Container, Description, Action, ActionDiv } from "../styles/adminStyles/HomeAdminStyle.js"

export default function Admin() {
    return (
        <Container>
            <Description>Escolha uma ação para realizar</Description>
            <ActionDiv width="90">
                <Action>
                    <Link to="/admin/users"></Link>
                    <h2>Usuários</h2>
                </Action>
                <Action>
                    <Link to="/admin/admins"></Link>
                    <h2>Admins</h2>
                </Action>
                <Action>
                    <Link to="/admin/products"></Link>
                    <h2>Produtos</h2>
                </Action>
            </ActionDiv>
        </Container>
    )
}