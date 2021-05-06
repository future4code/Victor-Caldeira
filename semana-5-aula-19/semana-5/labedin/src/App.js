import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardePequeno from './components/CardPequeno.js/CardePequeno';
import EnderecoPequeno from './components/CardPequeno.js/CardePequeno';
import './components/styles css/styles.css';
import styled from 'styled-components';

const EditandoMinhaDiv = styled.div`


`


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://w7.pngwing.com/pngs/988/581/png-transparent-car-auto-mechanic-female-illustration-car-maintenance-experts-material-cartoon-cartoon-character-blue-photography.png" 
          nome="Victor C. Caldeira" 
          descricao="Oi, eu sou o Victor César. Sou estudande do curso de desenvolvimento da Labenu. Gosto de tecnologias e a forma de como elas são reproduzidas foi o que me trouxe para fazer esse curso e agregar os conhecomentos a minha area de trabalho."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais" 
        />
      </div>

      <div className= "page-section-container"> 
        <h2>Contato</h2>
        
        <CardePequeno
        imagem= "https://i.pinimg.com/474x/ee/c9/7f/eec97f7f050b0101897a0028a5bc1106.jpg"
        descricao= "caldeiravivo11@gmail.com"
        />

        <EnderecoPequeno 
        imagem = "https://image.flaticon.com/icons/png/512/1275/1275229.png"
        descricao = "Rua Dom F. Drumond, s/n | casa 01 | Bairro | Belo Horizonte| Minas Gerais | Brazil" 
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://www.ford.com.br/content/dam/Ford/website-assets/latam/br/home/fbr-home-opengraph-logo-ford.jpg" 
          nome="Inova FORD" 
          descricao="Tecnico em EletroEletronica-Mecânica." 
        />
        
        <CardGrande 
          imagem="https://marcas-logos.net/wp-content/uploads/2020/01/Citroen-Logo-2016.jpg" 
          nome="Roma CITROEN" 
          descricao="Eletricista de veiculos" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
