// calls function to change the product image when the correct id is selected 
document.getElementById("strawberry").onclick = function() {changeItemColorStrawberry()};
document.getElementById("blackberry").onclick = function() {changeItemColorBlackberry()};
document.getElementById("crazyberry").onclick = function() {changeItemColorCrazyberry()};
document.getElementById("fireorange").onclick = function() {changeItemColorFireOrange()};

//change image to strawberry cat harness
function changeItemColorStrawberry(){
    document.getElementById("focused-slider").src = "strawberry-cat-harness.jpg";
} 

//change image to blackberry cat harness
function changeItemColorBlackberry(){
    document.getElementById("focused-slider").src = "blackberry-cat-harness.jpg";
} 

//change image to crazyberry cat harness
function changeItemColorCrazyberry(){
    document.getElementById("focused-slider").src = "crazyberry-cat-harness.jpg";
} 

//change image to fireorange cat harness
function changeItemColorFireOrange(){
    document.getElementById("focused-slider").src = "fireorange-cat-harness.jpg";
} 

// Change the "selected" color option
var colorSection = document.getElementById("color-options"); //store the container with the color options
var sizeColors = colorSection.getElementsByClassName("color-option-button"); //create a list with all the color options
for(var i = 0; i<sizeColors.length; i++){ //loop through the color options
    sizeColors[i].addEventListener("click", function(){ //see if a color option is being clicked 
        var current = document.getElementsByClassName("active-color"); //store the current selected color
        current[0].className = current[0].className.replace(" active-color", ""); //deselect the current selected color
        this.className += " active-color"; //change the selected color to the one that was clicked
        console.log(current[0].id);
    });
}

// Change the "selected" size - same process as colors
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

// Change the quanitity selected
var quantity = parseInt(document.getElementById("num-items").innerHTML);
var totalCost = 0;
console.log(quantity)
document.getElementById("decrease-quantity").onclick = function () {decrimentQuantity()};
document.getElementById("increase-quantity").onclick = function () {increaseQuantity()};

// function to decrease quantity
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

// function to increase quantity
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

// function to increment quantity displayed on shopping bag
document.getElementById("cat-harness-atc").onclick = function() {incrementShoppingBag()};
function incrementShoppingBag(){
    let count = parseInt(document.getElementById("num-items-cart").innerHTML) + quantity;
    document.getElementById("num-items-cart").innerHTML = count;
    console.log(count);
}