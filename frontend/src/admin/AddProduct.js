import { Description } from "../styles/adminStyles/HomeAdminStyle";
import { FormLabel, FormDiv, FormInput, FormText, FormFile, FileDiv, FormStock, FormButton, FormForm, SelectDiv, MultiSelectDiv } from "../styles/adminStyles/formStyle";
import { useState } from "react";
import PopUp from "../components/PopUp";


export default function AddProduct({data, setData}) {
    const [fileName, setFileName] = useState("Arquivo não selecionado");

    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [autores, setAutores] = useState([]);
    const [preco, setPreco] = useState("");
    const [quantidade, setQuantidade] = useState(0);
    const [buttonPopUp, setButtonPopUp] = useState(false);
    const [genders, setGenders] = useState({
        "genero1": "Selecione",
        "genero2": "Selecione",
        "genero3": "Selecione"
    });

    const createProduct = e => {
        e.preventDefault();
        let i = 0;
        let foundIndex = -1;
        while (i < data.products.length && foundIndex === -1) {
            if (data.products[i].name === nome)
                foundIndex = i;
            i++;
        }

        let hasGender = false;
        let productGenders = []
        for (let key in genders) {
            if (genders[key] !== "Selecione")
                hasGender = true;
            productGenders.push(genders[key]);
        }

        if (foundIndex !== -1)
            alert("Produto com mesmo nome já existente.");
        else if (fileName === "Arquivo não selecionado")
            alert("Selecione uma imagem");
        else if (!hasGender)
            alert("Selecione um gênero pelo menos");
        else {
            const newProduct = {
                "name": nome,
                "author": autores,
                "description": descricao,
                "genders": productGenders,
                "cover": fileName,
                "price": preco,
                "available": parseInt(quantidade),
                "sold": 0
            }
    
            let dataCopy = data;

            dataCopy.products.push(newProduct);
            setData(dataCopy);
            setButtonPopUp(true);
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
        <>
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
                <MultiSelectDiv>
                    <SelectDiv>
                        <label>Gênero 1</label>
                        <select defaultValue={"Selecione"} onChange={e => setGenders({...genders, "genero1": e.target.value})}>
                            <option value="Selecione">Selecione</option>
                            {
                                data.genders.map((gender, index) =>
                                    <option key={index} value={gender.name}>{gender.name}</option>  
                                )
                            }
                        </select>
                    </SelectDiv>
                    <SelectDiv>
                        <label>Gênero 2</label>
                        <select defaultValue={"Selecione"} onChange={e => setGenders({...genders, "genero2": e.target.value})}>
                            <option value="Selecione">Selecione</option>
                            {
                                data.genders.map((gender, index) =>
                                    <option key={index} value={gender.name}>{gender.name}</option>  
                                )
                            }
                        </select>
                    </SelectDiv>
                    <SelectDiv>
                        <label>Gênero 3</label>
                        <select defaultValue={"Selecione"} onChange={e => setGenders({...genders, "genero3": e.target.value})}>
                            <option value="Selecione">Selecione</option>
                            {
                                data.genders.map((gender, index) =>
                                    <option key={index} value={gender.name}>{gender.name}</option>  
                                )
                            }
                        </select>
                    </SelectDiv>
                </MultiSelectDiv>
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
        <PopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}>
            <p> O produto {nome} foi criado. </p>
        </PopUp>
        </>
    )
}