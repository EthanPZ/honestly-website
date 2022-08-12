const menuBtn = document.getElementById("menu");
const menu = document.getElementById("menuOpen");
let isMenuOpened = false;


const englishBtn = document.getElementById('english');
const hebrewBtn = document.getElementById('hebrew');

window.onresize = function () {
    if (isMenuOpened && window.innerWidth > 960) {
        menu.style.display = "";
    }
};

menuBtn.onclick = function () {
    if (isMenuOpened === false) {
        menu.style.display = "block";
        isMenuOpened = true;
    } else if (isMenuOpened) {
        menu.style.display = "";
        isMenuOpened = false;
    }
};

englishBtn.onchange = function () {
    let selectedOption = this.value;
    window.location.href = "./index.html" + selectedOption;
};

hebrewBtn.onchange = function () {
    let selectedOption = this.value;
    window.location.href = "./Hebrew/hebrew.html" + selectedOption;
};