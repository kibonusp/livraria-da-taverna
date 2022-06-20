import { Link, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeer} from '@fortawesome/free-solid-svg-icons'
import { Livro, Cover, Descricao, Titulo, Autor, PrecoTaverna, Row, Resultados, HR, Container, Filtros, Generos, PrecoInput, Disponibilidade, GeneroFiltro } from "../styles/userStyles/SearchStyles"
import { useEffect, useState } from "react"
import { productImages } from "../images"

export default function Search({data, setData}) {
    const location = useLocation();
    const [books, setBooks] = useState([])
    const [genders, setGenders] = useState(data.genders.reduce((o, gender) => ({ ...o, [gender.name]: 1}), {}))

    const [filter, setFilter] = useState({
        gender: location.state !== null ? location.state.gender : undefined,
        search: location.state !== null ? location.state.products : data.products,
        lowPrice: "",
        highPrice: "",
        available: false
    })

    
    useEffect(() => {
        let newGenders = {};
        console.log(books);
        for (let i = 0; i < books.length; i++) {
            for (let j = 0; j < books[i].genders.length; j++) {
                if (books[i].genders[j] in newGenders)
                    newGenders[books[i].genders[j]] += 1;
                else
                    newGenders[books[i].genders[j]] = 1;
            }
        }
        setGenders(newGenders);
    }, [books])
    
    
    useEffect(() => {
        console.log(filter)
        let products = data.products;
        if (filter.search !== undefined)
            products = filter.search
        if (filter.gender !== undefined) {
            products = products.filter(function(product) {
                return product.genders.includes(filter.gender)
            })
        }
        if (filter.lowPrice !== "") {
            products = products.filter(function(product) {
                return parseFloat(product.price.substring(3)) >= filter.lowPrice
            })
        }
        if (filter.highPrice !== "") {
            products = products.filter(function(product) {
                return parseFloat(product.price.substring(3)) <= filter.highPrice
            })
        }
        if (filter.available === true) {
            products = products.filter(function(product) {
                return product.available > 0;
            })
        }
        setBooks(products)
    }, [filter, data.products])

    return (
        <Container>
            <Filtros>
                <Generos>
                    <h3>Gêneros</h3>
                    {
                        Object.entries(genders).map((value, index) =>
                            <GeneroFiltro onClick={() => setFilter({...filter, gender: value[0]})} key={index} >{value[0] + " (" + value[1] + ")"}</GeneroFiltro>
                        )
                    }
                </Generos>
                <div>
                    <h3>Preço</h3>
                    <PrecoInput>
                        <span>De R$ </span>
                        <input type="number" min="0" step="any" onInput={e => setFilter({...filter, lowPrice: e.target.value})} />
                        <span> à R$ </span>
                        <input type="number" min="0" step="any" onInput={e => setFilter({...filter, highPrice: e.target.value})}/>
                    </PrecoInput>
                </div>

                
                <Disponibilidade>
                    <h3>Disponibilidade</h3>
                    <Row>
                        <input type="checkbox" name="disponivel" id="disponivel" onInput={() => setFilter({...filter, available: !filter.available})}></input>
                        <label htmlFor="disponivel">Apenas livros disponíveis</label>
                    </Row>
                </Disponibilidade>
            </Filtros>
            <Resultados>
                <h2>Resultados da Busca</h2>
                {
                    [...Array(Math.ceil(books.length / 3)).keys()].map(index =>
                        <div key={index}>
                            <Row>
                                {
                                    books.slice(index*3, index*3 + 3).map((book, bookIndex) =>
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

/*
{
                        Object.entries(genders).map((value, index) =>
                            <GeneroFiltro onClick={() => setGender(value[0])} key={index} >{value[0] + " (" + value[1] + ")"}</GeneroFiltro>
                        )
                    }
*/