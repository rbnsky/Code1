"use strict";
const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");
let birds = createBirds(21);
drawBirds();
function createBirds(_amount) {
    let birds = [];
    for (let i = 0; i < _amount; i++) {
        let bird = {
            x: Math.random() * 1920,
            y: Math.random() * 1080,
            size: Math.random() * 50 + 10,
            color: "#" + Math.floor(Math.random() * 16777215).toString(16),
            speed: Math.random() * 1 + 1,
            dots: 3,
        };
        birds.push(bird);
    }
    return birds;
}
function drawBird(_bird) {
    let path = new Path2D();
    path.rect(_bird.x, _bird.y, _bird.size, _bird.size);
    ctx.fillStyle = _bird.color;
    ctx.fill(path);
    for (let i = 0; i < birds.length; i++) {
        let pathD = new Path2D;
        pathD.ellipse(birds[i].x + (Math.random() * birds[i].size) - (Math.random() * birds[i].size), birds[i].y + (Math.random() * birds[i].size) - (Math.random() * birds[i].size), birds[i].size, birds[i].size, Math.PI / 2, 0, 2 * Math.PI);
        ctx.fillStyle = "rgb(" + birds[i].color + ", " + birds[i].color + "," + birds[i].color + ")";
        ctx.fill(pathD);
    }
}
function drawBirds() {
    for (let i = 0; i < birds.length; i++) {
        let bird = birds[i];
        drawBird(bird);
    }
}
function updateBirds() {
    for (let i = 0; i < birds.length; i++) {
        birds[i].x += Math.random() * birds[i].speed + birds[i].speed;
        if (birds[i].x > canvas.width) {
            birds[i].x = -birds[i].size;
        }
    }
}
function animationFrame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updateBirds();
    drawBirds();
    requestAnimationFrame(animationFrame);
}
requestAnimationFrame(animationFrame);
//# sourceMappingURL=main.js.map