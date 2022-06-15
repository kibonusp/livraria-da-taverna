import styled from "styled-components";


export const Painel = styled.div`
    width: 100%;
    height: 15.5rem;
    background-color: ${props => props.color};
    text-align:center; 
    padding-bottom: 10px;
    
`

export const LogoPhoto = styled.img`
    width: 18%;
    height: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
`

export const Scroll = styled.div`
    display:inline-flex;
`

export const Circulo = styled.div`
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: rgb(255, 255, 255);
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    #atual {
        width: 6px;
        height: 6px;
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
    font-size: 1.8rem;
    color: #502514;
`

export const Seta = styled.li`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #502514;
    margin: 80px -20px 0px -20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    user-select: none;

    & .seta_svg {
        transition: all 0.2s ease-in-out;
    }
    &:hover {
        width: 50px;
        height: 50px;
    }

    .seta_svg {
        width:20px;
    }

    &:hover .seta_svg {
        width: 25px;
    }
`


export const Livro = styled.li`
    list-style-type: none;
    a {
        text-decoration: none;
        float: left;
        color: #502514;
        list-style: none;
        transition: all 0.3s ease-in-out;
    }
    
`

export const ImgLivro = styled.img`
    width: 120px;
    height: 180px;
    border-radius: 5% 15% 15% 5%;
    transition: all 0.3s ease-in-out;
    &:hover{
        width: 140px;
        height: 210px;
    }
`

export const TituloLivro = styled.p`
    font-weight: bold;
    margin: 2px;
    color: #502514;
    font-size:23px;
    width: 180px;
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


