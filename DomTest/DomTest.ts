let spanElement = document.querySelector<HTMLSpanElement>("#IdHello")!;
spanElement.textContent = "World";

let newSpan: HTMLSpanElement = document.createElement("span");
newSpan.textContent = "Hello";
document.body.appendChild(newSpan);
newSpan.style.backgroundColor = "red";

console.log(newSpan);

function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createRandomElements(): void {
    const numElements: number = getRandomInt(1, 2000);
    const container: HTMLElement = document.body;
    for (let i = 0; i < numElements; i++) {
        const element: HTMLElement = document.createElement(Math.random() > 0.5 ? 'div' : 'span');
        element.textContent = `Hello World ${i + 1}`;
        element.style.position = 'absolute';
        element.style.left = `${getRandomInt(0, window.innerWidth - 50)}px`;
        element.style.top = `${getRandomInt(0, window.innerHeight - 50)}px`;
        element.style.backgroundColor = getRandomColor();
        element.style.color = getRandomColor();
        element.style.padding = '10px';
        container.appendChild(element);
    }
}

createRandomElements();
