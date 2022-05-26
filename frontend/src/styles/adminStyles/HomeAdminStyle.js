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
    width: 20rem;
    height: 15rem;
    background-color: #B4441C;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s;
    color: #F5F5F5;
    font-size: 1.8rem;
    border-radius: 15px;
    &:hover {
        background-color: #502514;
        color: #B4441C;

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
