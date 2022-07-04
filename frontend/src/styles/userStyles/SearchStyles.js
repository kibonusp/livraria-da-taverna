import styled from "styled-components";
import px2vw from "../px2vw";


export const Livro = styled.div`
    margin-right: ${px2vw(30)};
    a {
        display: flex;
        justify-content: flex-start;
        margin: ${px2vw(30)};
        margin-left: 0;
        color: #502514;
        text-decoration: none;
        transition: all 0.2s ease-in-out;
    }
    &:hover img {
        width: ${px2vw(120)};
    }
`

export const Cover = styled.img`
    width: ${px2vw(100)};
    border-radius: ${px2vw(5)} ${px2vw(20)} ${px2vw(20)} ${px2vw(5)};
    transition: all 0.2s ease-in-out;
`


export const Descricao = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: ${px2vw(10)};
`

export const Titulo = styled.h3`
    max-width: ${px2vw(200)};
    margin: 0;
    font-size: ${px2vw(20)};
`

export const Autor = styled.h4`
    margin-top: ${px2vw(10)};
    color: #9F6A54;
    font-size: ${px2vw(15)};
`

export const PrecoTaverna = styled.div`
    font-weight: 600;
    display: flex;
    align-items: center;
    font-size: ${px2vw(15)};
    margin-top: ${px2vw(10)};
    .beer {
        margin-right: ${px2vw(10)};
    }
`

export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Resultados = styled.div`
    margin: ${px2vw(10)};
    margin-left: ${px2vw(50)};
    h2 {    
        font-size: ${px2vw(30)};
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
    margin-top: ${px2vw(10)};
    margin-bottom: ${px2vw(40)};
`

export const Filtros = styled.div`
    margin-left: 1.1em;
    color: #502514;
    font-weight: 600;
    p {
        font-size: ${px2vw(12)};
    }
    h3 {
        font-size: ${px2vw(15)};
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
    font-size: ${px2vw(10)};
    input {
        border: solid ${px2vw(2)} #502514;
        height: ${px2vw(15)};
        width: ${px2vw(40)};
        font-weight: 600;
    }
`
export const Disponibilidade = styled.div`
    margin-left: 2ch;
    font-size: ${px2vw(10)};
    input {
        height: ${px2vw(20)};
        width: ${px2vw(20)};
        margin-right: ${px2vw(10)};
    }
`

export const GeneroFiltro = styled.p`
    cursor: pointer;
    color: ${props => props.selected === true ? "#B4441C" : "#502514"};
    margin: 0em;
    margin-left: 2ch;
    margin-top: ${px2vw(8)};
    text-decoration: none;
    &:hover {
        color: #B4441C;
    }
`