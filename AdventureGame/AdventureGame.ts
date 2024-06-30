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
    "You watch the creatures, learning from their behavior without disturbing them.\n\nYou take detailed notes on what you observe.\n\nYour notes become valuable research that brings you fame as a scholar.\n\nYou return home to share your discoveries.\n\nThe End.",
    "The left fork takes you to a hidden meadow filled with rare plants and animals.\n\nYou spend time studying the unique flora and fauna.\n\nYour discoveries contribute greatly to the field of natural sciences.\n\nYou return home as a renowned biologist.\n\nThe End.",
    "The right fork leads you to a mystical grove where you find a powerful artifact.\n\nThis artifact grants you the ability to understand the language of animals.\n\nYou use this ability to become a great protector of wildlife.\n\nThe End."
];

const storyNodes: StoryNode[] = [
    {
        title: titles[0],
        text: storyTexts[0],
        image: "image-01.jpg",
        choices: [
            { text: "Take the left path", headline: titles[1], nextNode: 1 },
            { text: "Take the right path", headline: titles[2], nextNode: 2 }
        ]
    },
    {
        title: titles[1],
        text: storyTexts[1],
        image: "image-02.jpg",
        choices: [
            { text: "Accept the fox's offer", headline: titles[3], nextNode: 3 },
            { text: "Decline the fox's offer", headline: titles[4], nextNode: 4 }
        ]
    },
    {
        title: titles[2],
        text: storyTexts[2],
        image: "image-03.jpg",
        choices: [
            { text: "Confront the goblins", headline: titles[5], nextNode: 5 },
            { text: "Sneak past the goblins", headline: titles[6], nextNode: 6 }
        ]
    },
    {
        title: titles[3],
        text: storyTexts[3],
        image: "image-04.jpg",
        choices: [
            { text: "Gather herbs", headline: titles[7], nextNode: 7 },
            { text: "Explore further", headline: titles[8], nextNode: 8 }
        ]
    },
    {
        title: titles[4],
        text: storyTexts[4],
        image: "image-05.jpg",
        choices: [
            { text: "Cross the bridge", headline: titles[9], nextNode: 9 },
            { text: "Find another way", headline: titles[10], nextNode: 10 }
        ]
    },
    {
        title: titles[5],
        text: storyTexts[5],
        image: "image-06.jpg",
        choices: [
            { text: "Play the game", headline: titles[11], nextNode: 11 },
            { text: "Fight the goblins", headline: titles[12], nextNode: 12 }
        ]
    },
    {
        title: titles[6],
        text: storyTexts[6],
        image: "image-07.jpg",
        choices: [
            { text: "Follow the hidden path", headline: titles[13], nextNode: 13 },
            { text: "Return to the main path", headline: titles[14], nextNode: 14 }
        ]
    },
    {
        title: titles[7],
        text: storyTexts[7],
        image: "image-08.jpg",
        choices: [
            { text: "Thank the fox", headline: titles[15], nextNode: 15 },
            { text: "Part ways", headline: titles[16], nextNode: 16 }
        ]
    },
    {
        title: titles[8],
        text: storyTexts[8],
        image: "image-09.jpg",
        choices: [
            { text: "Explore the ruin", headline: titles[17], nextNode: 17 },
            { text: "Set up camp", headline: titles[18], nextNode: 18 }
        ]
    },
    {
        title: titles[9],
        text: storyTexts[9],
        image: "image-10.jpg",
        choices: [
            { text: "Enter the cave", headline: titles[19], nextNode: 19 },
            { text: "Keep walking", headline: titles[20], nextNode: 20 }
        ]
    },
    {
        title: titles[10],
        text: storyTexts[10],
        image: "image-11.jpg",
        choices: [
            { text: "Take the narrow path", headline: titles[21], nextNode: 21 },
            { text: "Turn back", headline: titles[22], nextNode: 22 }
        ]
    },
    {
        title: titles[11],
        text: storyTexts[11],
        image: "image-12.jpg",
        choices: [
            { text: "Accept the treasure", headline: titles[23], nextNode: 23 },
            { text: "Decline the treasure", headline: titles[24], nextNode: 24 }
        ]
    },
    {
        title: titles[12],
        text: storyTexts[12],
        image: "image-13.jpg",
        choices: [
            { text: "Claim their treasure", headline: titles[25], nextNode: 25 },
            { text: "Leave quickly", headline: titles[26], nextNode: 26 }
        ]
    },
    {
        title: titles[13],
        text: storyTexts[13],
        image: "image-14.jpg",
        choices: [
            { text: "Approach the creatures", headline: titles[27], nextNode: 27 },
            { text: "Observe from afar", headline: titles[28], nextNode: 28 }
        ]
    },
    {
        title: titles[14],
        text: storyTexts[14],
        image: "image-15.jpg",
        choices: [
            { text: "Take the left fork", headline: titles[29], nextNode: 29 },
            { text: "Take the right fork", headline: titles[30], nextNode: 30 }
        ]
    }
];

function startGame() {
    const storyContainer = document.getElementById("story-container");
    const choice1Button = document.getElementById("choice1") as HTMLButtonElement;
    const choice2Button = document.getElementById("choice2") as HTMLButtonElement;

    function displayNode(node: StoryNode) {
        if (storyContainer) { // Check if storyContainer is not null
            const storySegment = document.createElement("div");
            storySegment.className = "story-segment";

            const titleElement = document.createElement("h1");
            titleElement.textContent = node.title;

            const textElement = document.createElement("p");
            textElement.textContent = node.text;

            const imageElement = document.createElement("img");
            imageElement.src = node.image;

            storySegment.appendChild(titleElement);
            storySegment.appendChild(textElement);
            storySegment.appendChild(imageElement);
            storyContainer.appendChild(storySegment);

            // Scroll to the bottom of the storyContainer
            storyContainer.scrollTop = storyContainer.scrollHeight;
        }
    }

    function handleChoice(choice: Choice) {
        const nextNode = storyNodes[choice.nextNode];
        displayNode(nextNode);
        updateChoices(nextNode);
    }

    function updateChoices(node: StoryNode) {
        if (node.choices.length > 0) {
            choice1Button.style.display = "inline-block";
            choice2Button.style.display = "inline-block";
            choice1Button.textContent = node.choices[0].text;
            choice1Button.onclick = () => handleChoice(node.choices[0]);

            if (node.choices[1]) {
                choice2Button.textContent = node.choices[1].text;
                choice2Button.onclick = () => handleChoice(node.choices[1]);
            } else {
                choice2Button.style.display = "none";
            }
        } else {
            choice1Button.style.display = "none";
            choice2Button.style.display = "none";
        }
    }

    // Start with the first node
    const firstNode = storyNodes[0];
    displayNode(firstNode);
    updateChoices(firstNode);
}

document.addEventListener("DOMContentLoaded", startGame);
