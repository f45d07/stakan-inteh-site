
function UpdateCartCountInems() {
    let cart_item_count_span = document.getElementById("count-carts-items");

    if (localStorage.getItem("cart") !== null && localStorage.getItem("cart").length > 2) {
        let cart_items = JSON.parse(localStorage.cart);
        console.log(cart_items.length);    
        cart_item_count_span.innerHTML = cart_items.length;
    }

    else {
        cart_item_count_span.innerHTML = 0;
    }
}

UpdateCartCountInems();