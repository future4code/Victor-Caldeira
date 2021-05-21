//import './App.css';
import React from "react";
import styled from "styled-components";
import axios from "axios";
import { render } from '@testing-library/react';

//const BASE_URL = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"


export default class App extends React.Component {

  state = {
    Playlist: []
  }

  componentDidMount() {
    this.getPlaylist();
    this.getSearch();
    this.getTracks();
  }

  getPlaylist = () => {
    const header = {
      headers: {
        Authorization: "victor-cesar-paiva"
      }
    };
    const body = {
      name: "oi"
    }

    axios
      .get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", header)
      .then((resposta) => {
        //console.log(resposta)
        this.setState({ Playlist: resposta.data.result.list })
      })
      .catch((erro) => {
        //console.log(erro.response.data)
        //
      })
  }

  getSearch = () => {
    const header = {
      headers: {
        Authorization: "victor-cesar-paiva"
      }
    }
    const body = {
      list: "",
      name: "",
    }

    axios
      .get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=string")
      .then((resposta) => {
        console.log(resposta)
      })
      .catch((erro) => {
        console.log(erro)
      })
  }

  getTracks = () => {
    const header = {
      Authorization: "victor-cesar-paiva"
    }
    const body = {
      quantity: "",
      tracks: "",
      name: "",
      artist: "",
    }

    axios
      .get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks")
      .then((resposta) => {
        console.log(resposta)
      })
      .catch((erro) => {
        console.log(erro)
      })

  }


z 


  render() {

    //const { } = this.state.//o que estiver no estado. talvez um map para buecar informações, retornando alguma opção com key e value {... .name}

    return (
      <div className="App">
        <h1>Olá Labefy</h1>
        <button onClick={this.getPlaylist} > clique aqui </button>
        <hr />

        <p  > PLaylist </p>
        <hr />

        <p  > Pesquisar Playlist !!! </p>
        <hr />

        <p  > Musicas da Playlist !!! </p>
        <hr />



      </div>
    );
  }
}