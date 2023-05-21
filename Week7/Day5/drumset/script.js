// Get all the drum elements
const drums = document.querySelectorAll('.drum');

// Function to play the audio
function playSound(sound) {
  const audio = new Audio(`sounds/${sound}.wav`); // Replace with your audio file extension
  audio.play();
}

// Add event listeners to drums
drums.forEach((drum) => {
  drum.addEventListener('click', function () {
    const sound = this.getAttribute('data-sound');
    playSound(sound);

    // Add active class
    this.classList.add('active');

    // Remove active class after a certain duration
    setTimeout(() => {
      this.classList.remove('active');
    }, 100); // Adjust the duration (in milliseconds) as needed
  });
});

// Add keyboard event listener
document.addEventListener('keydown', function (event) {
  const keyPressed = event.key.toLowerCase();
  const drum = document.querySelector(`[data-key="${keyPressed}"]`);

  if (drum) {
    const sound = drum.getAttribute('data-sound');
    playSound(sound);
  }
});