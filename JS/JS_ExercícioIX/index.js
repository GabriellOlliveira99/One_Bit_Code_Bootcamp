let options = "";

do {
  options = prompt(
    `Seja bem vindo a calculadora Geométrica!\nSelecione umas das opções abaixo:\n\na) Área do triângulo: base * altura / 2\nb) Área do retângulo: base * altura\nc) Área do quadrado: lado²\nd) Área do trapézio: (base maior + base menor) * altura / 2\ne) Área do círculo: pi * raio²\nf) Sair `
  );
  switch (options) {
    case "a":
      let baseTriangle = Number(prompt("Qual a base do triângulo?"));
      let heightTriangle = Number(prompt("Qual a altura do triângulo?"));
      function triangleArea(base, height) {
        return (base * height) / 2;
      }
      alert(
        `A área do triângulo é: ${triangleArea(baseTriangle, heightTriangle)}`
      );
      break;
    case "b":
      let baseRectangle = Number(prompt("Qual a base do retângulo?"));
      let heightRectangle = Number(prompt("Qual a altura do retângulo?"));
      function rectangleArea(base, height) {
        return base * height;
      }
      alert(
        `A área do retângulo é: ${rectangleArea(
          baseRectangle,
          heightRectangle
        )}`
      );
      break;
    case "c":
      let sideSquare = Number(
        prompt("Digite o valor de um dos lados do quadrado:")
      );
      function squareArea(side) {
        return Math.pow(side, 2);
      }
      alert(`A área do quadrado é: ${squareArea(sideSquare)}`);
      break;
    case "d":
      let biggestTrapezeBase = Number(
        prompt("Qual o valor da base maior do Trapézio?")
      );
      let lesserTrapezeBase = Number(
        prompt("Qual o valor da menor base do Trapézio?")
      );
      let heighTrapeze = Number(prompt("Qual o valor da altura do Trapézio?"));
      function trapezeArea(bBase, lBase, height) {
        return (bBase + lBase) * (height / 2);
      }
      alert(
        `A área do trapézio é: ${trapezeArea(
          biggestTrapezeBase,
          lesserTrapezeBase,
          heighTrapeze
        )}`
      );
    case "e":
      let circleRadius = Number(prompt("Qual a área do círculo?"));
      function circleArea(radius) {
        return Math.PI * Math.pow(radius, 2);
      }
      alert(`A área do círculo é: ${circleArea(circleRadius).toFixed(5)}`);
      break;
    case "f":
      alert("Encerrando...");
      break;
    default:
      alert("Opção inválida!");
      break;
  }
} while (options != "f");
