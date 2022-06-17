import styled from "styled-components";

export const Description = styled.tr`
    
`
export const Name = styled.tr`
    margin: 0%;
    
    `
export const Head = styled.th`
    border-bottom: 1px solid gray;
    div{  
        color: #502514;
        border: 2px solid #502514;
        padding: 10px 50px;
        border-radius: 5em;
        font-size: 20px;
        margin: 5%;
        
    }
`
export const Cell = styled.td`
    border-bottom: ${props => props.margin === "ignore" ? "none" : "1px solid gray"};
    text-align: center;
    width: ${props => props.margin === "ignore" ? "8%" : "23%"};

`

export const Cover = styled.img`
    max-width: 6em;
    margin: 5%;
    border-radius: 10px 25px 25px 10px;
`

export const Titulo = styled.span`
    margin: 0;
    font-size: 1.4rem;
    align-self: center;
    a{
        text-decoration: none;
        color: black;
    }   
`

export const Valor = styled.span`
    align-self: center;
    font-size: 1.2rem;
`

export const Quantidade = styled.form`
    align-self: center;
    font-size: 1.2rem;

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
        font-size: large;
        color: #502514;
    }
`

export const Delete = styled.button`
    background-color: red;
    color: white;
    border: 1px solid red;
    width: 2.2rem;
    height: 2.2rem;
    font-size: 1.2rem;
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
    width: 2.2rem;
    height: 2.2rem;
    font-size: 1.2em;
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