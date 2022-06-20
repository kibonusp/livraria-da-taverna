import styled from "styled-components";
import taverna from "../../assets/taverna.png"
import px2vw from "../px2vw";


export const Fit = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
`

export const Livro = styled.div`
    width: 70%;
    padding-left: 5%;
    font-size: ${px2vw(10)};
`

export const Tags = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: ${px2vw(20)};
    margin-bottom: ${px2vw(40)};
    button{
        background-color: #502514;
        opacity: 70%;
        color: #F5F5F5;
        margin-right: ${px2vw(20)};
        padding: ${px2vw(5)} ${px2vw(30)};
        border-radius: 5em;
        border: none;
        text-align: center;
        font-size: ${px2vw(15)};
        cursor: pointer;
        transition: all 0.5s;
        font-family: Gilroy;
        &:hover {
            background-color: #502514;
            opacity: 100%;
        }
    }
`

export const Fit2 = styled.div`
    margin: 0px;
    display: flex;
    padding-right: 50px;
    justify-content: space-between;
    align-items: center;
`

export const Capa = styled.img`
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: ${px2vw(10)} ${px2vw(30)} ${px2vw(30)} ${px2vw(10)};
    display: block;
    max-width:${px2vw(270)};
    width: 100%;
    height: auto;
`

export const Texto = styled.div`
    width: 60%;
    margin: 0px;
`

export const Titulo = styled.p`
    font-size: ${px2vw(40)};
    font-weight: 600;
    line-height: ${px2vw(40)};
    letter-spacing: 0em;
    text-align: justify;
    color: #502514;
    margin: 0px;
`

export const Autor = styled.p`
    color: #999999;
    font-size: ${px2vw(20)};
    font-weight: 600;
    line-height: ${px2vw(40)};
    letter-spacing: 0em;
    text-align: justified;
    margin: 0px;
`

export const Descricao = styled.p`
    color: #502514;
    font-size: ${px2vw(15)};
    font-weight: 400;
    line-height: ${px2vw(25)};
    letter-spacing: 0em;
    text-align: justified;
    margin: 0px;
    margin-top: ${px2vw(20)};
`

export const Preco = styled.div`
    width:30%;
    background-image: url(${taverna});
    box-shadow: inset 0 0 0 1000px rgba(180,68,28,.4);
    min-height: ${px2vw(600)};
    display: flex;
    justify-content: center;
    align-items: center;
`
export const PrecoTaverna = styled.div`
    display: flex;
    align-items: center;
    color: #502514;
    .beer {
        margin-right: ${px2vw(15)};
    }
    margin-bottom: ${px2vw(30)};
`

export const Box = styled.div`
    color: #502514;
    background-color: #f5f5f5cb;
    opacity: 1.0;
    width: ${px2vw(200)};
    padding: ${px2vw(30)};
    border-radius: 10%;
    text-align: center;
    font-weight: 700;
    border: 2px solid #502514;
    font-size: ${px2vw(25)};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


export const Flexbox2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-bottom: ${px2vw(40)};
    font-size: ${px2vw(20)};
    input {
        width: ${px2vw(30)};
        border: 2px solid #502514;
        background-color: None;
        color: #502514;
        height: ${px2vw(20)};
        border-radius: 1em;
    }
`


export const Qlabel = styled.div`
    font-size: ${px2vw(20)};
    padding-right: 0.5em;
`

export const Qbutton = styled.div`
    padding: 5%;
    width: max-content;
    transition: all 0.5s;
    background-color: #502514;
    color: #F5F5F5;
    font-size: ${px2vw(20)};
    border-radius: 15px;
    cursor: pointer;
    text-decoration: none;
    &:hover {
        background-color: #B4441C;
    }
`
