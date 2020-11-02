var productItems = JSON.parse(localStorage.getItem("items"));
// console.log("-------start-------");
// console.log(productItems [0][0]);
// console.log(productItems [0][1]);
// console.log(productItems [0][2]);
// console.log(productItems [0][3]);
// console.log("-------end-------");

var index;
var calcSubtotal = 0;
var removeButtonList = []
console.log(productItems);
if (productItems == null){
    var noItemsMsg = document.createElement("h3");
    noItemsMsg.setAttribute("id", "no-item-msg");
    noItemsMsg.textContent = "You don't have any items in the cart."
    document.getElementById("main-cart-container").appendChild(noItemsMsg);
    
}
else{
    for(index = 0; index < productItems.length; index++){
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
        cartImg.setAttribute('src', "images/Cart-item-img.png");
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

        // Quantity
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
        console.log(removeButtonList);

        quantityContainer.appendChild(decreaseQ);
        quantityContainer.appendChild(itemQ);
        quantityContainer.appendChild(increaseQ);
        quantityContainer.appendChild(remove);
        productOptionsContainer.appendChild(quantityContainer);


        productOptions.append(productOptionsContainer);
        cartItemDetails.appendChild(productOptions);
        cartItem.appendChild(cartItemDetails);
        document.getElementById("main-cart-container").appendChild(cartItem);
    }
}

var subtotal = document.createElement('div');
subtotal.setAttribute("class", "main-cart-subtotal");
var subtotalLabel = document.createElement("h3");
subtotalLabel.textContent = "Subtotal";
var subtotalAmt = document.createElement("h3");
subtotalAmt.setAttribute("class", "main-cart-subtotal-text");
subtotalAmt.textContent = "$" + calcSubtotal;
subtotal.appendChild(subtotalLabel);
subtotal.appendChild(subtotalAmt);
document.getElementById("main-cart-container").appendChild(subtotal);

document.getElementById("cart-sidebar-lineItem-text").innerHTML = "$" + calcSubtotal;
var taxes = document.getElementById("cart-sidebar-lineItem-taxes").innerHTML.replace( /^\D+/g, '');
// var shipping = document.getElementById("cart-sidebar-lineItem-shipping").innerHTML.replace( /^\D+/g, '');
calcSubtotal = parseFloat(calcSubtotal);
calcSubtotal += parseFloat(taxes);
document.getElementById("cart-sidebar-lineItem-total").innerHTML = "$" + calcSubtotal;

var removeButtons = document.getElementsByClassName("remove-item");

console.log("----------")
console.log(removeButtons)
console.log(removeButtons[0].id)
console.log(removeButtons[1].id)
console.log(removeButtons.length)
console.log("----------")
for(let x = 0; x<removeButtons.length; x++){
    console.log("------ debug line -----")
    console.log(removeButtons[x].id)
    removeButtons[x].addEventListener("click", function(){
        console.log("------ debug line -----")
        console.log(removeButtons[x].id)
        var currRemoveId = removeButtons[x].id;
        currRemoveId = currRemoveId.replace("remove-item", "");
        document.getElementById("product"+currRemoveId).innerHTML = ''
    });
}

