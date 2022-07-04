import styled from "styled-components";
import px2vw from "../px2vw";

export const Description = styled.tr`
    
`

export const Cell = styled.td`
    border-bottom: ${props => props.margin === "ignore" ? "none" : "1px solid gray"};
    text-align: center;
    width: ${props => props.margin === "ignore" ? "8%" : "23%"};

`

export const Cover = styled.img`
    max-width: ${px2vw(70)};
    margin: 5%;
    border-radius: ${px2vw(6)} ${px2vw(15)} ${px2vw(15)} ${px2vw(6)};
`

export const Titulo = styled.span`
    margin: 0;
    font-size: ${px2vw(20)};
    align-self: center;
    a{
        text-decoration: none;
        color: black;
    }   
`

export const Valor = styled.span`
    align-self: center;
    font-size: ${px2vw(20)};
`

export const Quantidade = styled.form`
    align-self: center;
    font-size: ${px2vw(10)};

    input[type='number'] {
        -moz-appearance:textfield;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
    input{
        border-radius: 10%;
        border: 1px solid #502514;
        text-align: center;
        font-size: ${px2vw(15)};
        color: #502514;
    }
`

export const Delete = styled.button`
    background-color: red;
    color: white;
    border: 1px solid red;
    width: ${px2vw(30)};
    height: ${px2vw(30)};
    font-size: ${px2vw(15)};
    border-radius: 10vh;

    transition: all 0.5s;
    cursor: pointer;
    &:hover{
        background-color: white;
        color: red;
        border: 1px solid red;
    }
`
export const InputButton = styled.button`
    background-color: #B4441C;
    color: white;
    border: none;
    width: ${px2vw(25)};
    height: ${px2vw(25)};
    font-size: ${px2vw(15)};
    margin: 5%;
    border-radius: 100%;

    transition: all 0.5s;
    cursor: pointer;
    &:hover{
        background-color: white;
        color: #B4441C;
        border: 1px solid #B4441C;
    }
`