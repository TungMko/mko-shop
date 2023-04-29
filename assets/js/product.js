

// produc-detail
const MainImg = document.getElementById("MainImg");
const SmallImg = document.getElementsByClassName("small-img");
SmallImg[0].onclick = function(){
    MainImg.src = SmallImg[0].src;
}
SmallImg[1].onclick = function(){
    MainImg.src = SmallImg[1].src;
}
SmallImg[2].onclick = function(){
    MainImg.src = SmallImg[2].src;
}
SmallImg[3].onclick = function(){
    MainImg.src = SmallImg[3].src;
}


// thêm vào giỏ hàng tăng số lướng sản phẩm
const minusBtns = document.querySelectorAll('.minus');
const plusBtns = document.querySelectorAll('.plus');
const quantityInputs = document.querySelectorAll('input[type="number"]');
const priceElements = document.querySelectorAll('.price');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

for (let i = 0; i < minusBtns.length; i++) {
  minusBtns[i].addEventListener('click', function() {
    if (quantityInputs[i].value > 1) {
      quantityInputs[i].value--;
      priceElements[i].textContent =(quantityInputs[i].value * 200000).toLocaleString('en-US') + 'đ' ;
    }
  });
}

for (let i = 0; i < plusBtns.length; i++) {
  plusBtns[i].addEventListener('click', function() {
    quantityInputs[i].value++;
    priceElements[i].textContent =(quantityInputs[i].value * 200000).toLocaleString('en-US') + 'đ';
  });
}

for (let i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener('click', function() {
    const productTitle = this.parentNode.querySelector('.title').textContent;
    const productPrice = this.parentNode.querySelector('.price').textContent;
    const productQuantity = this.parentNode.querySelector('input[type="number"]').value;
    alert(`Bạn đã thêm ${productQuantity} sản phẩm "${productTitle}" vào giỏ hàng với giá ${productPrice}.`);
  });
}
