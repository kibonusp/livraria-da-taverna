import { useEffect, useState } from 'react'
import { Description, Container } from '../styles/adminStyles/HomeAdminStyle'
import { ResultList,Search } from '../styles/adminStyles/UsersStyles'
import PromoteName from '../components/PromoteName';
import axios from "axios";
import { getCookie } from "../auth";

export default function AddAdmin() {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([])
    const [search, setSearch] = useState("");
    const [update, setUpdate] = useState(false);

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
            if (!user.admin && formatedUser.includes(formatedSearch))
                newUsers.push(user);
        }
        setFilteredUsers(newUsers);
    }, [search, users]);

    return (
        <Container>
            <Description>Escolha um usuário para promover como administrador</Description>
            <Search onInput={e => setSearch(e.target.value)}/>
            <ResultList>
                {
                    filteredUsers.map((user, index) => 
                        !user.admin ? 
                        <PromoteName key={index} user={user}/> :
                        ""
                    )
                }
            </ResultList>
        </Container>
    )
}