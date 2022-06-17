import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.1);
    z-index: 1;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`
export const Content = styled.div`
    background-color: #B4441C;
    color: white;
    font-size: 1.5rem;
    border-radius: 5vh;
    box-shadow: 0 0 1rem black;

    position: relative;
    padding: 3%;
    width: 100%;
    max-width: 30%;
`
export const CloseButton = styled.button`
    background-color: rgba(0,0,0,0);
    border: none;
    color: white;
    font-size: 1em;

    cursor: pointer;
    
    position: absolute;
    top: 5%;
    right: 5%;

    transition: all 0.5s;
    &:hover {
        font-size: 1.2em;
    }

`
export const PopUpButton = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    padding: 1%;

    background-color: ${props => props.theme === "light" ? "white" : "#B4441C"};
    color: ${props => props.theme === "light" ? "#B4441C": "white"};
    border-radius: 4vh;
    border-width: 1%;
    border-style: solid;
    border-color: ${props => props.theme === "light" ? "#B4441C": "white"};

    display: flex;
    align-items: center;
    flex-direction: column;
    align-self: center;

    cursor: pointer;
    transition: all 0.5s;
    &:hover {
        color: white;
        border-color: white;
        background-color: #502514;
    }
`