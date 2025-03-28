let score = 0;
let timeLeft = 10;
let timerStarted = false;
let timer;

const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const tapButton = document.getElementById("tapButton");
const restartButton = document.getElementById("restartButton");

tapButton.addEventListener("click", () => {
    if (!timerStarted) {
        timerStarted = true;
        startTimer();
    }
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
});

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `Time Left: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            tapButton.disabled = true;
            tapButton.style.background = "#555";
            tapButton.textContent = "Game Over!";
            restartButton.style.display = "block";
        }
    }, 1000);
}

restartButton.addEventListener("click", () => {
    score = 0;
    timeLeft = 10;
    timerStarted = false;
    tapButton.disabled = false;
    tapButton.style.background = "#ff4b5c";
    tapButton.textContent = "🔥 Tap Me! 🔥";
    scoreDisplay.textContent = "Score: 0";
    timerDisplay.textContent = "Time Left: 10s";
    restartButton.style.display = "none";
});
        