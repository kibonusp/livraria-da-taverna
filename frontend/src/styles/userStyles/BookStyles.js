import styled from "styled-components";
import taverna from "../../assets/taverna.png"


export const Fit = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
`

export const Livro = styled.div`
    width: 70%;
    padding-left: 5%;
    z-index: -1;
`

export const Tags = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 1em;
    margin-bottom: 1em;
    p{
        background-color: #502514;
        opacity: 70%;
        color: #F5F5F5;
        display: inline;
        margin-right: 30px;
        padding: 10px 50px;
        border-radius: 5em;
        text-align: center;
        font-size: 20px;
    }
`

export const Fit2 = styled.div`
    margin: 0px;
    display: flex;
    padding-right: 50px;
    justify-content: space-between;
    align-items: flex-start;

    img[alt="Capa Sapiens"] {
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        border-radius: 10px 25px 25px 10px;
        display: block;
        max-width:30%;
        width: auto;
        height: auto;
    }
`

export const Texto = styled.div`
    width: 60%;
    margin: 0px;
`

export const Titulo = styled.p`
    font-size: 35px;
    font-weight: 600;
    line-height: 59px;
    letter-spacing: 0em;
    text-align: justify;
    color: #502514;
    margin: 0px;
`

export const Autor = styled.p`
    color: #999999;
    font-size: 20px;
    font-weight: 600;
    line-height: 37px;
    letter-spacing: 0em;
    text-align: justified;
    margin: 0px;
`

export const Descricao = styled.p`
    color: #502514;
    font-size: 20px;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: justified;
    margin: 0px;
    margin-top: 30px;
`

export const Preco = styled.div`
    width:30%;
    background-image: url(${taverna});
    box-shadow: inset 0 0 0 1000px rgba(180,68,28,.4);
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const PrecoTaverna = styled.div`
    display: flex;
    align-items: center;
    color: #502514;
    i {
        margin-right: 0.4em;
    }
    margin-bottom: 20px;
`

export const Box = styled.div`
    color: #502514;
    background-color: #f5f5f5cb;
    opacity: 1.0;
    width: 50%;
    padding: 40px 40px;
    border-radius: 10%;
    text-align: center;
    font-weight: 700;
    border: 2px solid #502514;
    font-size: 30px;
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
    padding-bottom: 1.5em;
`


export const Qlabel = styled.div`
    font-size: 20px;
    padding-right: 0.5em;
`

export const Qinput = styled.div`
    width: 40px;
    border: 2px solid #502514;
    background-color: None;
    color: #502514;
    height: 25px;
    border-radius: 1em;
`

export const Qbutton = styled.div`
    width: 70%;
    height: 100px;
    background-color: #502514;
    color: #F5F5F5;
    border-radius: 30px;
    font-size: 20px;
    border-width: 2px;
    border-color: #502514;
    border-style: solid;
    display: flex;
    align-items: center;
`

export const FaBeer = styled.i`
    margin-right: 8px;
    color: #502514;
    font-size:20px;
`
