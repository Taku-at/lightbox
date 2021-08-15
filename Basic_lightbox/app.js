// Open the Modal
function openModal() {
    document.getElementById('myModal').style.display = 'block';
}


// Close the Modal
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

var slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

console.log(slideIndex);

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}
  

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName('mySlides');
    var dots = document.getElementsByClassName('demo');
    var captionText = document.getElementById('caption');
n

    if (n > slides.length) {
        slideIndex = 1
    }


    // if number is less than 1, it will be increased bt for ()
    if (n < 1) {
        slideIndex = slides.length
    }
    

    // slide is 0 display none
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
  
    // 4/4 is not active
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }

    slides[slideIndex-1].style.display = 'block';
    dots[slideIndex-1].className += ' active';
    captionText.innerHTML = dots[slideIndex-1].alt;

}

