import {Container, PopUpText } from "../styles/componentsStyles/PopUpStyle"

export default function PopUp() {
    function myFunction() {
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
    }
    return (
        <>
            <Container onClick={() => myFunction()}>Click me!
            <PopUpText id="myPopup">Popup text...</PopUpText>
            </Container>
        </>

    )
}