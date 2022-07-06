import { Secao, SecaoUl, Titulo, Seta, 
    Livro, ImgLivro, TituloLivro, Autor, PrecoTaverna } from "../styles/userStyles/HomeStyles"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faBeer} from '@fortawesome/free-solid-svg-icons'
import { productImages } from '../images'

import axios from "axios";

const baseURL = "http://localhost:11323/produto"

export default function HomeSecao({nome}) {
    const [livrosSection, setLivrosSection] = useState([]);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setLivrosSection(response.data);
            console.log(response.data)
        });
    }, []);

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
                    <FontAwesomeIcon icon={faArrowLeft} />
                    
                </Seta>
                {
                    livrosSection.map((livro, index) =>
                        index <= 4 ?
                        <Livro key={index}>
                            <Link to="/book" state={{id: livro._id}}>
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
                <FontAwesomeIcon icon={faArrowRight} />
                </Seta>
            </SecaoUl>
        </Secao>
    )
}