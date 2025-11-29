// OPEN MODAL
const modal = document.getElementById("orderModal");
const closeBtn = document.querySelector(".close-btn");
const orderProduct = document.getElementById("orderProduct");
const orderName = document.getElementById("orderName");
const orderAge = document.getElementById("orderAge");
const orderGender = document.getElementById("orderGender");
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
  let name = orderName.value.trim();
  let age = orderAge.value.trim();
  let gender = orderGender.value;
  let address = orderAddress.value.trim();

  if(!name || !age || !gender || !address){
    alert("Please fill all fields before sending order.");
    return;
  }

  let message =
`Assalamualaikum,
I want to order:

Product: ${product}
Name: ${name}
Age: ${age}
Gender: ${gender}
Address / Google Maps: ${address}

Please confirm my order.`;

  let phone = "03159050124";
  let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
});
