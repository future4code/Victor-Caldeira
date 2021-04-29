function criandoPostClick () {
    const titulo = document.getElementById ("titulo-post")
    const autor = document.getElementById ("autor-post")
    const conteudo = document.getElementById ("conteudo-post")

    const tituloValor = document.getElementById ("titulo-post").value
    const autorValor = document.getElementById ("autor-post").value
    const conteudoValor = document.getElementById ("conteudo-post").value

    const postagens = document.getElementById ("postagens")
    
    postagens.innerHTML += `<h2>${tituloValor}</h2>`
    postagens.innerHTML += `<h3>${autorValor}</h3>`
    postagens.innerHTML += `<p>${conteudoValor}</p>`
    
    
    titulo.value = ""
    autor.value = ""
    conteudo.value = ""
    
}







