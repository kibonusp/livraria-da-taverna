import styled from "styled-components";

export const Titulo = styled.h1`
    padding: 30px 30px 30px 60px;
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
    align-items: flex-start;
    margin-bottom: 10%;
`

export const FormInput = styled.input`
    width: 30vw;
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

export const FormButton = styled.button`
    border-radius: 15px;
    margin-left: 45%;
    margin-bottom: 5%;
    width: max-content;
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

export const ActionDiv = styled.div`
    display: flex;
    width: ${props => props.width+"%"};
    justify-content: space-around;
    margin-bottom: 5%;
`
export const Row = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 1%;
`