"use strict";
var open = document.getElementById("show-popup");
var close = document.getElementById("hide-popup");
var popup = document.getElementById("wrap-login");
var wrapScroll;
wrapScroll = document.body;
wrapScroll.addEventListener("scroll", function (event) {

});
open.addEventListener("click", function (event) {
    popup.classList.toggle("open");
    // popup.classList.add("scroll");
});
close.addEventListener("click", function (event) {
    popup.classList.toggle("open");
});


// document.body.style.overflow = 'hidden';
// document.getElementById("wrap-login").overflow = "auto";

// document.getElementById("wrap-login").scrolling = 'yes';

// function offScroll () {
//     document.body.style.overflow = "hidden";
//     this.onmouseout = function () {
//         document.body.style.overflow = "auto";
//     };
// }
// document.getElementById("wrap-login").onmouseover = function () {
//     offScroll();
// };

var billingForm = document.getElementById("cart");
var requiredFields = document.querySelectorAll("input[required]");

console.log(requiredFields);
billingForm.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("submit);
});
// var requiredField = document.querySelectorAll('input[required], textarea[required]' );
// console.log(requiredField);
// billingForm.addEventListener('Submit', function(event) {
//     event.preventDefault();
//     console.log("Submit");
//     requiredField.forEach(function (element) {
//         if (element.value.length === 0) {
//             console.log(element.parentNode.classList.add('has-error'))
//         }
//         else {
//             element.parentNode.classList.remove('has-error');
//             element.parentNode.classList.add('has-success');
//         }
//     });
    // var zip = document.getElementById('field-zip');
    // console.log(zip.value.length);
    //
    //
    // < 5 && zip.value.length )
    // if (zip.value.length < 5 && zip.value.length > 10) {
    //
    // }
})

