"use strict";

var menuOpen = document.getElementsByClassName("burger")[0];
console.log(menuOpen);
var menuFirst = document.getElementsByClassName("menu_list")[0];
console.log(menuFirst);
var menuNav = document.getElementsByClassName("info_boks")[0];
console.log(menuNav);
var menuAbout = document.getElementsByClassName("menu-about")[0];
console.log(menuAbout);
var menu = document.getElementById('menu-all');
console.log(menu);
console.log(open);

    menuOpen.addEventListener("click", function (event) {
        event.preventDefault();
        menu.classList.toggle("active");
        menuOpen.classList.toggle("active");
        if (this.className.indexOf('active') == -1){
            document.body.style.overflow = 'auto';
        }else{
            document.body.style.overflow = 'hidden';
        }
        console.log(this.className.indexOf('active')) ;
    })


// function openNav() {
//     document.getElementById('menu-all').style.width = "740px";
// }
// function closeNav() {
//
// }
// menuburger.onclick = function () {
//     sample.classList.toggle("active");
// }
// $(".burger").on("click", function() {
//     $(this).toggleClass("active");
//     $(".menu_list").toggleClass("open");
// })
// menuOpen.classList.toggle("active").style.transition = 'all 0.3s ease-in-out';