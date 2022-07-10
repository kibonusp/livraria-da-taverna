import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeer} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import { Fit, Livro, Tags, Fit2, Texto, Titulo, Autor, Descricao, Preco, Box, Flexbox2,
        Qlabel, Qbutton, PrecoTaverna, Capa } from "../styles/userStyles/BookStyles"
import { Bounce } from "../styles/userStyles/GenderStyles"
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from "react"
import PopUp from '../components/PopUp'

import axios from "axios";

const baseURL = "http://localhost:11323/produto/"
const gendersURL = "http://localhost:11323/genero/"

export default function Book({data, setData}) {

    const [generos, setGeneros] = useState([]);
    const [quantidade, setQuantidade] = useState(0);
    const [inCart, setInCart] = useState(false);
    const [buttonPopUp, setButtonPopUp] = useState(false);
    const [buttonPopUpNot, setButtonPopUpNot] = useState(false);
    const location = useLocation()

    const [livro, setLivro] = useState();

    useEffect(() => {
        const product = location.state.id;
        const newURL = baseURL + product;
        axios.get(newURL).then((response) => {
            setLivro(response.data);
            let genderPromisses = []
            for (let gender of response.data.genders) {
                genderPromisses.push(axios.get(gendersURL + gender))
            }
            Promise.all(genderPromisses).then(values => {
                setGeneros(values.map(value => value.data.name))
            });
            
        });
        let j = 0;
        let found = false;
        while (j < data.cart.length && !found) {
            if (data.cart[j].id === product) {
                setQuantidade(data.cart[j].quantity)
                setInCart(true);
                found = true;
            }
            j++;
        }
    }, [location]);

    const adicionarCarrinho = () => {
        let datacopy = data;
        if (inCart) {
            let i = 0;
            let found = false;
            while (i < datacopy.cart.length && !found) {
                if (datacopy.cart[i].id === livro._id)
                    found = true;
                i++;
            }
            datacopy.cart[i-1].quantity = quantidade;
            setButtonPopUp(true);
        }

        else if (quantidade > 0) {
            datacopy.cart.push({id: livro._id, quantity: quantidade, price: livro.price});
            setInCart(true);
            setButtonPopUp(true);
        }
        else {
            setButtonPopUpNot(true);
        }
        setData(datacopy);
    }

    return (
        <>
        {
            livro === undefined ?
            "" :
        <Fit>
            <Livro>
                <Tags>
                    {
                        generos.map((gender, index) =>
                        gender !== "Selecione" ?
                        <Link key={index} to="/search" state={{"gender": livro.genders[index]}}>
                                <button>{gender}</button>
                            </Link>
                            :
                            ""
                        )
                    }
                </Tags>
                <Fit2>
                    <Capa src={`http://localhost:11323/produto/${location.state.id}/image`} alt="Capa Livro"></Capa>
                    <Texto>
                        <Titulo>{livro.name}</Titulo>
                        <Autor> <i> {livro.author}</i> </Autor>
                        <Descricao>            
                            {livro.description}
                        </Descricao>
                    </Texto>
                </Fit2>
            </Livro>
            <Preco>
                <Box>
                    <PrecoTaverna>
                        <Bounce>
                            <FontAwesomeIcon color={"#cc720c"}icon={faBeer} className="beer"/>
                        </Bounce>
                        <span>{livro.price}</span>
                    </PrecoTaverna>
                    <Flexbox2>
                        <Qlabel>Quantidade:</Qlabel>
                        {
                            livro.available > 0 ? 
                            <input type="number" min="0" max={livro.available} value={quantidade} onChange={e => setQuantidade(parseFloat(e.target.value))} />
                            :
                            <p style={{fontSize: "1.3rem", color: "grey"}}>Produto indisponível</p>
                        }
                    </Flexbox2>
                    <Qbutton onClick={() => adicionarCarrinho()}>Adicionar<br/>ao carrinho</Qbutton>
                </Box>
            </Preco>
            <PopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}>
                <p>Item adicionado ao carrinho com sucesso</p>
            </PopUp>
            <PopUp trigger={buttonPopUpNot} setTrigger={setButtonPopUpNot}>
                <p>Escolha uma quantidade maior que 0 para inserir o item no carrinho</p>
            </PopUp>
        </Fit>
        }
        </>
    )
}