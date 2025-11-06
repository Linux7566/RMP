// Переключение вкладок
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", e => {
    e.preventDefault();
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

// Корзина
const cartCount = document.getElementById("cart-count");
let totalItems = 0;

document.querySelectorAll(".item").forEach(item => {
  const plus = item.querySelector(".plus");
  const minus = item.querySelector(".minus");
  const countEl = item.querySelector(".count");

  plus.addEventListener("click", () => {
    let count = parseInt(countEl.textContent);
    count++;
    countEl.textContent = count;
    totalItems++;
    cartCount.textContent = totalItems;
    addOrder(item);
  });

  minus.addEventListener("click", () => {
    let count = parseInt(countEl.textContent);
    if (count > 0) {
      count--;
      countEl.textContent = count;
      totalItems--;
      cartCount.textContent = totalItems;
    }
  });
});

// Добавление заказов
const ordersList = document.getElementById("orders-list");
function addOrder(item) {
  const name = item.dataset.name;
  const price = item.dataset.price;
  const li = document.createElement("li");
  li.textContent = `Клиент #1 заказал ${name} — ${price} ₽`;
  ordersList.appendChild(li);
}

// Слайдер
const slider = document.getElementById("product-slider");
document.querySelector(".arrow.left").addEventListener("click", () => {
  slider.scrollBy({ left: -250, behavior: "smooth" });
});
document.querySelector(".arrow.right").addEventListener("click", () => {
  slider.scrollBy({ left: 250, behavior: "smooth" });
});
