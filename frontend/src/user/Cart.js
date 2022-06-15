import { Cover, Container, Row, Items, Name, Preco,  Head} from "../styles/userStyles/CartStyles"
import {FormButton } from "../styles/adminStyles/formStyle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeer } from '@fortawesome/free-solid-svg-icons'
import Product from "./../components/Product";
import { Link } from "react-router-dom";
import PopUp from "../components/PopUp";


export default function Cart() {
    return (
        <>
            <Row>
                <Container width="80%">
                    <h1>Carrinho de Compras</h1>
                    <PopUp/>
                    <Items>
                        <Name>
                            <Head><div>Imagem</div></Head>
                            <Head><div>Produto</div></Head>
                            <Head><div>Preço</div></Head>
                            <Head><div>Quantidade</div></Head>
                        </Name>

                        <Product/>
                        <Product/>
                        <Product/>
                        
                    </Items>
                </Container>

                <Container width="20%" img="on">
                    <Preco>
                        <p>Preço Total:</p>
                        <span>
                            <FontAwesomeIcon icon={faBeer} /> R$ 30,00
                        </span>
                        <p>Compre e leia no melhor ambiente, uma taverna!</p>
                    </Preco>
                    <Link to="/cart/confirm">
                        <FormButton>
                            Finalizar Compra
                        </FormButton>
                    </Link>

                </Container>
            </Row>
        </>
    )
}