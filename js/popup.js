"use strict";
var open = document.getElementById("show-popup");
var close = document.getElementById("hide-popup");
var popup = document.getElementById("wrap-login");

console.log(close);

if (open !== null) {
    open.addEventListener("click", function (event) {
        popup.classList.toggle("open");
        document.body.setAttribute("style", "overflow: hidden;");

        document.getElementsByClassName("inner-wrap-container")[0].style.display = 'block';

        document.body.classList.toggle("scroll");
    });
}
if (close !== null) {
    close.addEventListener("click", function (event) {
        popup.classList.toggle("open");
        document.body.setAttribute("style", "overflow: scroll;");
        document.getElementsByClassName("inner-wrap-container")[0].style.display = 'none';
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
            element.parentNode.classList.add('has-error');
            element.parentNode.getElementsByClassName("input-text-error")[0].style.display = 'block';
            // console.log(element);
        }
        else {
            element.parentNode.classList.remove('has-error');
            element.parentNode.classList.add('has-success');
            element.parentNode.getElementsByClassName("input-text-error")[0].style.display = 'block';
            element.parentNode.getElementsByClassName("input-text-error")[0].innerText = 'OK';
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
            zip.style.borderBottom = '1px solid #555963';
            zip.style.color = '#959ba1';
            zip.parentNode.classList.remove('has-success');
            zip.parentNode.classList.add('has-error');
            zip.parentNode.getElementsByClassName("input-text-error")[0].style.display = 'block';
            parent.querySelector('span').innerText = message;
        } else if (zip.value.length < 5) {
            message = "Zip length too small";
            zip.style.borderBottom = '1px solid #555963';
            zip.style.color = '#959ba1';
            zip.parentNode.classList.remove('has-success');
            zip.parentNode.classList.add('has-error');
            zip.parentNode.getElementsByClassName("input-text-error")[0].style.display = 'block';
            zip.parentNode.getElementsByClassName("input-text-error")[0].innerText =message ;
            // console.log(parent);
            // console.log(parent.querySelectorAll('span'));
        } else if (zip.value.length > 10) {
            message = "Zip length too large";
            zip.style.borderBottom = '1px solid #555963';
            zip.style.color = '#959ba1';
            zip.parentNode.classList.remove('has-success');
            zip.parentNode.classList.add('has-error');
            zip.parentNode.getElementsByClassName("input-text-error")[0].style.display = 'block';
            zip.parentNode.getElementsByClassName("input-text-error")[0].innerText =message ;
            parent.querySelector('span').innerText = message;
        } else {
            zip.parentNode.classList.remove('has-error');
            zip.parentNode.classList.add('has-success');
            zip.style.borderBottom = '1px solid green';
            zip.style.color = 'green';
            zip.parentNode.getElementsByClassName("input-text-error")[0].style.display = 'none';
            // zip.parentNode.getElementsByClassName("input-text-error")[0].innerText ="Ok" ;
        }
    }



