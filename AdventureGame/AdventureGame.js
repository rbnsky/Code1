"use strict";
const titles = [
    "The Adventure Begins",
    "Take The Left Path",
    "Take the Right Path",
    "Accept the Fox's Offer",
    "Decline the Fox's Offer",
    "Confront the Goblins",
    "Sneak Past the Goblins",
    "Gather Herbs",
    "Explore Further",
    "Cross the Bridge",
    "Find Another Way",
    "Play the Game",
    "Fight the Goblins",
    "Follow the Hidden Path",
    "Return to the main path",
    "Thank the Fox",
    "Part Ways",
    "Explore the Ruin",
    "Set Up Camp",
    "Enter the Cave",
    "Keep Walking",
    "Take the Narrow Path",
    "Turn Back",
    "Accept the Treasure",
    "Decline the Treasure",
    "Claim their Treasure",
    "Leave Quickly",
    "Approach the Creatures",
    "Observe from Afar",
    "Take the Left Fork",
    "Take the Right Fork",
];
const storyTexts = [
    "You find yourself standing at the edge of an enchanted forest. You've heard tales of great treasures and magical creatures that lie within. Before you are two paths:",
    "As you walk along the left path, you come across a talking fox. The fox offers to guide you through the forest in exchange for a favor.",
    "As you proceed down the right path, you encounter a group of goblins who seem to be guarding something precious.",
    "The fox guides you to a hidden grove filled with rare herbs and plants.",
    "You come across a rickety bridge over a deep chasm. A sign warns of the bridge's instability.",
    "The goblins challenge you to a game of wits. If you win, they will let you pass and share their treasure.",
    "You successfully sneak past the goblins and find a hidden path leading deeper into the forest.",
    "You collect several rare herbs, which might be useful for healing or other purposes.",
    "The fox leads you to an ancient ruin covered in vines.",
    "You safely cross the bridge. As you walk below a large rock formation, you spot a mysterious cave on the left.",
    "You find a narrow path that winds down the side of the chasm.",
    "You win the game and the goblins reward you with a piece of their treasure.",
    "You defeat the goblins. The treasure is yours to take, but it seems suspicious. Could it be a trap?",
    "The hidden path leads you to a secret glade filled with magical creatures.",
    "You return to the main path and soon find a fork in the road.",
    "As a parting gift, the fox gives you a magical charm. \n\n You put on the charm, feeling its protective power. \n\n With the charm's protection, you safely navigate the rest of the forest and find the treasure you've been seeking. \n\n Your adventure ends with you richer and wiser, ready for the next challenge. \n\n The End.",
    "You bid farewell to the fox and continue your journey alone, feeling more confident.\n\nYou decide to head north, following a new path.\n\nOn your way, you discover a hidden village where you are welcomed warmly.\n\nYou share your collected herbs and find a new place to call home.\n\nThe End.",
    "Inside the ruin, you find an ancient artifact that pulses with magical energy.\n\nYou take the artifact, feeling its power.\n\nThe artifact grants you immense power, which you use to protect the forest and its creatures.\n\nYou become a legendary guardian known throughout the land.\n\nThe End.",
    "You set up camp and have a restful night, feeling rejuvenated the next morning.\n\nExploring the surroundings, you find a hidden entrance to an underground network of caves filled with treasure.\n\nYour journey ends with you richer than you ever imagined.\n\nThe End.",
    "In the cave, you find a hidden chamber with ancient glowing writings on the walls.\n\nYou try to decipher the ancient text.\n\nDeciphering the text reveals a long-lost spell that grants you great wisdom and insight.\n\nYou become a renowned scholar and wizard, respected by all.\n\nThe End.",
    "You find a hidden grove filled with beautiful, exotic flowers.\n\nYou pick a few, thinking they might be useful.\n\nAs it turns out, the flowers you pick have magical properties that heal and protect you throughout your journey.\n\nYou safely return home, celebrated for your rare finds.\n\nThe End.",
    "The narrow path leads you to a hidden waterfall.\n\nYou take a refreshing bath in the pool beneath the waterfall.\n\nAs you swim closer to the waterfall, you discover a hidden cave behind it, filled with ancient treasures.\n\nYou return home a wealthy and celebrated adventurer.\n\nThe End.",
    "You find another route that leads to an old stone bridge...\n\nCrossing the bridge, you find a new path that leads you out of the forest. \n\nYou return home with incredible stories and valuable experiences.\n\nThe End.",
    "You accept the goblins' treasure and continue your journey.\n\nYou hide it to use later.\n\nThe treasure helps you in times of need, bringing prosperity and safety to your future endeavors.\n\nWith its protection, you become a legendary adventurer in your homeland.\n\nThe End.",
    "You refuse the treasure and continue your journey with a clear conscience.\n\nYou thank the goblins and move on.\n\nYour gratitude earns you the goblins' respect.\n\nThey guide you safely through the forest, and you return home with valuable knowledge and friendships.\n\nThe End.",
    "You claim the treasure as your own and take it back home with you.\n\nIt brings great wealth and allows you to improve the lives of those in your village.\n\nYou become a celebrated hero.\n\nThe End.",
    "You leave the area as fast as you can.\n\nYou keep moving, not wanting to risk stopping.\n\nYour caution ensures your safety.\n\nYou navigate through the forest and find your way home, your tales of adventure inspiring others.\n\nThe End.",
    "The magical creatures welcome you and offer to share their wisdom.\n\nThe knowledge you gain from the creatures helps you greatly in your journey.\n\nYou return home wiser and become a respected sage.\n\nThe End.",
    "You watch the creatures, learning from their behavior without disturbing them.\n\nYou take detailed notes on what you observe.\n\nYour notes become valuable research that brings you fame as a scholar.\n\nYou return home and share your discoveries, gaining great respect.\n\nThe End.",
    "The left fork leads you to a tranquil glade with a crystal-clear pond.\n\nYou explore the glade, looking for any hidden secrets.\n\nYour exploration leads to the discovery of ancient runes that grant you powerful knowledge.\n\nYou return home and use this knowledge to become a respected leader.\n\nThe End.",
    "The right fork leads you to a dense thicket.\n\nYou push through the thicket, determined to see what lies beyond.\n\nBeyond the thicket, you find a hidden village where you are welcomed and celebrated.\n\nYou share your stories and live a life of peace and prosperity.\n\nThe End.",
];
const choiceTexts = [
    "Choice Text 1", "Choice Text 2", "Choice Text 3", "Choice Text 4", "Choice Text 5", "Choice Text 6",
    "Choice Text 7", "Choice Text 8", "Choice Text 9", "Choice Text 10", "Choice Text 11", "Choice Text 12",
    "Choice Text 13", "Choice Text 14", "Choice Text 15", "Choice Text 16", "Choice Text 17", "Choice Text 18",
    "Choice Text 19", "Choice Text 20", "Choice Text 21", "Choice Text 22", "Choice Text 23", "Choice Text 24",
    "Choice Text 25", "Choice Text 26", "Choice Text 27", "Choice Text 28", "Choice Text 29", "Choice Text 30",
    "Choice Text 31", "Choice Text 32"
];
const choiceHeadlines = [
    "Headline 1", "Headline 2", "Headline 3", "Headline 4", "Headline 5", "Headline 6", "Headline 7", "Headline 8",
    "Headline 9", "Headline 10", "Headline 11", "Headline 12", "Headline 13", "Headline 14", "Headline 15", "Headline 16",
    "Headline 17", "Headline 18", "Headline 19", "Headline 20", "Headline 21", "Headline 22", "Headline 23", "Headline 24",
    "Headline 25", "Headline 26", "Headline 27", "Headline 28", "Headline 29", "Headline 30", "Headline 31", "Headline 32"
];
const images = [
    "images/1.jpg", "images/2A.jpg", "images/2B.jpg", "images/3A.jpg", "images/3B.jpg", "images/3C.jpg", "images/3D.jpg",
    "images/4A.jpg", "images/4B.jpg", "images/4C.jpg", "images/4D.jpg", "images/4E.jpg", "images/4F.jpg", "images/4G.jpg",
    "images/4H.jpg", "images/5A.jpg", "images/5B.jpg", "images/5C.jpg", "images/5D.jpg", "images/5E.jpg", "images/5F.jpg",
    "images/5G.jpg", "images/5H.jpg", "images/5I.jpg", "images/5J.jpg", "images/5K.jpg", "images/5L.jpg", "images/5M.jpg",
    "images/5N.jpg", "images/5O.jpg", "images/5P.jpg"
];
const story = [
    {
        title: titles[0],
        text: storyTexts[0],
        image: images[0],
        choices: [
            { text: choiceTexts[0], headline: choiceHeadlines[0], nextNode: 1 },
            { text: choiceTexts[1], headline: choiceHeadlines[1], nextNode: 2 }
        ]
    },
    {
        title: titles[1],
        text: storyTexts[1],
        image: images[1],
        choices: [
            { text: choiceTexts[2], headline: choiceHeadlines[2], nextNode: 3 },
            { text: choiceTexts[3], headline: choiceHeadlines[3], nextNode: 4 }
        ]
    },
    {
        title: titles[2],
        text: storyTexts[2],
        image: images[2],
        choices: [
            { text: choiceTexts[4], headline: choiceHeadlines[4], nextNode: 5 },
            { text: choiceTexts[5], headline: choiceHeadlines[5], nextNode: 6 }
        ]
    },
    {
        title: titles[3],
        text: storyTexts[3],
        image: images[3],
        choices: [
            { text: choiceTexts[6], headline: choiceHeadlines[6], nextNode: 7 },
            { text: choiceTexts[7], headline: choiceHeadlines[7], nextNode: 8 }
        ]
    },
    {
        title: titles[4],
        text: storyTexts[4],
        image: images[4],
        choices: [
            { text: choiceTexts[8], headline: choiceHeadlines[8], nextNode: 9 },
            { text: choiceTexts[9], headline: choiceHeadlines[9], nextNode: 10 }
        ]
    },
    {
        title: titles[5],
        text: storyTexts[5],
        image: images[5],
        choices: [
            { text: choiceTexts[10], headline: choiceHeadlines[10], nextNode: 11 },
            { text: choiceTexts[11], headline: choiceHeadlines[11], nextNode: 12 }
        ]
    },
    {
        title: titles[6],
        text: storyTexts[6],
        image: images[6],
        choices: [
            { text: choiceTexts[12], headline: choiceHeadlines[12], nextNode: 13 },
            { text: choiceTexts[13], headline: choiceHeadlines[13], nextNode: 14 }
        ]
    },
    {
        title: titles[7],
        text: storyTexts[7],
        image: images[7],
        choices: [
            { text: choiceTexts[14], headline: choiceHeadlines[14], nextNode: 15 },
            { text: choiceTexts[15], headline: choiceHeadlines[15], nextNode: 16 }
        ]
    },
    {
        title: titles[8],
        text: storyTexts[8],
        image: images[8],
        choices: [
            { text: choiceTexts[16], headline: choiceHeadlines[16], nextNode: 17 },
            { text: choiceTexts[17], headline: choiceHeadlines[17], nextNode: 18 }
        ]
    },
    {
        title: titles[9],
        text: storyTexts[9],
        image: images[9],
        choices: [
            { text: choiceTexts[18], headline: choiceHeadlines[18], nextNode: 19 },
            { text: choiceTexts[19], headline: choiceHeadlines[19], nextNode: 20 }
        ]
    },
    {
        title: titles[10],
        text: storyTexts[10],
        image: images[10],
        choices: [
            { text: choiceTexts[20], headline: choiceHeadlines[20], nextNode: 21 },
            { text: choiceTexts[21], headline: choiceHeadlines[21], nextNode: 22 }
        ]
    },
    {
        title: titles[11],
        text: storyTexts[11],
        image: images[11],
        choices: [
            { text: choiceTexts[22], headline: choiceHeadlines[22], nextNode: 23 },
            { text: choiceTexts[23], headline: choiceHeadlines[23], nextNode: 24 }
        ]
    },
    {
        title: titles[12],
        text: storyTexts[12],
        image: images[12],
        choices: [
            { text: choiceTexts[24], headline: choiceHeadlines[24], nextNode: 25 },
            { text: choiceTexts[25], headline: choiceHeadlines[25], nextNode: 26 }
        ]
    },
    {
        title: titles[13],
        text: storyTexts[13],
        image: images[13],
        choices: [
            { text: choiceTexts[26], headline: choiceHeadlines[26], nextNode: 27 },
            { text: choiceTexts[27], headline: choiceHeadlines[27], nextNode: 28 }
        ]
    },
    {
        title: titles[14],
        text: storyTexts[14],
        image: images[14],
        choices: [
            { text: choiceTexts[28], headline: choiceHeadlines[28], nextNode: 29 },
            { text: choiceTexts[29], headline: choiceHeadlines[29], nextNode: 30 }
        ]
    },
    {
        title: titles[15],
        text: storyTexts[15],
        image: images[15],
        choices: []
    },
    {
        title: titles[16],
        text: storyTexts[16],
        image: images[16],
        choices: []
    },
    {
        title: titles[17],
        text: storyTexts[17],
        image: images[17],
        choices: []
    },
    {
        title: titles[18],
        text: storyTexts[18],
        image: images[18],
        choices: []
    },
    {
        title: titles[19],
        text: storyTexts[19],
        image: images[19],
        choices: []
    },
    {
        title: titles[20],
        text: storyTexts[20],
        image: images[20],
        choices: []
    },
    {
        title: titles[21],
        text: storyTexts[21],
        image: images[21],
        choices: []
    },
    {
        title: titles[22],
        text: storyTexts[22],
        image: images[22],
        choices: []
    },
    {
        title: titles[23],
        text: storyTexts[23],
        image: images[23],
        choices: []
    },
    {
        title: titles[24],
        text: storyTexts[24],
        image: images[24],
        choices: []
    },
    {
        title: titles[25],
        text: storyTexts[25],
        image: images[25],
        choices: []
    },
    {
        title: titles[26],
        text: storyTexts[26],
        image: images[26],
        choices: []
    },
    {
        title: titles[27],
        text: storyTexts[27],
        image: images[27],
        choices: []
    },
    {
        title: titles[28],
        text: storyTexts[28],
        image: images[28],
        choices: []
    },
    {
        title: titles[29],
        text: storyTexts[29],
        image: images[29],
        choices: []
    },
    {
        title: titles[30],
        text: storyTexts[30],
        image: images[30],
        choices: []
    }
];
function makeChoice(choiceIndex) {
    const currentNode = story[currentNodeIndex];
    const nextNodeIndex = currentNode.choices[choiceIndex].nextNode;
    loadNode(nextNodeIndex);
}
function loadNode(nodeIndex) {
    const node = story[nodeIndex];
    currentNodeIndex = nodeIndex;
    document.getElementById("story-title").innerText = node.title;
    document.getElementById("story-text").innerHTML = `<strong>Story:</strong> ${node.text}`;
    document.getElementById("story-image").src = node.image;
    node.choices.forEach((choice, index) => {
        const button = document.getElementById(`choice${index + 1}`);
        button.innerHTML = `<strong>${choice.headline}:</strong> ${choice.text}`;
        button.style.display = "inline-block";
        button.onclick = () => makeChoice(index);
    });
    for (let i = node.choices.length; i < 2; i++) {
        const button = document.getElementById(`choice${i + 1}`);
        button.style.display = "none";
    }
}
let currentNodeIndex = 0;
window.onload = () => loadNode(0);
