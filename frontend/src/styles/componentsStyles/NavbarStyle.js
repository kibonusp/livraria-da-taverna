import styled from "styled-components";

export const NavHeader = styled.nav`
    display: flex;
    background-color: #502514;
    align-items: center;
    justify-content: space-between;
    padding: 0em 2em;
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
`

export const Logo = styled.img`
    width: 13em;
`

export const Item = styled.img`
    width: 2.4em;
    margin-left: 2em;
`

export const Utils = styled.div`
    display: flex;
    align-items: center;
`

export const Links = styled.div`
    a {
        text-decoration: none;
        color: #F5F5F5;
        font-size: 1.1rem;
        margin-left: 1.5em;
    }

    a:hover {
        color: #B4441C;
    }

    margin-right: 2em; 
`