// Go To Top
let icon = document.querySelector(".go-top");

// skills progress
let section = document.querySelector(".skills");
let progressSpans = document.querySelectorAll(".progress span");

window.onscroll = function () {
    // console.log(this.scrollY);

    // this.scrollY >= 600 ? icon.classList.add("show") : icon.classList.remove("show");
    if (this.scrollY >= 800) {
        icon.classList.add("show");
    } else {
        icon.classList.remove("show");
    }


    // skills progress
    if (window.scrollY >= section.offsetTop - 200) {
        // console.log("Reach Section Skills");
        progressSpans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    } else {
        progressSpans.forEach((span) => {
            span.style.width = 0;
        });
    }
};

icon.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};


// change landing automatic

// select landing page element 
let landingPage = document.querySelector(".landing");

// get array of imgs 
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg"];

// variable to control background interval 
let backgroundInterval;

// function to randmize images 
function randomizeimgs() {

    // if (backgroundOption === true) {

        backgroundInterval = setInterval (() => {

        // Get Random Number 
        let randomNumber = Math.floor(Math.random() * imgsArray.length);

        // Change Background Image url 
        landingPage.style.backgroundImage = 'url("images/' + imgsArray[randomNumber] + '")';

        }, 10000);

    // }
}

randomizeimgs();


// get slider items | array.from (search) [ES6 features]
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));
// console.table(sliderImages);

// get number of slides
var slidesCount = sliderImages.length;
// console.log(slidesCount);

// set current slide
var currentSlide = 1;

// slide number string element
var slideNumberElement = document.getElementById('slide-number');

// previous and next functions
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');

// handel click on previous and next buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// create main ul element
var paginationElement = document.createElement('ul');

// set id on create ul element 
paginationElement.setAttribute('id', 'pagination-ul');

// create list items based on slides count 
for (var i = 1; i <= slidesCount; i++) {

    // create the li 
    var paginationItem = document.createElement('li');

    // set custom Attribute
    paginationItem.setAttribute('data-index', i);

    // set item content
    paginationItem.appendChild(document.createTextNode(i));

    // append items to the main ul list
    paginationElement.appendChild(paginationItem);

}

// add the created ul element to the page
document.getElementById('indicators').appendChild(paginationElement);

// get new created ul
var paginationCreatedUl = document.getElementById('pagination-ul');

//get pagenation bullets
var paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'));


// loop through all 
for (var i = 0; i < paginationBullets.length; i++) {

    paginationBullets[i].onclick = function () {

        currentSlide = parseInt(this.getAttribute('data-index'));

        theChecker();

    }
}

// trigger checker function
theChecker();


// next slide function
function nextSlide() {


    if (nextButton.classList.contains('disabled')) {

        // do nothing
        return false;

    } else {

        currentSlide++;

        theChecker();
    
    }
}

// previous slide function
function prevSlide() {

    if (prevButton.classList.contains('disabled')) {

        // do nothing
        return false;

    } else {

        currentSlide--;

        theChecker();
    
    }
}

// create the checker function
function theChecker() {

    // set slide number
    slideNumberElement.textContent = 'الصورة #' + (currentSlide) + ' من ' + (slidesCount);
    // remove active
    removeAllActive();

    // set active class on current slide
    sliderImages[currentSlide - 1].classList.add('active');

    // set active class on current pagination item
    paginationCreatedUl.children[currentSlide - 1].classList.add('active');

    // check if current slids is first
    if (currentSlide == 1) {

        // add disabled class on previous button
        prevButton.classList.add('disabled');

    } else {

        // remove disabled class on previous button
        prevButton.classList.remove('disabled');
    }

    // check if current slids is last
    if (currentSlide == slidesCount) {

        // add disabled class on next button
        nextButton.classList.add('disabled');

    } else {

        // remove disabled class on next button
        nextButton.classList.remove('disabled');
    }
}

// remove all active class from images & pagenation bullets
function removeAllActive() {

    // loop through images 
    sliderImages.forEach(function (img){

        img.classList.remove('active');

    });

    // loop through pagination
    paginationBullets.forEach(function (bullet) {

        bullet.classList.remove('active');

    });
}

