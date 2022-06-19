import styled from "styled-components";

export const Livro = styled.div`
    margin-right: 5em;
    a {
        display: flex;
        justify-content: flex-start;
        margin: 1.5em;
        margin-left: 0;
        color: #502514;
        text-decoration: none;
        transition: all 0.2s ease-in-out;
    }
    &:hover img {
        width: 10em;
    }
`

export const Cover = styled.img`
    width: 9em;
    border-radius: 10px 25px 25px 10px;
    transition: all 0.2s ease-in-out;
`


export const Descricao = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 2.7em;
`

export const Titulo = styled.h3`
    margin: 0;
    font-size: 1.4rem;
`

export const Autor = styled.h4`
    margin-top: 0.3em;
    color: #9F6A54;
    font-size: 1.1rem;
`

export const PrecoTaverna = styled.div`
    font-weight: 600;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    margin-top: 1em;
    .beer {
        margin-right: 0.4em;
    }
`

export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Resultados = styled.div`
    margin: 0.75rem;
    margin-left: 2.5em;
    h2 {    
        font-size: 2rem;
        margin-top: 0;
    }
`

export const HR = styled.hr`
    width: 40%;
    background-color: #9F6A54; 
`

export const Container = styled.div`
    color: #502514;
    display: flex;
    margin-top: 2em;
    margin-bottom: 7em;
`

export const Filtros = styled.div`
    margin-left: 1.1em;
    color: #502514;
    font-weight: 600;
    p {
        font-size: 1.1rem;
    }
    h3 {
        font-size: 1.4rem;
    }
`

export const Generos = styled.div`
    display: flex;
    flex-direction: column;
    h3 {
        margin: 0.7rem 0.7rem 0.5rem 0rem;
    }
`

export const PrecoInput = styled.div`
    margin-left: 2ch;
    input {
        width: 4.25em;
        border: solid 3px #502514;
        height: 25px;
        width: 4.4em;
        font-weight: 600;
    }
`
export const Disponibilidade = styled.div`
    margin-left: 2ch;
    input {
        height: 20px;
        width: 20px;
        margin-right: 10px;
    }
`

export const GeneroFiltro = styled.p`
    cursor: pointer;
    color: #502514;
    margin: 0em;
    margin-left: 2ch;
    margin-top: 0.75em;
    text-decoration: none;
    &:hover {
        color: #B4441C;
    }
`