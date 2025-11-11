const carousels = [
  {
    image: "assets/images/carousel/s1.jpg",
    title: "First slide label",
    des: "ome representative placeholder content for the first slide.",
  },
  {
    image: "assets/images/carousel/s2.jpg",
    title: "Second slide label",
    des: "Some representative placeholder content for the second slide",
  },
  {
    image: "assets/images/carousel/s3.jpg",
    title: "third slide label",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ",
  },
];

let count = 0;
let sliderId = null;

const carousel = document.querySelector(".carousel");
carouselFn();

// all carousel function create
function carouselFn() {
  const corouselItem = `
  <div class="carousel-item " style ="background-image: url(${carousels[count].image}) ;animation:carouselFadeIn 1s ease-out">
          <div class="carousel-content">
            <div class="carousel-title">${carousels[count].title}</div>
            <div class="carousel-des">
              ${carousels[count].des}
            </div>
            <span> - </span>
            <span> - </span>
            <span> - </span>
          </div>

          <div class="carousel-action">
            <button class="carousel-prev" onclick="carouselPrev()">&#10094;</button>
            <button class="carousel-next" onclick="carouselNext()">&#10095;</button>
          </div>
        </div>


  
  `;

  carousel.innerHTML = corouselItem;
  sliderId = setTimeout(carouselNext, 5000);
}

function carouselPrev() {
  clearTimeout(sliderId);
  if (count === 0) {
    count = carousels.length - 1;
  } else {
    count--; // data modify
  }

  carouselFn(); // screen refresh
}
function carouselNext() {
  clearTimeout(sliderId);
  if (count < carousels.length - 1) {
    count++; // data modify
  } else {
    count = 0;
  }
  carouselFn(); // screen refresh
}
