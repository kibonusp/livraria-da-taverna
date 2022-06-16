import { Container, Description } from "../styles/adminStyles/HomeAdminStyle";
import { ResultList, Result, Search } from '../styles/adminStyles/UsersStyles';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

export default function EditProduct({data, setData}) {
    const [products, setProducts] = useState(data.products);
    const [search, setSearch] = useState("");

    useEffect(() => {
        let newProducts = []
        for (let product of data.products) {
            let formatedProduct = product.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
            let formatedAuthor = product.author[0].normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
            let formatedSearch = search.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
            if (formatedProduct.includes(formatedSearch) || formatedAuthor.includes(formatedSearch))
                newProducts.push(product);
        }
        setProducts(newProducts);
    }, [search, data.products])

    return (
        <Container>
            <Description>Escolha um produto para gerenciar</Description>
            <Search onInput={e => setSearch(e.target.value)}/>
            <ResultList>
                {
                    products.map((product, index) =>
                        <Link key={index} to="/admin/products/edit/form" state={{ productName: product.name }}>
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