import React, { useState, useEffect } from "react"
import axios from "axios"

const TelaInicial = () => {

    const [escolhePerfil, setPerfil] = useState({})




    const [escolhePessoas, setPessoas] = useState ({})

    //const [curtido, setCurtido] = useState ({})
    //const [descarte, setDescarte] = useState ({})

    const perfil = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/victorcesar/person")
        .then ((res) => {
            setPerfil (res.data)
        })
        .catch ((err) => {
            console.log (err)
        })
    }

    useEffect (() => {
         perfil ()
    }, [] )

    const pessoas =() => {
        axios.get ("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/victorcesar/choose-person")
        .then ((resposta) => {
            setPessoas(resposta)
        })
        .catch ((erro) => {
            console.log(erro)
        })
    }
    
    useEffect (() => {
        pessoas ()
    }, [] )


    return (
        <div>
            <p>oiiiii sou tela inicial</p>
            <p> Perfil: </p>
            <img></img>
            <button /* onClick={} */ > X </button>
            <button /* onClick={} */ > S2 </button>
            
        </div>
    )
}

export default TelaInicial;