"use strict";
const canvas = document.getElementById('sciFiCanvas');
const ctx = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;
const cityHeight = height * 3 / 5;
const mountainRows = 3;
const mountainHeight = height * 0.2;
const buildingRows = 5;
const buildings = [];
const cars = [];
const clouds = [];
const stars = [];
function generateBuildings(count) {
    for (let row = 0; row < buildingRows; row++) {
        const rowHeight = cityHeight / buildingRows;
        const baseY = height - cityHeight + row * rowHeight;
        const rowCount = Math.floor(count / buildingRows);
        for (let i = 0; i < rowCount; i++) {
            const buildingHeight = rowHeight * (0.5 + Math.random() * 1.5);
            const brightness = 20 + (row / buildingRows) * 100;
            buildings.push({
                x: (i / rowCount) * width + Math.random() * (width / rowCount - 30),
                y: baseY - buildingHeight,
                width: Math.random() * 20 + 10,
                height: buildingHeight,
                brightness,
                row
            });
        }
    }
    buildings.sort((a, b) => b.row - a.row || b.height - a.height);
}
function generateCars(count) {
    for (let row = 0; row < buildingRows - 1; row++) {
        const rowHeight = cityHeight / buildingRows;
        const baseY = height - cityHeight + (row + 0.5) * rowHeight;
        const rowCount = Math.floor(count / (buildingRows - 1));
        for (let i = 0; i < rowCount; i++) {
            cars.push({
                x: Math.random() * width,
                y: baseY,
                speed: (Math.random() * 2 + 0.5) * (Math.random() < 0.5 ? 1 : -1),
                isWarm: Math.random() < 0.7,
                row
            });
        }
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
            size: Math.random() * 2 + 0.5,
            warmth: Math.random() * 0.3 + 0.7
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
    ctx.arc(width / 2, height / 2, 80, 0, Math.PI * 2);
    ctx.fill();
}
function drawMountains() {
    for (let row = 0; row < mountainRows; row++) {
        const brightness = 50 + row * 30;
        const blue = 70 + row * 30;
        ctx.fillStyle = `rgb(${brightness}, ${brightness}, ${blue})`;
        ctx.beginPath();
        ctx.moveTo(0, height - cityHeight / 2 - (row + 1) * (mountainHeight / mountainRows));
        for (let x = 0; x <= width; x += 20) {
            const y = height - cityHeight / 2 - (row + 1) * (mountainHeight / mountainRows) +
                Math.sin(x * 0.01) * 20 + Math.random() * 5;
            ctx.lineTo(x, y);
        }
        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();
        ctx.fill();
    }
}
function drawBuildings() {
    buildings.forEach(building => {
        ctx.fillStyle = `rgb(${building.brightness}, ${building.brightness}, ${building.brightness})`;
        ctx.fillRect(building.x, building.y, building.width, building.height);
        ctx.strokeStyle = `rgb(${Math.min(255, building.brightness + 20)}, ${Math.min(255, building.brightness + 20)}, ${Math.min(255, building.brightness + 20)})`;
        ctx.lineWidth = 1;
        ctx.strokeRect(building.x, building.y, building.width, building.height);
    });
}
function drawCars() {
    cars.forEach(car => {
        const isVisible = buildings.every(building => car.row >= building.row ||
            car.x < building.x || car.x > building.x + building.width ||
            car.y < building.y);
        if (isVisible) {
            if (car.isWarm) {
                ctx.fillStyle = 'rgba(255, 240, 200, 0.7)';
                ctx.shadowColor = 'rgba(255, 240, 200, 0.5)';
            }
            else {
                ctx.fillStyle = 'rgba(255, 0, 0, 0.7)';
                ctx.shadowColor = 'rgba(255, 0, 0, 0.5)';
            }
            ctx.shadowBlur = 5;
            ctx.beginPath();
            ctx.arc(car.x, car.y, 2, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;
        }
        car.x += car.speed;
        if (car.x > width)
            car.x = 0;
        if (car.x < 0)
            car.x = width;
    });
}
function drawClouds() {
    ctx.fillStyle = '#ffffff';
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
    stars.forEach(star => {
        const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 2);
        gradient.addColorStop(0, `rgba(255, ${Math.floor(255 * star.warmth)}, ${Math.floor(200 * star.warmth)}, 1)`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
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
    drawBuildings();
    drawCars();
    requestAnimationFrame(animate);
}
generateBuildings(500);
generateCars(200);
generateClouds(10);
generateStars(200);
animate();
//# sourceMappingURL=main.js.map