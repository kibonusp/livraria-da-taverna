import { Link } from "react-router-dom"
import logoPhoto from "../assets/logo_fundo.png"
import setaE from "../assets/arrow-left-solid.svg"
import setaD from "../assets/arrow-right-solid.svg"
import livro1 from "../assets/robot.jpeg"
import livro2 from "../assets/sapiens.jpg"
import livro3 from "../assets/duna.jpeg"
import livro4 from "../assets/1984.jpg"
import livro5 from "../assets/vermelho.jpeg"
import { Painel, LogoPhoto, Scroll, Circulo, Container, Secao, SecaoUl, Titulo, Seta, 
            Livro, ImgLivro, TituloLivro, Autor, PrecoTaverna, FaBeer, Preco } from "../styles/userStyles/HomeStyles"


export default function Home() {
    return (
        <>
            <Painel>
                <LogoPhoto src={logoPhoto} alt="Logo da livraria" />
                <Scroll>
                    <Circulo>
                        <div id="atual"></div>
                    </Circulo>
                    <Circulo></Circulo>
                    <Circulo></Circulo>
                </Scroll>
            </Painel>
            <Container>
                <Secao>
                    <Titulo>Mais Vendidos</Titulo>
                    <SecaoUl>
                        <Seta>
                            <img class="seta_svg" src={setaE} alt="seta"></img>
                        </Seta> 
                        <Livro>
                            <Link to="/book">
                                <ImgLivro src={livro1} alt="livro1" />
                                <TituloLivro>I, Robot</TituloLivro>
                                <Autor>Isaac Asimov</Autor>
                                <PrecoTaverna>
                                    <FaBeer aria-hidden="true"></FaBeer>
                                    <Preco>R$ 10,00</Preco> 
                                </PrecoTaverna>
                            </Link>
                        </Livro>
                        <Livro>
                            <ImgLivro src={livro2} alt="livro2" />
                            <TituloLivro>Sapiens: Uma breve história da humanidade</TituloLivro>
                            <Autor>Yuval Noah Harari</Autor>
                            <PrecoTaverna>
                                <FaBeer aria-hidden="true"></FaBeer>
                                <Preco>R$ 10,00</Preco> 
                            </PrecoTaverna>
                        </Livro>
                        <Livro>
                            <ImgLivro src={livro3} alt="livro3" />
                            <TituloLivro>Duna</TituloLivro>
                            <Autor>Frank Herbert</Autor>
                            <PrecoTaverna>
                                <FaBeer aria-hidden="true"></FaBeer>
                                <Preco>R$ 10,00</Preco> 
                            </PrecoTaverna>
                        </Livro>
                        <Livro>
                            <ImgLivro src={livro4} alt="livro4" />
                            <TituloLivro>1984</TituloLivro>
                            <Autor>George Orwell</Autor>
                            <PrecoTaverna>
                                <FaBeer aria-hidden="true"></FaBeer>
                                <Preco>R$ 10,00</Preco> 
                            </PrecoTaverna>
                        </Livro>
                        <Livro>
                            <ImgLivro src={livro5} alt="livro5" />
                            <TituloLivro>Sherlock Holmes: Um Estudo em Vermelho</TituloLivro>
                            <Autor>Arthur Conan Doyle</Autor>
                            <PrecoTaverna>
                                <FaBeer aria-hidden="true"></FaBeer>
                                <Preco>R$ 10,00</Preco> 
                            </PrecoTaverna>
                        </Livro>
                        <Seta>
                            <img class="seta_svg" src={setaD} alt="seta"></img>
                        </Seta>
                    </SecaoUl>
                </Secao>
                <hr></hr>
                <Secao>
                    <Titulo>Lançamentos</Titulo>
                    <SecaoUl>
                        <Seta>
                            <img class="seta_svg" src={setaE} alt="seta"></img>
                        </Seta> 
                        <Livro>
                            <ImgLivro src={livro1} alt="livro1" />
                            <TituloLivro>I, Robot</TituloLivro>
                            <Autor>Isaac Asimov</Autor>
                            <PrecoTaverna>
                                <FaBeer aria-hidden="true"></FaBeer>
                                <Preco>R$ 10,00</Preco> 
                            </PrecoTaverna>
                        </Livro>
                        <Livro>
                            <ImgLivro src={livro2} alt="livro2" />
                            <TituloLivro>Sapiens: Uma breve história da humanidade</TituloLivro>
                            <Autor>Yuval Noah Harari</Autor>
                            <PrecoTaverna>
                                <FaBeer aria-hidden="true"></FaBeer>
                                <Preco>R$ 10,00</Preco> 
                            </PrecoTaverna>
                        </Livro>
                        <Livro>
                            <ImgLivro src={livro3} alt="livro3" />
                            <TituloLivro>Duna</TituloLivro>
                            <Autor>Frank Herbert</Autor>
                            <PrecoTaverna>
                                <FaBeer aria-hidden="true"></FaBeer>
                                <Preco>R$ 10,00</Preco> 
                            </PrecoTaverna>
                        </Livro>
                        <Livro>
                            <ImgLivro src={livro4} alt="livro4" />
                            <TituloLivro>1984</TituloLivro>
                            <Autor>George Orwell</Autor>
                            <PrecoTaverna>
                                <FaBeer aria-hidden="true"></FaBeer>
                                <Preco>R$ 10,00</Preco> 
                            </PrecoTaverna>
                        </Livro>
                        <Livro>
                            <ImgLivro src={livro5} alt="livro5" />
                            <TituloLivro>Sherlock Holmes: Um Estudo em Vermelho</TituloLivro>
                            <Autor>Arthur Conan Doyle</Autor>
                            <PrecoTaverna>
                                <FaBeer aria-hidden="true"></FaBeer>
                                <Preco>R$ 10,00</Preco> 
                            </PrecoTaverna>
                        </Livro>
                        <Seta>
                            <img class="seta_svg" src={setaD} alt="seta"></img>
                        </Seta>
                    </SecaoUl>
                </Secao>
            </Container>
        </>
    )
}

