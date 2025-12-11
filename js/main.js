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

// Show username on homepage
const welcomeBox = document.getElementById("welcomeUser");
if (welcomeBox) {
    const name = localStorage.getItem("username");
    if (name) {
        welcomeBox.textContent = `Hey, ${name} 👋`;
    }
}




