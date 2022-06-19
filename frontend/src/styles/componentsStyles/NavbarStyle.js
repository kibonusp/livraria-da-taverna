import styled from "styled-components";

export const NavHeader = styled.nav`
    display: flex;
    background-color: #502514;
    align-items: center;
    justify-content: space-between;
    padding: 0em 2em;
    height: 12vh;
`

export const UserPhoto = styled.img`
    width: 2.5em;
    height: 2.5em;
    border-radius: 100%;
    margin-right: 1em;
`

export const Profile = styled.div`
    display: flex;
    color: #F5F5F5;
    align-items: center;
    font-size: 1.2rem;
    a {
        text-decoration: none;
        color: #F5F5F5;
        font-size: 1.1rem;
        transition: all 0.5s;
    }

    a:hover {
        color: #B4441C;
        font-size: 1.3rem;
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
    font-size: 0.95rem;
    border: none;
    cursor: pointer;
    &:hover {
        font-size: 1rem;
    }
`

export const Logo = styled.img`
    width: 13em;
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
        font-size: 1.1rem;
        margin-left: 1.5em;
        transition: all 0.5s;
        i{
            font-size: 1.3rem;
            transition: font-size 0.3s;
        }

    }

    a:hover {
        color: #B4441C;
        font-size: 1.3rem;
        transition-timing-function: ease-in-out;
        transition: all 0.5s;
        i:hover{
            font-size: 2rem;
            transition-timing-function: ease-in;

        }
    }
`