"use strict";
const canvas = document.getElementById('sciFiCanvas');
const ctx = canvas.getContext('2d');
const width = 2560;
const height = 1440;
canvas.width = width;
canvas.height = height;
const cityHeight = height * 2 / 3;
const buildings = [];
const cars = [];
const lights = [];
const clouds = [];
const stars = [];
const searchLights = [];
function generateBuildings(count) {
    for (let i = 0; i < count; i++) {
        const depth = Math.random();
        const buildingHeight = cityHeight * (0.2 + depth * 0.8);
        const brightness = 20 + depth * 100;
        buildings.push({
            x: Math.random() * width,
            y: height - buildingHeight,
            width: 10 + (1 - depth) * 60 + Math.random() * 20,
            height: buildingHeight + (depth > 0.9 ? Math.random() * height * 0.3 : 0),
            brightness,
            depth,
            speed: (1 - depth) * 1 + 0.2, // Increased speed
            type: 'building'
        });
    }
    buildings.sort((a, b) => b.depth - a.depth);
}
function generateCars(count) {
    for (let i = 0; i < count; i++) {
        const depth = Math.random();
        const maxY = height * 0.75;
        const y = height - (0.2 + depth * 0.55) * maxY;
        cars.push({
            x: Math.random() * width,
            y,
            speed: (1 - depth) * 3 + 1, // Increased speed
            isWhite: Math.random() < 0.5,
            depth,
            type: 'car'
        });
    }
}
function generateLights(count) {
    for (let i = 0; i < count; i++) {
        const isRed = Math.random() < 0.2;
        const depth = Math.random();
        lights.push({
            x: Math.random() * width,
            y: height / 2 + Math.random() * height / 2,
            size: Math.random() * 1.5 + 0.5,
            color: isRed ? 'hsl(0, 100%, 50%)' : `hsl(40, 100%, ${90 + Math.random() * 10}%)`,
            blink: Math.random() < 0.2,
            blinkState: true,
            blinkTimer: Math.random() * 200,
            isRed,
            speed: (1 - depth) * 1 + 0.2, // Increased speed
            depth,
            type: 'light'
        });
    }
}
function generateClouds(count) {
    for (let i = 0; i < count; i++) {
        const isLow = Math.random() < 0.4;
        const depth = isLow ? Math.random() : 1;
        clouds.push({
            x: Math.random() * width,
            y: Math.random() * (height * 0.5) + height * 0.25,
            width: Math.random() * 400 + 200,
            height: Math.random() * 30 + 10,
            speed: (1 - depth) * 0.6 + 0.2, // Increased speed
            depth,
            type: 'cloud'
        });
    }
}
function generateStars(count) {
    for (let i = 0; i < count; i++) {
        stars.push({
            x: Math.random() * width,
            y: Math.random() * (height / 2),
            size: Math.random() * 1.5 + 0.5,
            warmth: Math.random() * 0.3 + 0.7
        });
    }
}
function generateSearchLights(count) {
    for (let i = 0; i < count; i++) {
        const initialDirection = Math.random() < 0.5 ? 1 : -1;
        const depth = Math.random();
        searchLights.push({
            x: Math.random() * width,
            angle: (Math.random() * Math.PI / 6 - Math.PI / 12) * initialDirection,
            speed: (Math.random() * 0.0008 + 0.0002) * initialDirection, // Increased rotation speed
            width: Math.random() * 60 + 30,
            height: Math.random() * height * 0.7 + height * 0.4,
            depth,
            moveSpeed: (1 - depth) * 1 + 0.2, // Increased movement speed
            type: 'searchLight'
        });
    }
    searchLights.sort((a, b) => a.depth - b.depth);
}
function drawSky() {
    const gradient = ctx.createRadialGradient(width / 2, 0, 0, width / 2, 0, height);
    gradient.addColorStop(0, '#4a6e8a');
    gradient.addColorStop(1, '#1c2331');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
}
function drawMoon() {
    const moonRadius = 200;
    const moonY = height * 0.4;
    ctx.fillStyle = '#eae8e1';
    ctx.beginPath();
    ctx.arc(width / 2, moonY, moonRadius, 0, Math.PI * 2);
    ctx.fill();
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
function drawText() {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'right';
    ctx.fillText('NEO TOKYO 2084', width - 20, height - 50);
    ctx.font = '18px Arial';
    ctx.fillText('SECTOR 7G', width - 20, height - 20);
}
function animate() {
    ctx.clearRect(0, 0, width, height);
    drawSky();
    drawStars();
    drawMoon();
    const allElements = [...searchLights, ...buildings, ...cars, ...lights, ...clouds];
    allElements.sort((a, b) => b.depth - a.depth);
    allElements.forEach(element => {
        switch (element.type) {
            case 'building':
                ctx.fillStyle = `rgb(${element.brightness}, ${element.brightness}, ${element.brightness})`;
                ctx.fillRect(element.x, element.y, element.width, element.height);
                ctx.strokeStyle = `rgb(${Math.min(255, element.brightness + 20)}, ${Math.min(255, element.brightness + 20)}, ${Math.min(255, element.brightness + 20)})`;
                ctx.lineWidth = 1;
                ctx.strokeRect(element.x, element.y, element.width, element.height);
                element.x -= element.speed;
                if (element.x + element.width < 0)
                    element.x = width;
                break;
            case 'car':
                const color = element.isWhite ? 'rgba(255, 250, 240, 0.8)' : 'rgba(255, 0, 0, 0.8)';
                ctx.fillStyle = color;
                ctx.shadowColor = color;
                ctx.shadowBlur = 10;
                ctx.beginPath();
                ctx.arc(element.x, element.y, 1.5, 0, Math.PI * 2);
                ctx.fill();
                ctx.shadowBlur = 0;
                element.x -= element.speed;
                if (element.x < 0)
                    element.x = width;
                break;
            case 'light':
                if (element.blink) {
                    element.blinkTimer--;
                    if (element.blinkTimer <= 0) {
                        element.blinkState = !element.blinkState;
                        element.blinkTimer = element.isRed ? Math.random() * 100 + 50 : Math.random() * 200 + 100;
                    }
                }
                if (!element.blink || element.blinkState) {
                    ctx.fillStyle = element.color;
                    ctx.shadowColor = element.color;
                    ctx.shadowBlur = 5;
                    ctx.globalAlpha = 0.7;
                    ctx.beginPath();
                    ctx.arc(element.x, element.y, element.size, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.globalAlpha = 1;
                    ctx.shadowBlur = 0;
                }
                element.x -= element.speed;
                if (element.x < 0)
                    element.x = width;
                break;
            case 'cloud':
                ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
                ctx.beginPath();
                ctx.ellipse(element.x, element.y, element.width / 2, element.height / 2, 0, 0, Math.PI * 2);
                ctx.fill();
                element.x -= element.speed;
                if (element.x + element.width / 2 < 0)
                    element.x = width + element.width / 2;
                break;
            case 'searchLight':
                ctx.save();
                ctx.translate(element.x, height);
                ctx.rotate(element.angle);
                const gradient = ctx.createLinearGradient(0, 0, 0, -element.height);
                gradient.addColorStop(0, 'rgba(255, 255, 200, 0.4)');
                gradient.addColorStop(1, 'rgba(255, 255, 200, 0)');
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.moveTo(-element.width / 8, 0);
                ctx.lineTo(element.width / 8, 0);
                ctx.lineTo(element.width / 5, -element.height);
                ctx.lineTo(-element.width / 5, -element.height);
                ctx.closePath();
                ctx.fill();
                ctx.restore();
                element.angle += element.speed;
                if (element.angle > Math.PI / 6 || element.angle < -Math.PI / 6) {
                    element.speed = -element.speed;
                }
                element.x -= element.moveSpeed;
                if (element.x < 0)
                    element.x = width;
                break;
        }
    });
    drawText();
    requestAnimationFrame(animate);
}
generateBuildings(700);
generateCars(500);
generateLights(1000);
generateClouds(30);
generateStars(200);
generateSearchLights(12);
animate();
//# sourceMappingURL=main.js.map