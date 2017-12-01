// "use strict";
// var menuOpen = document.getElementById("mobile-menu-button");
// console.log(menuOpen);
// var menuFirsr = document.getElementsByClassName("menu_list")[0];
// console.log(menuFirsr);
// var menuNav = document.getElementsByClassName("info_boks")[0];
// console.log(menuNav);

var menuOpen = document.getElementsByClassName("burger")[0];
console.log(menuOpen);
var menuFirst = document.getElementsByClassName("menu_list")[0];
console.log(menuFirst);
var menuNav = document.getElementsByClassName("info_boks")[0];
console.log(menuNav);

if (open !== null) {
    menuOpen.addEventListener("click", function (event) {
        event.preventDefault();
        // menuFirst.classList.toggle("open");
        menuNav.classList.toggle("active");
        menuFirst.classList.toggle("active");
        menuOpen.classList.toggle("active");
    })
}

// $(".burger").on("click", function() {
//     $(this).toggleClass("active");
//     $(".menu_list").toggleClass("open");
// })