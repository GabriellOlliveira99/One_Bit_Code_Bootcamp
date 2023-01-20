// ROBÔ DA CALCULADORA
let number = Number(prompt("Digite um número para ver a tabuada:"));
let result = "";
for (let i = 1; i <= 20; i++) {
  result += `${number} x ${i} = ${number * i}\n`;
}
alert(result);

//PROCURANDO PAlÍNDROMOS

const word = prompt("Digite uma palavra:");
let invertedWord = "";

for (let i = word.length - 1; i >= 0; i--) {
  invertedWord += word[i];
}
if (word === invertedWord) {
  alert(`"${word}" é um Palíndromo!`);
} else {
  alert(`"${word}" é diferente de "${invertedWord}" logo não é um Palíndromo`);
}
