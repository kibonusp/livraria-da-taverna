import { FormDiv, FormInput, FormLabel, Container, FormFile, FileDiv, Description, Box, FormButton } from "../styles/userStyles/LoginStyles"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import PopUp from "../components/PopUp";
import axios from "axios"
const baseURL = "http://localhost:11323/user"


export default function Cadastro({data, setData}) {
    const [fileName, setFileName] = useState("Não selecionado")
    const [user, setUser] = useState({
        "name": undefined,
        "email": undefined,
        "telephone": undefined,
        "address": undefined,
        "password": undefined,
        "photo": undefined,
        "admin": false
    });
    const [passwordConfirm, setPasswordConfirm] = useState();
    const navigate = useNavigate();
    const [buttonPopUpMissing, setButtonPopUpMissing] = useState(false);
    const [buttonPopUpExist, setButtonPopUpExist] = useState(false);
    const [buttonPopUpSuccess, setButtonPopUpSuccess] = useState(false);
    const [buttonPopUpWrong, setButtonPopUpWrong] = useState(false);
    const [massageString, setMassageString] = useState("");
    const [image, setImage] = useState();
    
    

    const changeFile = e => {
        let filepath = e.target.value;
        let paths = filepath.split("\\");
        if (paths[paths.length-1]) {
            setFileName(paths[paths.length - 1]);
            setImage(e.target.files[0]);
        }
        else
            setFileName("Arquivo não selecionado");
    }
    
    const createUser = e => {
        e.preventDefault()
        let notCompleted = false;
        user.photo = fileName;
        let fields = []
        for (let key in user) {
            if (user[key] === undefined) {
                notCompleted = true;
                fields.push(key);
            }
            else if (key === "photo" && user[key] === "Não selecionado") {
                notCompleted = true;
                fields.push(key);
            }
        }

        if (notCompleted) {
            setMassageString(fields.join(", "));
            setButtonPopUpMissing(true);
        }

        else if (passwordConfirm === user.password) {
            axios.post(baseURL, user).then(response  => {
                const formData = new FormData();
                formData.append("image", image);
                fetch(baseURL +`/${response.data._id}/image`,
                {
                    body: formData,
                    method: "put"
                });
                setButtonPopUpSuccess(true)
                setTimeout(() => {
                    navigate("/login");
                }, 3000);

            }).catch(function(error) {
                if(error.response)
                    setButtonPopUpExist(true);
            })
        }
        else
            setButtonPopUpWrong(true);
    }
    
    return (
        <Container>
            <Box>
                <Description>Cadastro</Description>
                
                <FormDiv>
                    <FormLabel>Nome</FormLabel>
                    <FormInput placeholder="João da Silva" onInput={e => setUser({...user, name: e.target.value})} />
                </FormDiv>
                <FormDiv>
                    <FormLabel>Email</FormLabel>
                    <FormInput placeholder="joao@gmail.com"  onInput={e => setUser({...user, email: e.target.value})} />
                </FormDiv>
                <FormDiv>
                    <FormLabel>Telefone</FormLabel>
                    <FormInput placeholder="(55) 55555-5555" onInput={e => setUser({...user,telephone: e.target.value})} />
                </FormDiv>
                <FormDiv>
                    <FormLabel>Endereço</FormLabel>
                    <FormInput placeholder="Rua da Independência, 6942" onInput={e => setUser({...user, address: e.target.value})} />
                </FormDiv>
                <FormDiv>
                    <FormLabel>Senha</FormLabel>
                    <FormInput type="password" placeholder="********" onInput={e => setUser({...user, password: e.target.value})} />
                </FormDiv>
                <FormDiv>
                    <FormLabel>Confirme a senha</FormLabel>
                    <FormInput type="password" placeholder="********" onInput={e => setPasswordConfirm(e.target.value)} />
                </FormDiv>
                <FormDiv>
                    <FormLabel className="foto">Foto</FormLabel>
                    <FileDiv>
                        <p>{fileName}</p>
                        <FormFile>
                            Escolher arquivo
                            <input type="file" onInput={e => changeFile(e)} accept=".jpg,.png,.jpeg" required/>
                        </FormFile>
                    </FileDiv>
                </FormDiv>
                
                <FormButton onClick={e => createUser(e)}>Cadastrar</FormButton>
            </Box>
            <PopUp trigger={buttonPopUpMissing} setTrigger={setButtonPopUpMissing}>
                <p>Os campos {massageString} não foram preenchidos</p>
            </PopUp>
            <PopUp trigger={buttonPopUpExist} setTrigger={setButtonPopUpExist}>
                <p>Usuário já existente com este email</p>
            </PopUp>
            <PopUp trigger={buttonPopUpWrong} setTrigger={setButtonPopUpWrong}>
                <p>Senhas não coincidem</p>
            </PopUp>
            <PopUp trigger={buttonPopUpSuccess} setTrigger={setButtonPopUpSuccess}>
                <p>Usuário criado com sucesso, redirecionando para tela de login</p>
            </PopUp>
        </Container>

    )
}