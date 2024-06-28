"use strict";
const story = [
    {
        title: "Start of the Adventure",
        text: "You are standing at a crossroad. Which path will you take?",
        image: "path1.jpg",
        choices: [
            { text: "Take the left path", nextNode: 1 },
            { text: "Take the right path", nextNode: 2 }
        ]
    },
    {
        title: "Left Path",
        text: "You encounter a friendly dragon. What will you do?",
        image: "dragon.jpg",
        choices: [
            { text: "Talk to the dragon", nextNode: 3 },
            { text: "Run away", nextNode: 4 }
        ]
    },
    {
        title: "Right Path",
        text: "You find a treasure chest. What will you do?",
        image: "treasure.jpg",
        choices: [
            { text: "Open the chest", nextNode: 5 },
            { text: "Leave it alone", nextNode: 6 }
        ]
    },
    {
        title: "Talk to the Dragon",
        text: "The dragon shares its wisdom with you. You have completed your adventure!",
        image: "wisdom.jpg",
        choices: [
            { text: "Restart", nextNode: 0 }
        ]
    },
    {
        title: "Run Away",
        text: "You safely return home, but without any adventure.",
        image: "home.jpg",
        choices: [
            { text: "Restart", nextNode: 0 }
        ]
    },
    {
        title: "Open the Chest",
        text: "You find a rare gem inside. You have completed your adventure!",
        image: "gem.jpg",
        choices: [
            { text: "Restart", nextNode: 0 }
        ]
    },
    {
        title: "Leave it Alone",
        text: "You walk away, always wondering what was inside.",
        image: "mystery.jpg",
        choices: [
            { text: "Restart", nextNode: 0 }
        ]
    }
];
function makeChoice(choiceIndex) {
    const currentNode = story[currentNodeIndex];
    const nextNodeIndex = currentNode.choices[choiceIndex].nextNode;
    loadNode(nextNodeIndex);
}
function loadNode(nodeIndex) {
    var _a, _b;
    const node = story[nodeIndex];
    currentNodeIndex = nodeIndex;
    document.getElementById("story-title").innerText = node.title;
    document.getElementById("story-text").innerText = node.text;
    document.getElementById("story-image").src = node.image;
    const choice1Button = document.getElementById("choice1");
    const choice2Button = document.getElementById("choice2");
    choice1Button.innerText = ((_a = node.choices[0]) === null || _a === void 0 ? void 0 : _a.text) || '';
    choice1Button.onclick = () => makeChoice(0);
    choice2Button.innerText = ((_b = node.choices[1]) === null || _b === void 0 ? void 0 : _b.text) || '';
    choice2Button.onclick = () => makeChoice(1);
}
let currentNodeIndex = 0;
window.onload = () => loadNode(0);
