function countdown() {
    var seconds = document.getElementById("seconds").value;  // create function

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        setTimeout(tick, 1000);
    if(seconds==-1) {
        alert("Times up!");  // create function where timer goes down every second
    }
    }
    tick();
}

var slideIndex = 1;
showSlides(slideIndex);  // create variable

function plusSlides(n) {
    showSlides(slideIndex += n);  // create variable
}

function currentSlide(n) {
    showSlides(slideIndex = n);  // create variable
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}  
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");   // Function to create the movement of the slides
    }
     slides[slideIndex-1].style.display = "block";
     dots[slideIndex-1].className += " active";
}
