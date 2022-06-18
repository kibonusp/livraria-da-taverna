import { FormDiv, FormInput, FormLabel, Container, FormFile, FileDiv, Description, Box, FormButton } from "../styles/userStyles/LoginStyles"
import { useState } from "react"
import { useNavigate } from "react-router-dom";


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

    const changeFile = e => {
        let filepath = e.target.value;
        let paths = filepath.split("\\");
        setFileName(paths[paths.length - 1]);
    }

    
    const createUser = e => {
        e.preventDefault()
        console.log(data.users);
        let notCompleted = false;
        user.photo = fileName;
        let fields = []
        for (let key in user) {
            if (user[key] === undefined) {
                notCompleted = true;
                fields.push(key)
            }
            else if (key === "photo" && user[key] === "Não selecionado") {
                notCompleted = true;
                fields.push(key)
            }
        }

        console.log(user);
        if (notCompleted) {
            // botar um alert ou popup aqui
            console.log("Os campos " + fields.join(", ") + " não foram preenchidos")
        }

        else if (passwordConfirm === user.password) {
            let exists = false;
            let i = 0;
            while (i < data.users.length && !exists) {
                if (data.users[i].email === user.email) {
                    // botar um alert ou popup aqui
                    console.log("Usuário já existe com esse email");
                    exists = true;
                }
                i++;
            }
            if (!exists) {
                // botar um alert ou popup aqui
                console.log("Usuário criado")
                console.log(user);
                setData({...data, users: [...data.users, user]});
                navigate("/login");
            }
        }
        else {
            // botar um alert ou popup aqui
            console.log("Senhas não coincidem")
        }
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
                    <FormLabel>Nome</FormLabel>
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
                            <input type="file" onInput={e => changeFile(e)} accept=".jpg,.png,.jpeg" />
                        </FormFile>
                    </FileDiv>
                </FormDiv>
                
                <FormButton onClick={e => createUser(e)}>Cadastrar</FormButton>
            </Box>
        </Container>

    )
}