import setaE from "../assets/arrow-left-solid.svg"
import setaD from "../assets/arrow-right-solid.svg"
import { Secao, SecaoUl, Titulo, Seta, 
    Livro, ImgLivro, TituloLivro, Autor, PrecoTaverna } from "../styles/userStyles/HomeStyles"
import { Link } from "react-router-dom"
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeer} from '@fortawesome/free-solid-svg-icons'
import { productImages } from '../images'

export default function HomeSecao({nome, livros}) {
    const [livrosSection, setLivrosSection] = useState(livros);

    const moveLeft = () => {
        const newLivros = livrosSection;
        const lastBook = newLivros.pop()
        newLivros.unshift(lastBook);
        setLivrosSection(prevLivros => [...newLivros]);
    }

    const moveRight = () => {
        const newLivros = livrosSection;
        const firstBook = newLivros.shift();
        newLivros.push(firstBook);
        setLivrosSection(prevLivros => [...newLivros]);
    }

    return (
        <Secao>
            <Titulo>{nome}</Titulo>
            <SecaoUl>
                <Seta onClick={() => moveLeft()}>
                    <img className="seta_svg" src={setaE} alt="seta"></img>
                </Seta>
                {
                    livrosSection.map((livro, index) =>
                        index <= 4 ?
                        <Livro key={index}>
                            <Link to="/book" state={{ nome: livro.name }}>
                                <ImgLivro src={productImages[livro.cover]} alt={livro.name} />
                                <TituloLivro>{livro.name}</TituloLivro>
                                <Autor>{livro.author}</Autor>
                                <PrecoTaverna>
                                    <FontAwesomeIcon icon={faBeer} className="beer"/>
                                    <span>{livro.price}</span>
                                </PrecoTaverna>
                            </Link>
                        </Livro> :
                        ""
                    )
                }
                <Seta onClick={() => moveRight()}>
                    <img className="seta_svg" src={setaD} alt="seta"></img>
                </Seta>
            </SecaoUl>
        </Secao>
    )
}