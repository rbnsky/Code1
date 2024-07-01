const canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

// Background
let k = 0;
do {
    k++;
    let pathBG = new Path2D();
    let size = Math.random() * 75 + 720;
    pathBG.ellipse(Math.random() * 1900, Math.random() * 100 + 1350, size, size, Math.PI / 4, 0, 2 * Math.PI);
    ctx.fillStyle = "#b2beb5";
    ctx.fill(pathBG);
} while (k < 10);


// Middleground
let j = 0;
do {
    j++;
    let pathMG = new Path2D();
    let size = Math.random() * 75 + 420;
    pathMG.ellipse(Math.random() * 1900, Math.random() * 100 + 1150, size, size, Math.PI / 4, 0, 2 * Math.PI);
    ctx.fillStyle = "#7bb661";
    ctx.fill(pathMG);
} while (j < 20);


// Foreground
let i = 0;
do {
    i++;
    let pathFG = new Path2D();
    let size = Math.random() * 75 + 120;
    pathFG.ellipse(Math.random() * 1900, Math.random() * 100 + 1000, size, size, Math.PI / 4, 0, 2 * Math.PI);
    ctx.fillStyle = "#4f7942";
    ctx.fill(pathFG);
} while (i < 120);

// Sun
let s = 0;
do {
    s++;
    let pathSun = new Path2D();
    let size = Math.random() * 5 + 50;
    pathSun.ellipse(Math.random() * 50 + 1500, Math.random() * 50 + 100, size, size, Math.PI / 4, 0, 2 * Math.PI);
    ctx.fillStyle = "#ffffe0";
    ctx.fill(pathSun);
} while (s < 1);

interface TreeAttributes {
    positionX: number;
    positionY: number;
    scaleX: number;
    scaleY: number;
    leaves: number;
    color: string;
    hasLeaves: boolean;
}

let tree: TreeAttributes = {
    positionX: Math.random() * 1920,
    positionY: Math.random() * 50 + 500,
    scaleX: 1,
    scaleY: 1,
    leaves: Math.random() * 15 + 15,
    color: "#80755a",
    hasLeaves: true,
}

let tree2: TreeAttributes = {
    positionX: Math.random() * 1920,
    positionY: Math.random() * 50 + 500,
    scaleX: 1,
    scaleY: 1,
    leaves: Math.random() * 15 + 15,
    color: "#80755a",
    hasLeaves: true,
}

let tree3: TreeAttributes = {
    positionX: Math.random() * 1920,
    positionY: Math.random() * 50 + 500,
    scaleX: 1,
    scaleY: 1,
    leaves: Math.random() * 15 + 15,
    color: "#80755a",
    hasLeaves: true,
}

let tree4: TreeAttributes = {
    positionX: Math.random() * 1920,
    positionY: Math.random() * 50 + 500,
    scaleX: 1,
    scaleY: 1,
    leaves: Math.random() * 15 + 15,
    color: "#80755a",
    hasLeaves: true,
}

let tree5: TreeAttributes = {
    positionX: Math.random() * 1920,
    positionY: Math.random() * 50 + 500,
    scaleX: 1,
    scaleY: 1,
    leaves: Math.random() * 15 + 15,
    color: "#80755a",
    hasLeaves: true,
}

let tree6: TreeAttributes = {
    positionX: Math.random() * 1920,
    positionY: Math.random() * 150 + 500,
    scaleX: 1,
    scaleY: 1,
    leaves: Math.random() * 15 + 15,
    color: "#80755a",
    hasLeaves: true,
}

let tree7: TreeAttributes = {
    positionX: Math.random() * 1920,
    positionY: Math.random() * 50 + 500,
    scaleX: Math.random() * 1 + 1,
    scaleY: Math.random() * 1 + 1,
    leaves: Math.random() * 25 + 35,
    color: "#80755a",
    hasLeaves: true,
}

let trees: TreeAttributes[] = [tree, tree2, tree3, tree4, tree5, tree6, tree7];

function drawTree(): void {
    let pathTree = new Path2D();
    for (let t: number = 0; t < trees.length; t++) {
        pathTree.rect(trees[t].positionX, trees[t].positionY, 10 * trees[t].scaleX, 500 * trees[t].scaleY);
        ctx.fillStyle = tree.color;
        ctx.fill(pathTree);

        for (let l: number = 0; l < trees[t].leaves; l++) {
            let pathLeaf = new Path2D;
            pathLeaf.ellipse(trees[t].positionX + (Math.random() * 100) - (Math.random() * 100), trees[t].positionY + (Math.random() * 150) - (Math.random() * 100), Math.random() * 50 + 25, Math.random() * 50 + 25, Math.PI / 2, 0, 2 * Math.PI)
            ctx.fillStyle = "#507d2a";
            ctx.fill(pathLeaf);
        }
    }
}
    drawTree();