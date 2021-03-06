import { Row } from "../styles/userStyles/CartStyles"
import { Result, Profile} from '../styles/adminStyles/UsersStyles'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faClose } from "@fortawesome/free-solid-svg-icons"

import PopUp from "./PopUp";
import { PopUpButton } from "../styles/componentsStyles/PopUpStyle"

import { useState } from "react"
import axios from "axios";
import { getCookie } from "../auth";
import {useNavigate } from "react-router-dom";


export default function UserName({user}) {
    const [buttonPopUp, setButtonPopUp] = useState(false);
    const navigate = useNavigate();

    const deleteUser = id => {
        axios.delete(`http://localhost:11323/user/${id}`, {
            headers: {
                'authorization': `Bearer: ${getCookie("token")}`
            }
        })
        setButtonPopUp(false);
        navigate(-1);
    }

    return (
        <>
        <Result>
            <Profile>
                <img src={`http://localhost:11323/user/${user.id}/image`} alt={user.email} />
                <p>{user.email}</p>
            </Profile>
            <button onClick={() => setButtonPopUp(true)}><FontAwesomeIcon icon={faClose} color="white"/> </button>
        </Result>
        <PopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}>
            <p> O usuário {user.email} será removido. </p>
            <Row>
                <PopUpButton onClick={() => deleteUser(user.id)} theme="light">Confirmar</PopUpButton>
                <PopUpButton onClick={() => setButtonPopUp(false)}>Cancelar</PopUpButton>
            </Row>
        </PopUp>
        </>
    )
}