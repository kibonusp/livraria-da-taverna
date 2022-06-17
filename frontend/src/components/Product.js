import { Link } from "react-router-dom"
import { Cover, Description, Titulo, Valor, Delete, Quantidade, Cell, InputButton} from "../styles/componentsStyles/ProductStyle"
import { Row } from "../styles/userStyles/CartStyles"
import PopUp from "../components/PopUp";
import { PopUpButton } from "../styles/componentsStyles/PopUpStyle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import { productImages } from "../images"


export default function Product({data, setData, productCart}) {
    const product = data.products[productCart.indexProduct];
    const [inputButton, setInputButton] = useState(productCart.quantity);
    const [cartIndex, setCartIndex] = useState(0);
    const [buttonPopUp, setButtonPopUp] = useState(false);

    useEffect(() => {
        let i = 0;
        let found = false;
        while (i < data.cart.length && !found) {
            if (data.cart[i].indexProduct === productCart.indexProduct)
                setCartIndex(i);
            i++;
        }
    }, [data, productCart])

    const addOne = () => {
        let datacopy = data;
        datacopy.cart[cartIndex].quantity += 1;
        setInputButton(inputButton + 1);
        setData(datacopy);
    }

    const minusOne = () => {
        if (inputButton > 1) {
            let datacopy = data;
            datacopy.cart[cartIndex].quantity -= 1;
            setInputButton(inputButton - 1);
            setData(datacopy);
        }
    }


    return (
        <Description>
            <Cell>
                <Link to="/book" state={{ nome: product.name }}><Cover src={productImages[product.cover]} alt="Capa do livro Sapiens" /></Link>
            </Cell>
            <Cell>
                <Titulo><Link to="/book" state={{ nome: product.name }}>{product.name}</Link></Titulo>
            </Cell>
            <Cell>
                <Valor>{product.price}</Valor>
            </Cell>
            <Cell>
                <Row space="center">
                    <InputButton onClick={() => minusOne()}>
                        <FontAwesomeIcon icon={faMinus}/>
                    </InputButton>
                    <Quantidade>
                        <input type="number" min={1} max={50} value={inputButton} onChange={e => setInputButton(e.target.value)}/>
                    </Quantidade>
                    <InputButton onClick={() => addOne()}>
                        <FontAwesomeIcon icon={faPlus}/>
                    </InputButton>
                </Row>
            </Cell>
            <Cell margin="ignore">
                <Delete onClick={() => setButtonPopUp(true)}>
                    <FontAwesomeIcon icon={faTrash}/>
                </Delete>
                <PopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}>
                    <p>Tem certeza que deseja deletar este item?</p>
                    <Row>
                        <PopUpButton theme="light">Confirmar</PopUpButton>
                        <PopUpButton onClick={() => setButtonPopUp(false)}>Cancelar</PopUpButton>
                    </Row>
                </PopUp>
            </Cell>
        </Description>
    )
}