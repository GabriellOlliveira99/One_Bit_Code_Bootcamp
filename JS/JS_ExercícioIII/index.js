let value = Number(prompt("Digite um número em metros(m) à ser convertido:"));

let options = prompt(
  "Selecione qual unidade de medida deseja converter: \na) Milímetros\nb) Centímetros\nc) Decímetros\nd) Decâmetro\ne) Hectômetro\n f) Quilômetros"
);

switch (options) {
  case "a":
    alert(`O resultado em milímetros é: ${value * 1000}mm`);
    break;
  case "b":
    alert(`O resultado em centímetros é: ${value * 100}cm`);
    break;
  case "c":
    alert(`O resultado em decímetros é: ${value * 10}dm`);
    break;
  case "d":
    alert(`O resultado em decâmetros é: ${value / 10}dam`);
    break;
  case "e":
    alert(`O resultado em hectômetros é: ${value / 100}hm`);
    break;
  case "f":
    alert(`O resultado em quilômetros é: ${value / 1000}km`);
    break;
  default:
    alert("Valor inválido...");
    break;
}
