function addtoCart() {

    var carts = document.getElementById("cart_count").innerHTML;
    carts = parseInt(carts);
    carts =carts+1;
    document.getElementById("cart_count").innerHTML= carts;
    alert("added to cart");
    

}

