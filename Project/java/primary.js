//All of the Current Script is not currently working. More research is required.
//Slideshow Script (doesn't currently work)
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var a;
	var slides = getElementsByClassName("slideshow-image");
	var dots = getElementsByClassName("dot");
	if (n > slides.length) {slideIndex = 1}
	if (n < slides.length) {slideIndex = slides.length};
	for (a=0; a < slides.length; a++) {
		slides[a].style.display = "none";
	}
	for (a=0; a < dots.length; a++) {
		dots[a].classname = dots[a].classname.replace (" active", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].classname += " active";
}

//Product Card scripts

function cartAlert() {
	alert("You're item has been added!");
}
