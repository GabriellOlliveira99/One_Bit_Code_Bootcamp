let name = prompt("Digite seu nome:");
let cities = "";
let numberOfCities = 0;
let confirmCities = prompt("Você já visitou alguma cidade? SIM/NÃO");

while (confirmCities === "SIM") {
  let citie = prompt("Digite o nome de uma cidade já visitada:");
  cities += " - " + citie + "\n";
  numberOfCities++;
  confirmCities = prompt("Você visitou alguma outra cidade? SIM/NÃO");
}

alert(
  "Turista: " +
    name +
    "\nQuantidade de cidades visitadas: " +
    numberOfCities +
    "\nCidades visitadas:\n" +
    cities
);
