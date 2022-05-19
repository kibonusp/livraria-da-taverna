import { Container, Description, Action, ActionDiv } from "../styles/AdminStyle"

export default function Admin() {
    return (
        <Container>
            <Description>Escolha uma ação para realizar</Description>
            <ActionDiv>
                <Action href="">
                    <h2>Usuários</h2>
                </Action>
                <Action href="">
                    <h2>Admins</h2>
                </Action>
                <Action href="">
                    <h2>Produtos</h2>
                </Action>
            </ActionDiv>
        </Container>
    )
}