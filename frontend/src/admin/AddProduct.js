import { Description } from "../styles/adminStyles/HomeAdminStyle";
import { FormLabel, FormDiv, FormInput, FormText, FormFile, FileDiv, FormStock, FormButton, FormForm, SelectDiv, MultiSelectDiv } from "../styles/adminStyles/formStyle";
import { useState } from "react";
import PopUp from "../components/PopUp";
import axios from "axios"
import { useEffect } from "react";
import { getCookie } from "../auth";
import {useNavigate } from "react-router-dom";


export default function AddProduct() {
    const [fileName, setFileName] = useState("Arquivo não selecionado");
    const [image, setImage] = useState();
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [autores, setAutores] = useState([]);
    const [preco, setPreco] = useState();
    const [quantidade, setQuantidade] = useState(0);
    const [buttonPopUp, setButtonPopUp] = useState(false);
    const [allGenders, setAllGenders] = useState([]);
    const [genders, setGenders] = useState({
        "genero1": "Selecione",
        "genero2": "Selecione",
        "genero3": "Selecione"
    });
    const navigate = useNavigate();


    useEffect(() => {
        axios.get("http://localhost:11323/genero").then(response => {
            setAllGenders((response.data).map(value => value.name));
        })
    }, [])

    const createProduct = e => {
        e.preventDefault();

        let hasGender = false;
        let productGenders = []
        for (let key in genders) {
            if (genders[key] !== "Selecione") {
                hasGender = true;
                productGenders.push(genders[key]);
            }
        }

        let formatedPreco = preco.toString();
        if (!formatedPreco.includes('.'))
            formatedPreco += ".00"

        if (fileName === "Arquivo não selecionado")
            alert("Selecione uma imagem");
        else if (!hasGender)
            alert("Selecione um gênero pelo menos");
        else {
            let genderPromises = []
            for (let gender of productGenders) {
                genderPromises.push(axios.get(`http://localhost:11323/genero/nome/${gender}`));
            }
            Promise.all(genderPromises).then(ids => {
                axios.post("http://localhost:11323/produto", {
                    "name": nome,
                    "author": autores,
                    "description": descricao,
                    "genders": ids.map(value => value.data._id),
                    "cover": fileName,
                    "price": "R$ " + formatedPreco,
                    "available": parseInt(quantidade),
                    "sold": 0
                }, {
                    headers: {
                        'authorization': `Bearer ${getCookie("token")}`
                    }
                }).then(response => {
                    const formData = new FormData();
                    formData.append("image", image);
                    fetch(`http://localhost:11323/produto/${response.data._id}/image`,
                    {
                        body: formData,
                        method: "put",
                        headers: new Headers({
                            'Authorization': `Bearer ${getCookie("token")}`
                        })
                    });
                }).catch(e => console.log(e));
                setButtonPopUp(true);
                setTimeout(() => {
                    navigate(-1);
                }, 3000);
            })
        }
    }

    const changeFile = e => {
        let filepath = e.target.value;
        let paths = filepath.split("\\");
        if (paths[paths.length-1]) {
            setFileName(paths[paths.length - 1]);
            setImage(e.target.files[0]);
        }
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
                                allGenders.map((gender, index) =>
                                    <option key={index} value={gender}>{gender}</option>  
                                )
                            }
                        </select>
                    </SelectDiv>
                    <SelectDiv>
                        <label>Gênero 2</label>
                        <select defaultValue={"Selecione"} onChange={e => setGenders({...genders, "genero2": e.target.value})}>
                            <option value="Selecione">Selecione</option>
                            {
                                allGenders.map((gender, index) =>
                                    <option key={index} value={gender}>{gender}</option>  
                                )
                            }
                        </select>
                    </SelectDiv>
                    <SelectDiv>
                        <label>Gênero 3</label>
                        <select defaultValue={"Selecione"} onChange={e => setGenders({...genders, "genero3": e.target.value})}>
                            <option value="Selecione">Selecione</option>
                            {
                                allGenders.map((gender, index) =>
                                    <option key={index} value={gender}>{gender}</option>  
                                )
                            }
                        </select>
                    </SelectDiv>
                </MultiSelectDiv>
            </FormDiv>
            <FormDiv>
                <FormLabel>Preço</FormLabel>
                <FormInput type="number" required onInput={e => setPreco(parseFloat(e.target.value))}/>
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