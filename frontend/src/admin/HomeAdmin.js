import { Link } from "react-router-dom"
import { Container, Description, Action, ActionDiv } from "../styles/adminStyles/HomeAdminStyle.js"

export default function Admin() {
    return (
        <Container>
            <Description>Escolha uma ação para realizar</Description>
            <ActionDiv width="90">
                <Link to="/admin/users">
                    <Action>Usuários</Action>
                </Link>
                <Link to="/admin/admins">
                    <Action>Admins</Action>
                </Link>
                <Link to="/admin/products">
                    <Action>Produtos</Action>
                    </Link>
            </ActionDiv>
        </Container>
    )
}