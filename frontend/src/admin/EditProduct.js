import { Container, Description } from "../styles/adminStyles/HomeAdminStyle";
import { ResultList, Result, Search } from '../styles/adminStyles/UsersStyles';
import { Link } from "react-router-dom";

export default function EditProduct() {
    return (
        <Container>
            <Description>Escolha um produto para gerenciar</Description>
            <Search />
            <ResultList>
                <Link to="/admin/products/edit/form">
                    <Result>
                        <p>Harry Potter e a Pedra Filosofal</p>
                        <p>ROWLING, JK</p>
                    </Result>
                </Link>
            </ResultList>
        </Container>
    )
}