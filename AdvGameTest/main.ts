interface Choice {
    text: string;
    headline: string;
    nextNode: number;
}

interface StoryNode {
    title: string;
    text: string;
    image: string;
    choices: Choice[];
}

const titles = [
    "The Forest",
    "The Fox's Offer",
    "Encounter with Goblins",
    "A Clearing in the Woods",
    "Crossroads",
    "The Bridge",
    "The Hidden Path",
    "The Fox's Gift",
    "The Ancient Ruin",
    "The Dark Cave",
    "The Narrow Path",
    "The Treasure",
    "The Ambush",
    "The Creatures",
    "The Fork in the Road"
];

const storyTexts = [
    "You find yourself standing at the edge of a dense forest. Two paths lie ahead of you, disappearing into the thick foliage.",
    "As you journey through the forest, a fox appears and offers you a choice.",
    "While walking through the forest, you encounter a group of goblins blocking your path.",
    "You come across a peaceful clearing in the woods, bathed in sunlight.",
    "You arrive at a crossroads with several paths branching off in different directions.",
    "You reach an old bridge spanning a rushing river.",
    "You discover a hidden path obscured by vines and foliage.",
    "Grateful for your help, the fox gives you a gift.",
    "You stumble upon the ruins of an ancient structure, overgrown with moss and ivy.",
    "You enter a dark cave, its entrance shrouded in shadows.",
    "You come across a narrow, treacherous path along the cliffside.",
    "You uncover a treasure chest hidden beneath a pile of leaves.",
    "You are suddenly ambushed by unseen attackers.",
    "You encounter mysterious creatures in the forest.",
    "You reach a fork in the road with two diverging paths."
];

const optionHeadlines = [
    ["Take the left path", "Take the right path"],
    ["Accept the fox's offer", "Decline the fox's offer"],
    ["Confront the goblins", "Sneak past the goblins"],
    ["Gather herbs", "Explore further"],
    ["Cross the bridge", "Find another way"],
    ["Play the game", "Fight the goblins"],
    ["Follow the hidden path", "Return to the main path"],
    ["Thank the fox", "Part ways"],
    ["Explore the ruin", "Set up camp"],
    ["Enter the cave", "Keep walking"],
    ["Take the narrow path", "Turn back"],
    ["Accept the treasure", "Decline the treasure"],
    ["Claim their treasure", "Leave quickly"],
    ["Approach the creatures", "Observe from afar"],
    ["Take the left fork", "Take the right fork"]
];

const images = [
    "images/1.jpg", "images/2A.jpg", "images/2B.jpg", "images/3A.jpg", "images/3B.jpg", "images/3C.jpg", "images/3D.jpg",
    "images/4A.jpg", "images/4B.jpg", "images/4C.jpg", "images/4D.jpg", "images/4E.jpg", "images/4F.jpg", "images/4G.jpg",
    "images/4H.jpg", "images/5A.jpg", "images/5B.jpg", "images/5C.jpg", "images/5D.jpg", "images/5E.jpg", "images/5F.jpg",
    "images/5G.jpg", "images/5H.jpg", "images/5I.jpg", "images/5J.jpg", "images/5K.jpg", "images/5L.jpg", "images/5M.jpg",
    "images/5N.jpg", "images/5O.jpg", "images/5P.jpg"
];

