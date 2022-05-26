import { ActionDiv, Action, Container, Description } from "../styles/adminStyles/HomeAdminStyle";
import { Link } from "react-router-dom";

export default function Products() {
    return (
        <Container>
            <Description>Escolha uma ação para realizar</Description>
            <ActionDiv width="50">
                <Link to="/admin/products/add">
                    <Action>Adicionar Produto</Action>
                </Link>
                <Link to="/admin/products/edit">
                    <Action>Editar Produto</Action>
                </Link>
            </ActionDiv>
        </Container>
    )
}