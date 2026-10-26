"use strict";

const keysEl = document.querySelectorAll(".key");

const allKeys = [];

let audio = new Audio();

const playTune = function (tune) {
  audio.src = `./tunes/${tune}.wav`;
  audio.play();
};

keysEl.forEach((key) => {
  allKeys.push(key.dataset.key);
  key.addEventListener("click", () => playTune(key.dataset.key));
});

document.addEventListener("keydown", (e) => {
  if (allKeys.includes(e.key)) playTune(e.key)
});