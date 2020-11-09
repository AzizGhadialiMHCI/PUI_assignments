// Load product items
var productItems = JSON.parse(localStorage.getItem("items"));

// Declare global variables 
var index;
var calcSubtotal = 0;
var removeButtonList = [];
var subtotal = document.createElement('div');
var taxes = 0; 
var totalCartQuantity = parseInt(sessionStorage.getItem("cartQ"));
var quantityByProduct = [];

//Check if cart quantity is NaN
if (Number.isNaN(totalCartQuantity)){
    totalCartQuantity = 0;
}

// Assign current cart quantity
document.getElementById("num-items-cart").innerHTML = totalCartQuantity;
// Load the products into the cart
window.onload = loadProducts();
// Set taxes to 0
document.getElementById("cart-sidebar-lineItem-taxes").innerHTML = "$0.00"

// Load empty cart
function loadEmptyProducts(){
    // Create a message that there are no items in the cart
    noItemsMsg = document.createElement("h3");
    noItemsMsg.setAttribute("id", "no-item-msg");
    noItemsMsg.textContent = "You don't have any items in the cart."
    document.getElementById("main-cart-container").innerHTML = "";
    itemsHeader = document.createElement("div");
    itemsHeader.setAttribute("class", "main-cart-header");
    itemsHeaderText = document.createElement("h3");
    itemsHeaderText.textContent = "Your items";
    itemsHeaderText.setAttribute("id", "your-items-text");

    // Set the cart header text
    itemsHeader.appendChild(itemsHeaderText);
    document.getElementById("main-cart-container").classList.add("main-cart-container-empty");
    document.getElementById("main-cart-container").classList.remove("main-cart-container");
    document.getElementById("main-cart-container").appendChild(itemsHeader);
    document.getElementById("main-cart-container").appendChild(noItemsMsg);

    // Set taxes to 0
    document.getElementById("cart-sidebar-lineItem-taxes").innerHTML = "$0.00"

    // Set the cart quantity to 0
    document.getElementById("num-items-cart").innerHTML = totalCartQuantity;
}

