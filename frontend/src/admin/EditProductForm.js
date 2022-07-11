import { Description } from "../styles/adminStyles/HomeAdminStyle";
import { FormLabel, FormDiv, FormInput, FormText, FormFile, FileDiv, FormStock, FormButton, FormStockRead, FormForm, MultiSelectDiv, SelectDiv } from "../styles/adminStyles/formStyle";
import { useEffect, useState } from "react";
import {useNavigate, useLocation } from "react-router-dom";
import PopUp from "../components/PopUp";
import { Row } from "../styles/userStyles/CartStyles";
import { PopUpButton } from "../styles/componentsStyles/PopUpStyle";
import axios from "axios";
import { getCookie } from "../auth";

export default function EditProductForm({data, setData}) {
    const location = useLocation();
    const { productID } = location.state;
    const [fileName, setFileName] = useState();
    const [image, setImage] = useState();
    const [editProduct, setEditProduct] = useState(false);
    const [product, setProduct] = useState({
        "name": undefined,
        "author": undefined,
        "description": undefined,
        "genders": undefined,
        "price": undefined,
        "available": undefined,
        "sold": undefined
    });
    const [addStock, setAddStock] = useState(0);
    const [buttonPopUp, setButtonPopUp] = useState(false);
    const [buttonPopUpDelete, setButtonPopUpDelete] = useState(false);
    const navigate = useNavigate();
    const [allGenders, setAllGenders] = useState([]);
    const [genders, setGenders] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:11323/produto/${productID}`).then(response => {
            setProduct({
                "name": response.data.name,
                "author": response.data.author,
                "description": response.data.description,
                "price": response.data.price,
                "available": response.data.available,
                "sold": response.data.sold
            });
            setFileName(response.data.cover);
            setGenders(response.data.genders)
            // let genderPromisses = []
            // for (let genderID of response.data.genders) {
            //     genderPromisses.push(axios.get(`http://localhost:11323/genero/${genderID}`))
            // }
            // Promise.all(genderPromisses).then(gendersAPI => {
            //     setGenders(gendersAPI.map(genderAPI => genderAPI.data.name))
            // })
        }).catch(err => {
            console.log(err)
        })

        axios.get("http://localhost:11323/genero").then(response => {
            setAllGenders(response.data);
        })
    }, [productID])

    const setGender = (i, value) => {
        let genderscopy = genders;
        genderscopy[i] = value;
        setGenders(genderscopy);
    }

    const editProductButton = e => {
        e.preventDefault();

        // // decido como \ai ser a atualização
        // for (let key in editProduct) {
        //     if (editProduct[key])
        //         updateProduct[key] = editProduct[key];
        // }

        // let genderPromises = []
        // for (let gender of genders) {
        //     genderPromises.push(axios.get(`http://localhost:11323/genero/nome/${gender}`))
        // }

        let curGenders = []
        genders.forEach(gender => {
            curGenders.push(gender._id)
        })
        
        let formData = new FormData();
        formData.append("image", image);
        fetch(`http://localhost:11323/produto/${productID}/image`,
        {
            body: formData,
            method: "put",
            headers: new Headers({
                'Authorization': `Bearer ${getCookie("token")}`
            })
        }).then(() => {
            axios.put(`http://localhost:11323/produto/${productID}`, {
                "name": product.name,
                "author": product.author,
                "description": product.description,
                "genders": curGenders,
                "cover": fileName,
                "price": product.price,
                "available": parseInt(product.available) + parseInt(addStock),
                "sold": product.sold
            }, {
                headers: {
                    'authorization': `Bearer ${getCookie("token")}`
                }
            }).then((response)=>{
                setProduct({
                    "name": response.data.name,
                    "author": response.data.author,
                    "description": response.data.description,
                    "price": response.data.price,
                    "available": response.data.available,
                    "sold": response.data.sold
                });
            })
        });

        setButtonPopUp(true);
    }

    const changeFile = e => {
        let filepath = e.target.value;
        let paths = filepath.split("\\");
        setFileName(paths[paths.length - 1]);
        setImage(e.target.files[0]);
    }

    const deleteProduct = e => {
        e.preventDefault();
        axios.delete(`http://localhost:11323/produto/${productID}`, {
            headers: {
                'authorization': `Bearer ${getCookie("token")}`
            }
        })
        navigate(-1);
    }

    return (
        <>
        <FormForm>
            <Description>Edição de Produto</Description>
            <FormDiv>
                <FormLabel>Nome</FormLabel>
                <FormInput placeholder={product.name} readOnly={!editProduct}  onInput={e => setProduct({...product, name: e.target.value})}/>
            </FormDiv>
            <FormDiv>
                <FormLabel>Descrição</FormLabel>
                <FormInput placeholder={product.description} readOnly={!editProduct}  onInput={e => setProduct({...product, description: e.target.value})}/>
            </FormDiv>
            <FormDiv>
                <FormLabel>Autores</FormLabel>
                <FormInput placeholder={product.author.join(",")} readOnly={!editProduct} onInput={e => setProduct({...product, author: e.target.value.split(',')})} />
            </FormDiv>
            <FormDiv>
                <FormLabel>Gêneros</FormLabel>
                <MultiSelectDiv>
                    <SelectDiv>
                        <label>Gênero 1</label>
                        <select defaultValue={genders[0] === undefined ? "Selecione" : genders[0]} onChange={e => setGender(0, e.target.value)}>
                            <option value="Selecione">Selecione</option>
                            {
                                allGenders.map((gender, index) =>
                                    <option key={index} value={gender}>{gender.name}</option>  
                                )
                            }
                        </select>
                    </SelectDiv>
                    <SelectDiv>
                        <label>Gênero 2</label>
                        <select defaultValue={genders[1] === undefined ? "Selecione" : genders[1]} onChange={e => setGender(1, e.target.value)}>
                            <option value="Selecione">Selecione</option>
                            {
                                allGenders.map((gender, index) =>
                                    <option key={index} value={gender}>{gender.name}</option>  
                                )
                            }
                        </select>
                    </SelectDiv>
                    <SelectDiv>
                        <label>Gênero 3</label>
                        <select defaultValue={genders[2] === undefined ? "Selecione" : genders[2]} onChange={e => setGender(2, e.target.value)}>
                            <option value="Selecione">Selecione</option>
                            {
                                allGenders.map((gender, index) =>
                                    <option key={index} value={gender}>{gender.name}</option>  
                                )
                            }
                        </select>
                    </SelectDiv>
                </MultiSelectDiv>
            </FormDiv>
            <FormDiv>
                <FormLabel>Preço</FormLabel>
                <FormInput type="number" placeholder={parseFloat((product.price).substring(3))} readOnly={!editProduct} onInput={e => setProduct({...product, price: "R$ " + e.target.value})}/>
            </FormDiv>
            <FormDiv>
                <FormLabel>Foto</FormLabel>
                <FileDiv>
                    <p>{fileName}</p>
                    <FormFile>
                        Escolher arquivo
                        <input type="file" onInput={e => changeFile(e)} readOnly={!editProduct}/>
                    </FormFile>
                </FileDiv>
            </FormDiv>
            <FormDiv centralize="true">
                <FormLabel>Quantidade disponível</FormLabel>
                <FormStockRead>{product.available}</FormStockRead>
                
            </FormDiv>
            <FormDiv centralize="true">
                <FormLabel>Adicionar ao estoque</FormLabel>
                <FormStock type="number" dark="true" min="0" defaultValue={0} readOnly={!editProduct} onInput={e => setAddStock(parseInt(e.target.value))}/>
            </FormDiv>
            <FormDiv centralize="true">
                <FormLabel>Quantidade vendida</FormLabel>
                <FormStockRead>{product.sold}</FormStockRead>
            </FormDiv>
            <br></br>
            <FormButton delete="true" onClick={e => {e.preventDefault(); setButtonPopUpDelete(true)}}>Deletar Produto</FormButton>
            {  
                    editProduct === false ? 
                    <FormButton onClick={() => setEditProduct(true)}>Editar Página</FormButton>
                    :
                    <>
                        <FormButton onClick={e => editProductButton(e)}>Salvar</FormButton>
                        <FormButton onClick={() => setEditProduct(false)}>Cancelar</FormButton>
                    </>
                }
            </FormForm>
        <PopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}>
            {
                product === undefined ?
                "" : 
                <p> O produto {product.description} foi atualizado. </p>
            }
        </PopUp>
        <PopUp trigger={buttonPopUpDelete} setTrigger={setButtonPopUpDelete}>
            {
                product === undefined ?
                "" :
                <p> O produto {product.name} será removido. </p>
            }
            <Row>
                {
                    product === undefined ?
                    "" :
                    <PopUpButton onClick={e => deleteProduct(e, product.name)}theme="light">Confirmar</PopUpButton>
                }
                <PopUpButton onClick={() => setButtonPopUpDelete(false)}>Cancelar</PopUpButton>
            </Row>
        </PopUp>
        </>
    )
}