import { render } from '@testing-library/react';
import React from 'react'

export default class Etapa3 extends React.Component {

    render() {

        return (
            <div claName="App" >
                <h1> Informações Gerais Ensino</h1>
                <p>7. Por que você não terminou um curso de fraduação ? </p>
                <input placeholder='digite seu nome'></input>

                <p>8. Você fez algum curso complementar ? </p>
                <input placeholder='digite sua idade'></input>

                
            </div>
        );
    }
}





