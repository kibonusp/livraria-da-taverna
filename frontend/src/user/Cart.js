import { Container, Container2, Row, Items, Name, Preco,  Head} from "../styles/userStyles/CartStyles";
import {FormButton } from "../styles/adminStyles/formStyle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBeer } from '@fortawesome/free-solid-svg-icons';
import Product from "./../components/Product";
import { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import PopUp from "../components/PopUp";
import { PopUpButton } from "../styles/componentsStyles/PopUpStyle";


export default function Cart({data, setData}) {
    const [total, setTotal] = useState(0);
    const [buttonPopUp, setButtonPopUp] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        console.log("oi")
        let valor = 0
        let i = 0;
        while (i < data.cart.length) {
            valor += parseFloat(data.products[data.cart[i].indexProduct].price.substring(3)) * data.cart[i].quantity;
            setTotal(valor)
            i++;
        }
        if (data.cart.length === 0)
            setTotal(0);
    }, [data.cart, data.products])

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

                <Container2 tamanho={data.cart.length}>
                    <Preco>
                        <p>Preço Total:</p>
                        <span>
                            <FontAwesomeIcon icon={faBeer} color="#925407"/> R$ {total}
                        </span>
                        <p>Compre e leia no melhor ambiente, uma taverna!</p>
                    </Preco>
                    <FormButton onClick={() => setButtonPopUp(true)}>
                        Finalizar Compra
                    </FormButton>
                </Container2>
            </Row>
            <PopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}>
                <p>Tem certeza que deseja finalizar compra?</p>
                <Row>
                    <PopUpButton onClick={() => navigate("/cart/confirm")} theme="light">Confirmar</PopUpButton>
                    <PopUpButton onClick={() => setButtonPopUp(false)}>Cancelar</PopUpButton>
                </Row>
            </PopUp>
            
        </>
    )
}


