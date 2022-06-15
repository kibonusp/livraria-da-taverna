import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: inline-block;
    cursor: pointer;
    @-webkit-keyframes fadeIn {
    from {opacity: 0;}
    to {opacity: 1;}
    }

    @keyframes fadeIn {
    from {opacity: 0;}
    to {opacity:1 ;}
    }
    .show {
    visibility: visible;
    -webkit-animation: fadeIn 1s;
    animation: fadeIn 1s
    }
`
export const PopUpText = styled.span`
    visibility: hidden;
    width: 160px;
    background-color: #555;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 8px 0;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -80px;
    ::after{
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: #555 transparent transparent transparent;
    }

`

export const Content = styled.div`
    background-color: #fff;
    box-shadow: 10px 10px 60px #555;
    display: inline-block;
    height: auto;
    max-width: 551px;
    min-height: 100px;
    vertical-align: middle;
    width: 60%;
    position: relative;
    border-radius: 8px;
    padding: 15px 5%;
    
`