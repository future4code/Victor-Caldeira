import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { goToFeedPage } from "../routes/coordinator"

export const login = (body, clear, history, setRightButtonText) => {
    axios.post(`${BASE_URL}/users/login`, body)
        .then((resposta) => {
            localStorage.setItem("token", resposta.data.token)
            clear();
            goToFeedPage(history)
            setRightButtonText("Logout")
        })

        .catch((erro) =>
            alert(erro.response.data.message))
}

export const signUp = (body, clear, history) => {
    axios.post(`${BASE_URL}/users/signup`, body)
        .then((resposta) => {
            localStorage.setItem("token", resposta.data.token)
            clear()
            goToFeedPage(history)
        })
        .catch((erro) => 
        alert (erro.response.data.message))

}
 
