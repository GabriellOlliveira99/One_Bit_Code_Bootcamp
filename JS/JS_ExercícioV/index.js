// MENU INTERATIVO
let options;

do {
  options = prompt(
    "Selecione uma opção do menu: \na) Netflix \nb) Star+ \nc) Disney+\nd) HBO Max\ne) Prime Video\n f) Youtube \n g) Encerrar"
  );
  switch (options) {
    case "a":
      alert("Seja bem vindo à Netflix...");
      break;
    case "b":
      alert("Seja bem vindo ao Star+...");
      break;
    case "c":
      alert("Seja bem vindo ao Disney+...");
      break;
    case "d":
      alert("Seja bem vindo ao HBO Max...");
      break;
    case "e":
      alert("Seja bem vindo ao Prime Video...");
      break;
    case "f":
      alert("Seja bem vindo à Netflix...");
      break;
    case "g":
      alert("Encerrando o menu interativo");
      break;
    default:
      alert("Opção inválida.\nTente novamente");
      break;
  }
} while (options != "g");

//CONTROLE FINANCEIRO
let bankAccount = Number(prompt("Digite o valor da sua conta bancária em R$:"));

do {
  options = prompt(
    `Seu saldo é de: R$ ${bankAccount},00 \n Selecione uma opção:\na) Depósito-bancário \nb) Saque-bancário \nc) Encerrar sessão`
  );
  switch (options) {
    case "a":
      let amountDeposited = Number(
        prompt("Digite o valor a ser depositado em R$:")
      );
      bankAccount += amountDeposited;
      break;
    case "b":
      let withdrawAmount = Number(
        prompt("Digite o valor que deseja sacar em R$:")
      );
      bankAccount -= withdrawAmount;
      break;
    case "c":
      alert("Encerrando acesso ao sistema bancário.");
      break;

    default:
      alert("Opção inválida.\nTente novamente");
      break;
  }
} while (options !== "c");
