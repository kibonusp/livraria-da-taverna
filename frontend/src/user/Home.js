import logoPhoto from "../assets/logo_fundo.png"
import i_robot from "../assets/robot.jpeg"
import sapiens from "../assets/sapiens.jpg"
import duna from "../assets/duna.jpeg"
import year from "../assets/1984.jpg"
import vermelho from "../assets/vermelho.jpeg"
import davinci from "../assets/davinci.jpg"
import { Painel, LogoPhoto, Scroll, Circulo, Container } from "../styles/userStyles/HomeStyles"

import HomeSecao from "./HomeSecao"

import { useEffect, useState } from "react"

export default function Home() {
    const livros = [
        {title: "I, Robot", author: "Isaac Asimov", price: "R$ 10,00", cover: i_robot},
        {title: "Sapiens: Uma breve história da humanidade", author: "Yuval Noah Harari", price: "R$ 10,00", cover: sapiens},
        {title: "Duna", author: "Frank Herbert", price: "R$ 10,00", cover: duna},
        {title: "1984", author: "George Orwell", price: "R$ 10,00", cover: year},
        {title: "Sherlock Holmes: Um Estudo em Vermelho", author: "Arthur Conan Doyle", price: "R$ 10,00", cover: vermelho},
        {title: "O Código Da Vinci", author: "Dan Brown", price: "R$ 10,00", cover: davinci}
    ]

    const paineis = ["red", "blue", "green"]

    const [painel, setPainel] = useState(0);
    useEffect(() => {
        const timer = setTimeout(() => {
            setPainel((painel+1)%paineis.length);
        }, 2000);
        return () => clearTimeout(timer);
    }, [painel, paineis.length]);

    return (
        <>
            <Painel color={paineis[painel]}>
                <LogoPhoto src={logoPhoto} alt="Logo da livraria" />
                <Scroll>
                    {
                        paineis.map((color, index) =>
                        index === painel ? 
                        <Circulo key={index}>
                            <div id="atual"></div>
                        </Circulo> :
                        <Circulo key={index} />)
                    }
                </Scroll>
            </Painel>
            <Container>
                <HomeSecao nome="Mais Vendidos" livros={livros}/>
                <hr></hr>
                <HomeSecao nome="Lançamentos" livros={livros}/>
            </Container>
        </>
    )
}