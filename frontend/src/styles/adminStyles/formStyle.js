import styled from "styled-components";
import px2vw from "../px2vw";

export const Button = styled.div`
    padding: 10%;
    width: max-content;
    background-color: #B4441C;
    transition: all 0.5s;
    color: #F5F5F5;
    font-size: 1.8rem;
    border-radius: 15px;
    &:hover {
        background-color: #502514;
        color: #B4441C;

    }
`

export const FormForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1.5em;
    min-height: 68vh;
    margin-bottom: 3em;
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
    font-family: Gilroy;
`

export const FormText = styled.textarea`
    width: 65vw;
    padding: 1em 1em;
    background-color: #E6E6E6;
    border: none;
    border-radius: 15px;
    resize: vertical;
    min-height: 10vh;
    &:focus {
        outline: none;
    }
    color: #502514;
    font-weight: 600;
    font-family: Gilroy;
`

export const FileDiv = styled.div`
    display: flex;
    width: 65vw;
    align-items: center;
    justify-content: flex-start;
    padding: 0em 1em;
    p {
        display: inline-block;
        background-color: #E6E6E6;
        padding: 0.4em 1em;
        width: 14em;
        color: #502514;
        border-radius: 15px;
        margin: 0;
        margin-right: 5%;
    }
`

export const FormFile = styled.label`
    border: 1px solid #B4441C;
    display: flex;
    padding: 0.4em 1em;
    width: 14em;
    color: #B4441C;
    cursor: pointer;
    border-radius: 15px;
    align-items: center;
    height: 1em;
    transition: all 0.25s;
    input {
        display: none;
    }
    &:hover {
        background-color: #B4441C;
        color: #FFFFFF;
    }
`

export const FormStock = styled.input`
    border: ${props => props.dark === "true" ? "none" : "2px solid #B4441C"};
    border-radius: 15px;
    text-align: center;
    font-size: 1.15rem;
    color: ${props => props.dark === "true" ? "white" : "#B4441C"};
    font-weight: 700;
    width: 8em;
    text-align: center;
    background-color: ${props => props.dark === "true" ? "#502514" : ""};
    font-family: Gilroy;
    
    &::-webkit-inner-spin-button, &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    &:focus {
        outline: none;
    }
`

export const FormStockRead = styled.p`
    border: 2px solid #B4441C;
    border-radius: 15px;
    text-align: center;
    font-size: 1.15rem;
    color: #B4441C;
    font-weight: 700;
    width: 8em;
    text-align: center;
`

export const FormButton = styled.button`
    border-radius: 15px;
    width: ${px2vw(160)};
    border: ${props => props.delete === "true" ? "2px solid red": "none"};
    padding: 1em 0.5em;
    font-size: ${px2vw(16)};
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

export const SelectDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 2em;
    label {
        color: #B4441C;
    }
    select {
        border: 2px solid #B4441C;
        border-radius: 15px;
        color: #502514;
        padding: 0.25em;
        outline: #B4441C;
    }
`

export const MultiSelectDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 65vw;
    padding: 0em 1em;
`