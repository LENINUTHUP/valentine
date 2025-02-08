document.getElementById('loveLetter').addEventListener('click', function() {
    this.style.transform = 'translateY(-100%)';
    document.getElementById('message').style.display = 'flex';
    setTimeout(() => {
        document.getElementById('message').style.opacity = '1';
    }, 500);
});

let noClickCount = 0;

document.getElementById('noButton').addEventListener('click', function() {
    noClickCount++;
    const yesButton = document.createElement('button');
    yesButton.innerText = 'Yes';
    yesButton.style.position = 'absolute';
    yesButton.style.top = Math.random() * 80 + 'vh';
    yesButton.style.left = Math.random() * 80 + 'vw';
    yesButton.style.backgroundColor = '#ff4d4d';
    yesButton.style.color = 'white';
    yesButton.style.border = 'none';
    yesButton.style.borderRadius = '5px';
    yesButton.style.padding = '10px 20px';
    yesButton.style.cursor = 'pointer';
    document.body.appendChild(yesButton);

    if (noClickCount > 5) {
        document.getElementById('noButton').style.display = 'none';
    }
});

document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('animation').style.display = 'flex'; // Show the animation container
    document.getElementById('animation').innerHTML = `
        <div class="kiss-animation">
            <img src="love-romance.gif" alt="Kissing Animation" />
            
        </div>
    `;
    setTimeout(() => {
        document.getElementById('animation').style.display = 'none'; // Hide after 5 seconds
    }, 9000); // Animation lasts for 9 seconds
});