const storyNodes: StoryNode[] = [
    {
        title: titles[0],
        text: storyTexts[0],
        image: images[0],
        choices: [
            { text: optionHeadlines[0][0], headline: optionHeadlines[0][0], nextNode: 1 },
            { text: optionHeadlines[0][1], headline: optionHeadlines[0][1], nextNode: 2 }
        ]
    },
    {
        title: titles[1],
        text: storyTexts[1],
        image: images[1],
        choices: [
            { text: optionHeadlines[1][0], headline: optionHeadlines[1][0], nextNode: 3 },
            { text: optionHeadlines[1][1], headline: optionHeadlines[1][1], nextNode: 4 }
        ]
    },
    {
        title: titles[2],
        text: storyTexts[2],
        image: images[2],
        choices: [
            { text: optionHeadlines[2][0], headline: optionHeadlines[2][0], nextNode: 5 },
            { text: optionHeadlines[2][1], headline: optionHeadlines[2][1], nextNode: 6 }
        ]
    },
    {
        title: titles[3],
        text: storyTexts[3],
        image: images[3],
        choices: [
            { text: optionHeadlines[3][0], headline: optionHeadlines[3][0], nextNode: 7 },
            { text: optionHeadlines[3][1], headline: optionHeadlines[3][1], nextNode: 8 }
        ]
    },
    {
        title: titles[4],
        text: storyTexts[4],
        image: images[4],
        choices: [
            { text: optionHeadlines[4][0], headline: optionHeadlines[4][0], nextNode: 9 },
            { text: optionHeadlines[4][1], headline: optionHeadlines[4][1], nextNode: 10 }
        ]
    },
    {
        title: titles[5],
        text: storyTexts[5],
        image: images[5],
        choices: [
            { text: optionHeadlines[5][0], headline: optionHeadlines[5][0], nextNode: 11 },
            { text: optionHeadlines[5][1], headline: optionHeadlines[5][1], nextNode: 12 }
        ]
    },
    {
        title: titles[6],
        text: storyTexts[6],
        image: images[6],
        choices: [
            { text: optionHeadlines[6][0], headline: optionHeadlines[6][0], nextNode: 13 },
            { text: optionHeadlines[6][1], headline: optionHeadlines[6][1], nextNode: 14 }
        ]
    },
    {
        title: titles[7],
        text: storyTexts[7],
        image: images[7],
        choices: [
            { text: optionHeadlines[7][0], headline: optionHeadlines[7][0], nextNode: 15 },
            { text: optionHeadlines[7][1], headline: optionHeadlines[7][1], nextNode: 16 }
        ]
    },
    {
        title: titles[8],
        text: storyTexts[8],
        image: images[8],
        choices: [
            { text: optionHeadlines[8][0], headline: optionHeadlines[8][0], nextNode: 17 },
            { text: optionHeadlines[8][1], headline: optionHeadlines[8][1], nextNode: 18 }
        ]
    },
    {
        title: titles[9],
        text: storyTexts[9],
        image: images[9],
        choices: [
            { text: optionHeadlines[9][0], headline: optionHeadlines[9][0], nextNode: 19 },
            { text: optionHeadlines[9][1], headline: optionHeadlines[9][1], nextNode: 20 }
        ]
    },
    {
        title: titles[10],
        text: storyTexts[10],
        image: images[10],
        choices: [
            { text: optionHeadlines[10][0], headline: optionHeadlines[10][0], nextNode: 21 },
            { text: optionHeadlines[10][1], headline: optionHeadlines[10][1], nextNode: 22 }
        ]
    },
    {
        title: titles[11],
        text: storyTexts[11],
        image: images[11],
        choices: [
            { text: optionHeadlines[11][0], headline: optionHeadlines[11][0], nextNode: 23 },
            { text: optionHeadlines[11][1], headline: optionHeadlines[11][1], nextNode: 24 }
        ]
    },
    {
        title: titles[12],
        text: storyTexts[12],
        image: images[12],
        choices: [
            { text: optionHeadlines[12][0], headline: optionHeadlines[12][0], nextNode: 25 },
            { text: optionHeadlines[12][1], headline: optionHeadlines[12][1], nextNode: 26 }
        ]
    },
    {
        title: titles[13],
        text: storyTexts[13],
        image: images[13],
        choices: [
            { text: optionHeadlines[13][0], headline: optionHeadlines[13][0], nextNode: 27 },
            { text: optionHeadlines[13][1], headline: optionHeadlines[13][1], nextNode: 28 }
        ]
    },
    {
        title: titles[14],
        text: storyTexts[14],
        image: images[14],
        choices: [
            { text: optionHeadlines[14][0], headline: optionHeadlines[14][0], nextNode: 0 },
            { text: optionHeadlines[14][1], headline: optionHeadlines[14][1], nextNode: 0 }
        ]
    }
];

function displayNode(nodeIndex: number): void {
    const node = storyNodes[nodeIndex];
    const storyContainer = document.getElementById('story-container');
    
    const nodeElement = document.createElement('div');
    nodeElement.innerHTML = `
        <h2>${node.title}</h2>
        <p>${node.text}</p>
        <img src="${node.image}" alt="${node.title}" style="width:100%; height:auto;">
    `;
    
    node.choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.addEventListener('click', () => {
            displayNode(choice.nextNode);
            nodeElement.scrollIntoView({ behavior: 'smooth' });
        });
        nodeElement.appendChild(button);
    });

    storyContainer?.appendChild(nodeElement);
}

document.addEventListener('DOMContentLoaded', () => {
    displayNode(0);
});
