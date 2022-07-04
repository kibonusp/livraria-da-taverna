import styled from "styled-components";
import px2vw from "../px2vw";

export const Painel = styled.div`
    width: 100%;
    height: ${px2vw(250)};
    background-color: ${props => props.color};
    text-align:center; 
    padding-bottom: 10px;
    
`

export const LogoPhoto = styled.img`
    width: ${px2vw(200)};
    height: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
`

export const Scroll = styled.div`
    display:inline-flex;
`

export const Circulo = styled.div`
    width: ${px2vw(10)};
    height: ${px2vw(10)};
    border-radius: 50%;
    background-color: rgb(255, 255, 255);
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    #atual {
        width: ${px2vw(8)};
        height: ${px2vw(8)};
        border-radius: 50%;
        background-color: #502514;
    }
`

export const Container = styled.div`
    margin-bottom: 3em;
    hr {
        padding: 0;
        width: 20%;
        border-top: 1px solid #B4441C;
    }
`

export const Secao = styled.div`
    margin-left: 5%;
`

export const SecaoUl = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 90%;
`

export const Titulo = styled.h1`
    padding:20px;
    font-size: ${px2vw(25)};
    color: #502514;
`

export const Seta = styled.button`
    border-radius: 100%;
    background-color: #502514;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease-in-out;
    border: none;
    margin: ${px2vw(50)}  0vh 0vh;
    padding: ${px2vw(10)};
    color: white;
    font-size: 2vh;
    cursor: pointer;

    &:hover {
        font-size: 3vh;
        padding: ${px2vw(20)};
    }
`


export const Livro = styled.li`
    list-style-type: none;
    font-size: ${px2vw(15)};
    width: ${px2vw(150)};
    a {
        text-decoration: none;
        float: left;
        color: #502514;
        list-style: none;
        transition: all 0.3s ease-in-out;
    }
    
`

export const ImgLivro = styled.img`
    width: ${px2vw(100)};
    height: ${px2vw(150)};
    border-radius: 5% 15% 15% 5%;
    transition: all 0.3s ease-in-out;
    &:hover{
        width: ${px2vw(100)};
        height: ${px2vw(150)};
    }
`

export const TituloLivro = styled.p`
    font-weight: bold;
    margin: 2px;
    color: #502514;
    font-size:${px2vw(16)};
    
`

export const Autor = styled.p`
    margin:0;
    color: #9F6A54;
`

export const PrecoTaverna = styled.div`
    display: flex;
    align-items: center;
    color: #502514;
    .beer {
        margin-right: 0.4em;
    }
`


