import styled from "styled-components";
import taverna from "../../assets/taverna.png"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width:100%;
    background-image: url(${taverna});
    box-shadow: inset 0 0 0 1000px rgba(180,68,28,.4);
    min-height: 80vh;
    justify-content: center;    
`

export const Description = styled.h1`
    color: #502514;
    font-size: 1.9rem;
    margin: 0;
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
    h1 {
        color: #502514;
        font-size: 1.2rem;
        margin-bottom: -1em;
        margin-top: 1em;
        margin-left: -3em;
    }
    .foto {
        margin-inline-start: 5%;
    }
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
    margin: 50px;
    width: auto;
    padding: 20px;
    border-radius: 10%;
    font-weight: 700;
    font-size: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .cadastrar {
        padding: 20px;
        color: red;
        font-size: 16px;
        text-decoration: none;
    }
    p {
        padding-top: 10px;
        color: #502514;
        font-size: 16px;
    }
    .icone {
        padding-left: 10px;
    }
`
export const FileDiv = styled.div`
    display: flex;
    width: 25vw;
    align-items: center;
    justify-content: flex-start;
    padding: 0em 1em;
    p {
        display: inline-block;
        background-color: #E6E6E6;
        padding: 0.4em 1em;
        width: 8em;
        color: #502514;
        border-radius: 15px;
        margin: 0;
        margin-right: 5%;
        margin-bottom: 10%;
    }
`

export const FormFile = styled.label`
    border: 1px solid #502514;
    font-size: 0.5em;
    display: flex;
    padding: 0.4em 1em;
    width: 7.8em;
    color: #502514;
    cursor: pointer;
    border-radius: 15px;
    align-items: center;
    height: 0.5em;
    transition: all 0.25s;
    margin-bottom: 10%;
    input {
        display: none;
    }
    &:hover {
        color: #B4441C;
    }
`

export const FormButton = styled.button`
    border-radius: 15px;
    width: 10em;
    border: ${props => props.delete === "true" ? "2px solid red": "none"};
    padding: 1em 0.5em;
    font-size: 1.35rem;
    background-color: ${props => props.delete === "true" ? "transparent": "#B4441C"};
    color: ${props => props.delete === "true" ? "red": "#f5f5f5"};
    font-family: Gilroy;
    font-weight: 600;
    transition: ${props => props.delete === "true" ? "all 0.5s" : "all 0.25s"};
    cursor: pointer;
    &:hover {
        background-color: ${props => props.delete === "true" ? "red" : "#502514"};
        color: ${props => props.delete === "true" ? "#ffffff" : "#B4441C"};
    }
`