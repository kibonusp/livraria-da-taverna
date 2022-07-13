
import { useLocation } from "react-router-dom"
import { Titulo, Container, FormDiv, FormInput, FormLabel, FormButton, ActionDiv, Row } from "../styles/userStyles/FinalizarStyles"
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import PopUp from "../components/PopUp";
import axios from "axios";
const baseURL = "http://localhost:11323/produto"

function validarCPF(cpf){
    cpf = cpf.replace(/\D/g, '');
    if(cpf.toString().length != 11 || /^(\d)\1{10}$/.test(cpf)) return false;
    var result = true;
    [9,10].forEach(function(j){
        var soma = 0, r;
        cpf.split(/(?=)/).splice(0,j).forEach(function(e, i){
            soma += parseInt(e) * ((j+2)-(i+1));
        });
        r = soma % 11;
        r = (r <2)?0:11-r;
        if(r != cpf.substring(j, j+1)) result = false;
    });
    return result;
}

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
            else if(key === "cpf" && !validarCPF(pay[key])){
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
            axios.get(baseURL).then((response) => {
                let confirmPromises = []
                for (let book of carrinho) {
                    console.log(book)
                    confirmPromises.push(axios.put(`http://localhost:11323/produto/${book.id}/purchase`, {"quantity": book.quantity}))
                }
                Promise.all(confirmPromises).then(confirmBook => {
                    console.log(confirmBook)
                }).catch(e => console.log(e));
                setProducts(response.data);
                setData({...data, cart: []})
                setButtonPopUpSuccess(true);
                setTimeout(() => {
                    navigate("/");
                }, 3000);
            });
        }
    }


    return (
        <Container>
            <Titulo>Finalizar Compra</Titulo>
            <hr></hr>
            <ActionDiv>
                <Row>
                    <FormDiv>
                        <FormLabel>CPF</FormLabel>
                        <FormInput type="text" placeholder="111.111.111-11" maxLength={14} onInput={e => setPay({...pay, cpf: e.target.value})}/>
                    </FormDiv> 
                    <FormDiv>
                        <FormLabel>Número do Cartão</FormLabel>
                        <FormInput type="text" placeholder="5426 5306 9148 3961" maxLength={16} onInput={e => setPay({...pay, cartao: e.target.value})}/>
                    </FormDiv>
                </Row>
                <Row>
                    <FormDiv>
                        <FormLabel>Código de Segurança - CVV</FormLabel>
                        <FormInput type="text" placeholder="123" maxLength={3} inputMode="numeric" pattern="\d*" onInput={e => setPay({...pay, cvv: e.target.value})}/>
                    </FormDiv>
                    <FormDiv>
                        <FormLabel>Endereço de Entrega</FormLabel>
                        <FormInput type="text" placeholder="Rua Cleyton da Silva 69420" onInput={e => setPay({...pay, address: e.target.value})}/>
                    </FormDiv>
                </Row>
            </ActionDiv>
            <FormButton onClick={e => createPay(e)}>Comprar</FormButton>
            <PopUp trigger={buttonPopUpWrong} setTrigger={setButtonPopUpWrong}>
                <p>Os campos {massageString} não foram preenchidos ou estão no formato errado</p>
            </PopUp>
            <PopUp trigger={buttonPopUpSuccess} setTrigger={setButtonPopUpSuccess}>
                <p>Sucesso na compra, redirecionando para início</p>
            </PopUp>
        </Container>
    )
}