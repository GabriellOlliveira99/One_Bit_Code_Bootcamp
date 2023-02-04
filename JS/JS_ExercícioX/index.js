let vacancies = [
  {
    index: 0,
    name: "Designer",
    description: "Atuar como designer na OneBitCode.",
    date: "23/02/2023",
    candidate: [],
  },
];

function listVacancies() {
  if (vacancies.length == 0) {
    alert("Opa, não há vagas disponíveis no momento.");
  } else {
    for (let i = 0; i < vacancies.length; i++) {
      alert(
        `Vaga nº indíce: ${vacancies[i].index}\nNome da vaga: ${vacancies[i].name}\nDescrição: ${vacancies[i].description}\nData limite: ${vacancies[i].date}\nCandidatos: ${vacancies[i].candidate}\nNúmero de candidatos: ${vacancies[i].candidate.length}\n`
      );
    }
  }
}

function createVacancy() {
  const vacancy = {};
  vacancy.index = vacancies.length;
  vacancy.name = prompt("Digite o nome da vaga:");
  vacancy.description = prompt("Qual a descrição da vaga?");
  vacancy.date = prompt("Qual a data limite? -- DD/MM/AAAA --");
  vacancy.candidate = [];

  const verify = confirm(
    `Deseja cadastrar esta vaga?\n\nNome da vaga: ${vacancy.name}\nDescrição da vaga: ${vacancy.description}\nData limite: ${vacancy.date}`
  );

  if (verify) {
    vacancies.push(vacancy);
    alert("Vaga cadastrada com sucesso!");
  }
}

function viewVacancy() {
  const index = Number(
    prompt("Digite o índice da vaga que deseja visualizar:")
  );
  const vacancie = vacancies[index];
  const candidates = vacancie.candidate.reduce((i, f) => i + "\n - " + f, "");

  alert(
    `Vaga nº indíce: ${index}\nNome da vaga: ${vacancie.name}\nDescrição: ${vacancie.description}\nData limite: ${vacancie.date}\nNúmero de candidatos: ${vacancie.candidate.length}\nCandidatos: ${candidates}\n`
  );
}

function applyForVacancy() {
  const nameCandidate = prompt("Digite o nome do candidato(a):");
  const index = Number(
    prompt("Digite o índice da vaga para a qual deseja se candidatar:")
  );
  const findVacancy = vacancies[index];

  const verify = confirm(
    `Deseja cadastrar o ${nameCandidate} para a vaga ${index}?\n\nNome da vaga: ${findVacancy.name}\nDescrição: ${findVacancy.description}\nData limite: ${findVacancy.date}`
  );

  if (verify) {
    findVacancy.candidate.push(nameCandidate);
    alert("Inscrição concluída...\nBoa sorte!");
  }
}

function deleteVacancy() {
  const index = Number(prompt("Digite o índice da vaga que deseja deletar:"));
  const findVacancy = vacancies[index];
  const verify = confirm(
    `Deseja mesmo excluir a vaga ${index}?\n\nNome da vaga: ${findVacancy.name}\nDescrição: ${findVacancy.description}\nData limite: ${findVacancy.date}`
  );

  if (verify) {
    vacancies.splice(index, 1);
    alert("Vaga excluída com sucesso!");
  }
}

function run() {
  let options = "";
  do {
    options = prompt(
      `Bem vindo ao VagasDeEmprego.com.\n\nSelecione uma opção do menu interativo:\n1) Listar vagas disponíveis.\n2) Criar uma nova vaga.\n3) Visualizar uma vaga.\n4) Candidatar-se para um vaga.\n5) Excluir uma vaga.\n6) Sair.`
    );
    switch (options) {
      case "1":
        listVacancies();
        break;
      case "2":
        createVacancy();
        break;
      case "3":
        viewVacancy();
        break;
      case "4":
        applyForVacancy();
        break;
      case "5":
        deleteVacancy();
        break;
      case "6":
        alert("Encerrando...");
        break;
      default:
        alert("Opção inválida!");
        break;
    }
  } while (options !== "6");
}

run();
