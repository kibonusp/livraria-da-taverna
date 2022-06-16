import { userImages } from '../images';
import close from '../assets/close.svg'
import { useEffect, useState } from 'react'

import { Description, Container } from '../styles/adminStyles/HomeAdminStyle'
import { ResultList, Result, Profile, Search } from '../styles/adminStyles/UsersStyles'

export default function RemoveAdmin({data, setData}) {
    const [users, setUsers] = useState(data.users);
    const [search, setSearch] = useState("");
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        let newUsers = []
        for (let user of data.users) {
            let formatedUser = user.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
            let formatedSearch = search.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
            if (user.admin && formatedUser.includes(formatedSearch))
                newUsers.push(user);
        }
        setUsers(newUsers);
    }, [search, update, data.users])

    const deleteAdmin = name => {
        let datacopy = data;
        let i = 0;
        let found = false;
        while (i < data.users.length && !found) {
            if (datacopy.users[i].name === name) {
                datacopy.users[i].admin = false;
                setData(datacopy);
                setUpdate(!update);
                found = true;
            }
            i++;
        }
    }

    return (
        <Container>
            <Description>Escolha um usuário para remover de administrador</Description>
            <Search onInput={e => setSearch(e.target.value)} />
            <ResultList>
            {
                users.map((user, index) => 
                    <Result key={index}>
                        <Profile>
                            <img src={userImages[user.photo]} alt={user.name} />
                            <p>{user.name}</p>
                        </Profile>
                        <button onClick={() => deleteAdmin(user.name)}><img src={close} alt="Retirar privilégios de administrador" /></button>
                    </Result>
                )
            }
            </ResultList>
        </Container>
    )
}