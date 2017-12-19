"use strict";
var checkout = document.getElementById("id-product");
checkout.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("форма отработала");
    resultTotal();
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

function resultTotal() {
    var result = 0;
    var number = document.getElementsByClassName('number');

    for (var i = 0; i < number.length; i++){
        if(number[i].value != 0) {
            var quantity = number[i].value;
            var mainParent = number[i].parentNode.parentNode;
            var cost = mainParent.getElementsByClassName('cost')[0].innerHTML;
             // console.log(quantity*cost);
                result = result + (quantity*cost);
        }

    }
    console.log(result);
    document.getElementById('total').innerHTML = result;
    document.getElementById('subtotal').innerHTML = result;
}


var removeBasket = document.getElementsByClassName('del-img');
// console.log(removeBasket.length);
for (var i = 0; i < removeBasket.length; i++) {
    removeBasket[i].addEventListener("click", function (event) {
        event.preventDefault();
        this.parentNode.remove();
    })
}
