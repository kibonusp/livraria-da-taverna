import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1.5em;
    min-height: 68vh;
`

export const Description = styled.h1`
    color: #B4441C;
    font-size: 1.9rem;
`

export const Action = styled.div`
    width: 17em;
    height: 14em;
    background-color: #B4441C;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    h2 {
        color: #F5F5F5;
        font-size: 1.8rem;
    }
    border-radius: 15px;
    a {
        position: absolute;
        padding: 7em 8.5em;
        z-index: 2;
    }
    &:hover {
        background-color: #b35939;
    }
`

export const ActionDiv = styled.div`
    display: flex;
    width: ${props => props.width+"%"};
    justify-content: space-around;
    margin-top: 4em;
`