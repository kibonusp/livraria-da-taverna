import { Row } from "../styles/userStyles/CartStyles"
import { Result, Profile} from '../styles/adminStyles/UsersStyles'
import { userImages } from '../images';

import PopUp from "./PopUp";
import { PopUpButton } from "../styles/componentsStyles/PopUpStyle"

import { useState } from "react"
import axios from "axios";
import { getCookie } from "../auth";


export default function PromoteName({user}) {

    const [buttonPopUp, setButtonPopUp] = useState(false);

    const turnAdmin = id => {
        axios.put(`http://localhost:11323/admin/users/${id}`, {
            admin: true
            }, {
            headers: {
                'authorization': `Bearer ${getCookie("token")}`
            }
        })
        setButtonPopUp(false);
    }

    return (
        <>
        <Result cursor="click" onClick={() => setButtonPopUp(true)}>
            <Profile>
                <img src={userImages[user.photo]} alt={user.email} />
                <p>{user.email}</p>
            </Profile>
        </Result>
        <PopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}>
        <p> O usuário {user.email} será promovido a administrador. </p>
            <Row>
                <PopUpButton onClick={() => turnAdmin(user.id)} theme="light">Confirmar</PopUpButton>
                <PopUpButton onClick={() => setButtonPopUp(false)}>Cancelar</PopUpButton>
            </Row>
        </PopUp>
        </>
    )
}