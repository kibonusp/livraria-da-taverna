import close from '../assets/close.svg'
import { userImages } from '../images';

import { Description, Container } from '../styles/adminStyles/HomeAdminStyle'
import { ResultList, Result, Profile, Search } from '../styles/adminStyles/UsersStyles'
import { useState, useEffect } from 'react'

export default function Users({data, setData}) {
    const [users, setUsers] = useState(data.users);
    const [search, setSearch] = useState("");
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        let newUsers = []
        for (let user of data.users) {
            let formatedUser = user.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
            let formatedSearch = search.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
            if (formatedUser.includes(formatedSearch))
                newUsers.push(user);
        }
        setUsers(newUsers);
    }, [search, update, data.users])

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
    }

    return (
        <Container>
            <Description>Escolha um usuário para remover</Description>
            <Search onInput={e => setSearch(e.target.value)}/>
            <ResultList>
                {
                    users.map((user, index) => 
                        <Result key={index}>
                            <Profile>
                                <img src={userImages[user.photo]} alt={user.name} />
                                <p>{user.name}</p>
                            </Profile>
                            <button onClick={() => deleteUser(user.name)}><img src={close} alt="Apagar usuario" /></button>
                        </Result>
                    )
                }
            </ResultList>
        </Container>
    )
}