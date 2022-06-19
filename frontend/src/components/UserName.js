import { Row } from "../styles/userStyles/CartStyles"
import { Result, Profile} from '../styles/adminStyles/UsersStyles'
import { userImages } from '../images';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faClose } from "@fortawesome/free-solid-svg-icons"

import PopUp from "./PopUp";
import { PopUpButton } from "../styles/componentsStyles/PopUpStyle"

import { useState } from "react"


export default function UserName({data, setData, update, setUpdate, user}) {

    const [buttonPopUp, setButtonPopUp] = useState(false);

    const deleteUser = name => {
        let datacopy = data.users;
        let i = 0;
        let found = false;
        while (i < data.users.length && !found) {
            if (datacopy[i].name === name) {
                datacopy.splice(i, 1);
                setData({...data, users: datacopy});
                if (i === data.logged.user)
                    setData({...data, logged: {situation: false, user: undefined}});
                
                setUpdate(!update);
                found = true
            }
            i++;
        }
        setButtonPopUp(false);
    }

    return (
        <>
        <Result>
            <Profile>
                <img src={userImages[user.photo]} alt={user.name} />
                <p>{user.name}</p>
            </Profile>
            <button onClick={() => setButtonPopUp(true)}><FontAwesomeIcon icon={faClose} color="white"/> </button>
        </Result>
        <PopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}>
            <p> O usuário {user.name} será removido. </p>
            <Row>
                <PopUpButton onClick={() => deleteUser(user.name)}theme="light">Confirmar</PopUpButton>
                <PopUpButton onClick={() => setButtonPopUp(false)}>Cancelar</PopUpButton>
            </Row>
        </PopUp>
        </>
    )
}