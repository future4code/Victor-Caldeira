import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../constantes/url"

export const TripsDetaisPage = () => {

    const [trips, setTrip] = useState({})

    const getTripDetail = (id) => {
        axios.get(`${BASE_URL} /trip/ ${id} `, {
            headers: {
                auth: localStorage.getItem("token")
            }            
        })
        .then((resposta) => {
            console.log(resposta)
        }) 
        
        .catch((erro) => {
            console.log(erro.response.dota)
        })
    }

    useEffect (() => {
        getTripDetail()
    }, []);

    return (
        <div>
            <h4> Trips Detais Page </h4>
        </div>
    )
}
export default TripsDetaisPage;