// Auto-hide broken images
document.querySelectorAll("img").forEach(img => {
  img.onerror = () => img.style.display = "none";
});

// Auto-hide broken videos
document.querySelectorAll("video").forEach(vid => {
  vid.onerror = () => vid.style.display = "none";
});

// Optional: interactive tilt effect for cards
const tiltCards = document.querySelectorAll(".service-card, .review-card, .work-item, .stat-card, .location-card");
tiltCards.forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width/2;
    const y = e.clientY - rect.top - rect.height/2;
    card.style.transform = `rotateY(${x*0.05}deg) rotateX(${-y*0.05}deg)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});
