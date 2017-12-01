"use strict";
var checkout = document.getElementById("id-product");
checkout.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("форма отработала");
    checkout();
});
function checkout () {
var remove1 = document.getElementById('del1').value;
    console.log(remove1);
    var remove2 = document.getElementById('del1').value;
    console.log(remove2);
    var remove3 = document.getElementById('del1').value;
    console.log(remove3);

}

