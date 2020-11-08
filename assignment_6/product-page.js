// calls function to change the product image when the correct id is selected 
document.getElementById("strawberry").onclick = function() {changeItemColorStrawberry();};
document.getElementById("blackberry").onclick = function() {changeItemColorBlackberry();};
document.getElementById("crazyberry").onclick = function() {changeItemColorCrazyberry();};
document.getElementById("fireorange").onclick = function() {changeItemColorFireOrange();};

//change image to strawberry cat harness
function changeItemColorStrawberry(){
    document.getElementById("focused-slider").src = "images/strawberry-cat-harness.jpg";
} 

//change image to blackberry cat harness
function changeItemColorBlackberry(){
    document.getElementById("focused-slider").src = "images/blackberry-cat-harness.jpg";
} 

//change image to crazyberry cat harness
function changeItemColorCrazyberry(){
    document.getElementById("focused-slider").src = "images/crazyberry-cat-harness.jpg";
} 

//change image to fireorange cat harness
function changeItemColorFireOrange(){
    document.getElementById("focused-slider").src = "images/fireorange-cat-harness.jpg";
} 

// Variables to hold current product state
const atcButton = document.getElementById('cat-harness-atc');
var color = "strawberry";
var size = "size-tiny";
var quantity = parseInt(document.getElementById("num-items").innerHTML);
var totalCost = 29;
var imgurl = "images/strawberry-cat-harness.jpg";


// Change the "selected" color option
var colorSection = document.getElementById("color-options"); //store the container with the color options
var sizeColors = colorSection.getElementsByClassName("color-option-button"); //create a list with all the color options
for(var i = 0; i<sizeColors.length; i++){ //loop through the color options
    sizeColors[i].addEventListener("click", function(){ //see if a color option is being clicked 
        var current = document.getElementsByClassName("active-color"); //store the current selected color
        current[0].className = current[0].className.replace(" active-color", ""); //deselect the current selected color
        this.className += " active-color"; //change the selected color to the one that was clicked
        color = current[0].id;
        if (color == "strawberry"){
            imgurl = "images/strawberry-cat-harness.jpg"
        }
        if (color == "blackberry"){
            imgurl = "images/blackberry-cat-harness.jpg"
        }
        if (color == "crazyberry"){
            imgurl = "images/crazyberry-cat-harness.jpg"
        }
        if (color == "fireorange"){
            imgurl = "images/fireorange-cat-harness.jpg"
        }
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
        size = current[0].id;
    });
}

// Change the quanitity selected
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

// Setup local and session storage variables for cart items and quantity
let itemsArray = []
var totalCartQuantity = 0;

// Check if storage already has items
if (localStorage.getItem("items") != null){
    itemsArray = JSON.parse(localStorage.getItem("items"));
}

if (sessionStorage.getItem("cartQ") != null){
    totalCartQuantity = sessionStorage.getItem("cartQ");
}


// Change the item quantity
document.getElementById("num-items-cart").innerHTML = totalCartQuantity;

// Add to cart button 
atcButton.addEventListener("click", function(e) {
    e.preventDefault()
    // Add new product item to local storage 
    let tempQ = 0;
    itemsArray.push([color, size, quantity, totalCost, imgurl])
    localStorage.setItem('items', JSON.stringify(itemsArray))
    // Update number of cart items 
    tempQ += parseInt(totalCartQuantity) + quantity;
    totalCartQuantity = tempQ;
    sessionStorage.setItem('cartQ', tempQ)
    document.getElementById("num-items-cart").innerHTML = tempQ;

  })


