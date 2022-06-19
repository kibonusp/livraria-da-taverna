import { Link, useNavigate } from "react-router-dom"
import { FormDiv, FormInput, FormLabel, FileDiv, FormFile, FormButton, FormForm } from "../styles/adminStyles/formStyle"
import { Description, ActionDiv } from "../styles/adminStyles/HomeAdminStyle"
import { useState } from "react"

export default function MyProfile({data, setData}) {
    const [fileName, setFileName] = useState(data.users[data.logged.user].photo);
    const [editProfile, setEditProfile] = useState(false)
    const [profile, setNewProfile] = useState(data.users[data.logged.user]);
    const [passwords, setPasswords] = useState({password: undefined, confirm: undefined})
    const navigate = useNavigate();

    const changeFile = e => {
        let filepath = e.target.value;
        let paths = filepath.split("\\");
        setFileName(paths[paths.length - 1]);
    }

    const deleteUser = e => {
        e.preventDefault()
        setData({...data, users: data.users.splice(data.logged.user, 1)});
        setData({...data, logged: {"situation": false, "user": undefined}});
        navigate("/");
    }

    const saveChanges = e => {
        e.preventDefault()
        if (passwords.password === passwords.confirm) {
            console.log("Alterei a senha");
            if (passwords.passwords !== undefined) {
                console.log("Alterei a senha");
                profile.password = passwords.password;
            }

            profile.photo = fileName;
            
            let datacopy = data.users;
            datacopy[data.logged.user] = profile;
            setData({...data, users: datacopy});
        }
        else
            console.log("Mudanças não foram realizadas. As senhas não coincidem.")
    }
    
    return (
        <FormForm>
            <Description>Seu Perfil</Description>
            <FormDiv>
                <FormLabel>Nome</FormLabel>
                <FormInput placeholder={data.users[data.logged.user].name} readOnly={!editProfile} onInput={e => setNewProfile({...profile, name: e.target.value})} />
            </FormDiv>
            <FormDiv>
                <FormLabel>Email</FormLabel>
                <FormInput placeholder={data.users[data.logged.user].email} readOnly={!editProfile} onInput={e => setNewProfile({...profile, email: e.target.value})} />
            </FormDiv>
            <FormDiv>
                <FormLabel>Telefone</FormLabel>
                <FormInput placeholder={data.users[data.logged.user].telephone} readOnly={!editProfile} onInput={e => setNewProfile({...profile, telephone: e.target.value})} />
            </FormDiv>
            <FormDiv>
                <FormLabel>Endereço</FormLabel>
                <FormInput placeholder={data.users[data.logged.user].address} readOnly={!editProfile} onInput={e => setNewProfile({...profile, address: e.target.value})} />
            </FormDiv>
            <FormDiv>
                <FormLabel>Senha</FormLabel>
                <FormInput placeholder="********" readOnly={!editProfile} onInput={e => setPasswords({...passwords, "password": e.target.value})} />
            </FormDiv>
            <FormDiv>
                <FormLabel>Confirme senha</FormLabel>
                <FormInput placeholder="********" readOnly={!editProfile} onInput={e => setPasswords({...passwords, "confirm": e.target.value})} />
            </FormDiv>
            <FormDiv>
                <FormLabel>Foto</FormLabel>
                <FileDiv>
                    <p>{fileName}</p>
                    <FormFile>
                        Escolher arquivo
                        <input type="file" onInput={e => changeFile(e)} readOnly={!editProfile}/>
                    </FormFile>
                </FileDiv>
            </FormDiv>
            <ActionDiv width="70">
                {
                    editProfile === false ? 
                        <FormButton onClick={() => setEditProfile(true)}>Editar Página</FormButton>
                    :
                        <>
                            <FormButton onClick={e => saveChanges(e)}>Salvar</FormButton>
                            <Link to="/"><FormButton>Cancelar</FormButton></Link>
                        </>
                }
                <FormButton delete="true" onClick={e => deleteUser(e)}>Deletar Perfil</FormButton>
            </ActionDiv>
        </FormForm>
    )
}