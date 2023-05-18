const logar = document.querySelector(".logar");
const deactive = document.querySelector(".block");

logar.addEventListener("click", salvarFormulario);
deactive.addEventListener("click", bloqueio);



var formulario = [];

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

  alert("Você fez login com o usuário: " + usuario);
}

function bloqueaio(){
  alert("As páginas só poderão ser acessadas após o Login");
  
}