
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

function AddToCart(name, price) {
    let new_item = {
        item_name: name,
        item_price: price
    };
        
    let old_cart_items = [];

    if (localStorage.getItem("cart") !== null) {
        old_cart_items = JSON.parse(localStorage.cart);
    }

    old_cart_items.push(new_item);

    localStorage.cart = JSON.stringify(old_cart_items); 

    var blackout = document.getElementById("blackout");
    blackout.style.display = "block";

    blackout.scrollIntoView({block: "center", behavior: "smooth"});

    UpdateCartCountInems();

}

function HidePopUp() {
    var blackout = document.getElementById("blackout");
    blackout.style.display = "none";
}

UpdateCartCountInems();