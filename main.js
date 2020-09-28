var quoteIndex = 1;
showQuote(quoteIndex);

function plusQuote(n) {
    showQuote(quoteIndex += n);
}

function currentQuote(n) {
    showQuote(quoteIndex = n);
}

function showQuote(n) {
    var i;
    var quote = document.getElementsByClassName("reviews-container");
    if (n > quote.length) { quoteIndex = 1 }
    if (n < 1) { quoteIndex = quote.length }
    for (i = 0; i < quote.length; i++) {
        quote[i].style.display = "none";
    }

    quote[quoteIndex - 1].style.display = "block";
}


$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
            $(".mainNav-container").addClass("onScroll");
        } else {
            $(".mainNav-container").removeClass("onScroll");
        }
    });
});

// create references to the modal...
var modal = document.getElementById('myModal');
// to all images -- note I'm using a class!
var images = document.getElementsByClassName('myImages');
// the image in the modal
var modalImg = document.getElementById("img01");
// and the caption in the modal
var captionText = document.getElementById("caption");

// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
    var img = images[i];
    // and attach our click listener for this image.
    img.onclick = function (evt) {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
}

function openNav() {
    document.getElementById("mySidebar").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}







