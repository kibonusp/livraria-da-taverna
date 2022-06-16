import { Link } from "react-router-dom"
import { Cover, Description, Titulo, Valor, Delete, Quantidade, Cell, InputButton} from "../styles/componentsStyles/ProductStyle"
import { Row } from "../styles/userStyles/CartStyles"
import { useEffect, useState } from "react"
import { productImages } from "../images"

export default function Product({data, setData, productCart}) {
    const product = data.products[productCart.indexProduct];
    const [inputButton, setInputButton] = useState(productCart.quantity);
    const [cartIndex, setCartIndex] = useState(0);

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
                <Cover src={productImages[product.cover]} alt="Capa do livro Sapiens" />
            </Cell>
            <Cell>
                <Titulo><Link to="/book">{product.name}</Link></Titulo>
            </Cell>
            <Cell>
                <Valor>{product.price}</Valor>
            </Cell>
            <Cell>
                <Row space="center">
                    <InputButton onClick={() => minusOne()}>-</InputButton>
                    <Quantidade>
                        <input type="number" min={1} max={50} value={inputButton} onChange={e => setInputButton(e.target.value)}/>
                    </Quantidade>
                    <InputButton onClick={() => addOne()}>+</InputButton>
                </Row>
            </Cell>
            <Cell margin="ignore">
                <Delete>X</Delete>
            </Cell>
        </Description>
    )
}