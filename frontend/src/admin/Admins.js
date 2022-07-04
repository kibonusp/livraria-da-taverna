import { Link } from "react-router-dom"
import { Container, Description, Action, ActionDiv } from "../styles/adminStyles/HomeAdminStyle"

export default function Admins({data, setData}) {
    return (
        <Container>
            <Description>Escolha uma ação para realizar</Description>
            <ActionDiv width="90">
                <Link to="/admin/admins/add">
                    <Action>Adicionar Admins</Action>
                </Link>
                <Link to="/admin/admins/remove">
                <Action>Remover Admins</Action>
                </Link>
            </ActionDiv>
        </Container>
    )
}