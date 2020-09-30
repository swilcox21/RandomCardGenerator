/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  document.querySelector(".container-fluid").innerHTML =
    "<div id='cardX' class='card' style='width: 18rem; height: 24rem;'><div id='top-left' class='card-body text-left'>&hearts;</div><div id='number' class='card-body'>8</div><div id='bottom-right' class='card-body text-right '>&hearts;</div></div></div>";
  myFunction();
};
function myFunction() {
  let suit = ["&spades;", "&clubs;", "&hearts;", "&diamondsuit;"];
  let cardNumber = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let randomSuit = suit[Math.floor(Math.random() * 4)];
  let randomNumber = cardNumber[Math.floor(Math.random() * 13)];
  document.querySelector("#top-left").innerHTML = randomSuit;
  document.querySelector("#bottom-right").innerHTML = randomSuit;
  document.querySelector("#number").innerHTML = randomNumber;
  if (randomSuit == "&hearts;" || randomSuit == "&diamondsuit;") {
    document.querySelector("#top-left").style.color = "red";
    document.querySelector("#bottom-right").style.color = "red";
  }
}
