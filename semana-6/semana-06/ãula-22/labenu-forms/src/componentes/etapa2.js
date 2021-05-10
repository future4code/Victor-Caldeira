import { render } from "@testing-library/react";
import React from 'react'


export default class Etapa2 extends React.Component {

    render () {

        return (
            <div claName="App" >
                <h1>Escolaridade</h1>
                <p>5. Qual curso? </p>
                <input placeholder='digite o curso'></input>

                <p>6. Qual unidade de ensino? </p>
                <input placeholder='digite instituição'></input>

                
            </div>
        );
    }
}
