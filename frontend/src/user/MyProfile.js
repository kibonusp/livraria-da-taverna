import { useNavigate } from "react-router-dom"
import { FormDiv, FormInput, FormLabel, FileDiv, FormFile, FormButton, FormForm } from "../styles/adminStyles/formStyle"
import { Description, ActionDiv } from "../styles/adminStyles/HomeAdminStyle"
import { useState } from "react"
import PopUp from "../components/PopUp";
import { PopUpButton } from "../styles/componentsStyles/PopUpStyle";
import { Row } from "../styles/userStyles/CartStyles";

export default function MyProfile({data, setData}) {
    const [fileName, setFileName] = useState(data.users[data.logged.user].photo);
    const [editProfile, setEditProfile] = useState(false);
    const [profile, setNewProfile] = useState(data.users[data.logged.user]);
    const [passwords, setPasswords] = useState({password: undefined, confirm: undefined});
    const [buttonPopUpDelete, setButtonPopUpDelete] = useState(false);
    const [buttonPopUp, setButtonPopUp] = useState(false);
    const [buttonPopUpWarning, setButtonPopUpWarning] = useState(false);


    const navigate = useNavigate();

    const changeFile = e => {
        let filepath = e.target.value;
        let paths = filepath.split("\\");
        setFileName(paths[paths.length - 1]);
    }

    const deleteUser = e => {
        e.preventDefault();
        setButtonPopUpWarning(false);
        setButtonPopUpDelete(true);
            setTimeout(() => {
                setData({...data, users: data.users.splice(data.logged.user, 1)});
                setData({...data, logged: {"situation": false, "user": undefined}});
                navigate("/");
            }, 3000);
    }

    const warningUser = e => {
        e.preventDefault()
        setButtonPopUpWarning(true);
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
            setButtonPopUp(true);
            setTimeout(() => {
                navigate("/");
            }, 3000);
        }
        else
            console.log("Mudanças não foram realizadas. As senhas não coincidem.")
    }
    
    return (
        <>
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
                            <FormButton onClick={() => setEditProfile(false)}>Cancelar</FormButton>
                        </>
                }
                <FormButton delete="true" onClick={e => warningUser(e)}>Deletar Perfil</FormButton>
            </ActionDiv>
        </FormForm>
        <PopUp trigger={buttonPopUpDelete} setTrigger={setButtonPopUpDelete}>
                <p>Usuário deletado com sucesso, redirecionando para tela de início</p>
        </PopUp>
        <PopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}>
                <p>Mudanças realizadas com sucesso, voltando para início</p>
        </PopUp>
        <PopUp trigger={buttonPopUpWarning} setTrigger={setButtonPopUpWarning}>
            <p>Certeza que deja apagar o usuário?</p>
            <Row>
                <PopUpButton onClick={e => deleteUser(e)}theme="light">Confirmar</PopUpButton>
                <PopUpButton onClick={() => setButtonPopUpWarning(false)}>Cancelar</PopUpButton>
            </Row>
        </PopUp>
        </>
    )
}