import styled from "styled-components";

export const FormLabel = styled.h2`
    color: #B4441C;
    font-size: 1.2rem;
    margin-bottom: 0.5em;
`

export const FormDiv = styled.div`
    display: flex;
    flex-direction: column;
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
`
export const ImageForm = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`

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
export const Delete = styled.div`
    padding: 10%;
    width: max-content;
    background-color: #F5F5F5;
    transition: all 0.5s;
    border: 2px solid red;
    border-radius: 15px;
    color: red;
    font-size: 1.8rem;
    &:hover {
        background-color: red;
        color: #F5F5F5;
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