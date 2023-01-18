//CADASTRO DE RECRUTAS

let firtsName = prompt("Digite seu nome:");
let lastName = prompt("Digite seu sobrenome:");
let studentArea = prompt("Digite o campo de estudos:");
let yearBirth = Number(prompt("Digite o ano de nascimento:"));

window.alert(`
  Cadastro realizado com sucesso!
  Bem vindo recruta: ${firtsName} ${lastName},
  sua área de estudos é: ${studentArea},
  sua idade é: ${2023 - yearBirth} anos.`);

//CALCULADORA 4 OPERAÇÕES

let firstNumber = Number(prompt("Digite um número:"));
let secondNumber = Number(prompt("Digite outro número:"));

window.alert(`
  Os números escolhidos são: ${firstNumber} e ${secondNumber}
  A soma dos dois número é: ${firstNumber + secondNumber}
  A subtração dos dois números é: ${firstNumber - secondNumber}
  A multiplicação dos dois número é: ${firstNumber * secondNumber}
  A divisão dos dois número é: ${firstNumber / secondNumber}`);
