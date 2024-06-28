/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
window.onload = function() {
  const ranks = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  const suits = ["&hearts;", "&diams;", "&clubs;", "&spades;"];

  function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  const randomRank = getRandomElement(ranks);
  const randomSuit = getRandomElement(suits);

  document
    .querySelectorAll(".rank")
    .forEach(element => (element.innerHTML = randomRank));
  document.querySelectorAll(".suit").forEach(element => {
    element.innerHTML = randomSuit;

    if (randomSuit == "&hearts;" || randomSuit == "&diams;") {
      element.style.color = "red";
    }
  });
};
