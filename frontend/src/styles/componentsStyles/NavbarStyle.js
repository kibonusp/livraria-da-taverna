import styled from "styled-components";
import px2vw from "../px2vw";

export const NavHeader = styled.nav`
    display: flex;
    background-color: #502514;
    align-items: center;
    justify-content: space-between;
    padding: 0em 2em;
    height: ${px2vw(80)};
`

export const UserPhoto = styled.img`
    width: ${px2vw(40)};
    height: ${px2vw(40)};
    border-radius: 100%;
    margin-right: 1em;
`

export const Profile = styled.div`
    display: flex;
    color: #F5F5F5;
    align-items: center;
    font-size: ${px2vw(10)};
    a {
        text-decoration: none;
        color: #F5F5F5;
        font-size: ${px2vw(15)};
        transition: all 0.5s;
    }

    a:hover {
        color: #B4441C;
        font-size:${px2vw(16)};
        transition-timing-function: ease-in-out;

    }

`

export const Sair = styled.button`
    background-color: #f5f5f5;
    color: #B4441C;
    border-radius: 10px;
    margin-left: 1em;
    padding: 0.4em 1em;
    font-family: Gilroy;
    font-weight: 700;
    font-size: ${px2vw(10)};
    border: none;
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
        font-size: ${px2vw(11)};
        background-color: #502514;
        transition-timing-function: ease-in-out;
        color: #f5f5f5;
        border: 1px solid white;
    }
`

export const Logo = styled.img`
    width: ${px2vw(200)};
    margin-left: ${px2vw(100)};
`

export const Utils = styled.div`
    display: flex;
    align-items: center;
    flex-flow: nowrap;
    .search-hover {
        font-family: Gilroy;
        width: 35%;
        height: 2rem;
        margin-left: 1em;
        padding: 0em 1em;
        border: none;
        border-radius: 1rem;
    }
`

export const Links = styled.div`
    a {
        text-decoration: none;
        color: #F5F5F5;
        font-size: ${px2vw(15)};
        margin-left: 1.5em;
        transition: all 0.5s;
        i{
            font-size: ${px2vw(17)};
            transition: font-size 0.3s;
        }

    }

    a:hover {
        color: #B4441C;
        font-size: ${px2vw(18)};
        transition-timing-function: ease-in-out;
        transition: all 0.5s;
        i:hover{
            font-size: ${px2vw(20)};
            transition-timing-function: ease-in;

        }
    }
`


export const Search = styled.input`
    font-family: Gilroy;
    height: ${px2vw(20)};
    width: ${px2vw(100)};
    font-size: ${px2vw(10)};
    margin-left: 1em;
    padding: 0em 1em;
    border: none;
    border-radius: 1rem;
`