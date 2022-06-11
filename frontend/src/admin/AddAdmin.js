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
            if (!user.admin && user.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().startsWith(search.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()))
                newUsers.push(user);
        }
        setUsers(newUsers);
    }, [search, update, data.users])
    
    const turnAdmin = (name) => {
        console.log("turn to admin");
        let datacopy = data;
        for (let i = 0; i < data.users.length; i++) {
            if (datacopy.users[i].name === name) {
                datacopy.users[i].admin = true;
                setUpdate(!update);
            }
        }
        setData(datacopy);
    }

    return (
        <Container>
            <Description>Escolha um usuário para promover como administrador</Description>
            <Search onInput={e => setSearch(e.target.value)}/>
            <ResultList>
                {
                    users.map((user, index) => 
                        !user.admin ? 
                        <Result key={index}onClick={() => turnAdmin(user.name)}>
                            <Profile>
                                <img src={images[user.photo]} alt="Admin" />
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