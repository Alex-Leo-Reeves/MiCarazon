document.addEventListener('DOMContentLoaded', () => {
    const yesButtons = document.querySelectorAll('#yes, #yes2');
    const ring = document.querySelector('.ring');
    const flowers = document.querySelector('.flowers');
    const buttons = document.querySelector('.buttons');
    const backgroundMusic = document.getElementById('background-music');
    const proposalSound = document.getElementById('proposal-sound');

    // Play background music
    backgroundMusic.play();

    yesButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Play proposal sound
            proposalSound.play();

            ring.style.display = 'block';
            flowers.style.display = 'none';
            buttons.style.display = 'none';
        });
    });
});

