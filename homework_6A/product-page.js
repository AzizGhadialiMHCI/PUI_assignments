document.getElementById("strawberry").onclick = function() {changeItemColorStrawberry()};

function changeItemColorStrawberry(){
    console.log("hi")
    document.getElementById("focused-slider").src = "strawberry-cat-harness.jpg";
} 

function changeItemColorBlackberry(){
    document.getElementById("focused-slider").style.backgroundImage = "url('strawberry-cat-harness.jpg')";
} 

function changeItemColorCrazyberry(){
    document.getElementById("focused-slider").style.backgroundImage = "url('strawberry-cat-harness.jpg')";
} 

function changeItemColorFireOrange(){
    document.getElementById("focused-slider").style.backgroundImage = "url('strawberry-cat-harness.jpg')";
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