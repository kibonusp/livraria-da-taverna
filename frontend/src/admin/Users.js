import { Description, Container } from '../styles/adminStyles/HomeAdminStyle'
import { ResultList, Search } from '../styles/adminStyles/UsersStyles'
import { useState, useEffect } from 'react'
import axios from "axios";
import { getCookie } from '../auth';

import UserName from '../components/UserName';

export default function Users() {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([])
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios.get("http://localhost:11323/user", {
            headers: {
                'authorization': `Bearer ${getCookie("token")}`
            }
        }).then(response => {
            setUsers(response.data);
            setFilteredUsers(response.data);
        })
    }, [])

    useEffect(() => {
        let newUsers = []
        for (let user of users) {
            let formatedUser = user.email.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
            let formatedSearch = search.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
            if (formatedUser.includes(formatedSearch))
                newUsers.push(user);
        }
        setFilteredUsers(newUsers);
    }, [search, users]);

    return (
        <Container>
            <Description>Escolha um usuário para remover</Description>
            <Search onInput={e => setSearch(e.target.value)}/>
            <ResultList>
                {
                    filteredUsers.map((user, index) => 
                        <UserName key={index} user={user}/>
                    )
                }
            </ResultList>
        </Container>
    )
}