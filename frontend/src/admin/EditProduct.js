import { Container, Description } from "../styles/adminStyles/HomeAdminStyle";
import { ResultList, Result, Search } from '../styles/adminStyles/UsersStyles';

export default function EditProduct() {
    return (
        <Container>
            <Description>Escolha um produto para gerenciar</Description>
            <Search />
            <ResultList>
                <Result>
                    <p>Harry Potter e a Pedra Filosofal</p>
                    <p>ROWLING, JK</p>
                </Result>
            </ResultList>
        </Container>
    )
}