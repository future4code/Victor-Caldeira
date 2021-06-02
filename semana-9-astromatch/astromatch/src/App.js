import React from "react";
import TelaInicial from "./Components/TelaInicial/TelaInicial";
import TelaMatch from "./Components/TelaMatch/TelaMatch";
import Styled from "./Components/Styled/Styled"
import './App.css';



export default function App () {
  return (
    <div className="App">
      <button >ao clicar vai para tela inicial</button>
      <h1> ola </h1>
      <button> ao clicar vai para lista de match</button>
      <hr></hr>
      <TelaInicial/>
      <TelaMatch/>
      {/* <Styled/> */}
    </div>
  );
}
