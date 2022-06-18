import styled from "styled-components";

export const ResultList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
        text-decoration: none;
    }
`

export const Result = styled.div`
    display: flex;
    align-items: center;
    background-color: #B4441C;
    border-radius: 10px;
    padding: 0.25em 1em;
    width: 60vw;
    color: #f5f5f5;
    justify-content: space-between;  
    font-size: 1.15rem;
    margin-bottom: 1em;
    transition: all 0.25s;
    cursor: ${props => props.cursor === "click" ? "pointer" : ""};
    
    img {
        width: 2.5em;
        height: 2.5em;
        border-radius: 100%;
    }

    button {
        border: none;
        background-color: transparent;
        cursor: pointer;
        img {
            width: 2em;
            height: 2em;
        }
        transition: all 0.5s;
        font-size: 1.8em;
    }
    button:hover{
        font-size: 2.5em;
    }

    &:hover {
        background-color: #703b26;
    }
`

export const Profile = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.15rem;
    p {
        margin-left: 15px;
    }
`

export const Search = styled.input`
    width: 60vw;
    margin-bottom: 3em;
    background-color: #E6E6E6;
    border-radius: 15px;
    border: none;
    padding: 0.25em 0em;
    color: #502514;
    font-weight: 700;
    font-size: 1rem;
    &:focus {
        outline: none;
    }
    height: 1.5em;
    text-align: center;
`