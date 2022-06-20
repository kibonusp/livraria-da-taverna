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

    @keyframes bounce {
        0%, 100%, 20%, 50%, 80% {
            -webkit-transform: translateY(0);
            -ms-transform:     translateY(0);
            transform:         translateY(0)
        }
        40% {
            -webkit-transform: translateY(-30px);
            -ms-transform:     translateY(-30px);
            transform:         translateY(-30px)
        }
        60% {
            -webkit-transform: translateY(-15px);
            -ms-transform:     translateY(-15px);
            transform:         translateY(-15px)
        }
    }

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
export const Bounce = styled.div`
    &:hover {
        animation-name: bounce;
        -moz-animation-name: bounce;
    }
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    -webkit-animation-iteration-count: infinite;
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
    transition: all 0.5s ease-in-out;
    border: none;
    margin: 1em;
    padding: 3vh;
    color: white;
    font-size: 2rem;
    cursor: pointer;

    &:hover {
        font-size: 3rem;
        padding: 2vh;
    }
`
