interface Building {
    x: number;
    y: number;
    width: number;
    height: number;
    brightness: number;
    depth: number;
}

interface Car {
    x: number;
    y: number;
    speed: number;
    isWhite: boolean;
    depth: number;
}

interface Light {
    x: number;
    y: number;
    size: number;
    color: string;
    blink: boolean;
    blinkState: boolean;
    blinkTimer: number;
    isRed: boolean;
}

interface Cloud {
    x: number;
    y: number;
    width: number;
    height: number;
    speed: number;
    depth: number;
}

interface Star {
    x: number;
    y: number;
    size: number;
    warmth: number;
}

interface SearchLight {
    x: number;
    angle: number;
    speed: number;
    width: number;
    height: number;
    depth: number;
}

const canvas = document.getElementById('sciFiCanvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;

const width = 2560;
const height = 1440;
canvas.width = width;
canvas.height = height;

const cityHeight = height * 2 / 3;

const buildings: Building[] = [];
const cars: Car[] = [];
const lights: Light[] = [];
const clouds: Cloud[] = [];
const stars: Star[] = [];
const searchLights: SearchLight[] = [];

function generateBuildings(count: number) {
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
            depth
        });
    }
    buildings.sort((a, b) => b.depth - a.depth);
}

function generateCars(count: number) {
    for (let i = 0; i < count; i++) {
        const depth = Math.random();
        const maxY = height * 0.75;
        const y = height - (0.2 + depth * 0.55) * maxY;
        cars.push({
            x: Math.random() * width,
            y,
            speed: (Math.random() * 1 + 0.5) * (Math.random() < 0.5 ? 1 : -1),
            isWhite: Math.random() < 0.5,
            depth
        });
    }
}

function generateLights(count: number) {
    for (let i = 0; i < count; i++) {
        const isRed = Math.random() < 0.2;
        lights.push({
            x: Math.random() * width,
            y: height / 2 + Math.random() * height / 2,
            size: Math.random() * 1.5 + 0.5,
            color: isRed ? 'hsl(0, 100%, 50%)' : `hsl(40, 100%, ${90 + Math.random() * 10}%)`,
            blink: Math.random() < 0.2,
            blinkState: true,
            blinkTimer: Math.random() * 200,
            isRed
        });
    }
}

function generateClouds(count: number) {
    for (let i = 0; i < count; i++) {
        const isLow = Math.random() < 0.4;
        const depth = isLow ? Math.random() : 1;
        clouds.push({
            x: Math.random() * width,
            y: Math.random() * (height * 0.5) + height * 0.25,
            width: Math.random() * 400 + 200,
            height: Math.random() * 30 + 10,
            speed: Math.random() * 0.2 + 0.1,
            depth
        });
    }
}

function generateStars(count: number) {
    for (let i = 0; i < count; i++) {
        stars.push({
            x: Math.random() * width,
            y: Math.random() * (height / 2),
            size: Math.random() * 1.5 + 0.5,
            warmth: Math.random() * 0.3 + 0.7
        });
    }
}

function generateSearchLights(count: number) {
    for (let i = 0; i < count; i++) {
        const initialDirection = Math.random() < 0.5 ? 1 : -1;
        searchLights.push({
            x: Math.random() * width,
            angle: (Math.random() * Math.PI / 6 - Math.PI / 12) * initialDirection, // Random initial angle
            speed: (Math.random() * 0.0004 + 0.0001) * initialDirection, // Speed matches initial direction
            width: Math.random() * 60 + 30,
            height: Math.random() * height * 0.7 + height * 0.4,
            depth: Math.random()
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
        const isVisible = buildings.every(building => 
            car.depth >= building.depth ||
            car.x < building.x || car.x > building.x + building.width || 
            car.y < building.y
        );

        if (isVisible) {
            const color = car.isWhite ? 'rgba(255, 250, 240, 0.8)' : 'rgba(255, 0, 0, 0.8)';
            ctx.fillStyle = color;
            ctx.shadowColor = color;
            ctx.shadowBlur = 10;
            ctx.beginPath();
            ctx.arc(car.x, car.y, 1.5, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;
        }

        car.x += car.speed;
        if (car.x > width) car.x = 0;
        if (car.x < 0) car.x = width;
    });
}

function drawLights() {
    lights.forEach(light => {
        if (light.blink) {
            light.blinkTimer--;
            if (light.blinkTimer <= 0) {
                light.blinkState = !light.blinkState;
                light.blinkTimer = light.isRed ? Math.random() * 100 + 50 : Math.random() * 200 + 100;
            }
        }
        if (!light.blink || light.blinkState) {
            ctx.fillStyle = light.color;
            ctx.shadowColor = light.color;
            ctx.shadowBlur = 5;
            ctx.globalAlpha = 0.7;
            ctx.beginPath();
            ctx.arc(light.x, light.y, light.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalAlpha = 1;
            ctx.shadowBlur = 0;
        }
    });
}

function drawClouds() {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    clouds.sort((a, b) => b.depth - a.depth).forEach(cloud => {
        ctx.beginPath();
        ctx.ellipse(cloud.x, cloud.y, cloud.width / 2, cloud.height / 2, 0, 0, Math.PI * 2);
        ctx.fill();
        cloud.x += cloud.speed;
        if (cloud.x - cloud.width / 2 > width) cloud.x = -cloud.width / 2;
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

function drawSearchLights() {
    searchLights.forEach(light => {
        ctx.save();
        ctx.translate(light.x, height);
        ctx.rotate(light.angle);
        
        const gradient = ctx.createLinearGradient(0, 0, 0, -light.height);
        gradient.addColorStop(0, 'rgba(255, 255, 200, 0.4)');
        gradient.addColorStop(1, 'rgba(255, 255, 200, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(-light.width / 4, -light.height);
        ctx.lineTo(light.width / 4, -light.height);
        ctx.closePath();
        ctx.fill();
        
        ctx.restore();

        light.angle += light.speed;
        if (light.angle > Math.PI / 4 || light.angle < -Math.PI / 4) {
            light.speed = -light.speed;
        }
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
    drawClouds();
    
    // Draw search lights and other elements in order of depth
    const allElements = [...searchLights, ...buildings, ...cars];
    allElements.sort((a, b) => b.depth - a.depth);
    
    allElements.forEach(element => {
        if ('width' in element && 'height' in element && 'brightness' in element) {
            // It's a building
            ctx.fillStyle = `rgb(${element.brightness}, ${element.brightness}, ${element.brightness})`;
            ctx.fillRect(element.x, element.y, element.width, element.height);
            ctx.strokeStyle = `rgb(${Math.min(255, element.brightness + 20)}, ${Math.min(255, element.brightness + 20)}, ${Math.min(255, element.brightness + 20)})`;
            ctx.lineWidth = 1;
            ctx.strokeRect(element.x, element.y, element.width, element.height);
        } else if ('speed' in element && 'isWhite' in element) {
            // It's a car
            const color = element.isWhite ? 'rgba(255, 250, 240, 0.8)' : 'rgba(255, 0, 0, 0.8)';
            ctx.fillStyle = color;
            ctx.shadowColor = color;
            ctx.shadowBlur = 10;
            ctx.beginPath();
            ctx.arc(element.x, element.y, 1.5, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;
            element.x += element.speed;
            if (element.x > width) element.x = 0;
            if (element.x < 0) element.x = width;
        } else {
            // It's a search light
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
        }
    });
    
    drawLights();
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