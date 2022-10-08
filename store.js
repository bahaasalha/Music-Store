let price = 0;
const totalPrice = document.querySelector(".cart-total-price");
const items = document.querySelector(".cart-items");
const shopItem = document.querySelectorAll(".shop-item-button");
/////////////////////////////////
shopItem.forEach((el) => {
  el.addEventListener("click", function (e) {
    const item = e.target;
    const shopItem = item.parentElement.parentElement;
    const imgItem = shopItem.querySelector(".shop-item-image").src;
    const priceItem = shopItem.querySelector(".shop-item-price").textContent;
    const titleItem = shopItem.querySelector(".shop-item-title").textContent;
    price += Number(priceItem.replace("$", ""));
    createShopItems(imgItem, priceItem, titleItem);
  });
});
//Adding items
/////////////////////////////////
const createShopItems = function (imgItem, priceItem, titleItem) {
  const html = `<div class="cart-items cart-row">
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imgItem}" width="100" height="100">
            <span class="cart-item-title">${titleItem}</span>
        </div>
        <span class="cart-price cart-column">${priceItem}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>
       </div>`;
  const container = document.createElement("div");
  container.insertAdjacentHTML("beforeend", html);
  items.appendChild(container);
};
//Remove items
items.addEventListener("click", function (e) {
  const item = e.target;
  if (e.target.classList.contains("btn-danger")) {
    const shopItem = item.parentElement.parentElement;
    shopItem.remove();
  }
});
//Total Costs
/////////////////////////////////
items.addEventListener("change", function (e) {
  const item = e.target;
  if (isNaN(item.value) || item.value <= 0) item.value = 1;
  countPrice(item.value);
});
function countPrice(item = 1) {
  let total = 0;
  total += Math.round(item * price * 100) / 100;
  totalPrice.innerHTML = `${total}$`;
}
//Purchase
/////////////////////////////////
document.querySelector(".btn-purchase").addEventListener("click", function () {
  purchaseClicked();
});
function purchaseClicked() {
  alert("Thank you for your purchase");
  const cartItems = document.getElementsByClassName("cart-items")[0];
  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild);
  }
}
