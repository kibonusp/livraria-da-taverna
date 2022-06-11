import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`
export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1%;
    a{
        margin-right: 2em;
        text-decoration: none;
    }
`
export const Description = styled.h1`
    color: #B4441C;
    font-size: 1.9rem;
`

export const Gender = styled.div`
    width: 20rem;
    height: 15rem;
    background-color: ${props => props.theme === "light" ? "#B4441C" : "#502514"};
    color: ${props => props.theme === "light" ? "#502514": "#B4441C"};
    display: flex;
    align-items: center;
    flex-direction: column;
    transition: all 0.5s;
    border-radius: 15px;
    align-self: center;
    &:hover {
        color: white;

    }
`

export const ActionDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    flex-direction: column;
`

export const Seta = styled.button`
    border-radius: 100%;
    background-color: #502514;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    border: none;
    margin: 2em;
    width: 5em;
    height: 4.5em;

    
    & .seta_svg {
        transition: all 0.2s ease-in-out;
    }
    &:hover {
        width: 6em;
        height: 5em;
    }

    .seta_svg {
        width:  50%;
        height: 50%;
    }
`
