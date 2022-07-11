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
    const [product, setProduct] = useState();
    const [editProduct, setEditProduct] = useState();
    const [fileName, setFileName] = useState();
    const [image, setImage] = useState();
    const [addStock, setAddStock] = useState(0);
    const [buttonPopUp, setButtonPopUp] = useState(false);
    const [buttonPopUpDelete, setButtonPopUpDelete] = useState(false);
    const navigate = useNavigate();
    const [allGenders, setAllGenders] = useState([]);
    const [genders, setGenders] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:11323/produto/${productID}`).then(response => {
            setProduct(response.data);
            setEditProduct(response.data)
            setFileName(response.data.cover);
            let genderPromisses = []
            for (let genderID of response.data.genders) {
                genderPromisses.push(axios.get(`http://localhost:11323/genero/${genderID}`))
            }
            Promise.all(genderPromisses).then(gendersAPI => {
                setGenders(gendersAPI.map(genderAPI => genderAPI.data.name))
            })
        }).catch(err => {
            console.log(err)
        })

        axios.get("http://localhost:11323/genero").then(response => {
            setAllGenders((response.data).map(value => value.name));
        })
    }, [productID])

    const setGender = (i, value) => {
        let genderscopy = genders;
        genderscopy[i] = value;
        setGenders(genderscopy);
    }

    const editProductButton = e => {
        e.preventDefault();

        // decido como \ai ser a atualização
        const updateProduct = product;
        for (let key in editProduct) {
            if (editProduct[key])
                updateProduct[key] = editProduct[key];
        }

        let genderPromises = []
        for (let gender of genders) {
            genderPromises.push(axios.get(`http://localhost:11323/genero/nome/${gender}`))
        }

        Promise.all(genderPromises).then(response => {
            updateProduct.genders = response.data.map(gender => gender)
            updateProduct.cover = fileName;
            updateProduct.available += parseInt(addStock);
            
            let formData = new FormData();
            formData.append("image", image);
            fetch(`http://localhost:11323/produto/${productID}/image`,
            {
                body: formData,
                method: "put",
                headers: new Headers({
                    'Authorization': `Bearer ${getCookie("token")}`
                })
            }).then(response => {
                axios.put(`http://localhost:11323/produto/${productID}`, updateProduct, {
                    headers: {
                        'authorization': `Bearer ${getCookie("token")}`
                    }
                })
            });
        })

        setButtonPopUp(true);
    }

    const changeFile = e => {
        let filepath = e.target.value;
        let paths = filepath.split("\\");
        setFileName(paths[paths.length - 1]);
        setImage(e.target.files[0]);
    }

    const deleteProduct = (e, name) => {
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
                {
                    product === undefined ?
                    "" :
                    <FormInput placeholder={product.name} value={editProduct.name} onInput={e => setEditProduct({...editProduct, name: e.target.value})}/>
                }
            </FormDiv>
            <FormDiv>
                <FormLabel>Descrição</FormLabel>
                {
                    product === undefined ?
                    "" :
                    <FormText placeholder={product.description} value={editProduct.description} onInput={e => setEditProduct({...editProduct, description: e.target.value})}></FormText>
                }
            </FormDiv>
            <FormDiv>
                <FormLabel>Autores</FormLabel>
                {
                    product === undefined ?
                    "" :
                    <FormInput placeholder={product.author.join(",")} value={editProduct.author.join(',')} onInput={e => setEditProduct({...editProduct, author: e.target.value.split(',')})} />
                }
            </FormDiv>
            <FormDiv>
                <FormLabel>Gêneros</FormLabel>
                <MultiSelectDiv>
                    <SelectDiv>
                        <label>Gênero 1</label>
                        <select defaultValue={product === undefined ? "Selecione" : product.genders[0]} onChange={e => setGender(0, e.target.value)}>
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
                        <select defaultValue={product === undefined ? "Selecione" : product.genders[1]} onChange={e => setGender(1, e.target.value)}>
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
                        <select defaultValue={product === undefined ? "Selecione" : product.genders[2]} onChange={e => setGender(2, e.target.value)}>
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
                {
                    product === undefined ? 
                    "" :
                    <FormInput type="number" placeholder={parseFloat((product.price).substring(3))} value={parseFloat((editProduct.price).substring(3))} onInput={e => setEditProduct({...editProduct, price: "R$ " + e.target.value})}/>
                }
            </FormDiv>
            <FormDiv>
                <FormLabel>Foto</FormLabel>
                <FileDiv>
                    <p>{fileName}</p>
                    <FormFile>
                        Escolher arquivo
                        <input type="file" onChange={e => changeFile(e)}/>
                    </FormFile>
                </FileDiv>
            </FormDiv>
            <FormDiv centralize="true">
                <FormLabel>Quantidade disponível</FormLabel>
                {
                    product === undefined ?
                    "" :
                    <FormStockRead>{product.available}</FormStockRead>
                }
            </FormDiv>
            <FormDiv centralize="true">
                <FormLabel>Adicionar ao estoque</FormLabel>
                <FormStock type="number" dark="true" min="0" defaultValue={0} onInput={e => setAddStock(e.target.value)}/>
            </FormDiv>
            <FormDiv centralize="true">
                <FormLabel>Quantidade vendida</FormLabel>
                {
                    product === undefined ? 
                    "" :
                    <FormStockRead>{product.sold}</FormStockRead>
                }
            </FormDiv>
            <br></br>
            <FormButton delete="true" onClick={e => {e.preventDefault(); setButtonPopUpDelete(true)}}>Deletar Produto</FormButton>
            <FormButton style={{marginTop: "2em"}} onClick={e => editProductButton(e)}>Salvar</FormButton>
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
    )
}