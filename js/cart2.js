"use strict";
var checkout = document.getElementById("id-product");
checkout.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("форма отработала");
    checkout();
});
var delOne = document.getElementsByClassName('del');
console.log(delOne);

var functionDelOne  = function () {
    var currInp = this.nextElementSibling;
    if (currInp.value > 0) {
        var res = currInp.value - 1;
        currInp.value = res;
    }
}

var addOne = document.getElementsByClassName('add');

var functionAddOne  = function () {
    var currInp = this.previousElementSibling;
    var res = parseInt(currInp.value, 10) + 1;
    currInp.value = res;

}


for (var i = 0; i < delOne.length; i++) {
    // console.log(delAll[i]);
    delOne[i].addEventListener('click', functionDelOne, false);
}
for (var i = 0; i < addOne.length; i++) {
    // console.log(delAll[i]);
    addOne[i].addEventListener('click', functionAddOne, false);
}




function checkout () {
    var remove1 = document.getElementById('del1').value;
    console.log(remove1);
    var remove2 = document.getElementById('del2').value;
    console.log(remove2);
    var remove3 = document.getElementById('del3').value;
    console.log(remove3);
    var append1 = document.getElementById('add1').value;
    console.log(append1);
    var append2 = document.getElementById('add1').value;
    console.log(append2);
    var append3 = document.getElementById('add1').value;
    console.log(append3);
    var number1 = document.getElementById('number1').value;
    console.log(number1);
    var number2 = document.getElementById('number2').value;
    console.log(number2);
    var number3 = document.getElementById('number31').value;
    console.log(number3);
    var cost1 = document.getElementById('cost1').value;
    console.log(cost1);
    var cost2 = document.getElementById('cost2').value;
    console.log(cost2);
    var cost3 = document.getElementById('cost3').value;
    console.log(cost3);

    var subtotal = document.getElementById('subtotal').value;
    console.log(subtotal);
    var total = document.getElementById('total').value;
    console.log(total);


}

