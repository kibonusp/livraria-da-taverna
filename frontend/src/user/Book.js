import livro from "../assets/sapiens.jpg"


import { Fit, Livro, Tags, Fit2, Texto, Titulo, Autor, Descricao, Preco, Box, Flexbox, Flexbox2,
        Qlabel, Qinput, Qbutton, FaBeer } from "../styles/userStyles/BookStyles"

export default function Book() {
    return (
        <Fit>
            <Livro>
                <Tags>
                    <p>Geografia</p>
                    <p>História</p>
                    <p>Educacional</p>
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
                    <Flexbox>
                        <FaBeer aria-hidden="true"></FaBeer>
                        <p> R$ 39,90 </p>
                    </Flexbox>
                    <Flexbox2>
                        <Qlabel for="quantidade">Quantidade:</Qlabel>
                        <Qinput type="number" id="quantidade" name="quantidade" min="1"><br></br></Qinput>
                    </Flexbox2>
                    <Qbutton name="carrinho">Adicionar ao carrinho</Qbutton>
                </Box>
            </Preco>
        </Fit> 
    )
}