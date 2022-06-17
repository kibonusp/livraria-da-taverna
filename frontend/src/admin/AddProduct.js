import { Description } from "../styles/adminStyles/HomeAdminStyle";
import { FormLabel, FormDiv, FormInput, FormText, FormFile, FileDiv, FormStock, FormButton, FormForm } from "../styles/adminStyles/formStyle";
import { useState } from "react";

export default function AddProduct({data, setData}) {
    const [fileName, setFileName] = useState("Arquivo não selecionado");

    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [autores, setAutores] = useState([]);
    const [generos, setGeneros] = useState([]);
    const [preco, setPreco] = useState("");
    const [quantidade, setQuantidade] = useState(0);

    const createProduct = e => {
        e.preventDefault();
        let i = 0;
        let foundIndex = -1;
        while (i < data.products.length && foundIndex === -1) {
            if (data.products[i].name === nome)
                foundIndex = i;
            i++;
        }

        if (foundIndex !== -1)
            alert("Produto com mesmo nome já existente.");
        else if (fileName === "Arquivo não selecionado")
            alert("Selecione uma imagem");
        else {
            const newProduct = {
                "name": nome,
                "author": autores,
                "description": descricao,
                "genders": generos,
                "cover": fileName,
                "price": preco,
                "available": parseInt(quantidade),
                "sold": 0
            }
    
            let dataCopy = data;

            dataCopy.products.push(newProduct);
            setData(dataCopy);
        }
    }

    const changeFile = e => {
        let filepath = e.target.value;
        let paths = filepath.split("\\");
        if (paths[paths.length-1])
            setFileName(paths[paths.length - 1]);
        else
            setFileName("Arquivo não selecionado");
    }

    return (
        <FormForm>
            <Description>Criação de Produto</Description>
            <FormDiv>
                <FormLabel>Nome</FormLabel>
                <FormInput required onInput={e => setNome(e.target.value)}/>
            </FormDiv>
            <FormDiv>
                <FormLabel>Descrição</FormLabel>
                <FormText required onInput={e => setDescricao(e.target.value)}></FormText>
            </FormDiv>
            <FormDiv>
                <FormLabel>Autores</FormLabel>
                <FormInput required onInput={e => setAutores(e.target.value.split(','))}/>
            </FormDiv>
            <FormDiv>
                <FormLabel>Gêneros</FormLabel>
                <FormInput required onInput={e => setGeneros(e.target.value.split(','))}/>
            </FormDiv>
            <FormDiv>
                <FormLabel>Preço</FormLabel>
                <FormInput type="number" required onInput={e => setPreco("R$ " + e.target.value)}/>
            </FormDiv>
            <FormDiv>
                <FormLabel>Foto</FormLabel>
                <FileDiv>
                    <p>{fileName}</p>
                    <FormFile>
                        Escolher arquivo
                        <input type="file" onInput={e => changeFile(e)} accept=".jpg,.png,.jpeg" required/>
                    </FormFile>
                </FileDiv>
            </FormDiv>
            <FormDiv centralize="true">
                <FormLabel>Quantidade disponível</FormLabel>
                <FormStock onInput={e => setQuantidade(e.target.value)} min="1" type="number" required/>
            </FormDiv>
            <FormButton style={{marginTop: "2em"}} onClick={e => createProduct(e)}>Salvar</FormButton>
        </FormForm>
    )
}