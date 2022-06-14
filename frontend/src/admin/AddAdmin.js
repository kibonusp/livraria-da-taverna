import { useEffect, useState } from 'react'

import { Description, Container } from '../styles/adminStyles/HomeAdminStyle'
import { ResultList, Result, Profile, Search } from '../styles/adminStyles/UsersStyles'
import images from '../images';

export default function AddAdmin({data, setData}) {
    const [users, setUsers] = useState(data.users);
    const [search, setSearch] = useState("");
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        let newUsers = []
        for (let user of data.users) {
            let formatedUser = user.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
            let formatedSearch = search.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
            if (!user.admin && formatedUser.includes(formatedSearch))
                newUsers.push(user);
        }
        setUsers(newUsers);
    }, [search, update, data.users])

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
    }

    return (
        <Container>
            <Description>Escolha um usuário para promover como administrador</Description>
            <Search onInput={e => setSearch(e.target.value)}/>
            <ResultList>
                {
                    users.map((user, index) => 
                        !user.admin ? 
                        <Result key={index} onClick={() => turnAdmin(user.name)}>
                            <Profile>
                                <img src={images[user.photo]} alt={user.name} />
                                <p>{user.name}</p>
                            </Profile>
                        </Result> :
                        ""
                    )
                }
            </ResultList>
        </Container>
    )
}