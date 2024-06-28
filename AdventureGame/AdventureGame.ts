interface StoryNode {
    title: string;
    text: string;
    image: string;
    choices: {
        text: string;
        nextNode: number;
    }[];
}

const titles = [
    "Title 1", "Title 2", "Title 3", "Title 4", "Title 5", "Title 6", "Title 7", "Title 8",
    "Title 9", "Title 10", "Title 11", "Title 12", "Title 13", "Title 14", "Title 15", "Title 16",
    "Title 17", "Title 18", "Title 19", "Title 20", "Title 21", "Title 22", "Title 23", "Title 24",
    "Title 25", "Title 26", "Title 27", "Title 28", "Title 29", "Title 30", "Title 31", "Title 32"
];

const storyTexts = [
    "Story Text 1", "Story Text 2", "Story Text 3", "Story Text 4", "Story Text 5", "Story Text 6",
    "Story Text 7", "Story Text 8", "Story Text 9", "Story Text 10", "Story Text 11", "Story Text 12",
    "Story Text 13", "Story Text 14", "Story Text 15", "Story Text 16", "Story Text 17", "Story Text 18",
    "Story Text 19", "Story Text 20", "Story Text 21", "Story Text 22", "Story Text 23", "Story Text 24",
    "Story Text 25", "Story Text 26", "Story Text 27", "Story Text 28", "Story Text 29", "Story Text 30",
    "Story Text 31", "Story Text 32"
];

const choiceTexts = [
    "Choice Text 1", "Choice Text 2", "Choice Text 3", "Choice Text 4", "Choice Text 5", "Choice Text 6",
    "Choice Text 7", "Choice Text 8", "Choice Text 9", "Choice Text 10", "Choice Text 11", "Choice Text 12",
    "Choice Text 13", "Choice Text 14", "Choice Text 15", "Choice Text 16", "Choice Text 17", "Choice Text 18",
    "Choice Text 19", "Choice Text 20", "Choice Text 21", "Choice Text 22", "Choice Text 23", "Choice Text 24",
    "Choice Text 25", "Choice Text 26", "Choice Text 27", "Choice Text 28", "Choice Text 29", "Choice Text 30",
    "Choice Text 31", "Choice Text 32"
];

