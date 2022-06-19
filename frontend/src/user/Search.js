import { Link, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeer} from '@fortawesome/free-solid-svg-icons'
import { Livro, Cover, Descricao, Titulo, Autor, PrecoTaverna, Row, Resultados, HR, Container, Filtros, Generos, PrecoInput, Disponibilidade, GeneroFiltro } from "../styles/userStyles/SearchStyles"
import { useEffect, useState } from "react"
import { productImages } from "../images"

export default function Search({data, setData}) {
    const location = useLocation();
    const [gender, setGender] = useState(location.state !== null ? location.state.gender : undefined);
    const [books, setBooks] = useState(data.products);
    const [priceBooks, setPriceBooks] = useState(books);
    const [genders, setGenders] = useState({});
    const [price, setPrice] = useState({
        "lowPrice": "",
        "highPrice": ""
    })
    
    useEffect(() => {
        let newGenders = {}
        let newBooks = []
        for (let i = 0; i < books.length; i++) {
            if (books[i].genders.includes(gender) || gender === undefined) {
                if (price.lowPrice === "" && price.highPrice === "")
                    newBooks.push(books[i])

                else if (price.lowPrice === "" && parseFloat(books[i].price.substring(3)) <= price.highPrice)
                    newBooks.push(books[i])

                else if (parseFloat(books[i].price.substring(3)) >= price.lowPrice && price.highPrice === "")
                    newBooks.push(books[i])

                else if (parseFloat(books[i].price.substring(3)) >= price.lowPrice && parseFloat(books[i].price.substring(3)) <= price.highPrice)
                    newBooks.push(books[i])
                for (let bookGender of books[i].genders) {
                    if (bookGender !== "Selecione") {
                        if (bookGender in newGenders)
                            newGenders[bookGender] += 1
                        else
                            newGenders[bookGender] = 1
                    }
                }
            }
        }
        
        setBooks(newBooks);
        setGenders(newGenders);
        setPriceBooks(newBooks)
        // eslint-disable-next-line
    }, [gender])

    useEffect(() => {
        let newBooks = [];
        for (let i = 0; i < books.length; i++) {
            if (price.lowPrice === "" && price.highPrice === "")
                newBooks.push(books[i])

            else if (price.lowPrice === "" && parseFloat(books[i].price.substring(3)) <= price.highPrice)
                newBooks.push(books[i])

            else if (parseFloat(books[i].price.substring(3)) >= price.lowPrice && price.highPrice === "")
                newBooks.push(books[i])

            else if (parseFloat(books[i].price.substring(3)) >= price.lowPrice && parseFloat(books[i].price.substring(3)) <= price.highPrice)
                newBooks.push(books[i])
        }
        setPriceBooks(newBooks);
        // eslint-disable-next-line
    }, [price.lowPrice, price.highPrice])

    return (
        <Container>
            <Filtros>
                <Generos>
                    <h3>Gêneros</h3>
                    {
                        Object.entries(genders).map((value, index) =>
                            <GeneroFiltro onClick={() => setGender(value[0])} key={index} >{value[0] + " (" + value[1] + ")"}</GeneroFiltro>
                        )
                    }
                </Generos>
                <div>
                    <h3>Preço</h3>
                    <PrecoInput>
                        <span>De R$ </span>
                        <input type="number" min="0" step="any" onInput={e => setPrice({...price, lowPrice: e.target.value})} />
                        <span> à R$ </span>
                        <input type="number" min="0" step="any" onInput={e => setPrice({...price, highPrice: e.target.value})}/>
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
                {
                    [...Array(Math.ceil(priceBooks.length / 3)).keys()].map(index =>
                        <div key={index}>
                            <Row>
                                {
                                    priceBooks.slice(index*3, index*3 + 3).map((book, bookIndex) =>
                                        <Livro key={bookIndex}>
                                            <Link to="/book" state={{ nome: book.name }}>
                                                <Cover src={productImages[book.cover]} alt={book.name} />
                                                <Descricao>
                                                    <Titulo>{book.name}</Titulo>
                                                    <Autor>{book.author[0]}</Autor>
                                                    <PrecoTaverna>
                                                        <FontAwesomeIcon icon={faBeer} className="beer"/>
                                                        <span>{book.price}</span>
                                                    </PrecoTaverna>
                                                </Descricao>
                                            </Link>
                                        </Livro>
                                    )
                                }
                            </Row>
                            <HR/>
                        </div>
                    )
                }
            </Resultados> 

        </Container>
            
    )
}