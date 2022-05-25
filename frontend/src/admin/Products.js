import { ActionDiv, Action, Container, Description } from "../styles/adminStyles/HomeAdminStyle";
import { Link } from "react-router-dom";

export default function Products() {
    return (
        <Container>
            <Description>Escolha uma ação para realizar</Description>
            <ActionDiv width="50">
                <Action>
                    <h2>Adicionar Produto</h2>
                    <Link to="/admin/products/add"></Link>
                </Action>
                <Action>
                    <h2>Editar Produto</h2>
                    <Link to="/admin/products/edit"></Link>
                </Action>
            </ActionDiv>
        </Container>
    )
}