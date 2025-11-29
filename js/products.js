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

  // ✅ Use correct international format
  let phone = "923159050124";
  let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
});
