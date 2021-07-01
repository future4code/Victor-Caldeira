import React from "react";
import { InputContainer } from "./styled"
import { TextField } from "@material-ui/core";
import useForm from "../../hooks/useForms";
import { Button } from "@material-ui/core";
import { login } from "../../services/user";
import { useHistory } from "react-router-dom";



const LoginForm = ({rightButtonText, setRightButtonText}) => {

    const [form, onChange, clear] = useForm({ email: "", password: "" })
    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, history, setRightButtonText )
    }


    return (


        <InputContainer>
            <form onSubmit={onSubmitForm} >
                <TextField
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    label={"Email"}
                    variant={"outlined"}
                    fullWidth
                    required
                    margin={"dense"}
                    type={"email"} />

                <TextField
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    label={"Password"}
                    variant={"outlined"}
                    fullWidth
                    required
                    margin={"dense"}
                    type={"password"} />

                <Button
                    color={"primary"}
                    margin={"dense"}
                    type={"submit"}
                    fullWidth
                    variant={"contained"} > Entrar </Button>
            </form>
        </InputContainer>

    )
}

export default LoginForm