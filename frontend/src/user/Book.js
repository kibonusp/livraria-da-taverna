import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeer } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import { Fit, Livro, Tags, Fit2, Texto, Titulo, Autor, Descricao, Preco, Box, Flexbox2,
        Qlabel, Qbutton, PrecoTaverna, Capa } from "../styles/userStyles/BookStyles"
import { productImages } from '../images'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from "react"


export default function Book({data, setData}) {
    const [index, setIndex] = useState(0);
    const [quantidade, setQuantidade] = useState(1);
    const [inCart, setInCart] = useState(false);
    const location = useLocation()

    useEffect(() => {
        const { nome } = location.state;
        let i = 0;
        let found = false;
        while (i < data.products.length && !found) {
            if (data.products[i].name === nome) {
                setIndex(i);
                found = true;
            }
            i++;
        }

        let j = 0;
        found = false;
        while (j < data.cart.length && !found) {
            if (data.cart[j].indexProduct === i-1) {
                setQuantidade(data.cart[j].quantity)
                setInCart(true);
            }
            j++;
        }

    }, [location, index, data]);

    const adicionarCarrinho = () => {
        let datacopy = data;
        if (inCart) {
            let i = 0;
            let found = false;
            while (i < datacopy.cart.length && !found) {
                if (datacopy.cart[i].indexProduct === index)
                    found = true;
                i++;
            }
            datacopy.cart[i-1].quantity = quantidade;
        }
        else
            datacopy.cart.push({indexProduct: index, quantity: quantidade});
        setData(datacopy);
    }

    return (
        <Fit>
            <Livro>
                <Tags>
                    <Link to="/search">
                        <button>{data.products[index].genders[0]}</button>
                    </Link>
                    <Link to="/search">
                        <button>{data.products[index].genders[1]}</button>
                    </Link>
                    <Link to="/search">
                        <button>{data.products[index].genders[2]}</button>
                    </Link>
                </Tags>
                <Fit2>
                    <Capa src={productImages[data.products[index].cover]} alt="Capa Livro"></Capa>
                    <Texto>
                        <Titulo>{data.products[index].name}</Titulo>
                        <Autor> <i> {data.products[index].author}</i> </Autor>
                        <Descricao>            
                            {data.products[index].description}
                        </Descricao>
                    </Texto>
                </Fit2>
            </Livro>
            <Preco>
                <Box>
                    <PrecoTaverna>
                        <FontAwesomeIcon icon={faBeer} className="beer"/>
                        <span>{data.products[index].price}</span>
                    </PrecoTaverna>
                    <Flexbox2>
                        <Qlabel>Quantidade:</Qlabel>
                        {
                            <input type="number" min="1" value={quantidade} onChange={e => setQuantidade(parseFloat(e.target.value))}></input>
                        }
                    </Flexbox2>
                    <Qbutton onClick={() => adicionarCarrinho()}>Adicionar<br/>ao carrinho</Qbutton>
                </Box>
            </Preco>
        </Fit>
    )
}