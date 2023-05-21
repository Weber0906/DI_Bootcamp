// Get all the drum elements
const drums = document.querySelectorAll('.drum');

// Function to play the audio
function playSound(sound) {
  const audio = new Audio(`sounds/${sound}.wav`); // Replace with your audio file extension
  audio.play();
}

// Map to store the key-sound mappings
const keySoundMap = {};

// Add event listeners to drums
drums.forEach((drum) => {
    const sound = drum.getAttribute('data-sound');
    const key = drum.getAttribute('data-key');
  
// Add the key-sound mapping to the map
    keySoundMap[key] = sound;

    drum.addEventListener('click', function () {
      playSound(sound);

      this.classList.add('active');

      setTimeout(() => {
        this.classList.remove('active');
      }, 100);
    });
});

// Add keyboard event listener
document.addEventListener('keydown', function (event) {
  const keyPressed = event.key.toLowerCase();

  if (keySoundMap.hasOwnProperty(keyPressed)) {
    const sound = keySoundMap[keyPressed];
    const drum = document.querySelector(`[data-key="${keyPressed}"]`);

    if (drum) {
      playSound(sound);

      // Add active class
      drum.classList.add('active');

      // Remove active class after a certain duration
      setTimeout(() => {
        drum.classList.remove('active');
      }, 100);
    }
  }
});

