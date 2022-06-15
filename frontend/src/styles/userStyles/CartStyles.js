import styled from "styled-components";
import taverna from "../../assets/taverna.png"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3%;
    width: ${props => props.width};
    min-height: 100vh;
    background-image: ${props => props.img === "on" ? `url(${taverna})` : "none"};
    h1{
        align-self: flex-start;
        margin: 0%;
        padding: 0%;
    }

`
export const Row = styled.div`
    display: flex;
    justify-content: ${props => props.space === "center" ? "center" : "space-between"};
    align-items: center;
    
`
export const Items = styled.table`
    border-top: 1px solid gray;
    width: 100%;
    border-collapse: collapse;
    
`

export const Name = styled.tr`
    margin: 0%;
    
    `
export const Head = styled.th`
    border-bottom: 1px solid gray;
    div{  
        color: #502514;
        border: 2px solid #502514;
        padding: 10px 50px;
        border-radius: 5em;
        font-size: 20px;
        margin: 5%;
        
    }
`

export const Preco = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border: 2px solid #502514;
    color: #502514;
    height: 100%;
    font-size: x-large;
    border-radius: 5%;
    margin-top: 20%;
    margin-bottom: 5%;
    background-color: white;
    p{
        width: 60%;
        margin: 10%;
    }
    span{
        margin: 10%;
    }
`