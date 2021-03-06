
import { Link, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeer} from '@fortawesome/free-solid-svg-icons'
import { Livro, Cover, Descricao, Titulo, Autor, PrecoTaverna, Row, Resultados, HR, Container, Filtros, Generos, PrecoInput, Disponibilidade, GeneroFiltro } from "../styles/userStyles/SearchStyles"
import { useEffect, useState } from "react"

import axios from "axios";

const genderURL = "http://localhost:11323/genero"
const bookURL = "http://localhost:11323/produtos"
const allBookURL = "http://localhost:11323/produto"

export default function Search({data, setData}) {
    const location = useLocation();
    const [books, setBooks] = useState([]);
    const [genders, setGenders] = useState([]);
    
    const [filter, setFilter] = useState({
        gender: location.state !== null ? location.state.gender : null,
        search: data.search,
        lowPrice: 0,
        highPrice: 0,
        available: false
    })
    
    useEffect(() => {
        let copy = {params: filter}
        if(location.state)
            copy.params.search = location.state.string
        axios.get(bookURL, copy).then((response) => {
            setBooks(response.data);
        });
    }, [filter, location.state])

    useEffect(() => {
        axios.get(allBookURL).then((response) => {
            let genderPromisses = []
            genderPromisses.push(axios.get(genderURL))
            Promise.all(genderPromisses).then(values => {
                let newGenders = values[0].data
                for (let i = 0; i < response.data.length; i++) {
                    for (let j = 0; j < response.data[i].genders.length; j++) {
                        let index = newGenders.findIndex(x=>x._id === response.data[i].genders[j])
                        if (newGenders[index].amount === undefined)
                            newGenders[index].amount = 1
                        else 
                            newGenders[index].amount += 1
                    }
                }
                setGenders(newGenders);
            });

        });
    })

    useEffect(() => {
        setFilter({...filter, search: data.search})
    }, [data])

    return (
        <>
        {
            books.length === 0 && genders.length === 0 ?
            "":
        <Container>
            <Filtros>
                <Generos>
                    <h3>G??neros</h3>
                    {
                        genders.map((value, index) =>
                        
                            <GeneroFiltro selected={value._id === filter.gender} onClick={() => {
                                if(filter.gender === value._id) setFilter({...filter, gender: null})
                                else setFilter({...filter, gender: value._id})
                                
                                }} key={index} >
                                {value.name + " (" + 
                                (  
                                    value.amount === undefined ?
                                    "0": value.amount
                                )
                            + ")"}
                            
                            </GeneroFiltro>
                        
                        )
                    }
                </Generos>
                <div>
                    <h3>Pre??o</h3>
                    <PrecoInput>
                        <span>De R$ </span>
                        <input type="number" min="0" step="any" onInput={e => setFilter({...filter, lowPrice: Number(e.target.value)})} />
                        <span> ?? R$ </span>
                        <input type="number" min="0" step="any" onInput={e => setFilter({...filter, highPrice: Number(e.target.value)})}/>
                    </PrecoInput>
                </div>

                
                <Disponibilidade>
                    <h3>Disponibilidade</h3>
                    <Row>
                        <input type="checkbox" name="disponivel" id="disponivel" onInput={() => setFilter({...filter, available: !filter.available})}></input>
                        <label htmlFor="disponivel">Apenas livros dispon??veis</label>
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
                                            <Link to="/book" state={{id: book._id}}>
                                                <Cover src={`http://localhost:11323/produto/${book._id}/image`} alt={book.name} />
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
        }
        </>
            
    )
}
