
import { useLocation } from "react-router-dom"
import { Titulo, Container, FormDiv, FormInput, FormLabel, FormButton, ActionDiv, Row } from "../styles/userStyles/FinalizarStyles"
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import PopUp from "../components/PopUp";
import axios from "axios";
import { getCookie } from "../auth";
const baseURL = "http://localhost:11323/produto"

export default function Finalizar({data, setData}) {
    const location = useLocation();
    const {carrinho} = location.state 
    const [products, setProducts] = useState([]);

    const [pay, setPay] = useState({
        "cpf": undefined,
        "cartao": undefined,
        "cvv": undefined,
        "address": undefined,
    });
    const [massageString, setMassageString] = useState("");
    const [buttonPopUpSuccess, setButtonPopUpSuccess] = useState(false);
    const [buttonPopUpWrong, setButtonPopUpWrong] = useState(false);
    const navigate = useNavigate();

    const createPay = e => {
        e.preventDefault()
        let notCompleted = false;
        let fields = []
        for (let key in pay) {
            if (pay[key] === undefined) {
                notCompleted = true;
                fields.push(key);
            }
        }

        console.log(pay);
        if (notCompleted) {
            setMassageString(fields.join(", "));
            setButtonPopUpWrong(true);
        }

        else{
            console.log("fznd a req agr")
            
            axios.put(baseURL, {
                headers: {
                    'authorization': `Bearer ${getCookie("token")}`
                }
            }).then(response => {
        
                
            //axios.get(baseURL).then((response) => {
                let confirmPromises = []
                console.log("fora do loop")
                for (let book of carrinho) {
                    console.log(book)
                    confirmPromises.push(axios.put(`http://localhost:11323/produto/${book._id}/purchase`))
                }
                Promise.all(confirmPromises).then(confirmBook => {
                    console.log(confirmBook)
                });
                console.log("to aqui")
                setProducts(response.data);
                setButtonPopUpSuccess(true);
                setTimeout(() => {
                    navigate("/");
                }, 3000);
            });
        }
    }
        /*
useEffect(() => {
        axios.put(baseURL, {
                headers: {
                    'authorization': `Bearer ${getCookie("token")}`
                }
            }).then(response => {
            let confirmPromises = []
            for (let book in carrinho) {
                console.log(book)
                confirmPromises.push(axios.put(`http://localhost:11323/produto/${book._id}/purchase`))
            }
            Promise.all(confirmPromises).then(confirmBook => {
                console.log(confirmBook)
            });
            console.log("to aqui")
                setProducts(response.data);
                setButtonPopUpSuccess(true);
                setTimeout(() => {
                    navigate("/");
                }, 3000);
        });
    }, []);

        useEffect(() => {
        axios.get(http://localhost:11323/produto/${productID}).then(response => {
            setProduct(response.data);
            setEditProduct(response.data)
            setFileName(response.data.cover);
            let genderPromisses = []
            for (let genderID of response.data.genders) {
                genderPromisses.push(axios.get(http://localhost:11323/genero/${genderID}))
            }
            Promise.all(genderPromisses).then(gendersAPI => {
                setGenders(gendersAPI.map(genderAPI => genderAPI.data.name))
                setUpdate(!update);
            })
        }).catch(err => {
            console.log(err)
        })

        axios.get("http://localhost:11323/genero").then(response => {
            setAllGenders((response.data).map(value => value.name));
        })
    }, [])


    axios.put(`http://localhost:11323/produto/${carrinho}/purchase`, {
                headers: {
                    'authorization': `Bearer ${getCookie("token")}`
                }
            }).then(response => {
                console.log("to aqui")
                setProducts(response.data);
                setButtonPopUpSuccess(true);
                setTimeout(() => {
                    navigate("/");
                }, 3000);
            })    


        e.preventDefault()
        let notCompleted = false;
        let fields = []
        for (let key in pay) {
            if (pay[key] === undefined) {
                notCompleted = true;
                fields.push(key);
            }
        }

        console.log(pay);
        if (notCompleted) {
            setMassageString(fields.join(", "));
            setButtonPopUpWrong(true);
        }

        else{
                setData({...data, products: data.products.map((product, index) => {
                    let cartProduct = data.cart.find(item => item.indexProduct === index);
                    console.log(cartProduct);
                    if (cartProduct !== undefined)
                        return {...product, available: product.available - cartProduct.quantity, sold: product.sold + cartProduct.quantity}
                    return product;
                }), cart: []})

                setButtonPopUpSuccess(true);
                setTimeout(() => {
                    navigate("/");
                }, 3000);
                
        }
    }*/


    return (
        <Container>
            <Titulo>Finalizar Compra</Titulo>
            <hr></hr>
            <ActionDiv>
                <Row>
                    <FormDiv>
                        <FormLabel>CPF</FormLabel>
                        <FormInput placeholder="111.111.111-11" onInput={e => setPay({...pay, cpf: e.target.value})}/>
                    </FormDiv>
                    <FormDiv>
                        <FormLabel>Número do Cartão</FormLabel>
                        <FormInput placeholder="5426 5306 9148 3961" onInput={e => setPay({...pay, cartao: e.target.value})}/>
                    </FormDiv>
                </Row>
                <Row>
                    <FormDiv>
                        <FormLabel>Código de Segurança - CVV</FormLabel>
                        <FormInput placeholder="123" onInput={e => setPay({...pay, cvv: e.target.value})}/>
                    </FormDiv>
                    <FormDiv>
                        <FormLabel>Endereço de Entrega</FormLabel>
                        <FormInput placeholder="Rua Cleyton da Silva 69420" onInput={e => setPay({...pay, address: e.target.value})}/>
                    </FormDiv>
                </Row>
            </ActionDiv>
            <FormButton onClick={e => createPay(e)}>Comprar</FormButton>
            <PopUp trigger={buttonPopUpWrong} setTrigger={setButtonPopUpWrong}>
                <p>Os campos {massageString} não foram preenchidos</p>
            </PopUp>
            <PopUp trigger={buttonPopUpSuccess} setTrigger={setButtonPopUpSuccess}>
                <p>Sucesso na compra, redirecionando para início</p>
            </PopUp>
        </Container>
    )
}