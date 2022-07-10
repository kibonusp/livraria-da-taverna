import { Container, Description } from "../styles/adminStyles/HomeAdminStyle";
import { ResultList, Result, Search } from '../styles/adminStyles/UsersStyles';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";

export default function EditProduct() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([])
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios.get("http://localhost:11323/produto").then(response => {
            setProducts(response.data);
            setFilteredProducts(response.data);
        })
    }, [])

    useEffect(() => {
        let newProducts = []
        for (let product of products) {
            let formatedProduct = product.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
            let formatedAuthor = product.author[0].normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
            let formatedSearch = search.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
            if (formatedProduct.includes(formatedSearch) || formatedAuthor.includes(formatedSearch))
                newProducts.push(product);
        }
        setFilteredProducts(newProducts);
        console.log(newProducts);
    }, [search, products])

    return (
        <Container>
            <Description>Escolha um produto para gerenciar</Description>
            <Search onInput={e => setSearch(e.target.value)}/>
            <ResultList>
                {
                    filteredProducts.map((product, index) =>
                        <Link key={index} to="/admin/products/edit/form" state={{ productID: product._id }}>
                            <Result>
                                <p>{product.name}</p>
                                <p>{product.author[0].split(' ')[product.author[0].split(' ').length-1].toUpperCase() + ", " + product.author[0].split(' ')[0].toUpperCase()}</p>
                            </Result>
                        </Link>
                    )
                }
            </ResultList>
        </Container>
    )
}