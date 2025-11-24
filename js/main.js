// Auto-fill service on appointment page
document.querySelectorAll(".service-card").forEach(card => {
  card.addEventListener("click", () => {
    const service = card.getAttribute("data-service");
    // Redirect to appointment page with query param
    window.location.href = `appointment.html?service=${encodeURIComponent(service)}`;
  });
});

// On appointment page load, prefill the service
window.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const serviceParam = urlParams.get("service");
  if (serviceParam) {
    const serviceInput = document.getElementById("service");
    if (serviceInput) serviceInput.value = serviceParam;
  }
});
