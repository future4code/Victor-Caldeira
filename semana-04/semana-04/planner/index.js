function criarTarefa() {
    const tarefa = document.getElementById("tarefa")
    const dia = document.getElementById("dias-semana")
    console.log(tarefa)
    if (tarefa.value !== "") {
        switch (dia.value) {
            case "domingo":
                const domingo = document.getElementById("domingo")
                domingo.innerHTML += `<li>${tarefa.value}</li>`
                break
            case "segunda":
                const segunda = document.getElementById("segunda")
                segunda.innerHTML += `<li>${tarefa.value}</li>`
                break
            case "terca":
                const terca = document.getElementById("terca")
                terca.innerHTML += `<li>${tarefa.value}</li>`
                break
            case "quarta":
                const quarta = document.getElementById("quarta")
                quarta.innerHTML += `<li>${tarefa.value}</li>`
                break
            case "quinta":
                const quinta = document.getElementById("quinta")
                quinta.innerHTML += `<li>${tarefa.value}</li>`
                break
            case "sexta":
                const sexta = document.getElementById("sexta")
                sexta.innerHTML += `<li>${tarefa.value}</li>`
                break
            case "sabado":
                const sabado = document.getElementById("sabado")
                sabado.innerHTML += `<li>${tarefa.value}</li>`
                break

        } tarefa.value = ""

    }

}




