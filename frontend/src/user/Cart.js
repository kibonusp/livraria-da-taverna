import { Cover, Container, Row, Items, Product, Name, Preco, Titulo, Valor, Delete, Quantidade} from "../styles/userStyles/CartStyles"
import {FormButton } from "../styles/adminStyles/formStyle";
import { } from '@fortawesome/free-solid-svg-icons'

import livro1 from "../assets/sapiens.jpg"


export default function Cart() {
    return (
        <>
            <Row>
                <Container width="80%">
                    <h1>Carrinho de Compras</h1>
                    <Items>
                        <Name>
                            <p>Imagem</p>
                            <p>Produto</p>
                            <p>Preço</p>
                            <p>Quantidade</p>

                        </Name>
                        <Product>
                            <Cover src={livro1} alt="Capa do livro Sapiens" />
                            <Titulo>Sapiens: Uma breve história da humanidade</Titulo>
                            
                            <Valor>R$ 10,00</Valor>
                            
                            <Quantidade>
                                <input type="number" id="vol" name="vol" min="0" max="50"></input>
                            </Quantidade>
                            <Delete>X</Delete>

                        </Product>
                    </Items>

                </Container>
                <Container width="20%">
                    <Preco>

                    </Preco>
                    <FormButton>
                        Finalizar Compra
                    </FormButton>

                </Container>
            </Row>
        </>
    )
}