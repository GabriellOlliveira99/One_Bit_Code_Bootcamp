// TESTE DE VELOCIDADE
let firstCar = prompt("Digite o nome de um carro:");
let speedFirtsCar = Number(
  prompt(`Digite a velocidade máxima do ${firstCar}.`)
);
let secondCar = prompt("Digite o nome de um outro carro:");
let speedSecondCar = Number(prompt(`Digite a velocidade do ${secondCar}`));

if (speedFirtsCar > speedSecondCar) {
  alert(`A velocidade do ${firstCar} é maior que a do ${secondCar}`);
} else if (speedSecondCar > speedFirtsCar) {
  alert(`A velocidade do ${secondCar} é maior que a do ${firstCar}`);
} else {
  alert(`A velocidade do ${firstCar} e ${secondCar} são iguais.`);
}

// CÁLCULO DE DANO

let attacker = prompt("Qual o nome do personagem atacante?");
let attackerPower = Number(prompt(`Qual o poder de ataque do(a) ${attacker}?`));

let defender = prompt("Qual o nome do personagem defensor?");
let healthPoints = Number(
  prompt(`Quantos pontos de vida o ${defender} possuí:`)
);
let defenderPower = Number(prompt(`Qual o poder de defesa do ${defender}?`));
let defenderShield = prompt(`O ${defender} possuí escudo? Sim/Não`);

let damage = 0;

if (attackerPower > defenderPower && defenderShield === "Não") {
  damage = attackerPower - defenderPower;
} else if (attackerPower > defenderPower && defenderShield === "Sim") {
  damage = (attackerPower - defenderPower) / 2;
}

healthPoints -= damage;

alert(`O personagem ${attacker} causou ${damage} em ${defender}`);
alert(`${attacker} -> Poder de ataque: ${attackerPower}
      ${defender} -> Pontos de vida: ${healthPoints}, Poder de defesa: ${defenderPower}, Possuí escudo: ${defenderShield} `);
