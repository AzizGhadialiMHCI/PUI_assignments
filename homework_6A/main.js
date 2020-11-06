// Get cart quantity from session storage and update cart icon
var totalCartQuantity = parseInt(sessionStorage.getItem("cartQ"));
document.getElementById("num-items-cart").innerHTML = totalCartQuantity;

