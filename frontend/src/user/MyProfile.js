import { useNavigate } from "react-router-dom"
import { FormDiv, FormInput, FormLabel, FileDiv, FormFile, FormButton, FormForm } from "../styles/adminStyles/formStyle"
import { Description, ActionDiv } from "../styles/adminStyles/HomeAdminStyle"
import { useEffect, useState } from "react"
import PopUp from "../components/PopUp";
import { PopUpButton } from "../styles/componentsStyles/PopUpStyle";
import { Row } from "../styles/userStyles/CartStyles";
import axios from "axios";
import { getCookie, parseJwt } from "../auth";


export default function MyProfile({data, setData}) {
    const [fileName, setFileName] = useState();
    const [image, setImage] = useState();
    const [editProfile, setEditProfile] = useState(false);
    const [profile, setProfile] = useState({
        "name": undefined,
        "email": undefined,
        "telephone": undefined,
        "address": undefined
    });
    const [placeHolder, setPlaceHolder] = useState({});
    const [passwords, setPasswords] = useState({password: undefined, confirm: undefined});
    const [buttonPopUpDelete, setButtonPopUpDelete] = useState(false);
    const [buttonPopUp, setButtonPopUp] = useState(false);
    const [buttonPopUpWarning, setButtonPopUpWarning] = useState(false);
    
    useEffect(() => {
        const token = parseJwt(getCookie("token"));
        if (token !== "" ) {
            axios.get(`http://localhost:11323/user/${token.id}`, {
                headers: {
                    'authorization': `Bearer ${getCookie("token")}`
                }
            }).then(res => {
                setProfile({
                    name: res.data.name,
                    email: res.data.email,
                    telephone: res.data.telephone,
                    address: res.data.address
                });
                setPlaceHolder({
                    name: res.data.name,
                    email: res.data.email,
                    telephone: res.data.telephone,
                    address: res.data.address
                });
                setPasswords({password: res.data.password, confirm: res.data.password});
                setFileName(res.data.photo);
            })
        }
    }, [])

    const navigate = useNavigate();

    const changeFile = e => {
        let filepath = e.target.value;
        let paths = filepath.split("\\");
        setFileName(paths[paths.length - 1]);
        setImage(e.target.files[0]);
    }

    const deleteUser = e => {
        e.preventDefault();
        setButtonPopUpWarning(false);
        setButtonPopUpDelete(true);

        const token = parseJwt(getCookie("token"));
        if (token !== "") {
            axios.delete(`http://localhost:11323/user/${token.id}`, {                
                headers: {
                    'authorization': `Bearer ${getCookie("token")}`
                }
            }).then((response) => {
                setData(response.data);
            }).catch(e => console.log(e));
        }
        setTimeout(() => {
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
            if (passwords.passwords !== undefined) {
                profile.password = passwords.password;
            }
            
            const token = parseJwt(getCookie("token"));
            if (token !== "") {
                if(fileName) {
                    let formData = new FormData();
                    formData.append("image", image);
                    fetch(`http://localhost:11323/user/${token.id}/image`,
                    {
                        body: formData,
                        method: "put"
                    })
                }
                let name = profile.name
                if(name === "" || name === null || name === undefined) name = placeHolder.name
                let email = profile.email
                if(email === "" || email === null || email === undefined) email = placeHolder.email
                let telephone = profile.telephone
                if(telephone === "" || telephone === null || telephone === undefined) telephone = placeHolder.telephone
                let address = profile.address
                if(address === "" || address === null || address === undefined) address = placeHolder.address
                axios.put(`http://localhost:11323/user/${token.id}`, {
                    "name": name,
                    "email": email,
                    "telephone": telephone,
                    "address": address,
                    "password": passwords.password
                }, {                
                    headers: {
                        'authorization': `Bearer ${getCookie("token")}`
                    }
                }).then((response) => {
                    setData(response.data);
                    setProfile(response.data);
                    setPlaceHolder(response.data)
                }).catch(e => console.log(e));
                setButtonPopUp(true);
                setTimeout(() => {
                    navigate("/");
                }, 3000);
                
            }
        }
    }
    
    return (
        <>
        <FormForm>
            <Description>Seu Perfil</Description>
            <FormDiv>
                <FormLabel>Nome</FormLabel>
                <FormInput placeholder={placeHolder.name} readOnly={!editProfile} onInput={e => setProfile({...profile, name: e.target.value})}/>
            </FormDiv>
            <FormDiv>
                <FormLabel>Email</FormLabel>
                <FormInput placeholder={placeHolder.email} readOnly={!editProfile} onInput={e => setProfile({...profile, email: e.target.value})}/>
            </FormDiv>
            <FormDiv>
                <FormLabel>Telefone</FormLabel>
                <FormInput placeholder={placeHolder.telephone} readOnly={!editProfile} onInput={e => setProfile({...profile, telephone: e.target.value})}/>
            </FormDiv>
            <FormDiv>
                <FormLabel>Endere??o</FormLabel>
                <FormInput placeholder={placeHolder.address} readOnly={!editProfile} onInput={e => setProfile({...profile, address: e.target.value})}/>
            </FormDiv>
            <FormDiv>
                <FormLabel>Senha</FormLabel>
                <FormInput placeholder="********" readOnly={!editProfile} onInput={e => setPasswords({...passwords, password: e.target.value})} />
            </FormDiv>
            <FormDiv>
                <FormLabel>Confirme senha</FormLabel>
                <FormInput placeholder="********" readOnly={!editProfile}  onInput={e => setPasswords({...passwords, confirm: e.target.value})} />
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
                    <FormButton onClick={() => setEditProfile(true)}>Editar P??gina</FormButton>
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
                <p>Usu??rio deletado com sucesso, redirecionando para tela de in??cio</p>
        </PopUp>
        <PopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}>
                <p>Mudan??as realizadas com sucesso, voltando para in??cio</p>
        </PopUp>
        <PopUp trigger={buttonPopUpWarning} setTrigger={setButtonPopUpWarning}>
            <p>Certeza que deja apagar o usu??rio?</p>
            <Row>
                <PopUpButton onClick={() => setButtonPopUpWarning(false)}>Cancelar</PopUpButton>
                <PopUpButton onClick={e => deleteUser(e)}theme="light">Confirmar</PopUpButton>
            </Row>
        </PopUp>
        </>
    )
}