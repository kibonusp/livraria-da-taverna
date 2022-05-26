import { Link } from "react-router-dom"
import { FormDiv, FormInput, FormLabel, FileDiv, FormFile, Button, ActionDiv, Delete } from "../styles/adminStyles/formStyle"
import { Container, Description } from "../styles/adminStyles/HomeAdminStyle"
import { useState } from "react"

export default function MyProfile() {
    const [fileName, setFileName] = useState("Arquivo não selecionado")

    const changeFile = e => {
        let filepath = e.target.value;
        let paths = filepath.split("\\");
        setFileName(paths[paths.length - 1]);
    }
    return (
        <Container>
            <Description>Seu Perfil</Description>
            <FormDiv>
                <FormLabel>Nome</FormLabel>
                <FormInput placeholder="Gabriel Freitas Ximenes Vasconcelos" readOnly="true"></FormInput>
            </FormDiv>
            <FormDiv>
                <FormLabel>Email</FormLabel>
                <FormInput placeholder="gabriel.vasconcelos@usp.br" readOnly="true"></FormInput>
            </FormDiv>
            <FormDiv>
                <FormLabel>Telefone</FormLabel>
                <FormInput placeholder="(61) 991436969" readOnly="true"></FormInput>
            </FormDiv>
            <FormDiv>
                <FormLabel>Nome</FormLabel>
                <FormInput placeholder="Rua Cleyton da Silva 69420" readOnly="true"></FormInput>
            </FormDiv>
            <FormDiv>
                <FormLabel>Senha</FormLabel>
                <FormInput placeholder="********" readOnly="true"></FormInput>
            </FormDiv>
            <FormDiv>
                <FormLabel>Confirme senha</FormLabel>
                <FormInput placeholder="********" readOnly="true"></FormInput>
            </FormDiv>
            <FormDiv>
                <FormLabel>Foto</FormLabel>
                <FileDiv>
                    <p>{fileName}</p>
                    <FormFile>
                        Escolher arquivo
                        <input type="file" onInput={e => changeFile(e)}/>
                    </FormFile>
                </FileDiv>
            </FormDiv>
            <ActionDiv width="70">
                <Link to="/admin/admins/add">
                    <Button>Página Admin</Button>
                </Link>
                <Link to="/admin/admins/add">
                    <Button>Editar Página</Button>
                </Link>
                <Link to="/admin/admins/add">
                    <Delete>Apagar Perfil</Delete>
                </Link>
            </ActionDiv>
        </Container>
    )
}