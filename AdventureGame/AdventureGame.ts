interface StoryNode {
    title: string;
    text: string;
    image: string;
    choices: {
        text: string;
        nextNode: number;
    }[];
}

const story: StoryNode[] = [
    // Level 1
    {
        title: "placeholder",
        text: "placeholder",
        image: "path1.jpg",
        choices: [
            { text: "placeholder", nextNode: 1 },
            { text: "placeholder", nextNode: 2 }
        ]
    },
    // Level 2
    {
        title: "placeholder",
        text: "placeholder",
        image: "path2.jpg",
        choices: [
            { text: "placeholder", nextNode: 3 },
            { text: "placeholder", nextNode: 4 }
        ]
    },
    {
        title: "placeholder",
        text: "placeholder",
        image: "path3.jpg",
        choices: [
            { text: "placeholder", nextNode: 5 },
            { text: "placeholder", nextNode: 6 }
        ]
    },
    // Level 3
    {
        title: "placeholder",
        text: "placeholder",
        image: "path4.jpg",
        choices: [
            { text: "placeholder", nextNode: 7 },
            { text: "placeholder", nextNode: 8 }
        ]
    },
    {
        title: "placeholder",
        text: "placeholder",
        image: "path5.jpg",
        choices: [
            { text: "placeholder", nextNode: 9 },
            { text: "placeholder", nextNode: 10 }
        ]
    },
    {
        title: "placeholder",
        text: "placeholder",
        image: "path6.jpg",
        choices: [
            { text: "placeholder", nextNode: 11 },
            { text: "placeholder", nextNode: 12 }
        ]
    },
    {
        title: "placeholder",
        text: "placeholder",
        image: "path7.jpg",
        choices: [
            { text: "placeholder", nextNode: 13 },
            { text: "placeholder", nextNode: 14 }
        ]
    },
    // Level 4
    {
        title: "placeholder",
        text: "placeholder",
        image: "path8.jpg",
        choices: [
            { text: "placeholder", nextNode: 15 },
            { text: "placeholder", nextNode: 16 }
        ]
    },
    {
        title: "placeholder",
        text: "placeholder",
        image: "path9.jpg",
        choices: [
            { text: "placeholder", nextNode: 17 },
            { text: "placeholder", nextNode: 18 }
        ]
    },
    {
        title: "placeholder",
        text: "placeholder",
        image: "path10.jpg",
        choices: [
            { text: "placeholder", nextNode: 19 },
            { text: "placeholder", nextNode: 20 }
        ]
    },
    {
        title: "placeholder",
        text: "placeholder",
        image: "path11.jpg",
        choices: [
            { text: "placeholder", nextNode: 21 },
            { text: "placeholder", nextNode: 22 }
        ]
    },
    {
        title: "placeholder",
        text: "placeholder",
        image: "path12.jpg",
        choices: [
            { text: "placeholder", nextNode: 23 },
            { text: "placeholder", nextNode: 24 }
        ]
    },
    {
        title: "placeholder",
        text: "placeholder",
        image: "path13.jpg",
        choices: [
            { text: "placeholder", nextNode: 25 },
            { text: "placeholder", nextNode: 26 }
        ]
    },
    {
        title: "placeholder",
        text: "placeholder",
        image: "path14.jpg",
        choices: [
            { text: "placeholder", nextNode: 27 },
            { text: "placeholder", nextNode: 28 }
        ]
    },
    {
        title: "placeholder",
        text: "placeholder",
        image: "path15.jpg",
        choices: [
            { text: "placeholder", nextNode: 29 },
            { text: "placeholder", nextNode: 30 }
        ]
    },
    // Endings
    {
        title: "placeholder",
        text: "placeholder",
        image: "end1.jpg",
        choices: []
    },
    {
        title: "placeholder",
        text: "placeholder",
        image: "end2.jpg",
        choices: []
    },
    {
        title: "placeholder",
        text: "placeholder",
        image: "end3.jpg",
        choices: []
    },
    {
        title: "placeholder",
        text: "placeholder",
        image: "end4.jpg",
        choices: []
    },
    {
        title: "placeholder",
        text: "placeholder",
        image: "end5.jpg",
        choices: []
    },
    {
        title: "placeholder",
        text: "placeholder",
        image: "end6.jpg",
        choices: []
    },
    {
        title: "placeholder",
        text: "placeholder",
        image: "end7.jpg",
        choices: []
    },
    {
        title: "placeholder",
        text: "placeholder",
        image: "end8.jpg",
        choices: []
    },
    {
        title: "placeholder",
        text: "placeholder",
        image: "end9.jpg",
        choices: []
    },
    {
        title: "placeholder",
        text: "placeholder",
        image: "end10.jpg",
        choices: []
    },
    {
        title: "placeholder",
        text: "placeholder",
        image: "end11.jpg",
        choices: []
    },
    {
        title: "placeholder",
        text: "placeholder",
        image: "end12.jpg",
        choices: []
    },
    {
        title: "placeholder",
        text: "placeholder",
        image: "end13.jpg",
        choices: []
    },
    {
        title: "placeholder",
        text: "placeholder",
        image: "end14.jpg",
        choices: []
    },
    {
        title: "placeholder",
        text: "placeholder",
        image: "end15.jpg",
        choices: []
    },
    {
        title: "placeholder",
        text: "placeholder",
        image: "end16.jpg",
        choices: []
    }
];

function makeChoice(choiceIndex: number) {
    const currentNode = story[currentNodeIndex];
    const nextNodeIndex = currentNode.choices[choiceIndex].nextNode;
    loadNode(nextNodeIndex);
}

function loadNode(nodeIndex: number) {
    const node = story[nodeIndex];
    currentNodeIndex = nodeIndex;

    (document.getElementById("story-title") as HTMLElement).innerText = node.title;
    (document.getElementById("story-text") as HTMLElement).innerText = node.text;
    (document.getElementById("story-image") as HTMLImageElement).src = node.image;

    node.choices.forEach((choice, index) => {
        const button = document.getElementById(`choice${index + 1}`) as HTMLButtonElement;
        button.innerText = choice.text;
        button.style.display = "inline-block";
        button.onclick = () => makeChoice(index);
    });

    for (let i = node.choices.length; i < 2; i++) {
        const button = document.getElementById(`choice${i + 1}`) as HTMLButtonElement;
        button.style.display = "none";
    }
}

let currentNodeIndex = 0;
window.onload = () => loadNode(0);