// Service click redirect with auto-fill
document.querySelectorAll(".service-card").forEach(card => {
  card.addEventListener("click", () => {
    const service = card.getAttribute("data-service");
    // Redirect to appointment page with service query param
    window.location.href = `appointment.html?service=${encodeURIComponent(service)}`;
  });
});

// Prefill appointment form if service param exists
window.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const serviceParam = urlParams.get("service");
  if (serviceParam) {
    const serviceInput = document.getElementById("service");
    if (serviceInput) serviceInput.value = serviceParam;
  }
});
