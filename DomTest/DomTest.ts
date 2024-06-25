"use strict";

let spanElement = document.querySelector("#IdHello");
spanElement.textContent = "World";
let newSpan = document.createElement("span");
newSpan.textContent = "Hello";
document.body.appendChild(newSpan);
newSpan.style.backgroundColor = "red";
console.log(newSpan);

function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor(): string {
    const letters = '0123456789ABCDEF'; //numbers/letters found in a hex code
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createRandomElements() {
    const randomWords = ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel", "India", "Juliet", "Kilo", "Lima", "Mike", "November", "Oscar", "Papa", "Quebec", "Romeo", "Sierra", "Tango", "Uniform", "Victor", "Whiskey", "X-ray", "Yankee", "Zulu"];
    const numElements = getRandomInt(30, 50); // Integer for amount of random words
    const container = document.body;
    for (let i = 0; i < numElements; i++) {
        const element = document.createElement(Math.random() > 0.5 ? 'div' : 'span');
        const randomWord = randomWords[getRandomInt(0, randomWords.length - 1)];
        element.textContent = `${randomWord} ${i + 1}`;
        element.style.position = 'absolute';
        element.style.left = `${getRandomInt(0, window.innerWidth - 1)}px`;
        element.style.top = `${getRandomInt(0, window.innerHeight - 1)}px`;
        element.style.backgroundColor = getRandomColor();
        element.style.color = getRandomColor();
        element.style.padding = '5px';
        element.style.fontFamily = 'Roboto, sans-serif';
        element.style.fontSize = '20px';
        element.addEventListener('click', () => updateElement(element));
        container.appendChild(element);
    }
}

function updateElement(element: HTMLElement) {
    element.style.left = `${getRandomInt(0, window.innerWidth - 1)}px`;
    element.style.top = `${getRandomInt(0, window.innerHeight - 1)}px`;
    element.style.backgroundColor = getRandomColor();
    element.style.color = getRandomColor();
}

createRandomElements();