// Load cart wiht items
function loadFilledProducts(index){
    if (document.getElementById("no-item-msg") != null){
        document.getElementById("no-item-msg").remove();
    }
    
    calcSubtotal += productItems[index][3];

    // Create new cart item
    var cartItem = document.createElement('div');
    cartItem.setAttribute('class', 'main-cart-item');
    cartItem.setAttribute('id', "product" + index);
    
    var cartImg = document.createElement('img');
    cartImg.setAttribute('class', 'cart-img');
    cartImg.setAttribute('src', productItems[index][4]);
    cartImg.setAttribute('alt', "cart item image");

    cartItem.appendChild(cartImg);

    
    // Create a new cart item details
    var cartItemDetails = document.createElement('div');
    cartItemDetails.setAttribute('class', 'main-cart-item-details');
    
    // Set the product name and price 
    var prodNamePrice = document.createElement('div');
    prodNamePrice.setAttribute('class', 'main-cart-product-name-price');
    var prodName = document.createElement('h3');
    prodName.setAttribute('class', 'main-cart-item-product-name');
    prodName.textContent = "Cat Harness";
    var price = document.createElement('h3');
    price.setAttribute('class', 'main-cart-item-product-price');
    price.textContent = "$29";
    prodNamePrice.appendChild(prodName);
    prodNamePrice.appendChild(price);
    cartItemDetails.appendChild(prodNamePrice);
    
    // Item description
    var description = document.createElement("p");
    description.textContent = "Item description, Item description, Item description, Item description, Item description"
    cartItemDetails.appendChild(description);

    // Product options
    var productOptions = document.createElement('div');
    productOptions.setAttribute('class', 'product-options');

    // Product options container
    var productOptionsContainer = document.createElement('div');
    productOptionsContainer.setAttribute('class', 'product-options-container');

    // Color options
    var colorOptions = document.createElement('div');
    colorOptions.setAttribute('class', 'cart-select-option');
    var strawberryButton = document.createElement('button');
    if (productItems[index][0] == 'strawberry'){
        strawberryButton.setAttribute('class', 'color-option-button active-color');
    }
    else{
        strawberryButton.setAttribute('class', 'cart-color-option-button');
    }
    strawberryButton.setAttribute('id', 'strawberry');
    var blackberryButton = document.createElement('button');
    if (productItems[index][0] == 'blackberry'){
        blackberryButton.setAttribute('class', 'color-option-button active-color');
    }
    else{
        blackberryButton.setAttribute('class', 'cart-color-option-button');
    }
    blackberryButton.setAttribute('id', 'blackberry');
    var crazyberryButton = document.createElement('button');
    if (productItems[index][0] == 'crazyberry'){
        crazyberryButton.setAttribute('class', 'color-option-button active-color');
    }
    else{
        crazyberryButton.setAttribute('class', 'cart-color-option-button');
    }
    crazyberryButton.setAttribute('id', 'crazyberry');
    var fireorangeButton = document.createElement('button');
    if (productItems[index][0] == 'fireorange'){
        fireorangeButton.setAttribute('class', 'color-option-button active-color');
    }
    else{
        fireorangeButton.setAttribute('class', 'cart-color-option-button');
    }
    fireorangeButton.setAttribute('id', 'fireorange');
    colorOptions.appendChild(strawberryButton);
    colorOptions.appendChild(blackberryButton);
    colorOptions.appendChild(crazyberryButton);
    colorOptions.appendChild(fireorangeButton);
    productOptionsContainer.appendChild(colorOptions);

    // Size options
    var sizeOptions = document.createElement('div');
    sizeOptions.setAttribute('class', 'cart-select-option');
    sizeOptions.setAttribute('id', 'cart-size-options');
    var tinyButton = document.createElement('button');
    tinyButton.setAttribute('id', 'size-tiny');
    tinyButton.textContent = "Tiny";
    if (productItems[index][1] == 'size-tiny'){
        tinyButton.setAttribute('class', 'cart-size-option-activeSize');
    }
    else{
        tinyButton.setAttribute('class', 'cart-size-option');
    }

    var smallButton = document.createElement('button');
    smallButton.textContent = "Small";
    smallButton.setAttribute('id', 'size-small');
    if (productItems[index][1] == 'size-small'){
        smallButton.setAttribute('class', 'cart-size-option-activeSize');
    }
    else{
        smallButton.setAttribute('class', 'cart-size-option');
    }

    var mediumButton = document.createElement('button');
    mediumButton.textContent = "Medium";
    mediumButton.setAttribute('id', 'size-medium');
    if (productItems[index][1] == 'size-medium'){
        mediumButton.setAttribute('class', 'cart-size-option-activeSize');
    }
    else{
        mediumButton.setAttribute('class', 'cart-size-option');
    }

    var largeButton = document.createElement('button');
    largeButton.textContent = "Large";
    largeButton.setAttribute('id', 'size-large');
    if (productItems[index][1] == 'size-large'){
        largeButton.setAttribute('class', 'cart-size-option-activeSize');
    }
    else{
        largeButton.setAttribute('class', 'cart-size-option');
    }
    sizeOptions.appendChild(tinyButton);
    sizeOptions.appendChild(smallButton);
    sizeOptions.appendChild(mediumButton);
    sizeOptions.appendChild(largeButton);
    productOptionsContainer.appendChild(sizeOptions);

    // Set quantity 
    var quantityContainer = document.createElement('div');
    quantityContainer.setAttribute('class', 'cart-select-option');
    var decreaseQ = document.createElement('p');
    decreaseQ.setAttribute('class', 'quantity');
    decreaseQ.setAttribute('id', 'decrease-quantity');
    decreaseQ.textContent = "-";
    var increaseQ = document.createElement('p');
    increaseQ.setAttribute('class', 'quantity');
    increaseQ.setAttribute('id', 'increase-quantity');
    increaseQ.textContent = "+";
    var itemQ = document.createElement("p");
    itemQ.setAttribute('class', 'quantity');
    itemQ.setAttribute('id', 'num-items');
    itemQ.textContent = productItems[index][2];
    var remove = document.createElement("button");
    remove.textContent = "Remove";
    remove.setAttribute('class', 'remove-item');
    remove.setAttribute('id', 'remove-item'+index);
    removeButtonList.push('remove-item'+index)
    quantityByProduct.push(productItems[index][2]);
    quantityContainer.appendChild(decreaseQ);
    quantityContainer.appendChild(itemQ);
    quantityContainer.appendChild(increaseQ);
    quantityContainer.appendChild(remove);
    productOptionsContainer.appendChild(quantityContainer);
    
    // Set taxes
    taxes += (.2*parseInt(productItems[index][3])) * parseInt(productItems[index][2]);
    
    // Add cart item components to html
    productOptions.append(productOptionsContainer);
    cartItemDetails.appendChild(productOptions);
    cartItem.appendChild(cartItemDetails);
    document.getElementById("main-cart-container").appendChild(cartItem);
}

