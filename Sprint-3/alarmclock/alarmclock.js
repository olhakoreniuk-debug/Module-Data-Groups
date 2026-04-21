function setAlarm() {
  const alarmTime = document.getElementById("alarmSet").value;
  document.getElementById("timeRemaining").textContent = `Time remaining: 00:${alarmTime}`;
  //Every one second the title should count down by one.
  let timeRemaining = alarmTime;
  const interval = setInterval(() => {
    timeRemaining--;
    document.getElementById("timeRemaining").textContent = `Time remaining: 00:${timeRemaining}`;
    if (timeRemaining <= 0) {
      clearInterval(interval);
      playAlarm();
    }
  }, 1000);
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
