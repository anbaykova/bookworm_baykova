"use strict";
var calcForm = document.getElementById("form-calc");

calcForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var bedRooms = document.getElementsByName("bed-rooms");
    var bathRooms = document.getElementsByName("bath-rooms");
    var dirtyRooms = document.getElementsByName("dirty");
    var cleanRooms = document.getElementsByName("clean");


    if(checkRadioBtn(bedRooms) == false){
        document.getElementById('error-calc').innerHTML = "Выберите количество спален комнат";
        return false;
    } else {
        // document.getElementById('error-calc').innerHTML = "Количество спален выбрано";
    }

    if(checkRadioBtn(bathRooms) == false){
        document.getElementById('error-calc').innerHTML = "Выберите количество ванных комнат";
        return false;
    }
    if(checkRadioBtn(dirtyRooms) == false){
        document.getElementById('error-calc').innerHTML = "Выберите степень загрязнения";
        return false;
    }
    if(checkRadioBtn(cleanRooms) == false){
        document.getElementById('error-calc').innerHTML = "Выберите тип очистки";
        return false;
    }
    document.getElementById('error-calc').innerHTML = "";
    console.log("форма отработала");
    calculate();
});

function  checkRadioBtn(arrInp) {
    var checkResult = false;
    arrInp.forEach(function(item, index){
        if(item.checked)
        {
            checkResult = true;
        }
    });

    return checkResult;
}

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
    var result = Math.round((bedroom * timeRoom) + (timeBath * bath) * dirty);
    var time = Math.round(result) / 60;
    time = Math.round(time);
    document.getElementById('time').innerHTML = time;
    var cost = (result / 60) * price;
    cost = Math.round(cost);
    document.getElementById('cost').innerHTML = cost;


}

// TODO: 1. Функция подсчета стоимости должна только обсчитывать резкльтат. calculate(param1, param2, ...otherParams) { ... }
// TODO: 2. Оптимизируй код таким образом, чтобы один раз получать выбранные инпуты. Если все выбраны - вызывать функцию calculate. Иначе - функцию вывода ошибок.

// var inputs = document.getElementsByTagName('input');
// var anyCheck = 0;
// for (var i=0; i<inputs.length; i++)
// {
//     var inp = inputs[i];
//     if ("radio"==inp.type && inp.checked) { anyCheck=1; break; }
// }
// alert(anyCheck ? 'Есть отмеченные' : 'Нет отмеченных');
// document.getElementById('error-calc').innerHTML = inp;


// if(calcForm !== null){
//     calcForm.addEventListener("submit", calculate)
//         }
// else {
//     calcForm.getElementsByClassName("error-calc")[0].innerText = "Cannot be blank";
// //     console.log(bedroom);
// }

// function valideteCalc(event) {
//     event.preventDefault();
//     console.log('anna');
//
// }
// if(bedroom == 0) {
//     calcForm.getElementsByClassName("error-calc")[0].innerText ="E-mail cannot be blank";
//     console.log(bedroom);
// }else  {
//     console.log('выполнено');
// }
// if (bedroom=="" || bedroom==null, bath=="" || bath==null, dirtlvl=="" || dirtlvl==null){
//     alert('не все поля отмечены');
//     return false;
// } else {
//     alert('поля заполнены');
// }

//empty fields



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



