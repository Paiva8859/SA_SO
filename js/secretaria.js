const cardContato = document.querySelector(".cardContato");
const contatoConteudo = document.querySelector(".conteudo");
const contatoConteudoOculto = document.querySelector(".cOculto");

const btnSaiba = document.querySelector(".btn-container button");

cardContato.addEventListener("mouseover", function () {
    contatoConteudoOculto.style.display = "block";
})
cardContato.addEventListener("mouseout", function () {
    contatoConteudoOculto.style.display = "none";
})


