import admin from '../assets/admin.jpg'
import close from '../assets/close.svg'

import { Description, Container } from '../styles/adminStyles/HomeAdminStyle'
import { ResultList, Result, Profile, Search } from '../styles/adminStyles/UsersStyles'

export default function RemoveAdmin() {
    return (
        <Container>
            <Description>Escolha um usuário para remover de administrador</Description>
            <Search />
            <ResultList>
                <Result>
                    <Profile>
                        <img src={admin} alt="Admin" />
                        <p>Raíssa Barreira (@rtbarreira)</p>
                    </Profile>
                    <button><img src={close} alt="Retirar privilégios de administrador" /></button>
                </Result>
            </ResultList>
        </Container>
    )
}