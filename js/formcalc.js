"use strict";
var calcForm = document.getElementById("form-calc");

calcForm.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("форма отработала");
    calculate();
});
function calculate () {
    var bedroom = calcForm.querySelector('[name="bed-rooms"]:checked').value;
    console.log(bedroom);
    var bath = calcForm.querySelector('[name=bath-rooms]:checked').value;
    console.log(bath);
    var dirty = calcForm.querySelector('[name=dirty]:checked').dataset.rate;
    console.log(dirty);
    var price = calcForm.querySelector('[name=clean]:checked').dataset.price;
    console.log(price);
    var timeRoom = calcForm.querySelector('[name=clean]:checked').dataset.timeBed;
    console.log(timeRoom);
    var timeBath = calcForm.querySelector('[name=clean]:checked').dataset.timeBath;
    console.log(timeBath);
    var result = (bedroom * timeRoom) + (timeBath * bath) * dirty;
    var time = result/60;
    document.getElementById('time').innerHTML = time;
    var cost = (result/60)*price;
    document.getElementById('cost').innerHTML = cost;
}

// function calcPrime (room, bath, dirty, timeRoom, timeBath) {
//     return (bedroom + timeRoom) + (timeBath * bath) * dirty;
// }

// function calculate() {
//     var bedroom, bath, dirtlvl, cleantype, result;
//     bedroom = document.getElementsByName('bed-rooms');
//     for (var i=0;i<bedroom.length; i++) {
//         if (bedroom[i].checked) {
//             bedroom =bedroom[i].value ;
//         }
//     }
//     bath = document.getElementsByName('bath-rooms');
//     for (var i=0;i<bath.length; i++) {
//         if (bath[i].checked) {
//             bath=bath[i].value;
//         }
//     }
//     dirtlvl = document.getElementsByName('dirty');
//     for (var i=0;i<dirtlvl.length; i++) {
//         if (dirtlvl[i].checked) {
//             dirtlvl=dirtlvl[i].value;
//             console.log(dirtlvl);
//         }
//     }



// var bedRooms = document.get('name')
// function calcForm() {
//
// }

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