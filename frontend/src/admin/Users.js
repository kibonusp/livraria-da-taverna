import admin from '../assets/admin.jpg'
import close from '../assets/close.svg'

import { Description } from '../styles/adminStyles/HomeAdminStyle'

export default function Users() {
    return (
        <div>
            <Description>Escolha um usuário para remover</Description>
            <input type="text" />
            <div>
                <div>
                    <img src={admin} alt="Admin" />
                    <p>Raíssa Barreira (@rtbarreira)</p>
                    <button><img src={close} alt="Retirar privilégios de administrador" /></button>
                </div>
            </div>
        </div>
    )
}