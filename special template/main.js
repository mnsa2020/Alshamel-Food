// check if there's local storage color option 
let mainColors = localStorage.getItem("color_option");

if (mainColors !== null) {
    // console.log('local storage is not empty you can set it on root now');
    // console.log(localStorage.getItem('color_option'));

    document.documentElement.style.setProperty('--main-color', localStorage.getItem('color_option'));

     // remove active class from all color list items 
        document.querySelectorAll(".colors-list li").forEach(Element => {

       
            Element.classList.remove("active");

                // add active class on element with data-color *** local storage item 
            if (Element.dataset.color === mainColors) {

                // add active class 
                Element.classList.add("active");
            }

        });
        
}

// select landing page element 
let landingPage = document.querySelector(".landing-page");

// get array of imgs 
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg"];

// random background option 
let backgroundOption = true;

// variable to control background interval 
let backgroundInterval;

// check if local storage save random background 
let backgroundLocalItem = localStorage.getItem("background-option");

// check if random background local storage not empty 
if (backgroundLocalItem !== null) {

    if (backgroundLocalItem === 'true') {

        backgroundOption = true;

    } else {

        backgroundOption = false;
    }

    // remove active class from all spans 
    document.querySelectorAll(".random-background span").forEach(Element => {

        Element.classList.remove("active");

    });

    if (backgroundLocalItem === "true") {

        document.querySelector(".random-background .yes").classList.add("active");

    } else {
        
        document.querySelector(".random-background .no").classList.add("active");

    }

}

// toggle spin class on icon 
document.querySelector(".toggle-settings .fa-gear").onclick = function(){

    // toggle class fa-spin for rotation on self 
    this.classList.toggle("fa-spin");

    // toggle class open on main settings box 
    document.querySelector(".settings-box").classList.toggle("open");

};

// switch colores 
const colorsli = document.querySelectorAll(".colors-list li");

// loop on all 
colorsli.forEach(li => {

    // click on every items 
    li.addEventListener("click", (e) => {

        // set color on root 
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

        // set color on local storage 
        localStorage.setItem("color_option", e.target.dataset.color);

        // remove active class from all childrens 
        e.target.parentElement.querySelectorAll(".active").forEach(Element => {

            Element.classList.remove("active");

        });

        // add active class on self 
        e.target.classList.add("active");

    });

});

// switch random background option 
const randomBackEl = document.querySelectorAll(".random-background span");

// loop on all span
randomBackEl.forEach(span => {

    // click on every span 
    span.addEventListener("click", (e) => {

        // remove active class from all childrens 
        e.target.parentElement.querySelectorAll(".active").forEach(Element => {

            Element.classList.remove("active");

        });

        // add active class on self 
        e.target.classList.add("active");

        if (e.target.dataset.background === 'yes') {

            backgroundOption = true;

            randomizeimgs();

            localStorage.setItem("background_option", true);

        } else {

            backgroundOption = false;

            clearInterval(backgroundInterval);

            localStorage.setItem("background_option", false);

        }

    });

});

// function to randmize images 
function randomizeimgs() {

    if (backgroundOption === true) {

        backgroundInterval = setInterval (() => {

        // Get Random Number 
        let randomNumber = Math.floor(Math.random() * imgsArray.length);

        // Change Background Image url 
        landingPage.style.backgroundImage = 'url("images/' + imgsArray[randomNumber] + '")';

        }, 10000);

    }
}

randomizeimgs();


// select skills selector 
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {

    //skills offset top 
    let skillsOffsetTop = ourSkills.offsetTop;

    // skills outer height
    let skillsOuterHeight = ourSkills.offsetHeight;

    // window height
    let windowHeight = this.innerHeight;

    // window scroll top
    let windowScrollTop = this.pageYOffset;

    if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {

        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

        allSkills.forEach(skill => {

            skill.style.width = skill.dataset.progress;
        });
    }
};