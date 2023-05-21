//-----==Variáveis==-----//
const lista = document.querySelector(".lista");
const cabecalhoGen = document.querySelectorAll("section");

//-----==Eventos==-----//
cabecalhoGen.forEach((section) => {
    section.addEventListener("click", abreLista);
});

//-----==Funções==-----//
function abreLista() {
    this.querySelector(".lista").classList.toggle("show");

    cabecalhoGen.forEach((section) => {
        if (section !== this) {
            const listaNaoPassada = section.querySelector(".lista");
            listaNaoPassada.classList.toggle("show");
        }
    });
}