function addJogador() {
  const name = document.getElementById("name").value;
  const position = document.getElementById("position").value;
  const number = document.getElementById("number").value;

  const confirmar = confirm(
    `Escalar ${name} como ${position} com a camisa ${number}?`
  );
  if (confirmar) {
    const playersList = document.getElementById("playersList");
    const player = document.createElement("ul");
    player.id = "player-" + number;
    player.innerText = position + ": " + name + " (" + number + ") ";
    playersList.appendChild(player);

    document.getElementById("name").value = "";
    document.getElementById("position").value = "";
    document.getElementById("number").value = "";
  }
}

function removeJogador() {
  const number = document.getElementById("removeNumber").value;
  const playerToRemove = document.getElementById("player-" + number);

  const confirmar = confirm(`Deseja remover ${playerToRemove.innerText}?`);

  if (confirmar) {
    document.getElementById("playersList").removeChild(playerToRemove);
    document.getElementById("removeNumber").value = "";
  }
}
