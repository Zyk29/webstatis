const menu = document.querySelector('.navbar-nav #menu-icon');
const nav = document.querySelector('.navbar-nav .navbar');

menu.addEventListener('click', function(){
    nav.classList.toggle('active')
});



// Jam Digital
setInterval(() => {
    let date = new Date()
    let clock = document.getElementById('clock')
    clock.innerHTML = 
    date.getHours()+":"+
    date.getMinutes()+":"+
    date.getSeconds()
}, 1000);



// Slide
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}