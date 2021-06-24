import React from "react";
import { ScreenContainer } from "./styled";
import logo from "../../imagens-assents/pesquisa.png"
import CadastroForm from "./CadastroForm";
import { LogoImage} from "./styled";
import useUnprotectedPage from "../../hooks/useUnprotectedPage"

const CadastroPage = ({setRightButtonText}) => {
    useUnprotectedPage()

    return (
        <ScreenContainer>
            <LogoImage scr={logo} />
            <h1> CadastroForm (era para ter uma imagem aqui) </h1>
            <CadastroForm setRightButtonText = { setRightButtonText} />
            
        </ScreenContainer>
    )
}



export default CadastroPage
