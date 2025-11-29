// OPEN MODAL
const modal = document.getElementById("orderModal");
const closeBtn = document.querySelector(".close-btn");
const orderProduct = document.getElementById("orderProduct");
const orderAddress = document.getElementById("orderAddress");
const confirmOrder = document.getElementById("confirmOrder");

document.querySelectorAll(".buy-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    let productName = btn.getAttribute("data-product");
    orderProduct.value = productName;
    modal.style.display = "flex";
  });
});

// CLOSE MODAL
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// CLICK OUTSIDE CLOSE
window.onclick = function(e){
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

// SEND ORDER TO WHATSAPP
confirmOrder.addEventListener("click", () => {
  let product = orderProduct.value;
  let address = orderAddress.value.trim();

  if (address === "") {
    alert("Please enter your complete address.");
    return;
  }

  let message =
`Assalamualaikum,
I want to order:

Product: ${product}
Address / Google Maps: ${address}

Please confirm my order.`;

  let phone = "03159050124";
  let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
});
