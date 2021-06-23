import React from "react";
import { ScreenContainer, LogoImage, InputContainer } from "./styled"
import logo from "../../imagens-assents/pesquisa.png"
import { TextField } from "@material-ui/core";
import useForm from "../../hooks/useForms";
import { Button } from "@material-ui/core";


const LoginPage = () => {

    const [form, onChange, clear] = useForm({ email: "", password: "" })

    const onSubmitForm = () => {

    }

    return (
        <ScreenContainer>
            <LogoImage scr={logo} />
            <h1> LoginPage (era para ter uma imagem aqui) </h1>
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
                        fullWidth  > Entrar </Button>

                    <Button
                        color={"primary"}
                        margin={"dense"}
                        type={"submit"}
                        fullWidth  > Cadastrar </Button>
                        
                </form>
            </InputContainer>
        </ScreenContainer>
    )
}

export default LoginPage