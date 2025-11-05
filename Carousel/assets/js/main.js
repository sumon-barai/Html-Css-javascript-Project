const carousels = [
  {
    image: "assets/slider/s1.jpg",
    title: "First slide label",
    des: "ome representative placeholder content for the first slide.",
  },
  {
    image: "assets/slider/s2.jpg",
    title: "Second slide label",
    des: "Some representative placeholder content for the second slide",
  },
  {
    image: "assets/slider/s3.jpg",
    title: "third slide label",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus distinctio quidem placeat ipsa temporibus",
  },
];

const carousel = document.querySelector(".carousel");
const carouselTitle = document.querySelector(".carousel-title");
const carouselDes = document.querySelector(".carousel-des");
const carouselNextBtn = document.querySelector(".carousel-next");
const carouselPrevBtn = document.querySelector(".carousel-prev");

let count = 0;

carouselNextBtn.addEventListener("click", carouselNext);
carouselPrevBtn.addEventListener("click", carouselPrev);
carouselFn();

// create function
function carouselFn() {
  carousel.style.backgroundImage = `url(${carousels[count].image})`;
  carouselTitle.innerText = carousels[count].title;
  carouselDes.innerText = carousels[count].des;
  carousel.classList.remove("addAnimation");
  carousel.classList.add("addAnimation");
  console.dir(carousel);
}

function carouselNext() {
  if (count < carousels.length - 1) {
    count++;
  } else {
    count = 0;
  }

  carouselFn();
}

function carouselPrev() {
  if (count === 0) {
    count = 0;
  } else {
    count--;
  }

  carouselFn();
}
