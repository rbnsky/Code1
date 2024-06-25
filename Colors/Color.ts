function getRandomColor(): string {
    const letters: string = '0123456789ABCDEF';
    let color: string = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor(): void {
    const colorDisplay: HTMLElement | null = document.getElementById('colorDisplay');
    if (colorDisplay) {
        colorDisplay.style.backgroundColor = getRandomColor();
    }
    requestAnimationFrame(changeColor);
}

window.onload = () => {
    changeColor();
};