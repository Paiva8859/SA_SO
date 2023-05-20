//VARIÁVEIS
//Cards
const cardGen = document.querySelector("section");
const cardContato = document.querySelector(".cardContato");
const cardObjetivos = document.querySelector(".cardObjetivos");
const cardPerguntas = document.querySelector(".cardPerguntas");
//Voltar
const voltar = document.querySelector(".voltar");
const voltarC = document.querySelector(".cardContato .voltar");
const voltarO = document.querySelector(".cardObjetivos .voltar");
//Title do Card
const contatoTitle = document.querySelector(".title");
//Buttons
const btnGen = document.querySelector("button");
const btnContainer = document.querySelector(".btn-container");
const btnContato = document.querySelector(".btnContato");
const btnObjetivos = document.querySelector(".btnObjetivos");
//conteudo oculto e seu container (todos os cards)
const contatoConteudoOcultoContainer = document.querySelector(".conteudo");
const contatoConteudoOculto = document.querySelector(".cOculto");
//Container do formulario
const formContato = document.querySelector(".formContato");
//EVENTOS
//Hover
cardGen.addEventListener("mouseover", mostraCCO);
cardGen.addEventListener("mouseout", escondeCCO);
//Abrir Card Completo
btnContato.addEventListener("click", function (){
    abreCard(cardContato);
});
btnObjetivos.addEventListener("click", function (){
    abreCard(cardObjetivos);
});
//Fechar Card Completo
voltarC.addEventListener("click", function (){
    fechaCard(cardContato);
});
voltarO.addEventListener("click", function (){
    fechaCard(cardObjetivos);
});

//FUNCTIONS
//Mostrar e esconder conteúdo oculto do card (modo padrão)
function mostraCCO(){
    contatoConteudoOculto.style.display = "block";
}
function escondeCCO(){
    contatoConteudoOculto.style.display = "none";
}
//Card Completo
function abreCard(card) {
    //Quando o card estiver ativo, os event de mouseover/out são desativados
    cardContato.removeEventListener("mouseover", mostraCCO);
    cardContato.removeEventListener("mouseout", escondeCCO);
    
    voltar.style.display = "inline";
    btnContainer.style.display = "none";

    if (card == cardContato) {
        cardContato.classList.toggle("aberto");
        cardObjetivos.classList.toggle("fechado");
        cardPerguntas.classList.toggle("fechado");

        //Ajeitando altura qnd form aparece
        formContato.classList.toggle("aberto");
        contatoTitle.style.height = "10%"
        contatoConteudoOcultoContainer.style.height = "20%";
    }
    else if(card == cardObjetivos){
        cardContato.classList.toggle("fechado");
        card.classList.toggle("aberto");
        cardPerguntas.classList.toggle("fechado")
    }
    else{
        cardContato.classList.toggle("fechado");
        cardObjetivos.classList.toggle("fechado");
        card.classList.toggle("aberto");
    }
}

function fechaCard(card){
    //Quando o card fechar dnv, os event de mouseover/out vão voltar
    cardContato.addEventListener("mouseover", mostraCCO);
    cardContato.addEventListener("mouseout", escondeCCO);

    voltar.style.display = "none";
    btnContainer.style.display = "flex";

    if (card == cardContato) {
        card.classList.toggle("aberto");
        cardObjetivos.classList.toggle("fechado");
        cardPerguntas.classList.toggle("fechado");

        //Ajeitando altura qnd form some
        formContato.classList.toggle("aberto");
        contatoTitle.style.height = "20%"
        contatoConteudoOcultoContainer.style.height = "50%";
    }
    else if(card == cardObjetivos){
        cardContato.classList.toggle("fechado");
        card.classList.toggle("aberto");
        cardPerguntas.classList.toggle("fechado");
    }
    else{
        cardContato.classList.toggle("fechado");
        cardObjetivos.classList.toggle("fechado");
        card.classList.toggle("aberto");
    }
};