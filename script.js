// basic selection

const timerEl = document.querySelector("#timer");
const startEl = document.querySelector("#start");
const stopEl = document.querySelector("#stop");
const resetEl = document.querySelector("#reset");

let leftTime = 1500;
let interval;

const updateTimer = () => {
    const minutes = Math.floor(leftTime / 60);
    const seconds = Math.floor(leftTime % 60);

    const formattedTime = `${minutes.toString().padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`;

    timerEl.innerHTML = formattedTime;
}

const startTimer = () => {
    interval = setInterval(() => {
        leftTime--;
        updateTimer();
        if(leftTime === 0) {
            clearInterval(interval);
            alert("Time's up!");
            leftTime = 1500;
            updateTimer();
        }
    }, 1000)

    startEl.disabled = true;
    stopEl.disabled = false;
}
const stopTimer = () => {
    clearInterval(interval)

    startEl.disabled = false;
    stopEl.disabled = true;
}
const resetTimer = () => {
    clearInterval(interval);
    leftTime = 1500;
    updateTimer();

    startEl.disabled = true;
    startEl.disabled = false;
}

startEl.addEventListener("click", startTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);