const typingElement = document.querySelector(".text");
const btnStart = document.querySelector("#btn-start");
const btnStop = document.querySelector("#btn-stop");

const typingText = typingElement.innerText;

let index = 1;
let timerId = null;
function startTyping() {
  const newText = typingText.slice(0, index);

  typingElement.innerText = newText + " |";
  timerId = setTimeout(() => startTyping(), 200);

  if (index > typingText.length) {
    index = 1;
  } else {
    index++;
  }
}

btnStop.addEventListener("click", function () {
  clearTimeout(timerId);
});

btnStart.addEventListener("click", function () {
  startTyping();
});

startTyping();