const story: StoryNode[] = [
    {
        title: titles[0],
        text: storyTexts[0],
        image: "path1.jpg",
        choices: [
            { text: choiceTexts[0], nextNode: 1 },
            { text: choiceTexts[1], nextNode: 2 }
        ]
    },
    {
        title: titles[1],
        text: storyTexts[1],
        image: "path2.jpg",
        choices: [
            { text: choiceTexts[2], nextNode: 3 },
            { text: choiceTexts[3], nextNode: 4 }
        ]
    },
    {
        title: titles[2],
        text: storyTexts[2],
        image: "path3.jpg",
        choices: [
            { text: choiceTexts[4], nextNode: 5 },
            { text: choiceTexts[5], nextNode: 6 }
        ]
    },
    {
        title: titles[3],
        text: storyTexts[3],
        image: "path4.jpg",
        choices: [
            { text: choiceTexts[6], nextNode: 7 },
            { text: choiceTexts[7], nextNode: 8 }
        ]
    },
    {
        title: titles[4],
        text: storyTexts[4],
        image: "path5.jpg",
        choices: [
            { text: choiceTexts[8], nextNode: 9 },
            { text: choiceTexts[9], nextNode: 10 }
        ]
    },
    {
        title: titles[5],
        text: storyTexts[5],
        image: "path6.jpg",
        choices: [
            { text: choiceTexts[10], nextNode: 11 },
            { text: choiceTexts[11], nextNode: 12 }
        ]
    },
    {
        title: titles[6],
        text: storyTexts[6],
        image: "path7.jpg",
        choices: [
            { text: choiceTexts[12], nextNode: 13 },
            { text: choiceTexts[13], nextNode: 14 }
        ]
    },
    {
        title: titles[7],
        text: storyTexts[7],
        image: "path8.jpg",
        choices: [
            { text: choiceTexts[14], nextNode: 15 },
            { text: choiceTexts[15], nextNode: 16 }
        ]
    },
    {
        title: titles[8],
        text: storyTexts[8],
        image: "path9.jpg",
        choices: [
            { text: choiceTexts[16], nextNode: 17 },
            { text: choiceTexts[17], nextNode: 18 }
        ]
    },
    {
        title: titles[9],
        text: storyTexts[9],
        image: "path10.jpg",
        choices: [
            { text: choiceTexts[18], nextNode: 19 },
            { text: choiceTexts[19], nextNode: 20 }
        ]
    },
    {
        title: titles[10],
        text: storyTexts[10],
        image: "path11.jpg",
        choices: [
            { text: choiceTexts[20], nextNode: 21 },
            { text: choiceTexts[21], nextNode: 22 }
        ]
    },
    {
        title: titles[11],
        text: storyTexts[11],
        image: "path12.jpg",
        choices: [
            { text: choiceTexts[22], nextNode: 23 },
            { text: choiceTexts[23], nextNode: 24 }
        ]
    },
    {
        title: titles[12],
        text: storyTexts[12],
        image: "path13.jpg",
        choices: [
            { text: choiceTexts[24], nextNode: 25 },
            { text: choiceTexts[25], nextNode: 26 }
        ]
    },
    {
        title: titles[13],
        text: storyTexts[13],
        image: "path14.jpg",
        choices: [
            { text: choiceTexts[26], nextNode: 27 },
            { text: choiceTexts[27], nextNode: 28 }
        ]
    },
    {
        title: titles[14],
        text: storyTexts[14],
        image: "path15.jpg",
        choices: [
            { text: choiceTexts[28], nextNode: 29 },
            { text: choiceTexts[29], nextNode: 30 }
        ]
    },
    {
        title: titles[15],
        text: storyTexts[15],
        image: "end1.jpg",
        choices: []
    },
    {
        title: titles[16],
        text: storyTexts[16],
        image: "end2.jpg",
        choices: []
    },
    {
        title: titles[17],
        text: storyTexts[17],
        image: "end3.jpg",
        choices: []
    },
    {
        title: titles[18],
        text: storyTexts[18],
        image: "end4.jpg",
        choices: []
    },
    {
        title: titles[19],
        text: storyTexts[19],
        image: "end5.jpg",
        choices: []
    },
    {
        title: titles[20],
        text: storyTexts[20],
        image: "end6.jpg",
        choices: []
    },
    {
        title: titles[21],
        text: storyTexts[21],
        image: "end7.jpg",
        choices: []
    },
    {
        title: titles[22],
        text: storyTexts[22],
        image: "end8.jpg",
        choices: []
    },
    {
        title: titles[23],
        text: storyTexts[23],
        image: "end9.jpg",
        choices: []
    },
    {
        title: titles[24],
        text: storyTexts[24],
        image: "end10.jpg",
        choices: []
    },
    {
        title: titles[25],
        text: storyTexts[25],
        image: "end11.jpg",
        choices: []
    },
    {
        title: titles[26],
        text: storyTexts[26],
        image: "end12.jpg",
        choices: []
    },
    {
        title: titles[27],
        text: storyTexts[27],
        image: "end13.jpg",
        choices: []
    },
    {
        title: titles[28],
        text: storyTexts[28],
        image: "end14.jpg",
        choices: []
    },
    {
        title: titles[29],
        text: storyTexts[29],
        image: "end15.jpg",
        choices: []
    },
    {
        title: titles[30],
        text: storyTexts[30],
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
    (document.getElementById("story-text") as HTMLElement).innerHTML = `<strong>Story:</strong> ${node.text}`;
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
