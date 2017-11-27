"use strict";

var billingForm = document.getElementById("cart");
var requiredFields = document.querySelectorAll("input[required], textarea[required]");
console.log(requiredFields);

// var validateEmail = document.getElementById("email");
// var ValidPhone = document.getElementById('tel');

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

    validateEmail(document.getElementById("email").value);
    // ValidPhone();
}

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
    if (zip.value.match('[A-Z,a-z, ]*')[0] === "") {
        message =+ " Invalid value: support only string";
        zip.parentNode.classList.add('has-error');
        parent.querySelector('span').innerText = message;
    }
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log( re.test(email));
    // return re.test(email);
    if (re.test(email))
    {
        console.log('OK');
    }else{
        console.log('Error');
    }

}

function ValidPhone(Phone) {
    var re = /^\d[\d\(\)\ -]{4,14}\d$/;
    return re.test(myPhone);
    if(! ValidPhone(document.getElementById('tel').value))
    {
        console.log("Заполните поле корректно!");
    }
}



// billingForm.addEventListener('submit', valideteForm);
// bilingForm.removeEventListener('submit', valideteForm);
