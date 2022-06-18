import { Description } from "../styles/adminStyles/HomeAdminStyle";
import { FormLabel, FormDiv, FormInput, FormText, FormFile, FileDiv, FormStock, FormButton, FormStockRead, FormForm } from "../styles/adminStyles/formStyle";
import { useEffect, useState } from "react";
import {useNavigate, useLocation } from "react-router-dom";
import PopUp from "../components/PopUp";
import { Row } from "../styles/userStyles/CartStyles";
import { PopUpButton } from "../styles/componentsStyles/PopUpStyle";

export default function EditProductForm({data, setData}) {
    const location = useLocation();
    const { productName } = location.state;
    const [product, setProduct] = useState(data.products[0]);
    const [productIndex, setProductIndex] = useState(0);
    const [editProduct, setEditProduct] = useState(data.products[0]);
    const [fileName, setFileName] = useState(data.products[0].cover);
    const [addStock, setAddStock] = useState(0);
    const [buttonPopUp, setButtonPopUp] = useState(false);
    const [buttonPopUpDelete, setButtonPopUpDelete] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        let i = 0;
        let found = false;
        while (i < data.products.length && !found) {
            if (data.products[i].name === productName)
                setProductIndex(i);
            i++;
        }
    }, [data.products, productName])

    useEffect(() => {
        setProduct(data.products[productIndex]);
        setEditProduct(data.products[productIndex]);
        setFileName(data.products[productIndex].cover)
    }, [productIndex, data.products])

    const editProductButton = e => {
        e.preventDefault();

        const updateProduct = product;
        for (let key in editProduct) {
            if (editProduct[key])
                updateProduct[key] = editProduct[key];
        }

        updateProduct["available"] += parseInt(addStock);

        let datacopy = data;
        datacopy.products[productIndex] = updateProduct;
        setData(datacopy);
        setButtonPopUp(true);
    }

    const changeFile = e => {
        let filepath = e.target.value;
        let paths = filepath.split("\\");
        setFileName(paths[paths.length - 1]);
    }

    const deleteProduct = (e, name) => {
        e.preventDefault();
        let datacopy = data;
        let i = 0;
        let found = false;
        while (i < data.products.length && !found) {
            if (datacopy.products[i].name === name) {
                datacopy.products.splice(i, 1);
                setData(datacopy);
                found = true
            }
            i++;
        }
        navigate(-1);
    }

    return (
        <>
        <FormForm>
            <Description>Edição de Produto</Description>
            <FormDiv>
                <FormLabel>Nome</FormLabel>
                <FormInput placeholder={product.name} value={editProduct.name} onInput={e => setEditProduct({...editProduct, name: e.target.value})}/>
            </FormDiv>
            <FormDiv>
                <FormLabel>Descrição</FormLabel>
                <FormText placeholder={product.description} value={editProduct.description} onInput={e => setEditProduct({...editProduct, description: e.target.value})}></FormText>
            </FormDiv>
            <FormDiv>
                <FormLabel>Autores</FormLabel>
                <FormInput placeholder={product.author.join(",")} value={editProduct.author.join(',')} onInput={e => setEditProduct({...editProduct, author: e.target.value.split(',')})} />
            </FormDiv>
            <FormDiv>
                <FormLabel>Gêneros</FormLabel>
                <FormInput placeholder={product.genders.join(",")} value={editProduct.genders.join(',')} onInput={e => setEditProduct({...editProduct, genders: e.target.value.split(',')})} />
            </FormDiv>
            <FormDiv>
                <FormLabel>Preço</FormLabel>
                <FormInput type="number" placeholder={parseFloat((product.price).substring(3))} value={parseFloat((editProduct.price).substring(3))} onInput={e => setEditProduct({...editProduct, price: "R$ " + e.target.value})}/>
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
                <FormStockRead>{product.available}</FormStockRead>
            </FormDiv>
            <FormDiv centralize="true">
                <FormLabel>Adicionar ao estoque</FormLabel>
                <FormStock type="number" dark="true" min="0" defaultValue={0} onInput={e => setAddStock(e.target.value)}/>
            </FormDiv>
            <FormDiv centralize="true">
                <FormLabel>Quantidade vendida</FormLabel>
                <FormStockRead>{product.sold}</FormStockRead>
            </FormDiv>
            <br></br>
            <FormButton delete="true" onClick={e => {e.preventDefault(); setButtonPopUpDelete(true); console.log("aaaaa")}}>Deletar Produto</FormButton>
            <FormButton style={{marginTop: "2em"}} onClick={e => editProductButton(e)}>Salvar</FormButton>
            </FormForm>
        <PopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}>
            <p> O produto {product.name} foi atualizado. </p>
        </PopUp>
        <PopUp trigger={buttonPopUpDelete} setTrigger={setButtonPopUpDelete}>
            <p> O produto {product.name} será removido. </p>
            <Row>
                <PopUpButton onClick={e => deleteProduct(e, product.name)}theme="light">Confirmar</PopUpButton>
                <PopUpButton onClick={() => setButtonPopUpDelete(false)}>Cancelar</PopUpButton>
            </Row>
        </PopUp>
        </>
    )
}