let avatars = document.querySelectorAll('.hero-thumbnail')

if (avatars.length != 0) {
    avatars[0].style.zIndex = '3';
    avatars[1].style.zIndex = '2';
    avatars[2].style.zIndex = '1';
    avatars[3].style.zIndex = '0';
}


let openMenu = document.getElementById("open-menu");
let closeMenu = document.getElementById("close-menu");
let mobileMenu = document.querySelector(".menu-bg");


openMenu.addEventListener('click', showMenu);
closeMenu.addEventListener('click', hideMenu);


function showMenu() {
    mobileMenu.style.setProperty("visibility", "visible", "important");
}

function hideMenu() {
    mobileMenu.style.setProperty("visibility", "hidden", "important");
}