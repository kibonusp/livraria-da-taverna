import livro from "../assets/sapiens.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeer} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import { Fit, Livro, Tags, Fit2, Texto, Titulo, Autor, Descricao, Preco, Box, Flexbox2,
        Qlabel, Qbutton, PrecoTaverna } from "../styles/userStyles/BookStyles"

export default function Book() {
    return (
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
        </Fit> 
    )
}