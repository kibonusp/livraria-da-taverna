import styled from "styled-components";
import taverna from "../../assets/taverna.png"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3%;
    width: ${props => props.width};
    min-height:  100vh;
    height:  ${props => props.img === "on" ? `auto` : "none"};
    background-image: ${props => props.img === "on" ? `url(${taverna})` : "none"};
    background-size: ${props => props.img === "on" ? `cover` : "none"};
    box-shadow: ${props => props.img === "on" ? `inset 0 0 0 1000px rgba(180,68,28,.4)` : "none"}; 
    h1{
        align-self: flex-start;
        margin: 0%;
        padding: 0%;
    }

`
export const Container2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3%;
    width: 20%;
    min-height:  100vh;
    height: ${props => props.tamanho >= "5" ? `140vh` : "none"};
    background-image: url(${taverna});
    background-size: cover;
    box-shadow: inset 0 0 0 1000px rgba(180,68,28,.4); 
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

export const Name = styled.thead`
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
    height: auto;
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
        width: 100%;
    }
`