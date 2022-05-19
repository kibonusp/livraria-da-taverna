import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1.5em;
`

export const Description = styled.h1`
    color: #B4441C;
    font-size: 1.9rem;
`

export const Action = styled.a`
    width: 17em;
    height: 14em;
    background-color: #B4441C;
    display: flex;
    align-items: center;
    justify-content: center;
    h2 {
        color: #F5F5F5;
        font-size: 1.8rem;
    }
    border-radius: 15px;
    text-decoration: none;

    &:hover {
        background-color: #b35939;
    }
`

export const ActionDiv = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin-top: 4em;
`