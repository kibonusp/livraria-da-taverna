import { Container, Description } from "../styles/adminStyles/HomeAdminStyle";
import { FormLabel, FormDiv, FormInput, FormText, FormFile, FileDiv, FormStock } from "../styles/adminStyles/formStyle";
import { useState } from "react";

export default function AddProduct() {
    const [fileName, setFileName] = useState("Arquivo não selecionado")

    const changeFile = e => {
        let filepath = e.target.value;
        let paths = filepath.split("\\");
        setFileName(paths[paths.length - 1]);
    }

    return (
        <Container>
            <Description>Criação de Produto</Description>
            <FormDiv>
                <FormLabel>Nome</FormLabel>
                <FormInput />
            </FormDiv>
            <FormDiv>
                <FormLabel>Descrição</FormLabel>
                <FormText></FormText>
            </FormDiv>
            <FormDiv>
                <FormLabel>Autores</FormLabel>
                <FormInput />
            </FormDiv>
            <FormDiv>
                <FormLabel>Gêneros</FormLabel>
                <FormInput />
            </FormDiv>
            <FormDiv>
                <FormLabel>Preço</FormLabel>
                <FormInput type="number"/>
            </FormDiv>
            <FormDiv>
                <FormLabel>Preço</FormLabel>
                <FormInput type="number"/>
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
            <FormDiv centralize="true">
                <FormLabel>Quantidade disponível</FormLabel>
                <FormStock type="number" />
            </FormDiv>
        </Container>
    )
}