"use strict";
const canvas = document.getElementById('sciFiCanvas');
const ctx = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;
const cityHeight = height * 2 / 5;
const mountainRows = 3;
const mountainHeight = height * 0.2;
const shapes = [];
const cars = [];
const clouds = [];
const stars = [];
function generateRandomShapes(count) {
    for (let i = 0; i < count; i++) {
        const y = height - cityHeight + Math.random() * cityHeight;
        const distanceFromBottom = height - y;
        const size = Math.random() * 50 + 10 - (distanceFromBottom / cityHeight) * 30;
        const brightness = Math.floor((distanceFromBottom / cityHeight) * 200) + 55;
        shapes.push({
            x: Math.random() * width,
            y,
            size,
            brightness
        });
    }
}
function generateCars(count) {
    for (let i = 0; i < count; i++) {
        cars.push({
            x: Math.random() * width,
            y: height - cityHeight - Math.random() * 100,
            speed: Math.random() * 2 + 0.5
        });
    }
}
function generateClouds(count) {
    for (let i = 0; i < count; i++) {
        clouds.push({
            x: Math.random() * width,
            y: height - cityHeight - mountainHeight - Math.random() * 100,
            width: Math.random() * 300 + 100,
            height: Math.random() * 50 + 20,
            speed: Math.random() * 0.5 + 0.1
        });
    }
}
function generateStars(count) {
    for (let i = 0; i < count; i++) {
        stars.push({
            x: Math.random() * width,
            y: Math.random() * (height - cityHeight - mountainHeight),
            size: Math.random() * 2 + 0.5
        });
    }
}
function drawSky() {
    const gradient = ctx.createRadialGradient(width / 2, 0, 0, width / 2, 0, height);
    gradient.addColorStop(0, '#4a6e8a');
    gradient.addColorStop(1, '#1c2331');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
}
function drawMoon() {
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(width / 2, height - cityHeight - mountainHeight - 100, 80, 0, Math.PI * 2);
    ctx.fill();
}
function drawMountains() {
    for (let row = 0; row < mountainRows; row++) {
        ctx.fillStyle = `rgb(${30 + row * 20}, ${30 + row * 20}, ${30 + row * 20})`;
        ctx.beginPath();
        ctx.moveTo(0, height - cityHeight - (row + 1) * (mountainHeight / mountainRows));
        for (let x = 0; x <= width; x += 50) {
            const y = height - cityHeight - (row + 1) * (mountainHeight / mountainRows) +
                Math.sin(x * 0.01) * 50 + Math.random() * 20;
            ctx.lineTo(x, y);
        }
        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();
        ctx.fill();
    }
}
function drawShapes() {
    shapes.forEach(shape => {
        ctx.fillStyle = `rgb(${shape.brightness}, ${shape.brightness}, ${shape.brightness})`;
        ctx.fillRect(shape.x, shape.y, shape.size, shape.size);
    });
}
function drawCars() {
    ctx.fillStyle = '#ffffff';
    cars.forEach(car => {
        ctx.fillRect(car.x, car.y, 4, 2);
        car.x += car.speed;
        if (car.x > width)
            car.x = 0;
    });
}
function drawClouds() {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    clouds.forEach(cloud => {
        ctx.beginPath();
        ctx.ellipse(cloud.x, cloud.y, cloud.width / 2, cloud.height / 2, 0, 0, Math.PI * 2);
        ctx.fill();
        cloud.x += cloud.speed;
        if (cloud.x - cloud.width / 2 > width)
            cloud.x = -cloud.width / 2;
    });
}
function drawStars() {
    ctx.fillStyle = '#ffffff';
    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
    });
}
function animate() {
    ctx.clearRect(0, 0, width, height);
    drawSky();
    drawStars();
    drawMoon();
    drawMountains();
    drawClouds();
    drawShapes();
    drawCars();
    requestAnimationFrame(animate);
}
generateRandomShapes(500);
generateCars(50);
generateClouds(10);
generateStars(200);
animate();
//# sourceMappingURL=main.js.map