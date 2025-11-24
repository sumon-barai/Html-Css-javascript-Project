// target dom element
const humbergerMenu = document.querySelector(".humberger_menu");
const offCanvasLeft = document.querySelector(".off-canvas-left");
const offCanvasLeftContent = document.querySelector(".off-canvas-left-content");
const offCanvasRight = document.querySelector(".off-canvas-right");
const offCanvasRightContent = document.querySelector(
  ".off-canvas-right-content"
);
const offCanvasCloseButtons = document.querySelectorAll(".off-canvas-close");

// event listener

humbergerMenu.addEventListener("click", offCanvasActive);
offCanvasLeft.addEventListener("click", offCanvasDisable);
offCanvasRight.addEventListener("click", offCanvasDisable);
document.body.onresize = offCanvasDisable;

offCanvasCloseButtons.forEach((ele) => {
  ele.addEventListener("click", offCanvasDisable);
});

// create function
function offCanvasActive() {
  const screenWidth = calculateScreenWidth();
  if (screenWidth > 992) {
    offCanvasRight.style.transform = "translateX(0%)";
    offCanvasRightContent.style.transform = "translateX(0%)";
  } else {
    offCanvasLeft.style.transform = "translateX(0%)";
    offCanvasLeftContent.style.transform = "translateX(0%)";
  }
}

function offCanvasDisable() {
  const screenWidth = calculateScreenWidth();
  if (screenWidth > 992) {
    offCanvasRight.style.transform = "translateX(100%)";
    offCanvasRightContent.style.transform = "translateX(100%)";
  } else {
    offCanvasLeft.style.transform = "translateX(-100%)";
    offCanvasLeftContent.style.transform = "translateX(-100%)";
  }
}

function calculateScreenWidth() {
  return screen.width;
}
