import React, { useState } from "react";
import { InputsContainer, SignUpFormContainer } from "./styled"
import useForm from "../../hooks/useForms";
import { useHistory } from "react-router-dom";

import { CircularProgress } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";



const CadastroForm = (setRightButtonText) => {

    const history = useHistory()

    const [form, onChange, clear] = useForm({ name: "", email: "", password: "" })
    const [isLoading, setIsLoading] = useState (false)

    const onSubmitForm = (event) => {
        console.log(form)
        event.preventDefault()
        //sigUp(form, clear, history, setRightButtonText, setIsLoading)
    }

    return (

        <SignUpFormContainer>
            <InputsContainer>
                <form onSubmit={onSubmitForm} >

                    <TextField
                        name={"name"}
                        value={form.name}
                        onChange={onChange}
                        label={"Name"}
                        variant={"outlined"}
                        fullWidth
                        required
                        margin={"dense"}
                        type={"name"} />

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
                        variant={"contained"}
                    >
                        {isLoading ? <CircularProgress
                            color={"black"}
                            size={24} /> : <> cadastrar </>
                        }
                    </Button>

                </form>

            </InputsContainer>

        </SignUpFormContainer>

    )
}

export default CadastroForm