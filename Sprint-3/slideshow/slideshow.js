const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

const image = document.querySelector("#carousel-img");
const backwardButton = document.querySelector("#backward-btn");
const forwardButton = document.querySelector("#forward-btn");
const autoBackwardButton = document.querySelector("#auto-backward");
const autoForwardButton = document.querySelector("#auto-forward");
const stopButton = document.querySelector("#stop");

const interval = 2000;
let currentImageIndex = 0;
let slideshowTimer = null;

function showImage() {
  image.src = images[currentImageIndex];
}

function moveForward() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage();
}

function moveBackward() {
  currentImageIndex =
    (currentImageIndex - 1 + images.length) % images.length;
  showImage();
}

function setAutoButtonsDisabled(disabled) {
  autoForwardButton.disabled = disabled;
  autoBackwardButton.disabled = disabled;
}

function startSlideshow(direction) {
  if (slideshowTimer !== null) {
    return;
  }

  setAutoButtonsDisabled(true);
  slideshowTimer = window.setInterval(direction, interval);
}

function stopSlideshow() {
  if (slideshowTimer !== null) {
    window.clearInterval(slideshowTimer);
    slideshowTimer = null;
  }

  setAutoButtonsDisabled(false);
}

backwardButton.addEventListener("click", moveBackward);
forwardButton.addEventListener("click", moveForward);
autoBackwardButton.addEventListener("click", () =>
  startSlideshow(moveBackward)
);
autoForwardButton.addEventListener("click", () =>
  startSlideshow(moveForward)
);
stopButton.addEventListener("click", stopSlideshow);
