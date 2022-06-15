import { Link } from "react-router-dom"
import livro1 from "../assets/sapiens.jpg"
import { Cover, Description, Titulo, Valor, Delete, Quantidade, Cell, InputButton} from "../styles/componentsStyles/ProductStyle"
import { Row } from "../styles/userStyles/CartStyles"
import { useState } from "react"

export default function Product() {
    const [inputButton, setInputButton] = useState(1);

    const addOne = () => {
        setInputButton(inputButton + 1);
    }

    const minusOne = () => {
        if (inputButton > 1)
            setInputButton(inputButton - 1);
    }

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
                    <InputButton onClick={() => addOne()}>+</InputButton>
                    <Quantidade>
                        <input type="number" min={1} max={50} value={inputButton} onChange={e => setInputButton(e.target.value)}/>
                    </Quantidade>
                    <InputButton onClick={() => minusOne()}>-</InputButton>
                </Row>
            </Cell>
            <Cell margin="ignore">
                <Delete>X</Delete>
            </Cell>
        </Description>

    )
}