const listaSelecaoPokeDCselecs = document.querySelectorAll(".pokeDCselec");
console.log(listaSelecaoPokeDCselecs);

listaSelecaoPokeDCselecs.forEach(pokeDCselec => {
   pokeDCselec.addEventListener("click", () => {
        const cartaoPokeDCAberto = document.querySelector(".aberto");
        cartaoPokeDCAberto.classList.remove("aberto");

        const idPokeDCselecSelecionado = pokeDCselec.attributes.id.value
        const idDoCartaoPokeDCParaAbrir = "cartao-" + idPokeDCselecSelecionado;
        const cartaoPokeDCParaAbrir = document.getElementById (idDoCartaoPokeDCParaAbrir);
        cartaoPokeDCParaAbrir.classList.add ("aberto");

        const pokeDCselecAtivoNaListagem = document.querySelector(".ativo");
        pokeDCselecAtivoNaListagem.classList.remove("ativo");

        const pokeDCselecSelecionadoNaListagem = document.getElementById(idPokeDCselecSelecionado);
        pokeDCselecSelecionadoNaListagem.classList.add("ativo");
    })
})