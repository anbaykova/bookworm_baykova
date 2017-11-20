"use strict";
var open = document.getElementById("show-popup");
var close = document.getElementById("hide-popup");
var popup = document.getElementById("wrap-login")
console.log(open, close);
open.addEventListener("click", function (event) {
    popup.classList.add("open");
});
close.addEventListener("click", function (event) {
    popup.classList.remove("open");
});
open.removeEventListener("click");


// var open = document.getElementById("show-popup");
// var close = document.getElementById("hide-popup");
// console.log(open, close);
// open.addEventListener("click", function (event) {
//     event.preventDefault();
//
//
// })
//
//
// var billingForm = document.getElementById('cart');
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
//     // var zip = document.getElementById('field-zip');
//     // console.log(zip.value.length);
//     //
//     //
//     // < 5 && zip.value.length )
//     // if (zip.value.length < 5 && zip.value.length > 10) {
//     //
//     // }
// })

