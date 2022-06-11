import styled from "styled-components";

export const Titulo = styled.h1`
    padding:30px;
    color: #502514;
`
export const Container = styled.div`
    margin-bottom: 3em;
    hr {
        padding: 0;
        width: 80%;
        border-top: 1px solid #B4441C;
    }
    
`

export const FormLabel = styled.h2`
    color: #B4441C;
    font-size: 1.2rem;
    margin-bottom: 0.5em;
    margin-top: 1em;
`

export const FormDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.centralize === "true" ? "center" : "flex-start"};
`

export const FormInput = styled.input`
    width: 65vw;
    background-color: #E6E6E6;
    border: none;
    border-radius: 15px;
    &:focus {
        outline: none;
    }
    padding: 0.4em 1em;
    color: #502514;
    font-weight: 600;
`

export const Button = styled.div`
    padding: 1.5%;
    width: max-content;
    background-color: #B4441C;
    transition: all 0.5s;
    color: #F5F5F5;
    font-size: 1.3rem;
    border-radius: 15px;
    &:hover {
        background-color: #502514;
        color: #B4441C;

    }
`

export const ActionDiv = styled.div`
    display: flex;
    width: ${props => props.width+"%"};
    justify-content: space-around;
    margin-top: 4em;
    a{
        text-decoration: none;
    }
`
