function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid;
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove('error');
  errorsOutputElement.textContent = '';
  formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("playername").trim();
  console.log(enteredPlayerName);

  if (!enteredPlayerName) {
    event.target.firstElementChild.classList.add('error');
    errorsOutputElement.textContent = "Please entered a valid name!";
    return;
  }

  const updatedplayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
  updatedplayerDataElement.children[1].textContent = enteredPlayerName;

  players[editedPlayer - 1].name = enteredPlayerName;

  closePlayerConfig();
}