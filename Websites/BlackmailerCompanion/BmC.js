"use strict";
console.log("Start");
let chosenCharacter;
window.addEventListener("load", handleLoad);
function handleLoad(_event) {
    let mail = document.querySelector("div#mail");
    mail.addEventListener("click", placeCharacter);
    document.addEventListener("keydown", chooseCharacter);
}
function placeCharacter(_event) {
    console.log(_event);
    let x = _event.offsetX;
    let y = _event.offsetY;
    let mail = _event.target;
    let letter = document.createElement("span");
    mail.appendChild(letter);
    letter.textContent = chosenCharacter;
    letter.style.left = x + "px";
    letter.style.top = y + "px";
    letter.addEventListener("click", deleteCharacter);
}
function chooseCharacter(_event) {
    // console.log(_event);
    chosenCharacter = _event.key;
}
function deleteCharacter(_event) {
    let target = _event.target;
    let parent = target.parentNode;
    parent.removeChild(target);
}
