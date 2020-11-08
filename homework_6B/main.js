// Get cart quantity from session storage and update cart icon
var totalCartQuantity = parseInt(sessionStorage.getItem("cartQ"));
if (totalCartQuantity == null){
    totalCartQuantity = 0;
}
document.getElementById("num-items-cart").innerHTML = totalCartQuantity;

