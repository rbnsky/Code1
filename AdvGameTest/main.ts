// Arrays of story data
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

// Interfaces for TypeScript
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

// Create story nodes based on the arrays
const storyNodes: StoryNode[] = titles.map((title, index) => ({
    title: title,
    text: storyTexts[index],
    image: images[index],
    choices: [
        { text: optionHeadlines[index][0], headline: optionHeadlines[index][0], nextNode: index * 2 + 1 },
        { text: optionHeadlines[index][1], headline: optionHeadlines[index][1], nextNode: index * 2 + 2 }
    ]
}));

// Function to update the game content based on the current node index
function updateGameContent(currentNodeIndex: number) {
    const currentStoryNode = storyNodes[currentNodeIndex];

    // Update story title, text, and image
    const storyTitleElement = document.getElementById('story-title');
    const storyTextElement = document.getElementById('story-text');
    const storyImageElement = document.getElementById('story-image');

    if (storyTitleElement && storyTextElement && storyImageElement) {
        storyTitleElement.textContent = currentStoryNode.title;
        storyTextElement.textContent = currentStoryNode.text;
        storyImageElement.setAttribute('src', currentStoryNode.image);
    }

    // Update choices
    const choice1Button = document.getElementById('choice1');
    const choice2Button = document.getElementById('choice2');

    if (choice1Button && choice2Button) {
        choice1Button.textContent = currentStoryNode.choices[0].text;
        choice2Button.textContent = currentStoryNode.choices[1].text;

        // Add event listeners to the choices
        choice1Button.addEventListener('click', () => {
            updateGameContent(currentStoryNode.choices[0].nextNode - 1);
        });

        choice2Button.addEventListener('click', () => {
            updateGameContent(currentStoryNode.choices[1].nextNode - 1);
        });

        // Scroll to bottom after updating content
        scrollToBottom();
    }
}

// Function to scroll to the bottom of the game container
function scrollToBottom() {
    const gameContainer = document.getElementById('game-container');
    if (gameContainer) {
        gameContainer.scrollTop = gameContainer.scrollHeight;
    }
}

// Initialize the game by displaying the first story node
updateGameContent(0);
