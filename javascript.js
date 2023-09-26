var n1 = document.getElementById("number1");
var n2 = document.getElementById("number2");

var soma = document.getElementById("soma");
var subtrair = document.getElementById("subtrair");
var dividir = document.getElementById("dividir");
var multiplicar = document.getElementById("multiplicar");
var limpar = document.getElementById("limpar");
var result = document.getElementById("result");

soma.addEventListener("click", functionSoma);
subtrair.addEventListener("click", functionSubtrair);
dividir.addEventListener("click", functionDividir);
multiplicar.addEventListener("click", functionMultiplicar);
limpar.addEventListener("click", limparTexto);

function functionSoma() {
  var nu1 = parseInt(n1.value);
  var nu2 = parseInt(n2.value);

  var resultadoSoma = nu1 + nu2;
  result.innerText = "Resultado: " + resultadoSoma;
}

function functionSubtrair() {
  var nu1 = parseInt(n1.value);
  var nu2 = parseInt(n2.value);

  var resultadoSubtrair = nu1 - nu2;
  result.innerText = "Resultado: " + resultadoSubtrair;
}

function functionDividir() {
  var nu1 = parseInt(n1.value);
  var nu2 = parseInt(n2.value);

  var resultadoDividir = nu1 / nu2;
  result.innerText = "Resultado: " + resultadoDividir;
}

function functionMultiplicar() {
  var nu1 = parseInt(n1.value);
  var nu2 = parseInt(n2.value);

  var resultadoMultiplicar = nu1 * nu2;
  result.innerText = "Resultado: " + resultadoMultiplicar;
}

function limparTexto() {
  result.innerText = "Resultado: ";
}
