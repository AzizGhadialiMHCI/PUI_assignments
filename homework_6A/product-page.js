var colorSection = document.getElementById("color-options");
var sizeColors = colorSection.getElementsByClassName("color-option-button");
for(var i = 0; i<sizeColors.length; i++){
    sizeColors[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active-color");
        current[0].className = current[0].className.replace(" active-color", "");
        this.className += " active-color";
        console.log(current[0].id);
    });
}

var sizeSection = document.getElementById("size-options");
var sizeButtons = sizeSection.getElementsByClassName("button-option");
for(var i = 0; i<sizeButtons.length; i++){
    sizeButtons[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
        console.log(current[0].id);
    });
}

var quantity = parseInt(document.getElementById("num-items").innerHTML);
var totalCost = 0;
console.log(quantity)
document.getElementById("decrease-quantity").onclick = function () {decrimentQuantity()};
document.getElementById("increase-quantity").onclick = function () {increaseQuantity()};

function decrimentQuantity(){
    if(quantity > 1){
        let currentCost = (document.getElementById("cat-harness-item-cost").innerHTML).replace( /^\D+/g, '');
        totalCost = totalCost-(parseInt(currentCost)/(quantity));
    }
    quantity = parseInt(document.getElementById("num-items").innerHTML, 10) - 1;
    if (quantity < 1) { quantity = 1; }
    document.getElementById("num-items").innerHTML = quantity;
    document.getElementById("cat-harness-item-cost").innerHTML = "$" + totalCost;
    
}

function increaseQuantity(){
    let currentCost = (document.getElementById("cat-harness-item-cost").innerHTML).replace( /^\D+/g, '');
    if (quantity == 1){
        totalCost = 58;
    }
    else{
        totalCost = totalCost+(parseInt(currentCost)/(quantity));
    }
    quantity = parseInt(document.getElementById("num-items").innerHTML, 10) + 1;
    document.getElementById("num-items").innerHTML = quantity;
    document.getElementById("cat-harness-item-cost").innerHTML = "$" + totalCost;
    
}

document.getElementById("cat-harness-atc").onclick = function() {incrementShoppingBag()};
function incrementShoppingBag(){
    let count = parseInt(document.getElementById("num-items-cart").innerHTML) + quantity;
    document.getElementById("num-items-cart").innerHTML = count;
    console.log(count);
}