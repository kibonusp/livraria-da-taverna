
import { Link, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeer} from '@fortawesome/free-solid-svg-icons'
import { Livro, Cover, Descricao, Titulo, Autor, PrecoTaverna, Row, Resultados, HR, Container, Filtros, Generos, PrecoInput, Disponibilidade, GeneroFiltro } from "../styles/userStyles/SearchStyles"
import { useEffect, useState } from "react"
import { productImages } from "../images"

import axios from "axios";

const genderURL = "http://localhost:11323/genero"
const bookURL = "http://localhost:11323/produtos"


export default function Search({data, setData}) {
    const location = useLocation();
    const [books, setBooks] = useState([]);
    const [genders, setGenders] = useState([]);

    
    const [filter, setFilter] = useState({
        gender: location.state !== null ? location.state.gender : undefined,
        search: location.state !== null ? location.state.string : undefined,
        genders: [],
        lowPrice: "",
        highPrice: "",
        available: false
    })
    
    useEffect(() => {
        let curFilter = {};
        if(filter.gender ==! undefined){
            curFilter = filter.gender;
        }
        if(filter.search ==! undefined){
            curFilter = filter.search;
        }
        if(filter.lowPrice ==! ""){
            curFilter = filter.lowPrice;
        }
        if(filter.highPrice ==! ""){
            curFilter = filter.highPrice;
        }
        if(filter.available ==! false){
            curFilter = filter.available;
        }

        axios.get(bookURL, {params: curFilter}).then((response) => {
            setBooks(response.data);
            console.log(response.data)
        });
    }, [filter]);

    useEffect(() => {
        axios.get(genderURL).then((response) => {
            setGenders(response.data);
            console.log(response.data)
            console.log(response.data.reduce((o, gender) => ({ ...o, [gender.name]: 1}), {}))
        });
    }, []);

    useEffect(() => {
        let newGenders = {}
        for (let i = 0; i < books.length; i++) {
            for (let j = 0; j < books[i].genders.length; j++) {
                if (genders.find(x=>x._id === books[i].genders[j]).name in newGenders)
                    newGenders[genders.find(x=>x._id === books[i].genders[j]).name] += 1
                else if (genders.find(x=>x._id === books[i].genders[j]).name !== "Selecione")
                    newGenders[genders.find(x=>x._id === books[i].genders[j]).name] = 1;
            }
        }

        setFilter({...filter, genders: newGenders});
        
        // eslint-disable-next-line
    }, [books])


    return (
        <>
        {
            books.length === 0 && genders.length === 0 ?
            "":
        <Container>
            <Filtros>
                <Generos>
                    <h3>Gêneros</h3>
                    {
                        Object.entries(filter.genders).map((value, index) =>
                            <GeneroFiltro selected={value[0] === filter.gender} onClick={() => setFilter({...filter, gender: value[0]})} key={index} >{value[0] + " (" + value[1] + ")"}</GeneroFiltro>
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
        }
        </>
            
    )
}

/*
{
                        Object.entries(genders).map((value, index) =>
                            <GeneroFiltro onClick={() => setGender(value[0])} key={index} >{value[0] + " (" + value[1] + ")"}</GeneroFiltro>
                        )
                    }
*/