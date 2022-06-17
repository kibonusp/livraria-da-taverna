// import {ArrowClickPopUp, ArrowPopUpContent } from "../styles/componentsStyles/PopUpStyle"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CloseButton, Container, Content } from "../styles/componentsStyles/PopUpStyle";
import {faClose } from '@fortawesome/free-solid-svg-icons'

export default function PopUp(props){

    return (props.trigger)?(
        <Container>
            <Content>
                <CloseButton onClick={() => props.setTrigger(false)}>
                    <FontAwesomeIcon icon={faClose} />
                </CloseButton>
                { props.children}
            </Content>
        </Container>
    ): "";
}
