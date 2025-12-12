// Auto-hide images/videos
document.querySelectorAll("img").forEach(img => {
  img.onerror = () => img.style.display = "none";
});
document.querySelectorAll("video").forEach(vid => {
  vid.onerror = () => vid.style.display = "none";
});

// Autofill services
document.querySelectorAll(".service-card").forEach(card => {
  card.addEventListener("click", () => {
    const name = card.getAttribute("data-service");
    window.location.href = "appointment.html?service=" + encodeURIComponent(name);
  });
});

// Welcome username
const welcomeCard = document.getElementById("welcomeCard");
const welcomeUser = document.getElementById("welcomeUser");
const savedName = localStorage.getItem("username");

if (savedName) {
    welcomeUser.textContent = `Hey, ${savedName} 👋`;
    welcomeCard.style.display = "block";
}


