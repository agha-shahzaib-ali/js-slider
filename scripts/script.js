// alert("Hello World");
// document.body.style.background = "red";
const images = [
  "images/image1.jpeg",
  "images/image2.jpeg",
  "images/image3.jpeg",
  "images/image4.jpeg",
];
const DIRECTIONS = {
  LEFT: "left",
  RIGHT: "right",
};
const activeImageEl = document.getElementById("activeImage");
const leftArrowEl = document.getElementById("leftArrow");
const rightArrowEl = document.getElementById("rightArrow");
const createImages = () => {
  const containerEl = document.querySelector(".images-container");
  images.forEach((imageSrc) => {
    const imgEl = document.createElement("img");
    imgEl.src = imageSrc;
    containerEl.append(imgEl);
  });
};
createImages();
let currentImage = null;
setActiveImage = (targetImage, direction) => {
  currentImage = targetImage;
  const activeImageEl = document.querySelector(".images-container img.active");
  if (activeImageEl) {
    activeImageEl.classList.forEach((cssClass) => {
      if (cssClass.startsWith("animation-")) {
        activeImageEl.classList.remove(cssClass);
      }
    });
    if (direction === DIRECTIONS.LEFT) {
      activeImageEl.classList.add("animation-slide-to-left");
    } else {
      activeImageEl.classList.add("animation-slide-to-right");
    }
    activeImageEl.classList.remove("active");
  }

  const nextActiveImageEl = document.querySelector(
    `img[src="${currentImage}"]`
  );
  nextActiveImageEl.classList.add("active");
  if (direction === DIRECTIONS.LEFT) {
    nextActiveImageEl.classList.add("animation-slide-from-right");
  } else {
    nextActiveImageEl.classList.add("animation-slide-from-left");
  }

  nextActiveImageEl.src = targetImage;
};
setActiveImage(images[0], DIRECTIONS.LEFT);
leftArrowEl.addEventListener("click", () => {
  let currentIndex = images.indexOf(currentImage);
  console.log({ currentIndex });
  if (currentIndex - 1 < 0) {
    currentIndex = images.length - 1;
  } else {
    currentIndex--;
  }
  setActiveImage(images[currentIndex], DIRECTIONS.LEFT);
});
rightArrowEl.addEventListener("click", () => {
  let currentIndex = images.indexOf(currentImage);
  console.log({ currentIndex });
  if (currentIndex + 1 > images.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  setActiveImage(images[currentIndex], DIRECTIONS.RIGHT);
});
