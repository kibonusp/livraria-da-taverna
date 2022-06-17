import { Link } from "react-router-dom"
import livro1 from "../assets/sapiens.jpg"
import { Cover, Description, Titulo, Valor, Delete, Quantidade, Cell, InputButton} from "../styles/componentsStyles/ProductStyle"
import { Row } from "../styles/userStyles/CartStyles"
import { useState } from "react"
import PopUp from "../components/PopUp";
import { PopUpButton } from "../styles/componentsStyles/PopUpStyle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons"


export default function Product() {
    const [inputButton, setInputButton] = useState(1);

    const addOne = () => {
        setInputButton(inputButton + 1);
    }

    const minusOne = () => {
        if (inputButton > 1)
            setInputButton(inputButton - 1);
    }

    const [buttonPopUp, setButtonPopUp] = useState(false);

    return (

        <Description>
            <Cell>
                <Cover src={livro1} alt="Capa do livro Sapiens" />
            </Cell>
            <Cell>
                <Titulo><Link to="/book">Sapiens: Uma breve história da humanidade</Link></Titulo>
            </Cell>
            <Cell>
                <Valor>R$ 10,00</Valor>
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