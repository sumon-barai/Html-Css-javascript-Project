const themeSwitch = document.querySelector(".theme-switch");
const darkMode = localStorage.getItem("darkMode");

if (darkMode === "active") {
  enableDarkMode();
} else {
  disableDarkMode();
}

themeSwitch.addEventListener("click", function () {
  const darkMode = localStorage.getItem("darkMode");

  if (darkMode === "active") {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
});

function enableDarkMode() {
  document.body.classList.add("darkMode");
  localStorage.setItem("darkMode", "active");
  document.querySelector(".moon-icon").style.display = "none";
  document.querySelector(".sun-icon").style.display = "block";
}

function disableDarkMode() {
  document.body.classList.remove("darkMode");
  localStorage.setItem("darkMode", null);
  document.querySelector(".moon-icon").style.display = "block";
  document.querySelector(".sun-icon").style.display = "none";
}
