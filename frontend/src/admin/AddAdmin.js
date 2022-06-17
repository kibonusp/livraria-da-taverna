import { useEffect, useState } from 'react'

import { Description, Container } from '../styles/adminStyles/HomeAdminStyle'
import { ResultList,Search } from '../styles/adminStyles/UsersStyles'
import PromoteName from '../components/PromoteName';

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


    return (
        <Container>
            <Description>Escolha um usuário para promover como administrador</Description>
            <Search onInput={e => setSearch(e.target.value)}/>
            <ResultList>
                {
                    users.map((user, index) => 
                        !user.admin ? 
                        <PromoteName key={index} data={data} setData={setData} update={update} setUpdate={setUpdate} user={user}/> :
                        ""
                    )
                }
            </ResultList>
        </Container>
    )
}