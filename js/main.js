// Auto-hide empty images
document.querySelectorAll("img").forEach(img => {
  img.onerror = () => img.style.display = "none";
});

// Auto-hide empty videos
document.querySelectorAll("video").forEach(vid => {
  vid.onerror = () => vid.style.display = "none";
});
