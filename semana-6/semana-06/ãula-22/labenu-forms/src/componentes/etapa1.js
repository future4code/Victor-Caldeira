import { render } from "@testing-library/react";
import React from 'react'

export default class Etapa1 extends React.Component {
    
    render() {

        return (
            <div claName="App" >
                  <h1> Dados Gerais</h1>
                  
                <p>1. Qual seu nome? </p>
                <input placeholder='digite seu nome'></input>

                <p>2. Qual sua idade? </p>
                <input placeholder='digite sua idade'></input>

                <p >3. Qual seu email? </p>
                <input placeholder='digite seu email'></input>

                <p >4. Qual sua escolaridade? </p>
                <input placeholder='digite sua escolaridade'></input>

               

            </div>
        );
    }
}

