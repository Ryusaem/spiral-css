const words = "Coding"; // Add more words if needed

const ANIMATION_DURATION = 2000; // Define your animation duration in milliseconds

function createElements(offset) {
  // offset: controls the delay of the animation
  const characters = words.split("");
  characters.forEach((char, i) => {
    const div = document.createElement("div");
    div.innerText = char;
    div.classList.add("character");

    // Add delay to the animation..
    div.style.animationDelay = `-${i * (ANIMATION_DURATION / 16) - offset}ms`;

    if (offset >= 0) {
      document.getElementById("spiral").appendChild(div);
    } else {
      document.getElementById("spiral2").appendChild(div);
    }
  });
}

createElements(0);
createElements(-1 * (ANIMATION_DURATION / 2));
