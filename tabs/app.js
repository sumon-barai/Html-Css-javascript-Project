function openTab(element, id) {
  document.querySelector(".tab-btn .active-btn").classList.remove("active-btn");
  element.classList.add("active-btn");
  document
    .querySelector(".tab-content.active-content")
    .classList.remove("active-content");
  document.querySelector(`#${id}`).classList.add("active-content");
}

/* function openTab(element, id) {
  // active btn

  // first task remove active-btn class
  document.querySelector(".tab-btn .active-btn").classList.remove("active-btn");
  // second task add active-btn class
  element.classList.add("active-btn");

  // active content

  document
    .querySelector(".tab-content.active-content")
    .classList.remove("active-content");

  // document.getElementById(id).classList.add("active-content");
  document.querySelector(`#${id}`).classList.add("active-content");
} */
