const logar = document.querySelector(".logar");
const deactive = document.querySelector(".deactive");

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

  alert("Você fez login com o usuário: " + usuario)
}

function bloqueio{
alert(asdfasdf);
}