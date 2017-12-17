"use strict";
var calcForm = document.getElementById("form-calc");

calcForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var bedRooms = document.getElementsByName("bed-rooms");
    var bathRooms = document.getElementsByName("bath-rooms");
    var dirtyRooms = document.getElementsByName("dirty");
    var cleanRooms = document.getElementsByName("clean");


    if(checkRadioBtn(bedRooms) == false){
        document.getElementById('error-calc').innerHTML = "* Выберите количество спален комнат";
        return false;
    } else {
        // document.getElementById('error-calc').innerHTML = "Количество спален выбрано";
    }

    if(checkRadioBtn(bathRooms) == false){
        document.getElementById('error-calc').innerHTML = "* Выберите количество ванных комнат";
        return false;
    }
    if(checkRadioBtn(dirtyRooms) == false){
        document.getElementById('error-calc').innerHTML = "* Выберите степень загрязнения";
        return false;
    }
    if(checkRadioBtn(cleanRooms) == false){
        document.getElementById('error-calc').innerHTML = "* Выберите тип очистки";
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


