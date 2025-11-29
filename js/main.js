// Auto-hide empty images
document.querySelectorAll("img").forEach(img => {
  img.onerror = () => img.style.display = "none";
});

// Auto-hide empty videos
document.querySelectorAll("video").forEach(vid => {
  vid.onerror = () => vid.style.display = "none";
});

// =====================
// Services click autofill
// =====================
document.querySelectorAll(".service-card").forEach(card => {
  card.addEventListener("click", () => {
    const serviceName = card.getAttribute("data-service");
    const appointmentURL = "appointment.html";
    
    window.location.href = `${appointmentURL}?service=${encodeURIComponent(serviceName)}`;
  });
});

/* =========================
   PRODUCT BUY POPUP REDIRECT
========================= */

document.querySelectorAll(".buy-btn").forEach(button => {
  button.addEventListener("click", () => {
    const productName = button.getAttribute("data-product");

    // redirect to popup page
    window.location.href = `appointment.html?product=${encodeURIComponent(productName)}`;
  });
});

