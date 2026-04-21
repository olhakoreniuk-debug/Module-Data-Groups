function setAlarm() {
  const alarmTime = document.getElementById("alarmSet").value;
  format(alarmTime);
  //Every one second the title should count down by one.

  let timeRemaining = alarmTime;
  const interval = setInterval(() => {
    timeRemaining--;
      format(timeRemaining);
    if (timeRemaining <= 0) {
      clearInterval(interval);
      playAlarm();
    }
  }, 1000);

}
function format(timeRemaining) {
let timeFormatted;
const seconds = timeRemaining % 60;
let secondsFormatted;
if (seconds < 10) {
secondsFormatted = `0${seconds}`;
} else {secondsFormatted = seconds;
}

const minutes = Math.floor(timeRemaining / 60);
let minutesFormatted;
if (minutes < 10) {
minutesFormatted = `0${minutes}`;
} else {
minutesFormatted = minutes;
}
timeFormatted = `${minutesFormatted}:${secondsFormatted}`;
document.getElementById("timeRemaining").textContent = `Time Remaining: ${timeFormatted}`;
}
 document.title = "Alarm clock app";

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");
function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
