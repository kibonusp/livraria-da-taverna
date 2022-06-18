import logoPhoto from "../assets/logo_removido.png"
import { Painel, LogoPhoto, Scroll, Circulo, Container } from "../styles/userStyles/HomeStyles"

import HomeSecao from "./HomeSecao"

import { useEffect, useState } from "react"

export default function Home({data, setData}) {

    const paineis = ["#773622", "#cb7f2b", "#B4441C"]

    const [painel, setPainel] = useState(0);
    useEffect(() => {
        const timer = setTimeout(() => {
            setPainel((painel+1)%paineis.length);
        }, 6000);
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
                <HomeSecao nome="Mais Vendidos" livros={data.products}/>
                <hr></hr>
                <HomeSecao nome="Lançamentos" livros={data.products}/>
            </Container>
        </>
    )
}