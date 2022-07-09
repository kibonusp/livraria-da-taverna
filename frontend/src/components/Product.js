import { Link } from "react-router-dom"
import { Cover, Description, Titulo, Valor, Delete, Quantidade, Cell, InputButton} from "../styles/componentsStyles/ProductStyle"
import { Row } from "../styles/userStyles/CartStyles"
import PopUp from "../components/PopUp";
import { PopUpButton } from "../styles/componentsStyles/PopUpStyle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faMinus, faPlus, faTrash} from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import { productImages } from "../images"


import axios from "axios";

const baseURL = "http://localhost:11323/produto/"

export default function Product({data, setData, productCart}) {
    const [inputButton, setInputButton] = useState(productCart.quantity);
    const [cartIndex, setCartIndex] = useState(0);
    const [buttonPopUp, setButtonPopUp] = useState(false);

    const [livro, setLivro] = useState();

    useEffect(() => {
        console.log(productCart)
        const newURL = baseURL + productCart.id;
        console.log(newURL)
        axios.get(newURL).then((response) => {
            setLivro(response.data);
            console.log(response.data)
            
        });

        let i = 0;
        let found = false;
        while (i < data.cart.length && !found) {
            if (data.cart[i].id === productCart.id){
                setCartIndex(i);
                found = true;
            }
            i++;
        }
    }, [data, productCart])

    const addOne = () => {
        if (inputButton < livro.available) {
            setData({...data, cart: data.cart.map((product, index) => {
                if (index === cartIndex)
                    return {...product, quantity: product.quantity+1}
                return product
            })})
            setInputButton(inputButton + 1);
        }
    }
    const minusOne = () => {
        if (inputButton > 1) {
            setData({...data, cart: data.cart.map((product, index) => {
                if (index === cartIndex)
                    return {...product, quantity: product.quantity-1}
                return product
            })})
            setInputButton(inputButton - 1);
        }
    }

    const deleteProduct = name => {
        setData({...data, cart: data.cart.filter(function(product, index) {
            return index !== cartIndex
        })})
        setButtonPopUp(false);
    }

    return (
        <>
        {
            (livro === undefined) ? 
            "" :
            <Description>
                <Cell>
                    <Cover src={productImages[livro.cover]} alt={livro.name} />
                </Cell>
                <Cell>
                    <Titulo><Link to="/book">{livro.name}</Link></Titulo>
                </Cell>
                <Cell>
                    <Valor>{livro.price}</Valor>
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
                            <PopUpButton onClick={() => deleteProduct(livro.name)} theme="light">Confirmar</PopUpButton>
                            <PopUpButton onClick={() => setButtonPopUp(false)}>Cancelar</PopUpButton>
                        </Row>
                    </PopUp>
                </Cell>
            </Description>
        }
        </>
    )
}