
function UpdateCartCountInems() {
    let cart_item_count_span = document.getElementById("count-carts-items");

    if (localStorage.getItem("cart") !== null && localStorage.getItem("cart").length > 2) {
        let cart_items = JSON.parse(localStorage.cart);
        cart_item_count_span.innerHTML = cart_items.length;
    }

    else {
        cart_item_count_span.innerHTML = 0;
    }
}

function AddToCart(name, price) { // Аргументы: Отображаемое имя позиции и его цена
    let new_item = {
        item_name: name,
        item_price: price
    };
        
    let old_cart_items = [];

    // Получение товаров из корзины, если она не пустая
    if (localStorage.getItem("cart") !== null) {
        old_cart_items = JSON.parse(localStorage.cart);
    }

    // Добавление новой позиции
    old_cart_items.push(new_item);

    // Сохранение JSON в локальное хранилице браузера
    localStorage.cart = JSON.stringify(old_cart_items); 

    // Визуальная часть
    var blackout = document.getElementById("blackout");
    blackout.style.display = "block";

    blackout.scrollIntoView({block: "center", behavior: "smooth"});

    // Обновление кол-ва товаров в шапке
    UpdateCartCountInems();

}

function HidePopUp() {
    var blackout = document.getElementById("blackout");
    blackout.style.display = "none";
}

UpdateCartCountInems();