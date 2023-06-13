// Get the necessary elements
const number = document.querySelector(".number");
const startButton = document.querySelector(".start");
const resetButton = document.querySelector(".reset");

let isRunning = false;
let startTime;
let elapsedTime = 0;
let timerInterval;

function formatTime(milliseconds) {
  const hours = Math.floor(milliseconds / (1000 * 60 * 60));
  const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
  const millisecondsRemaining = milliseconds % 1000;

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}:${millisecondsRemaining.toString().padStart(3, "0")}`;
}

function updateNumber() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  const formattedTime = formatTime(elapsedTime);
  number.textContent = formattedTime;
}

function startStopwatch() {
  if (isRunning) {
    // Pause the stopwatch
    clearInterval(timerInterval);
    isRunning = false;
    startButton.textContent = "START";
  } else {
    // Start or resume the stopwatch
    if (elapsedTime === 0) {
      startTime = Date.now();
    } else {
      startTime = Date.now() - elapsedTime;
    }
    timerInterval = setInterval(updateNumber, 10);
    isRunning = true;
    startButton.textContent = "PAUSE";
  }
}

function resetStopwatch() {
  clearInterval(timerInterval);
  number.textContent = "00:00:00:000";
  isRunning = false;
  startButton.textContent = "START";
  elapsedTime = 0;
}

function handleKeyPress(event) {
  if (event.code === "Space") {
    startStopwatch();
    startButton.classList.add("active");
  } else if (event.code === "Backspace") {
    resetStopwatch();
    resetButton.classList.add("active");
  }
}

function handleKeyUp(event) {
  if (event.code === "Space") {
    startButton.classList.remove("active");
  } else if (event.code === "Backspace") {
    resetButton.classList.remove("active");
  }
}

startButton.addEventListener("click", startStopwatch);
resetButton.addEventListener("click", resetStopwatch);
document.addEventListener("keydown", handleKeyPress);
document.addEventListener("keyup", handleKeyUp);
