import { Link } from "react-router-dom"

import { Container, Description, ActionDiv, Row, Gender, Seta } from "../styles/userStyles/GenderStyles"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMasksTheater, faHandSpock, faGhost, faLandmark, faHeart, faSkullCrossbones, faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'


export default function Genders() {
    return (
        <>
            <Container>
                <Description>Gêneros</Description>
                <Row>
                    <Seta>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </Seta>
                    <ActionDiv>
                        <Row>
                            <Link to="/search">
                                <Gender theme = "light">
                                    <h1> Ficção </h1>
                                    <FontAwesomeIcon icon={faHandSpock} size="6x"/>
                                </Gender>
                            </Link>
                            <Link to="/search">
                                <Gender>
                                    <h1> Drama </h1>
                                    <FontAwesomeIcon icon={faMasksTheater} size="6x"/>
                                </Gender>
                            </Link>
                            <Link to="/search">
                                <Gender theme = "light">
                                    <h1> Terror </h1>
                                    <FontAwesomeIcon icon={faGhost} bounce size="6x"/>
                                </Gender>
                            </Link>
                        </Row>
                        <Row>
                            <Link to="/search">
                                <Gender>
                                    <h1> Romance </h1>
                                    <FontAwesomeIcon icon={faHeart} beat size="6x"/>
                                </Gender>
                            </Link>
                            <Link to="/search">
                                <Gender theme = "light">
                                    <h1> História </h1>
                                    <FontAwesomeIcon icon={faLandmark} size="6x" />
                                </Gender>
                            </Link>
                            <Link to="/search">
                                <Gender>
                                    <h1> Aventura </h1>
                                    <FontAwesomeIcon icon={faSkullCrossbones} size="6x" />
                                </Gender>
                            </Link>
                        </Row>
                    </ActionDiv>
                    <Seta>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </Seta>
                </Row>
            </Container>  
        </>
    )
}