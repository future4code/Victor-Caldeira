import React from "react";
import useInput from "../hooks/inputs";
import axios from "axios";
import { BASE_URL } from "../constantes/url"
import { useHistory} from "react-router-dom"


export const LoginPage = () => {

    const [email, handleEmail] = useInput("")
    const [senha, handleSenha] = useInput("")
    const history = useHistory ()


    const onClickLogin = () => {
        const body = { email, senha }
        console.log(body)
    }

    axios.post(` ${BASE_URL} /login `)
        .then((resposta) => {
            localStorage.setItem("token", resposta.data.token)
            history.push ("/admin/trips/list")
            console.log(resposta)
        })

        .catch((erro) => {
            alert(erro.response.data.message)
        })


    return (
        <div>
            <h4> Login Page </h4>

            <input value={email} onChange={handleEmail} placeholder={"e-mail"} ></input>

            <input value={senha} onChange={handleSenha} placeholder={"senha"} /* type="password" */ ></input>

            <button onClick={onClickLogin} > Entrar </button>

            <button > Voltar</button>
        </div>
    )
}