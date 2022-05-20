import { Container, Section } from "../styles/componentsStyles/FooterStyle"

export default function Footer() {
    return (
        <Container>
            <Section>
                <h2>Membros</h2>
                <ul>
                    <li><a href="https://github.com/kibonusp">Gabriel Freitas</a></li>
                    <li><a href="https://github.com/rtbarreira">Raíssa Barreira</a></li>
                    <li><a href="https://github.com/Roassaf">Rodrigo Assaf</a></li>
                </ul>
            </Section>
            <Section>
                <h2>Sobre</h2>
                <p>Projeto desenvolvido para a disciplina <i>SCC0219 - Introdução ao Desenvolvimento Web</i> do ICMC-USP</p>
            </Section>
            <Section>
                <h2>Informações</h2>
                <span><b>Telefone: </b>(11) 1111-1111</span>
                <span><b>Email: </b>livraria_taverna@gmail.com</span>
                <span><b>Endereço: </b>Rua da Independência, 5132</span>
            </Section>
        </Container>
    )
}