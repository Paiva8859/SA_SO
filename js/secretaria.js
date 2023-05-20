//Cards
const cardContato = document.querySelector(".cardContato");
const cardObjetivos = document.querySelector(".cardObjetivos");
const cardPerguntas = document.querySelector(".cardPerguntas");

//btn voltar da tela card completa (todos os cards)
const voltar = document.querySelector(".voltar");
//Title do Card
const contatoTitle = document.querySelector(".title");
//conteudo oculto e seu container (todos os cards)
const contatoConteudoOcultoContainer = document.querySelector(".conteudo");
const contatoConteudoOculto = document.querySelector(".cOculto");
//Container do formulario
const formContato = document.querySelector(".formContato");
//Btn e seu container
const btnSaibaContainer = document.querySelector(".btn-container");
const btnSaiba = document.querySelector(".btn-container button");

//Mostrar e esconder conteúdo oculto do card (modo padrão)
cardContato.addEventListener("mouseover", mostraCCO)
cardContato.addEventListener("mouseout", escondeCCO)
function mostraCCO(){
    contatoConteudoOculto.style.display = "block";
}
function escondeCCO(){
    contatoConteudoOculto.style.display = "none";
}

//Mostrar card Completo
btnSaiba.addEventListener("click", abreCard);

function abreCard(e) {
    cardContato.classList.toggle("aberto");
    cardObjetivos.classList.toggle("fechado");
    cardPerguntas.classList.toggle("fechado");

    //Ajeitando altura qnd form aparece
    formContato.classList.toggle("aberto");
    contatoTitle.style.height = "10%"
    contatoConteudoOcultoContainer.style.height = "20%";

    //Quando o card estiver ativo, os event de mouseover/out são desativados
    cardContato.removeEventListener("mouseover", mostraCCO);
    cardContato.removeEventListener("mouseout", escondeCCO);

    voltar.style.display = "inline";
    btnSaibaContainer.style.display = "none";
}

//voltar pelo "btn" voltar
voltar.addEventListener("click", fechaCard);

function fechaCard() {
    cardContato.classList.toggle("aberto");
    cardObjetivos.classList.toggle("fechado");
    cardPerguntas.classList.toggle("fechado");

    //Ajeitando altura qnd form some
    formContato.classList.toggle("aberto");
    contatoTitle.style.height = "20%"
    contatoConteudoOcultoContainer.style.height = "50%";

    //Quando o card fechar dnv, os event de mouseover/out vão voltar
    cardContato.addEventListener("mouseover", mostraCCO);
    cardContato.addEventListener("mouseout", escondeCCO);

    voltar.style.display = "none";
    btnSaibaContainer.style.display = "flex";
}