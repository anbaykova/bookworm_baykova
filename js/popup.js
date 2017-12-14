"use strict";
var open = document.getElementById("show-popup");
var close = document.getElementById("hide-popup");
var popup = document.getElementById("wrap-login");

console.log(close);

if (open !== null) {

    open.addEventListener("click", function (event) {
        event.preventDefault();
        popup.classList.toggle("open");
        document.getElementsByClassName("inner-wrap-container")[0].style.display = 'block';
        document.getElementsByClassName("inner-wrap-container")[0].style.position = 'fixed';
        document.body.classList.toggle("scroll");
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        console.log(scrollTop);
        window.scrollTo(0,0);
    });
}
if (close !== null) {
    close.addEventListener("click", function (event) {
        popup.classList.toggle("open");
        // document.body.setAttribute("style", "overflow: scroll;");
        document.getElementsByClassName("inner-wrap-container")[0].style.display = 'none';
        document.body.classList.toggle("scroll");
    });
}







