import styled from "styled-components";

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
    input {
        display: none;
    }
`

export const FormStock = styled.input`
    border: 2px solid #B4441C;
    border-radius: 15px;
    text-align: center;
    font-size: 1.15rem;
    color: #B4441C;
    font-weight: 700;
    width: 50%;
    text-align: center;
    &::-webkit-inner-spin-button, &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    &:focus {
        outline: none;
    }
`