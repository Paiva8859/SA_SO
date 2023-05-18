const logar = document.querySelector(".logar");

logar.addEventListener("click", salvarFormulario);




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

