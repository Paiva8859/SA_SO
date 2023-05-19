//-----==Dados==-----//
//Links sem acesso
const block = document.querySelector(".block");
//Formulário Todo
const form = document.querySelector(".formLogin");
//Enviar formulário (Submit)
const logar = document.querySelector(".logar");
//Aviso de verificação de campos
const avisoE = document.querySelector(".avisoE");
avisoE.style.display = "none";
const avisoS = document.querySelector(".avisoS");
avisoS.style.display = "none";
//Campos
const userInput = document.getElementById("user");
const passwordInput = document.getElementById("password");
//Array que guarda Usuários
var formulario = [{
  user: 'adm@adm',
  password: 'admin'
}];
//Usuário atualmente logado
var usuarioAtual;

//-----==Events==-----//
//Usuário sem permissão tentando acessar os links 'proibidos'
block.addEventListener("click", bloqueio);
//form
form.addEventListener("submit", function (e) {
  e.preventDefault();

  var usuario = document.getElementById("user").value;
  var senha = document.getElementById("password").value;
  var vcu = verifyCampoUser();
  var vcp = verifyCampoPassword();
  
  if (vcu && vcp) {
    var dadosFormulario = {
      user: usuario,
      password: senha
    };
    formulario.push(dadosFormulario);
    usuarioAtual = dadosFormulario;
    alert("Você fez login com o usuário: "+ usuario);
    window.location.href = "html/secretaria.html";
  }
})

//-----==Functions==-----//
/*function verifyLogado(event){
  event.preventDefault();
  
  var usuario = document.getElementById("user").value;
  var senha = document.getElementById("password").value;

  const loginExistente = formulario.find((item) => item.user === usuario && item.password == senha);

  if(loginExistente){
    alert("Você já está logado!");
    window.location.href = "html/secretaria.html";
  }
  else{
    var dadosFormulario = {
      user: usuario,
      password: senha
    };
    formulario.push(dadosFormulario);
    usuarioAtual = dadosFormulario;
    alert("Você fez login com o usuário: "+ usuario);
    window.location.href = "html/secretaria.html";
  }
}*/

function verifyCampoUser(){
  var usuario = document.getElementById("user").value;

  if (usuario.length < 3) {
    avisoE.style.display = "block";
    return false;
  }

  return true;
}
function verifyCampoPassword(){
  var senha = document.getElementById("password").value;

  if (senha.length < 4) {
    avisoS.style.display = "block";
    return false;
  }

  return true;
}


function bloqueio(event){
  event.preventDefault();
  alert("As páginas só poderão ser acessadas após o Login!");
  window.location.reload();
}