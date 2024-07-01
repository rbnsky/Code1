"use strict";
const canvas = document.getElementById('sciFiCityCanvas');
const ctx = canvas.getContext('2d');
const cityShapes = [];
const floatingCars = [];
const clouds = [];
const stars = [];
const numCityShapes = 100;
const numFloatingCars = 20;
const numClouds = 10;
const numStars = 100;
const moon = { x: canvas.width / 2, y: canvas.height / 2 - 200, radius: 100 };
function init() {
    // Create city shapes
    for (let i = 0; i < numCityShapes; i++) {
        const depth = Math.random();
        cityShapes.push({
            x: Math.random() * canvas.width,
            y: canvas.height * (3 / 5) + Math.random() * canvas.height * (2 / 5),
            width: Math.random() * 50 * (1 - depth),
            height: Math.random() * 200 * (1 - depth),
            brightness: Math.random() * 100 * depth + 50
        });
    }
    // Create floating cars
    for (let i = 0; i < numFloatingCars; i++) {
        floatingCars.push({
            x: Math.random() * canvas.width,
            y: canvas.height * (3 / 5) - Math.random() * 100,
            speed: Math.random() * 2 + 1
        });
    }
    // Create clouds
    for (let i = 0; i < numClouds; i++) {
        clouds.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height * (3 / 5),
            width: Math.random() * 300 + 200,
            height: Math.random() * 50 + 20,
            speed: Math.random() * 0.5 + 0.2
        });
    }
    // Create stars
    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height * (3 / 5),
            size: Math.random() * 2 + 1
        });
    }
    draw();
    animate();
}
function draw() {
    // Draw gradient night sky
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, 'darkblue');
    gradient.addColorStop(0.5, 'midnightblue');
    gradient.addColorStop(1, 'lightblue');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // Draw stars
    stars.forEach(star => {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
    });
    // Draw moon
    ctx.fillStyle = 'lightgray';
    ctx.beginPath();
    ctx.arc(moon.x, moon.y, moon.radius, 0, Math.PI * 2);
    ctx.fill();
    // Draw clouds
    clouds.forEach(cloud => {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.beginPath();
        ctx.ellipse(cloud.x, cloud.y, cloud.width, cloud.height, 0, 0, Math.PI * 2);
        ctx.fill();
    });
    // Draw mountains
    ctx.fillStyle = 'gray';
    ctx.beginPath();
    ctx.moveTo(0, canvas.height * (3 / 5));
    ctx.lineTo(canvas.width / 3, canvas.height * (3 / 5) - 100);
    ctx.lineTo((canvas.width / 3) * 2, canvas.height * (3 / 5) + 50);
    ctx.lineTo(canvas.width, canvas.height * (3 / 5) - 150);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.lineTo(0, canvas.height);
    ctx.closePath();
    ctx.fill();
    // Draw city
    cityShapes.forEach(shape => {
        ctx.fillStyle = `rgb(${shape.brightness}, ${shape.brightness}, ${shape.brightness})`;
        ctx.fillRect(shape.x, shape.y, shape.width, shape.height);
    });
    // Draw floating cars
    floatingCars.forEach(car => {
        ctx.fillStyle = 'red';
        ctx.fillRect(car.x, car.y, 10, 5);
    });
}
function animate() {
    // Move floating cars
    floatingCars.forEach(car => {
        car.x += car.speed;
        if (car.x > canvas.width) {
            car.x = -10;
        }
    });
    // Move clouds
    clouds.forEach(cloud => {
        cloud.x += cloud.speed;
        if (cloud.x > canvas.width) {
            cloud.x = -cloud.width;
        }
    });
    // Redraw scene
    draw();
    requestAnimationFrame(animate);
}
init();
//# sourceMappingURL=main.js.map