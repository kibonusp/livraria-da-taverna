import styled from "styled-components";
import taverna from "../../assets/taverna.png"

export const Button = styled.div`
    padding: 20%;
    margin-top: 50%;
    width: max-content;
    background-color: #B4441C;
    transition: all 0.5s;
    color: #F5F5F5;
    font-size: 1.5rem;
    border-radius: 15px;
    &:hover {
        background-color: #502514;
        color: #B4441C;

    }
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 68vh;
    width:100%;
    background-image: url(${taverna});
    box-shadow: inset 0 0 0 1000px rgba(180,68,28,.4);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
`

export const Description = styled.h1`
    color: #502514;
    font-size: 1.9rem;
`

export const FormLabel = styled.h2`
    color: #502514;
    font-size: 1.2rem;
    margin-bottom: 0.5em;
    margin-top: 1em;
`

export const FormDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const FormInput = styled.input`
    border: 2px solid #502514;
    border-radius: 1em;
    width: 25vw;
    &:focus {
        outline: none;
    }
    padding: 0.4em 1em;
    font-weight: 600;
    
`


export const Box = styled.div`
    background-color: #FFFF;
    opacity: 1.0;
    width: 30%;
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
    a {
        padding-top: 10px;
        color: red;
        font-size: 16px;
        text-decoration: none;
    }
    p {
        padding-top: 10px;
        color: #502514;
        font-size: 16px;
    }
`
