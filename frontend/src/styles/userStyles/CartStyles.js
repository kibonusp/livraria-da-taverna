import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3%;
    width: ${props => props.width};
    h1{
        align-self: flex-start;
        margin: 0%;
        padding: 0%;
    }

`
export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`
export const Items = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: flex-start;
    border-top: 1px solid gray;
    li{
        border-bottom: 1px solid gray;
    }
    width: 100%;
    flex-direction: column;
    
`

export const Product = styled.li`
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    
    
`
export const Name = styled.li`
    list-style-type: none;
    display: flex;
    align-items: flex-start;
    align-self: flex-start;
    width: 100%;
    margin: 0%;
    padding-right: 20px;
    p{  
        align-self: center;
        background-color: #502514;
        color: #F5F5F5;
        display: inline;
        margin-right: 5%;
        padding: 10px 50px;
        border-radius: 5em;
        text-align: center;
        font-size: 20px;
    }
    
`
export const Preco = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Cover = styled.img`
    max-width: 6em;
    width: 20%;
    border-radius: 10px 25px 25px 10px;
    transition: all 0.2s ease-in-out;
`
export const Titulo = styled.span`
    width: 15%;
    margin: 0;
    font-size: 1.4rem;
    align-self: center;
`
export const Valor = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    font-size: 1.2rem;
    width: 10%;
`
export const Quantidade = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    font-size: 1.2rem;
    width: 10%;
`
export const Delete = styled.button`
    background-color: red;
    color: white;
    border: none;
    width: 2em;
    height: 2em;
    border-radius: 100%;
    transition: all 0.5s;
    margin-left: 10%;
    &:hover{
        background-color: white;
        color: red;
        border: 1px solid red;
    }
`