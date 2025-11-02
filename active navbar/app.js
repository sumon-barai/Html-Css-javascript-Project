const mainMenu = document.querySelector("#main-menu");

mainMenu.addEventListener("click", function (event) {
  // checking target element is a tag or not
  if (event.target.id === "main-menu") return;

  document.querySelector("#main-menu .active").classList.remove("active");

  event.target.classList.add("active");
});
