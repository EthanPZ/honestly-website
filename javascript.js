const menuBtn = document.getElementById("menu");
const menu = document.getElementById("menuOpen");
let isMenuOpened = false;


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