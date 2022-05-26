import styled from "styled-components";

export const Container = styled.footer`
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    background-color: #B4441C;
    justify-content: space-around;
    padding: 0.8em 0em;
    font-size: 0.85rem;
    width: 100%;
    position: relative;
`

export const Section = styled.section`
    width: 25%;
    color: #f5f5f5;
    font-weight: 300;
    display: flex;
    flex-direction: column;
    h2 {
        margin: 0;
        margin-bottom: 0.4em;
        font-size: 1.1rem;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    li {
        margin-bottom: 0.6em;
    }
    ul {
        margin: 0;
    }
    p {
        margin: 0;
    }
    
`