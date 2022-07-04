import styled from "styled-components";
import px2vw from "../px2vw";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1.5em;
    min-height: 68vh;
    margin-bottom: 3em;
`

export const Description = styled.h1`
    color: #B4441C;
    font-size: ${px2vw(30)};
`

export const Action = styled.div`
    width: ${px2vw(400)};
    height: ${px2vw(300)};
    background-color: #B4441C;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s;
    color: #F5F5F5;
    font-size: ${px2vw(30)};
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
