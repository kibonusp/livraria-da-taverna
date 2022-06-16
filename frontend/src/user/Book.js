//import livro from "../assets/sapiens.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeer} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import { Fit, Livro, Tags, Fit2, Texto, Titulo, Autor, Descricao, Preco, Box, Flexbox2,
        Qlabel, Qbutton, PrecoTaverna, Capa } from "../styles/userStyles/BookStyles"
import { productImages } from '../images'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from "react"


export default function Book({data, setData}) {
    const [index, setIndex] = useState(0);
    const location = useLocation()

    useEffect(() => {
        const { nome } = location.state
        for (let i = 0; i < data.products.length; i++ ){
            console.log("nome: " + nome)
            console.log("data.products[i].name: " + data.products[i].name);
            if (data.products[i].name === nome){
                setIndex(i);
                console.log("i:: " + i)
                console.log("aaaaaaaaaaaaaaaaaaaaaa index:" + index)
            }
        }
        console.log("SAIIIIIIIIIIII data.products[index].name: " + data.products[index].name);
    }, [location, data.products, index]);

    return (
        /*
        <Fit>
            <Livro>
                <Tags>
                    <Link to="/search">
                        <button>Geografia</button>
                    </Link>
                    <Link to="/search">
                        <button>História</button>
                    </Link>
                    <Link to="/search">
                        <button>Educacional</button>
                    </Link>
                </Tags>
                <Fit2>
                    <img src={livro} alt="Capa Sapiens"></img>
                    <Texto>
                        <Titulo>Sapiens: Uma breve história da humanidade</Titulo>
                        <Autor> <i> Yuval Noah Harari </i> </Autor>
                        <Descricao>      
                    <Link to="/search">
                        <button>{data.products[index].genders[2]}</button>
                    </Link>      
                            O planeta Terra tem cerca de 4,5 bilhões de anos. Numa fração ínfima 
                            desse tempo, uma espécie entre incontáveis outras o dominou: nós, humanos. Somos os 
                            animais mais evoluídos e mais destrutivos que jamais viveram.<br></br>
                            Sapiens é a obra-prima de Yuval Noah Harari e o consagrou como um dos pensadores mais 
                            brilhantes da atualidade.
                        </Descricao>
                    </Texto>
                </Fit2>
            </Livro>
            <Preco>
                <Box>
                    <PrecoTaverna>
                        <FontAwesomeIcon icon={faBeer} className="beer"/>
                        <span>R$ 39,90</span>
                    </PrecoTaverna>
                    <Flexbox2>
                        <Qlabel for="quantidade">Quantidade:</Qlabel>
                        <input type="number" min="1"></input>
                    </Flexbox2>
                    <Qbutton name="carrinho">Adicionar <br></br>ao carrinho</Qbutton>
                </Box>
            </Preco>
        </Fit> */
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
                        <Qlabel for="quantidade">Quantidade:</Qlabel>
                        <input type="number" min="1"></input>
                    </Flexbox2>
                    <Qbutton name="carrinho">Adicionar <br></br>ao carrinho</Qbutton>
                </Box>
            </Preco>
        </Fit>
    )
}