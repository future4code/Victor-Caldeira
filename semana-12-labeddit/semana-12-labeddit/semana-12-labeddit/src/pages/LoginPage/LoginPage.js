import React from "react";
import { ScreenContainer, LogoImage, SingUpButtonContainer } from "./styled";
import logo from "../../imagens-assents/pesquisa.png"
import { Button } from "@material-ui/core";
import LoginForm from "./LoginForm";
import { useHistory } from "react-router-dom";
import {goToCadastroPage} from "../../routes/coordinator";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";


const LoginPage = ({rightButtonText, setRightButtonText}) => {
    useUnprotectedPage()
    const history = useHistory()

    return (
        <ScreenContainer>
            <LogoImage scr={logo} />
            <h1> LoginPage (era para ter uma imagem aqui) </h1>
            <LoginForm rightButtonText = {rightButtonText} setRightButtonText = {setRightButtonText} />

            <SingUpButtonContainer>
                <Button
                    onClick={() => goToCadastroPage(history)}
                    color={"primary"}
                    margin={"dense"}
                    type={"submit"}
                    fullWidth
                    variant={"contained"} > Fazer Cadastro </Button>
            </SingUpButtonContainer>

        </ScreenContainer>
    )
}



export default LoginPage