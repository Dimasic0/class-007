var productArrowLeft = document.querySelector(".product__arrow.left");
var productArrowRight = document.querySelector(".product__arrow.right");
var productListSwitches = document.querySelector(".product__list--switches");
var switches = productListSwitches.querySelectorAll("input");
var i=0;
.productArrowRight.addeventListener("mousedown",function() {
  i++; 
  switches[i].checked;
});