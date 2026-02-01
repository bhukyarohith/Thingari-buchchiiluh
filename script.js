const noBtn = document.getElementById("no-button");
const yesBtn = document.getElementById("yes-button");

const noMsg = document.getElementById("no-message");
const yesMsg = document.getElementById("yes-message");
const question = document.getElementById("question");
const nameText = document.getElementById("name");
const image = document.getElementById("main-image");

let currentState = "idle"; // idle | no | yes

function resetUI() {
  noMsg.style.display = "none";
  yesMsg.style.display = "none";
  image.src = "images/catflower.jpg";
  question.textContent = "Will you be my Valentine?";
  nameText.style.display = "block";

  noBtn.style.position = "static";
}

// NO CLICK
noBtn.addEventListener("click", () => {
  resetUI();
  currentState = "no";

  noMsg.style.display = "block";
  image.src = "images/gun.gif";
  question.textContent = "Choose wisely 😈";
  nameText.style.display = "none";

  // move NO button
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * maxX + "px";
  noBtn.style.top = Math.random() * maxY + "px";
});

// YES CLICK
yesBtn.addEventListener("click", () => {
  resetUI();
  currentState = "yes";

  noBtn.style.display = "none";
  yesBtn.style.display = "none";

  yesMsg.style.display = "block";
  question.textContent = "See you on the 14th, Princess 💖";
  image.src = "images/dance.gif";
});
