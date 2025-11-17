const scrollBtn = document.querySelector(".scroll-to-top-btn");

console.dir(scrollBtn);

window.onscroll = function () {
  console.clear();
  console.dir(document.documentElement.scrollHeight);

  if (document.documentElement.scrollTop > 100) {
    scrollBtn.style.cssText = "opacity:1;visibility:visible";
  } else {
    scrollBtn.style.cssText = "opacity:0;visibility:none";
  }
};

scrollBtn.addEventListener("click", function () {
  document.documentElement.scrollTop = 0;
});

// scrollBtn.onclick = function () {
//   console.log("click");
// };
