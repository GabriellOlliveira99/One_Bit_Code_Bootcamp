// FILA DE ESPERA
// let queue = [];
// do {
//   let position = "";
//   for (let i = 0; i < queue.length; i++) {
//     position += `${i + 1}º ${queue[i]} \n`;
//   }
//   options = prompt(
//     `Bem vindo ao Hospital!\n ${position} \n Selecione uma opção do menu: \na) Novo Paciente \nb) Consultar Paciente \nc) Sair \n `
//   );

//   switch (options) {
//     case "a":
//       let newPatient = prompt("Digite o nome do novo paciente:");
//       queue.push(newPatient);
//       break;
//     case "b":
//       let consulted = queue.shift();
//       alert(`${consulted} acabou de se consultar.`);
//       break;
//     case "c":
//       alert("Encerrando...");
//       break;

//     default:
//       alert("Opção Inválida.");
//       break;
//   }
// } while (options != "c");

//PILHA DE CARTAS

const cards = [
  "7♠️",
  "10♥️",
  "4♥️",
  "2♦️",
  "K♥️",
  "9♣️",
  "10♠️",
  "3♠️",
  "7♥️",
  "3♥️",
  "K♣️",
  "5♦️",
  "2♥️",
  "8♠️",
  "10♦️",
  "8♦️",
  "6♦️",
  "10♣️",
  "9♥️",
  "J♦️",
  "A♣️",
  "A♠️",
  "A♥️",
  "2♠️",
  "J♥️",
  "4♦️",
  "9♦️",
  "8♣️",
  "K♦️",
  "2♣️",
  "Q♠️",
  "4♠️",
  "A♦️",
  "6♠️",
  "J♣️",
  "5♥️",
  "7♣️",
  "3♣️",
  "Q♦️",
  "8♥️",
  "J♠️",
  "3♦️",
  "Q♣️",
  "6♥️",
  "5♣️",
  "K♠️",
  "9♠️",
  "Q♥️",
  "5♠️",
  "6♣️",
  "4♣️",
  "7♦️",
];

do {
  options = prompt(
    `Bem vindo ao Pilha de Cartas!\n\nAtualmente o baralho possuí: ${cards.length} cartas \n\nSelecione uma opção do menu: \na) Adicionar Carta ao Baralho \nb) Puxar Carta do Baralho \nc) Sair \n `
  );

  switch (options) {
    case "a":
      let chosenCard = prompt("Digite o valor da Carta com o Naípe:");
      cards.unshift(chosenCard);
      alert(`Carta ${chosenCard} adicionada ao baralho.`);
      break;
    case "b":
      let letterRemoved = cards.shift();
      alert(`Carta ${letterRemoved} retirada do baralho.`);
      break;
    case "c":
      alert("Encerrando...");
    default:
      alert("Opção inválida.");
      break;
  }
} while (options != "c");
