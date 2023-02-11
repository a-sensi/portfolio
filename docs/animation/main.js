let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
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





/*https://bl6pap003files.storage.live.com/y4mkn6fprlWc0EBAzmYkUSefIh9EI-EjI1AAoqn_x--SywjAhxwHFWe00FBSCSP1kDUIYIySLdKBywE9T6ALCzjUceR_zpiVh6JJZRKtKM2eMR7eCVaEX8Ud4jcxlItdiKevgdNOSpX_nJ7T5nbejm1foCriZR-cFAo4NM33Z0-ABEVnBXaCAYRFOaYzHcR3tVC?width=1108&height=645&cropmode=none*/