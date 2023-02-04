const properties = [];
let options = "";

do {
  options = prompt(
    `Bom vindo ao Cadastro de Imóveis.\n\nAtualmente temos ${properties.length} imóveis cadastrados\n\nSelecione uma opção do menu interativo\n1) Cadastrar Imóveis\n2) Ver Imóveis\n3) Sair do Menu`
  );
  switch (options) {
    case "1":
      const property = {};

      property.owner = prompt("Digite o nome do proprietário:");
      property.numberOfRooms = Number(prompt("Digite o número de quartos:"));
      property.numberOfBathrooms = Number(
        prompt("Digite o número de banheiros:")
      );
      property.garage = prompt("Possuí garagem? SIM/NÃO");

      const verify = confirm(
        `Deseja salvar mesmo este imóvel?\n\nNome do proprietário: ${property.owner}\nNúmero de quartos: ${property.numberOfRooms}\nNúmero de banheiros: ${property.numberOfBathrooms}\nPossuí garagem: ${property.garage}`
      );
      if (verify) {
        properties.push(property);
        alert("Imóvel cadastrado com sucesso!");
      }
      break;

    case "2":
      if (properties.length > 0) {
        for (let i = 0; i < properties.length; i++) {
          alert(
            `Imóvel ${i + 1}\nNome do proprietário: ${
              properties[i].owner
            }\nNúmero de quartos: ${
              properties[i].numberOfRooms
            }\nNúmero de banheiros: ${
              properties[i].numberOfBathrooms
            }\nPossuí garagem: ${properties[i].garage}\n\n`
          );
        }
      } else {
        alert("Nenhum imóvel cadastrado no momento.");
      }
      break;
    case "3":
      alert("Encerrando...");
      break;
    default:
      alert("Opção inválida.");
      break;
  }
} while (options != "3");
