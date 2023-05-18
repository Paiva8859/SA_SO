const deactive = document.querySelector(".block");
const logar = document.querySelector(".logar");
const form = document.getElementById("meuFormulario");
var formulario = []; 


deactive.addEventListener("click", bloqueio);
logar.addEventListener("click", salvarFormulario);
form.addEventListener("submit", salvarFormulario);

function salvarFormulario() {
  var usuario = document.getElementById("user").value;
  var senha = document.getElementById("password").value;
  var dadosFormulario = {
    user: usuario,
    password: senha
  };

  formulario.push(dadosFormulario);

  document.getElementById("user").value = "";
  document.getElementById("password").value = "";

  console.log("Formulário salvo com sucesso!");
  console.log(formulario);
  
  window.location.href = "../html/secretaria.html";
  
  alert("Você fez login com o usuário: " + usuario);
}


function bloqueio(){
  alert("As páginas só poderão ser acessadas após o Login");
}