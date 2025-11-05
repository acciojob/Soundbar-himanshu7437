const buttons = document.querySelectorAll(".btn");
const stopButton = document.querySelector(".stop");
let currentAudio = null;

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const soundName = btn.textContent.trim();

    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    currentAudio = new Audio(`./sounds/${soundName}.mp3`);
    currentAudio.play().catch(err => console.log(err));
  });
});

stopButton.addEventListener("click", () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
});
