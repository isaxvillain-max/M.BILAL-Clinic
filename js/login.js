document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();

    // Save username for homepage
    localStorage.setItem("username", username);

    // Redirect
    window.location.href = "index.html";
});
