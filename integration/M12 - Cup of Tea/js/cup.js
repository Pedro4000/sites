console.log('hello');


var openCheckout = document.querySelector(".basket");
console.log(openCheckout);

var myCheckout=document.querySelector(".checkout");
console.log(myCheckout);




function showBasket(){
  event.preventDefault();
  myCheckout.classList.toggle("checkout-is-showing");
}

var close = document.querySelector(".close-checkout");






openCheckout.addEventListener("click",showBasket);

close.addEventListener("click",showBasket)
