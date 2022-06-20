import { Link } from "react-router-dom"

import { Container, Description, ActionDiv, Row, Gender, Seta } from "../styles/userStyles/GenderStyles"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faGlobe, faHandSpock, faHeart, faDragon, faMask,
    faHandcuffs, faQuestion, faSkullCrossbones, faMasksTheater, faHandFist, faPersonChalkboard,
    faLandmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"


export default function Genders({data, setData}) {
    const gendersPerRow = [...Array(3).keys()];
    const icons = {
        "faGlobe": faGlobe,
        "faHandSpock": faHandSpock,
        "faHeart": faHeart,
        "faDragon": faDragon,
        "faMask": faMask,
        "faHandcuffs": faHandcuffs,
        "faQuestion": faQuestion,
        "faSkullCrossbone": faSkullCrossbones,
        "faMaskTheater": faMasksTheater,
        "faHandFist": faHandFist,
        "faPersonChalkboard": faPersonChalkboard,
        "faLandmark": faLandmark
    }
    const [curCarrossel, setCurCarrossel] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = (name) => {
        setIsHovering(true);
    };
    const hover = {
        "faGlobe": false,
        "faHandSpock": false,
        "faHeart": false,
        "faDragon": false,
        "faMask": false,
        "faHandcuffs": false,
        "faQuestion": false,
        "faSkullCrossbone": false,
        "faMaskTheater": false,
        "faHandFist": false,
        "faPersonChalkboard": false,
        "faLandmark": false
    }
    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return (
        <>
            <Container>
                <Description>Gêneros</Description>
                <Row>
                    <Seta onClick={() => setCurCarrossel(prev => Math.abs(1-prev))}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </Seta>
                    <ActionDiv>
                        {
                            <div>
                                <Row>
                                    {
                                        curCarrossel === 0 ?
                                        gendersPerRow.map(gender =>
                                            <Link key={gender} to="/search" state={{gender: data.genders[gender].name}}>
                                                <Gender theme={gender % 2 === 0 ? "light" : "dark"}>
                                                    <h1> {data.genders[gender].name} </h1>
                                                    <FontAwesomeIcon id={data.genders[gender].name} icon={icons[data.genders[gender].icon]} size="6x" className={isHovering ? 'bounce' : ''} onmouseover={handleMouseOver} onMouseOut={handleMouseOut}/>
                                                </Gender>
                                            </Link>    
                                        ) :
                                        gendersPerRow.map(gender =>
                                            <Link key={gender + 6} to="/search" state={{gender: data.genders[gender + 6].name}}>
                                                <Gender theme={(gender + 6) % 2 === 0 ? "light" : "dark"}>
                                                    <h1> {data.genders[gender + 6].name} </h1>
                                                    <FontAwesomeIcon icon={icons[data.genders[gender + 6].icon]} size="6x" />
                                                </Gender>
                                            </Link> 
                                        )
                                    }
                                </Row>
                                <Row>
                                    {
                                        curCarrossel === 0 ?
                                        gendersPerRow.map(gender =>
                                            <Link key={gender + 3} to="/search" state={{gender: data.genders[gender + 3].name}}>
                                                <Gender theme={(gender + 3) % 2 === 0 ? "light" : "dark"}>
                                                    <h1> {data.genders[gender + 3].name} </h1>
                                                    <FontAwesomeIcon icon={icons[data.genders[gender + 3].icon]} size="6x" />
                                                </Gender>
                                            </Link>    
                                        )
                                        :
                                        gendersPerRow.map(gender =>
                                            <Link key={gender + 9} to="/search" state={{gender: data.genders[gender + 9].name}}>
                                                <Gender theme={(gender + 9) % 2 === 0 ? "light" : "dark"}>
                                                    <h1> {data.genders[gender + 9].name} </h1>
                                                    <FontAwesomeIcon icon={icons[data.genders[gender + 9].icon]} size="6x" />
                                                </Gender>
                                            </Link> 
                                        )
                                    }
                                </Row>
                            </div>
                        }
                    </ActionDiv>
                    <Seta onClick={() => setCurCarrossel(prev => Math.abs(1-prev))}>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </Seta>
                </Row>
            </Container>  
        </>
    )
}