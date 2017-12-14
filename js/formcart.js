"use strict";

var billingForm = document.getElementById("cart");
var requiredFields = document.querySelectorAll("input[required], textarea[required]");
// console.log(requiredFields);
var hasError = "has-error";

// var validateEmail = document.getElementById("email");
// var ValidPhone = document.getElementById('tel');

billingForm.addEventListener("submit", function (event) {
    event.preventDefault();

});

if(billingForm !== null){
    billingForm.addEventListener("submit", validateForm);
}

function validateForm(event) {
    event.preventDefault();
    requiredFields.forEach(function (element) {

        if (element.value.length === 0) {
            console.log( element.parentNode);
            element.parentNode.classList.add('has-error');
            element.parentNode.getElementsByClassName("input-text-error")[0].style.display = 'block';
        }
        else {
            element.parentNode.classList.remove('has-error');
            element.parentNode.classList.add('has-success');
            // element.parentNode.getElementsByClassName("input-text-error")[0].style.display = 'block';
            element.parentNode.getElementsByClassName("input-text-error")[0].innerText = 'OK';
        }
    });
    checkZip();
    validateEmail(document.getElementById("email").value);
    validPhone(document.getElementById("phone").value);
    validAddress();
}

function checkZip() {
    var zip = document.getElementById('field-zip');
    console.log(zip.value,length);
    var message = "";
    var parent = zip.closest('.input-text');

    if(zip.value.length === 0) {
        message = "Field Zip/Postal can not be blank";
        console.log(message);
        // zip.style.borderBottom = '1px solid #555963';
        // zip.style.color = '#959ba1';
        zip.parentNode.classList.remove('has-success');
        zip.parentNode.classList.add('has-error');
        // zip.parentNode.getElementsByClassName("input-text-error")[0].style.display = 'block';
        parent.querySelector('span').innerText = message;
    } else if (zip.value.length < 5) {
        message = "Zip length too small";
        // zip.style.borderBottom = '1px solid #555963';
        // zip.style.color = '#959ba1';
        zip.parentNode.classList.remove('has-success');
        zip.parentNode.classList.add('has-error');
        // zip.parentNode.getElementsByClassName("input-text-error")[0].style.display = 'block';
        zip.parentNode.getElementsByClassName("input-text-error")[0].innerText =message ;
        // console.log(parent);
        // console.log(parent.querySelectorAll('span'));
    } else if (zip.value.length > 10) {
        message = "Zip length too large";
        // zip.style.borderBottom = '1px solid #555963';
        // zip.style.color = '#959ba1';
        zip.parentNode.classList.remove('has-success');
        zip.parentNode.classList.add('has-error');
        // zip.parentNode.getElementsByClassName("input-text-error")[0].style.display = 'block';
        zip.parentNode.getElementsByClassName("input-text-error")[0].innerText =message ;
        parent.querySelector('span').innerText = message;
    } else {
        zip.parentNode.classList.remove('has-error');
        zip.parentNode.classList.add('has-success');
        // zip.style.borderBottom = '1px solid green';
        // zip.style.color = 'green';
        // zip.parentNode.getElementsByClassName("input-text-error")[0].style.display = 'none';
        // zip.parentNode.getElementsByClassName("input-text-error")[0].innerText ="Ok" ;
    }
    if (zip.value.match('[A-Z,a-z, ]*')[0] === "") {
        message =+ " Invalid value: support only string";
        zip.parentNode.classList.add('has-error');
        parent.querySelector('span').innerText = message;
    }
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log( re.test(email));
    var emailInp = document.getElementById('email');
    // return re.test(email);
    if (re.test(email))
    {
        emailInp.parentNode.classList.remove('has-error');
        emailInp.parentNode.classList.add('has-success');
        emailInp.parentNode.getElementsByClassName("input-text-error")[0].style.display = 'none';
        console.log('OK');
    }else{
        console.log('Error');
        emailInp.parentNode.classList.remove('has-success');
        emailInp.parentNode.classList.add('has-error');
        emailInp.parentNode.getElementsByClassName("input-text-error")[0].style.display = 'block';
        emailInp.parentNode.getElementsByClassName("input-text-error")[0].innerText ="E-mail cannot be blank";
    }

}

function validPhone(phone) {
    var re = /^\+\d[\d\(\)\-]{10,13}\d$/;
    console.log(re.test(phone));
    var myPhone = document.getElementById("phone");
    // return re.test(myPhone);
    if (re.test(phone))
    {
        myPhone.parentNode.classList.remove('has-error');
        myPhone.parentNode.classList.add('has-success');
        myPhone.parentNode.getElementsByClassName('input-text-error')[0].style.display = 'none';
        console.log('OK');
    }else {
        console.log('ERROR');
        myPhone.parentNode.classList.remove('has-success');
        myPhone.parentNode.classList.add('has-error');
        myPhone.parentNode.getElementsByClassName("input-text-error")[0].style.display = 'block';
        myPhone.parentNode.getElementsByClassName("input-text-error")[0].innerText ="Phone cannot be blank";

    }
}
function validAddress(text) {
    var address = document.getElementById("address");
    if (address.value.length > 150) {
        address.parentNode.classList.remove('has-success');
        address.parentNode.classList.add('has-error');
        address.parentNode.getElementsByClassName("input-text-error")[0].style.display = 'block';
        address.parentNode.getElementsByClassName("input-text-error")[0].innerText ="Address max 150 symbols";
    }else{
        address.parentNode.classList.remove('has-error');
        address.parentNode.classList.add('has-success');
        address.parentNode.getElementsByClassName("input-text-error")[0].style.display = 'none';

    }
}




// billingForm.addEventListener('submit', valideteForm);
// bilingForm.removeEventListener('submit', valideteForm);
// if(! ValidPhone(document.getElementById('tel').value))
// {
//     console.log("Заполните поле корректно!");
// }