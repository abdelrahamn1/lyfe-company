let barIcon = document.querySelector("#bar");
let closeIcon = document.querySelector("#close");
let links = document.querySelector(".nav .links");

barIcon.onclick = function () {
  links.style.transform = "translateX(0)";
  closeIcon.style.display = "block";
  barIcon.style.display = "none";
};
closeIcon.onclick = function () {
  links.style.transform = "translateX(-600px)";
  closeIcon.style.display = "none";
  barIcon.style.display = "block";
};

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
