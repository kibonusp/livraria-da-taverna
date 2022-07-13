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
    const [placeHolder, setPlaceHolder] = useState({})
    const [addStock, setAddStock] = useState(0);
    const [buttonPopUp, setButtonPopUp] = useState(false);
    const [buttonPopUpDelete, setButtonPopUpDelete] = useState(false);
    const navigate = useNavigate();
    const [allGenders, setAllGenders] = useState([]);
    const [genders, setGenders] = useState([])
    const [update, setUpdate] = useState(false)
    useEffect(() => {
        axios.get("http://localhost:11323/genero").then(response => {
            setAllGenders(response.data);
        }).then(() => {
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
                for(let i = 0; i < 3; i++){
                    if(!response.data.genders[i]) response.data.genders.push("")
                }
                setGenders(response.data.genders)
            }).catch(err => {
                console.log(err)
            })
        })
    }, [productID])

    useEffect(() => {
            axios.get(`http://localhost:11323/produto/${productID}`).then(response => {
                setPlaceHolder({
                    "name": response.data.name,
                    "author": response.data.author,
                    "description": response.data.description,
                    "price": response.data.price,
                })
            }).catch(err => {
                console.log(err)
            })
    }, [productID, update])


    const setGender = (i, value) => {
        let genderscopy = genders;
        genderscopy[i] = value
        setGenders(genderscopy);
    }

    const editProductButton = e => {
        e.preventDefault();
        setUpdate(!update)
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
            let name = product.name
            if(name === "" || name === null || name === undefined) name = placeHolder.name
            let author = product.author
            if(author === "" || author === null || author === undefined) author = placeHolder.author
            let description = product.description
            if(description === "" || description === null || description === undefined) description = placeHolder.description
            let price = product.price
            if(price === "" || price === null || price === undefined) price = placeHolder.price
            let formatedPreco = "R$ " + price.toString();
            if (!formatedPreco.includes('.')) formatedPreco += ".00"
            
            axios.put(`http://localhost:11323/produto/${productID}`, {
                "name": name,
                "author": author,
                "description": description,
                "genders": genders.filter(gender => gender !== ""),
                "price": formatedPreco,
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
                for(let i = 0; i < 3; i++){
                    if(!response.data.genders[i]) response.data.genders.push("")
                }
                setGenders(response.data.genders)
            })
        });

        setButtonPopUp(true);
        setTimeout(() => {
            navigate(-1);
        }, 3000);
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
        {
            product.name === undefined  || genders === [] || allGenders === [] || placeHolder === {} ?
            "" :
            <>
        <FormForm>
            <Description>Edição de Produto</Description>
            <FormDiv>
                <FormLabel>Nome</FormLabel>
                <FormInput placeholder={placeHolder.name} readOnly={!editProduct}  onInput={e => setProduct({...product, name: e.target.value})}/>
            </FormDiv>
            <FormDiv>
                <FormLabel>Descrição</FormLabel>
                <FormInput placeholder={placeHolder.description} readOnly={!editProduct}  onInput={e => setProduct({...product, description: e.target.value})}/>
            </FormDiv>
            <FormDiv>
                <FormLabel>Autores</FormLabel>
                <FormInput placeholder={placeHolder.author.join(",")} readOnly={!editProduct} onInput={e => setProduct({...product, author: e.target.value.split(',')})} />
            </FormDiv>
            <FormDiv>
                <FormLabel>Gêneros</FormLabel>
                <MultiSelectDiv>
                    <SelectDiv>
                        <label>Gênero 1</label>
                        <select defaultValue={genders[0]} onChange={e => setGender(0, e.target.value)}>
                            <option value="">Selecione</option>
                            {
                                allGenders.map((gender, index) =>
                                    <option key={index} value={gender._id}>{gender.name}</option>  
                                )
                            }
                        </select>
                    </SelectDiv>
                    <SelectDiv>
                        <label>Gênero 2</label>
                        <select defaultValue={genders[1]} onChange={e => setGender(1, e.target.value)}>
                            <option value="">Selecione</option>
                            {
                                allGenders.map((gender, index) =>
                                    <option key={index} value={gender._id}>{gender.name}</option>  
                                    )
                            }
                        </select>
                    </SelectDiv>
                    <SelectDiv>
                        <label>Gênero 3</label>
                        <select defaultValue={genders[2]} onChange={e => setGender(2, e.target.value)}>
                            <option value="">Selecione</option>
                            {
                                allGenders.map((gender, index) =>
                                    <option key={index} value={gender._id}>{gender.name}</option>  
                                )
                            }
                        </select>
                    </SelectDiv>
                </MultiSelectDiv>
            </FormDiv>
            <FormDiv>
                <FormLabel>Preço</FormLabel>
                <FormInput type="number" placeholder={placeHolder.price} readOnly={!editProduct} onInput={e => setProduct({...product, price: parseFloat(e.target.value).toFixed(2)})}/>
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
                <p> O produto {product.name} foi atualizado. </p>
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
        }
        </>
    )
}