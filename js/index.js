//Dados
const block = document.querySelector(".block");
const logar = document.querySelector(".logar");
const form = document.querySelector(".formLogin");
const avisoE = document.querySelector(".avisoE");
const avisoS = document.querySelector(".avisoS");
var formulario = [{
  user: 'adm@adm',
  password: 'admin'
}];
var usuarioAtual;

//Events
block.addEventListener("click", bloqueio);
logar.addEventListener("click", verifyCampo);

//Functions
function verifyLogado(event){
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
}

function verifyCampo(event){
  event.preventDefault();

  var usuario = document.getElementById("user").value;
  var senha = document.getElementById("password").value;

  if (usuario.length < 3 || usuario.indexOf("@") === -1 && senha.length < 4) {
    avisoE.classList.toggle("aparece");
    avisoS.classList.toggle("aparece");
  }
  else if(usuario.length < 3 || usuario.indexOf("@") === -1 && senha.length >= 4){
    avisoE.classList.toggle("aparece");
  }
  else if(usuario.length >= 3 || usuario.indexOf("@") !== -1 && senha.length < 4){
    avisoS.classList.toggle("aparece");
  }
  else{
    verifyLogado();
  }
}


function bloqueio(event){
  event.preventDefault();
  alert("As páginas só poderão ser acessadas após o Login!");
  window.location.reload();
}