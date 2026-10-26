"use strict";

const keysEl = document.querySelectorAll(".key");

const allKeys = [];

let audio = new Audio();

const playTune = function (tune) {
  audio.src = `./tunes/${tune}.wav`;
  audio.play();

  const clicked = document.querySelector(`[data-key="${tune}"]`);
  clicked.classList.add("active");

  setTimeout(() => {
    clicked.classList.remove("active");
  }, 150);
};

keysEl.forEach((key) => {
  allKeys.push(key.dataset.key);

  key.addEventListener("click", () => playTune(key.dataset.key));
});

document.addEventListener("keydown", (e) => {
  if (allKeys.includes(e.key)) playTune(e.key);
});
