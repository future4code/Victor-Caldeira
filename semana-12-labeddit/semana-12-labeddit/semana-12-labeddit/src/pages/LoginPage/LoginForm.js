import React from "react";
import { InputContainer } from "./styled"
import { TextField } from "@material-ui/core";
import useForm from "../../hooks/useForms";
import { Button } from "@material-ui/core";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";

const LoginForm = () => {

    const [form, onChange, clear] = useForm({ email: "", password: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
        login()
    }

    const login = () => {
        axios.post(`${BASE_URL}/users/login`, form)
            .then((resposta) => {
                localStorage.setItem("token", resposta.data.token)
                clear();
            })

            .catch((erro) =>
                alert("Erro ao Logar"))
    }


    return (

        
        <InputContainer>
            <form onSubmit={onSubmitForm} >
                <TextField
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    label={"Email"}
                    variant={"outlined"}
                    fullWidth
                    required
                    margin={"dense"}
                    type={"email"} />

                <TextField
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    label={"Password"}
                    variant={"outlined"}
                    fullWidth
                    required
                    margin={"dense"}
                    type={"password"} />

                <Button
                    color={"primary"}
                    margin={"dense"}
                    type={"submit"}
                    fullWidth
                    variant={"contained"} > Entrar </Button>
            </form>
        </InputContainer>

    )
}

export default LoginForm