import { Link } from "react-router-dom"
import livro1 from "../assets/sapiens.jpg"
import { Cover, Description, Titulo, Valor, Delete, Quantidade, Cell, InputButton} from "../styles/componentsStyles/ProductStyle"
import { Row } from "../styles/userStyles/CartStyles"
import { useState } from "react"

export default function Product() {
    const [inputButton, setInputButton] = useState(1);

    const addOne = () => {
        document.getElementById('vol').value++;
    }

    const minusOne = () => {
        if(document.getElementById('vol').value > 1)document.getElementById('vol').value--;
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
                        <input type="number" id="vol" name="vol" min="1" max="50" defaultValue="1"></input>
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