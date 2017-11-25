"use strict";
var calcForm = document.getElementById("form-calc");

calcForm.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("вася");
});
var bedRooms = document.get('name')
function calcForm() {
    
}

// Uncaught TypeError: document.get is not a function
// at formcalc.js:8
// (anonymous) @ formcalc.js:8
// var formCalc = document.getElementById('form-calc')
// undefined
// formCalc
// <form action id=​"form-calc">​…​</form>​
// formCalc.getElementsByName('bed-rooms');
// VM4115:1 Uncaught TypeError: formCalc.getElementsByName is not a function
// at <anonymous>:1:10
// (anonymous) @ VM4115:1
// formCalc.getElementsByName('bed-rooms')
// VM4117:1 Uncaught TypeError: formCalc.getElementsByName is not a function
// at <anonymous>:1:10
// (anonymous) @ VM4117:1
// formCalc.querySelectorAll('[name="bad-rooms"]')
//     []length: 0__proto__: NodeList
// formCalc.querySelectorAll('[name="bed-rooms"]')
// (6) [input#bed-1, input#bed-2, input#bed-3, input#bed-4, input#bed-5, input#bed-6]0: input#bed-11: input#bed-22: input#bed-33: input#bed-44: input#bed-55: input#bed-6length: 6__proto__: NodeList
// formCalc.querySelectorAll('[name="bed-rooms"]').checked
// undefined
// formCalc.querySelectorAll('[name="bed-rooms"]:checked')
//     [input#bed-2]0: input#bed-2length: 1__proto__: NodeList
// formCalc.querySelectorAll('[name="bed-rooms"]:checked')
//     [input#bed-3]
// formCalc.querySelector('[name="bed-rooms"]:checked')
// <input type=​"radio" id=​"bed-3" value=​"3" name=​"bed-rooms">​
// formCalc.querySelector('[name="bed-rooms"]:checked').value
// "3"
// formCalc.querySelector('[name="bed-rooms"]:checked').value
// "6"