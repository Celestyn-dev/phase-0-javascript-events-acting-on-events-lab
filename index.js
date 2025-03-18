// Grab the dodger element
const dodger = document.getElementById("dodger");

// Move dodger to the left
function moveDodgerLeft() {
  // Get the current left position of the dodger and convert it to a number
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  // Check if the dodger is not at the left edge of the game field
  if (left > 0) {
    // Move the dodger 1px to the left
    dodger.style.left = `${left - 1}px`;
  }
}

// Move dodger to the right
function moveDodgerRight() {
  // Get the current left position of the dodger and convert it to a number
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  // Check if the dodger is not at the right edge of the game field
  if (left < 360) { // 360px is the right edge (400px width - 40px width of dodger)
    // Move the dodger 1px to the right
    dodger.style.left = `${left + 1}px`;
  }
}

// Event listener for keydown events
document.addEventListener("keydown", function (event) {
  // Check if the left arrow key is pressed
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  }
  // Check if the right arrow key is pressed
  if (event.key === "ArrowRight") {
    moveDodgerRight();
  }
});
