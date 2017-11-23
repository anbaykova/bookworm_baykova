"use strict";
var open = document.getElementById("show-popup");
var close = document.getElementById("hide-popup");
var popup = document.getElementById("wrap-login");

if (open !== null) {
    open.addEventListener("click", function (event) {
        popup.classList.toggle("open");
        document.body.classList.toggle("scroll");
    });
}
if (close !== null) {
    close.addEventListener("click", function (event) {
        popup.classList.toggle("open");
        document.body.classList.toggle("scroll");
    });
}




var billingForm = document.getElementById("cart");
var requiredFields = document.querySelectorAll("input[required], textarea[required]");
console.log(requiredFields);

billingForm.addEventListener("submit", function (event) {
     event.preventDefault();
     console.log("вася");
});

if(billingForm !== null){
    billingForm.addEventListener("submit", valideteForm);
}

function valideteForm(event) {
    event.preventDefault();
    console.log("петя");
    requiredFields.forEach(function (element) {
        if (element.value.length === 0) {
            element.parentNode.classList.add('has-error')
            // console.log(element);
        }
        else {
            element.parentNode.classList.remove('has-error');
            element.parentNode.classList.add('has-success');
        }
    });
    checkZip();
}
// billingForm.addEventListener('submit', valideteForm);
// bilingForm.removeEventListener('submit', valideteForm);


    function checkZip() {
        var zip = document.getElementById('field-zip');
        console.log(zip.value,length);
        var message = "";
        var parent = zip.closest('.input-text');

        if(zip.value.length === 0) {
            message = "Field Zip/Postal can not be blank";
            console.log(message);

            zip.parentNode.classList.add('has-error');
            parent.querySelector('span').innerText = message
        } else if (zip.value.length < 5) {
            message = "Zip length too small";
            zip.parentNode.classList.add('has-error');
            console.log(parent);
            console.log(parent.querySelectorAll('span'));
        } else if (zip.value.length > 10) {
            message = "Zip length too large";
            zip.parentNode.classList.add('has-error');
            parent.querySelector('span').innerText = message;
        } else {
            zip.parentNode.classList.remove('has-error');
            zip.parentNode.classList.add('has-success');
        }
    }

    // if (zip.value.length < 5 || zip.value.length > 10){
    //     console.log("Invalit Zip Length");
    // }
    // if(document.getElementById("phone"));
    //     }
    //

// requiredFields.forEach(function (element) {
//     if (element.value.length === 0) {
//         console.log(element.parentNode.classList.add('has-error'));
//     }
//     else{
//         console.log(element.parentNode.classList.remove('has-error'));
//         console.log(element.parentNode.classList.add('has-success'))
//     }
// });
// var zip = document.getElementById('field-zip');
// console.log("Valid Zip Length");
//
// if (zip.value.length < 5 || zip.value.length > 10){
//     console.log("Invalit Zip Length");
// }
//



// requiredFields.forEach(function (element) {
//          if (element.value.length === 0) {
//              console.log(element.parentNode.classList.add('has-error'))
//          }
//          else {
//              element.parentNode.classList.remove('has-error');
//              element.parentNode.classList.add('has-success');
//          }
//      });


    // var zip = document.getElementById('field-zip');
    // console.log(zip.value.length);
    //
    //
    // < 5 && zip.value.length )
    // if (zip.value.length < 5 && zip.value.length > 10) {
    //
    // }
// })
// var wrapScroll;
// wrapScroll = document.body;
// wrapScroll.addEventListener("scroll", function (event) {
//
// });
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
