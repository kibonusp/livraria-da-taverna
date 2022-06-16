import { Link } from "react-router-dom"
import livro1 from "../assets/sapiens.jpg"
import livro2 from "../assets/investigador.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeer} from '@fortawesome/free-solid-svg-icons'
import { Livro, Cover, Descricao, Titulo, Autor, PrecoTaverna, Row, Resultados, HR, Container, Filtros, Generos, PrecoInput, Disponibilidade } from "../styles/userStyles/SearchStyles"

export default function Search() {
    return (
        <Container>
            <Filtros>
                <Generos>
                    <h3>Gêneros</h3>
                    <a href="google.com">Ficção Científica (3)</a>
                    <a href="google.com">História (30)</a>
                    <a href="google.com">Geografia (34)</a>
                    <a href="google.com">Educacional (32)</a>
                </Generos>
                <div>
                    <h3>Preço</h3>
                    <PrecoInput>
                        <span>De R$ </span>
                        <input type="number" min="0" step="any" />
                        <span> à R$ </span>
                        <input type="number" min="0" step="any" />
                    </PrecoInput>
                </div>

                
                <Disponibilidade>
                <h3>Disponibilidade</h3>
                    <Row>
                        <input type="checkbox" name="disponivel" id="disponivel"></input>
                        <label htmlFor="disponivel">Apenas livros disponíveis</label>
                    </Row>
                </Disponibilidade>
            </Filtros>
            <Resultados>
                <h2>Resultados da Busca</h2>
                <Row>
                    <Livro>
                        <Link to="/book">
                            <Cover src={livro1} alt="Capa do livro Sapiens" />
                            <Descricao>
                                <Titulo>Sapiens: Uma breve história da humanidade</Titulo>
                                <Autor>Yuval Noah Harari</Autor>
                                <PrecoTaverna>
                                    <FontAwesomeIcon icon={faBeer} className="beer"/>
                                    <span>R$ 10,00</span>
                                </PrecoTaverna>
                            </Descricao>
                        </Link>
                    </Livro>
                    <Livro>
                        <Link to="">
                            <Cover src={livro2} alt="Capa do livro O investigador inteligente" />
                            <Descricao>
                                <Titulo>O investigador inteligente</Titulo>
                                <Autor>Benjamin Graham</Autor>
                                <PrecoTaverna>
                                    <FontAwesomeIcon icon={faBeer} className="beer"/>
                                    <span>R$ 10,00</span>
                                </PrecoTaverna>
                            </Descricao>
                        </Link>
                    </Livro>
                </Row>

                <HR></HR>

                <Row>
                    <Livro>
                        <Link to="/book">
                            <Cover src={livro1} alt="Capa do livro Sapiens" />
                            <Descricao>
                                <Titulo>Sapiens: Uma breve história da humanidade</Titulo>
                                <Autor>Yuval Noah Harari</Autor>
                                <PrecoTaverna>
                                    <FontAwesomeIcon icon={faBeer} className="beer"/>
                                    <span>R$ 10,00</span>
                                </PrecoTaverna>
                            </Descricao>
                        </Link>
                    </Livro>
                    <Livro>
                        <Link to="">
                            <Cover src={livro2} alt="Capa do livro O investigador inteligente" />
                            <Descricao>
                                <Titulo>O investigador inteligente</Titulo>
                                <Autor>Benjamin Graham</Autor>
                                <PrecoTaverna>
                                    <FontAwesomeIcon icon={faBeer} className="beer"/>
                                    <span>R$ 10,00</span>
                                </PrecoTaverna>
                            </Descricao>
                        </Link>
                    </Livro>
                </Row>

            </Resultados> 

        </Container>
            
    )
}