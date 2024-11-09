// Function to change page styles
function changeMode(size, weight, transform, background, color) {
    return function() {
        document.body.style.fontSize = size + 'px';
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    };
}

// Main function to set up the modes and buttons
function main() {
    const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    // Add paragraph
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Welcome Holberton!';
    document.body.appendChild(paragraph);

    // Create buttons with click events to apply each mode
    const buttonSpooky = document.createElement('button');
    buttonSpooky.textContent = 'Spooky';
    buttonSpooky.onclick = spooky;
    document.body.appendChild(buttonSpooky);

    const buttonDarkMode = document.createElement('button');
    buttonDarkMode.textContent = 'Dark mode';
    buttonDarkMode.onclick = darkMode;
    document.body.appendChild(buttonDarkMode);

    const buttonScreamMode = document.createElement('button');
    buttonScreamMode.textContent = 'Scream mode';
    buttonScreamMode.onclick = screamMode;
    document.body.appendChild(buttonScreamMode);
}

main();
