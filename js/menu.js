"use strict";

var menuOpen = document.getElementsByClassName("burger")[0];
console.log(menuOpen);
var menuFirst = document.getElementsByClassName("menu_list")[0];
console.log(menuFirst);
var menuNav = document.getElementsByClassName("info_boks")[0];
console.log(menuNav);
var menuAbout = document.getElementsByClassName("menu-about")[0];
console.log(menuAbout);

if (open !== null) {
    menuOpen.addEventListener("click", function (event) {
        event.preventDefault();
        // menuFirst.classList.toggle("open");
        menuNav.classList.toggle("active");
        menuFirst.classList.toggle("active");
        menuOpen.classList.toggle("active");
        menuAbout.classList.toggle("active");
        // sample.classList.toggle("active");
    })
}
// menuburger.onclick = function () {
//     sample.classList.toggle("active");
// }
// $(".burger").on("click", function() {
//     $(this).toggleClass("active");
//     $(".menu_list").toggleClass("open");
// })
// .style.transition = 'all 0.3s ease-in-out';