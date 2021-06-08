import React, { useState, useEffect } from "react"
import axios from "axios"

const TelaMatch = () => {

    const [listaMatch, setLista] = useState ({})

    const lista = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/victorcesar/matches")
        .then ((res) => {
            setLista (res.data)
        })
        .catch ((err) => {
            console.log (err)
        })
    }

    useEffect (() => {
        lista ()
    }, [] )

    const listaMapeada = lista.map((item) => { 
        return <li>{item}</li>
    })



    return (
        <div>
            <p> tudo bem sou tela lista match </p>
            <ol> {listaMapeada} </ol>

        </div>
    )
}



export default TelaMatch;
