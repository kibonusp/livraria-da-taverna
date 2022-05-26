import admin from '../assets/admin.jpg'
import close from '../assets/close.svg'

import { Description, Container } from '../styles/adminStyles/HomeAdminStyle'
import { ResultList, Result, Profile, Search } from '../styles/adminStyles/UsersStyles'

export default function AddAdmin() {

    return (
        <Container>
            <Description>Escolha um usuário para promover como administrador</Description>
            <Search />
            <ResultList>
                <Result>
                    <Profile>
                        <img src={admin} alt="Admin" />
                        <p>Raíssa Barreira (@rtbarreira)</p>
                    </Profile>
                    <button><img src={close} alt="Atribuir privilégios de administrador" /></button>
                </Result>
            </ResultList>
        </Container>
    )
}