import { Link } from "react-router-dom"
import { FormDiv, FormInput, FormLabel, FormFile, FileDiv, Container, Description, Box, FormButton } from "../styles/userStyles/LoginStyles"
import { useState } from "react"


export default function Cadastro() {
    const [fileName, setFileName] = useState("Não selecionado")

    const changeFile = e => {
        let filepath = e.target.value;
        let paths = filepath.split("\\");
        setFileName(paths[paths.length - 1]);
    }

    return (
        <Container>
            <Box>
                <Description>Cadastro</Description>
                
                <FormDiv>
                    <FormLabel>Nome</FormLabel>
                    <FormInput placeholder="Gabriel Freitas Ximenes Vasconcelos"></FormInput>
                </FormDiv>
                <FormDiv>
                    <FormLabel>Email</FormLabel>
                    <FormInput placeholder="gabriel.vasconcelos@usp.br"></FormInput>
                </FormDiv>
                <FormDiv>
                    <FormLabel>Telefone</FormLabel>
                    <FormInput placeholder="(61) 991436969"></FormInput>
                </FormDiv>
                <FormDiv>
                    <FormLabel>Nome</FormLabel>
                    <FormInput placeholder="Rua Cleyton da Silva 69420"></FormInput>
                </FormDiv>
                <FormDiv>
                    <FormLabel>Senha</FormLabel>
                    <FormInput placeholder="********"></FormInput>
                </FormDiv>
                <FormDiv>
                    <FormLabel>Confirme senha</FormLabel>
                    <FormInput placeholder="********"></FormInput>
                </FormDiv>
                <FormDiv>
                    <FormLabel className="foto" >Foto</FormLabel>
                    <FileDiv>
                        <p>{fileName}</p>
                        <FormFile>
                            Escolher arquivo
                            <input type="file" onInput={e => changeFile(e)} accept=".jpg,.png,.jpeg"/>
                        </FormFile>
                    </FileDiv>
                </FormDiv>
                
                <Link to="/">
                    <FormButton>Cadastrar</FormButton>
                </Link>
            </Box>
        </Container>

    )
}