const noBtn = document.getElementById("no-button");
const yesBtn = document.getElementById("yes-button");

const noMsg = document.getElementById("no-message");
const yesMsg = document.getElementById("yes-message");
const question = document.getElementById("question");
const nameText = document.getElementById("name");
const image = document.getElementById("main-image");

let video = null;

// reset everything
function resetState() {
  noMsg.style.display = "none";
  yesMsg.style.display = "none";
  image.src = "images/catflower.jpg";

  if (video) {
    video.pause();
    video.remove();
    video = null;
  }
}

// NO button
noBtn.addEventListener("click", () => {
  resetState();

  noMsg.style.display = "block";
  image.src = "images/gun.gif";
  question.textContent = "Choose wisely 😈";
  nameText.style.display = "none";

  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * maxX + "px";
  noBtn.style.top = Math.random() * maxY + "px";

  if (!video) {
    video = document.createElement("video");
    video.src = "./Maroon 5 - Sugar.mp4#t=42";
    video.autoplay = true;
    video.muted = false;
    video.style.position = "fixed";
    video.style.top = "50%";
    video.style.left = "50%";
    video.style.transform = "translate(-50%, -50%)";
    video.style.width = "300px";
    document.body.appendChild(video);
  }
});

// YES button
yesBtn.addEventListener("click", () => {
  resetState();

  noBtn.remove();
  yesBtn.remove();
  noMsg.style.display = "none";

  question.textContent = "See you on the 14th, Princess 💖";
  nameText.style.display = "block";
  yesMsg.style.display = "block";

  image.src = "images/dance.gif";

  const audio = new Audio("./Minions Cheering.mp3");
  audio.play().catch(() => {});
});
