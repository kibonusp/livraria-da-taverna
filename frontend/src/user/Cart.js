import { Container, Row, Items, Name, Preco,  Head} from "../styles/userStyles/CartStyles"
import {FormButton } from "../styles/adminStyles/formStyle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeer } from '@fortawesome/free-solid-svg-icons'
import Product from "./../components/Product";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react"


export default function Cart({data, setData}) {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        console.log("oi")
        let valor = 0
        let i = 0;
        while (i < data.cart.length) {
            valor += parseFloat(data.products[data.cart[i].indexProduct].price.substring(3)) * data.cart[i].quantity;
            setTotal(valor)
            i++;
        }
    }, [data])

    console.log(total)
  
    return (
        <>
            <Row>
                <Container width="80%">
                    <h1>Carrinho de Compras</h1>
                    
                    <Items>
                        <Name>
                            <tr>
                                <Head><div>Imagem</div></Head>
                                <Head><div>Produto</div></Head>
                                <Head><div>Preço</div></Head>
                                <Head><div>Quantidade</div></Head>
                            </tr>
                        </Name>
                        <tbody>
                            {
                                data.cart.map((productCart, index) =>
                                    <Product key={index} data={data} setData={setData} productCart={productCart} />
                                )
                            }
                        </tbody>
                        
                    </Items>
                </Container>

                <Container width="20%" img="on">
                    <Preco>
                        <p>Preço Total:</p>
                        <span>
                            <FontAwesomeIcon icon={faBeer} color="#925407"/> R$ {total}
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