// Loads the cart
function loadProducts(){
    productItems = JSON.parse(localStorage.getItem("items"));
    if (productItems == null || productItems.length == 0){
        loadEmptyProducts();
    }
    else{
        document.getElementById("main-cart-container").classList.remove("main-cart-container-empty");
        document.getElementById("main-cart-container").classList.add("main-cart-container");
        document.getElementById("num-items-cart").innerHTML = totalCartQuantity;
        for(index = 0; index < productItems.length; index++){
            loadFilledProducts(index);
        }
    }
    // Create subtotal amount 
    subtotal.setAttribute("class", "main-cart-subtotal");
    subtotalLabel = document.createElement("h3");
    subtotalLabel.textContent = "Subtotal";
    subtotalAmt = document.createElement("h3");
    subtotalAmt.setAttribute("class", "main-cart-subtotal-text");
    subtotalAmt.textContent = "$" + calcSubtotal;
    subtotal.appendChild(subtotalLabel);
    subtotal.appendChild(subtotalAmt);
    
    
}

// Calculate the prices 
document.getElementById("main-cart-container").appendChild(subtotal);
document.getElementById("cart-sidebar-lineItem-text").innerHTML = "$" + calcSubtotal;
calcSubtotal = parseFloat(calcSubtotal);
document.getElementById("cart-sidebar-lineItem-taxes").innerHTML = "$" + Math.round(taxes*100)/100;
calcSubtotal += taxes;
document.getElementById("cart-sidebar-lineItem-total").innerHTML = "$" + Math.round(calcSubtotal*100)/100;



    
// Store all of the remove buttons
var removeButtons = document.getElementsByClassName("remove-item");


// Loop to check if a remove button is clicked; removes item from cart and storage
for(let x = 0; x<removeButtons.length; x++){
    removeButtons[x].addEventListener("click", function(){
        // Get unique id of cart item
        var currRemoveId = removeButtons[x].id; 
        currRemoveId = currRemoveId.replace("remove-item", "");
        // Change cart quantity
        totalCartQuantity -= quantityByProduct[currRemoveId];
        quantityByProduct.splice(currRemoveId, 1);
        sessionStorage.setItem("cartQ", totalCartQuantity)
        productItems.splice(currRemoveId, 1);
        document.getElementById("product"+currRemoveId).innerHTML = ''
        document.getElementById("product"+currRemoveId).remove()
        localStorage.setItem('items', JSON.stringify(productItems))
        removeButtons = document.getElementsByClassName("remove-item");
        loadProducts();
        location.reload()
    });
}




