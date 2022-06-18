import { Row } from "../styles/userStyles/CartStyles"
import { Result, Profile} from '../styles/adminStyles/UsersStyles'
import { userImages } from '../images';

import PopUp from "./PopUp";
import { PopUpButton } from "../styles/componentsStyles/PopUpStyle"

import { useState } from "react"


export default function PromoteName({data, setData, update, setUpdate, user}) {

    const [buttonPopUp, setButtonPopUp] = useState(false);

    const turnAdmin = name => {
        let datacopy = data;
        let i = 0;
        let found = false;
        while (i < data.users.length && !found) {
            if (datacopy.users[i].name === name) {
                datacopy.users[i].admin = true;
                setData(datacopy);
                setUpdate(!update);
                found = true;
            }
            i++;
        }
        setButtonPopUp(false);
    }

    return (
        <>
        <Result cursor="click" onClick={() => setButtonPopUp(true)}>
            <Profile>
                <img src={userImages[user.photo]} alt={user.name} />
                <p>{user.name}</p>
            </Profile>
        </Result>
        <PopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}>
        <p> O usuário {user.name} será promovido a administrador. </p>
            <Row>
                <PopUpButton onClick={() => turnAdmin(user.name)} theme="light">Confirmar</PopUpButton>
                <PopUpButton onClick={() => setButtonPopUp(false)}>Cancelar</PopUpButton>
            </Row>
        </PopUp>
        </>
    )
}