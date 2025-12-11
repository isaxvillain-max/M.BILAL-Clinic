// =============== LOGIN POPUP CONTROL ===============
const loginBtnNav = document.getElementById("loginBtnNav");
const logoutBtnNav = document.getElementById("logoutBtnNav");
const loginPopup = document.getElementById("loginPopup");
const closeLogin = document.getElementById("closeLogin");

loginBtnNav.addEventListener("click", () => {
    loginPopup.style.display = "flex";
});

closeLogin.addEventListener("click", () => {
    loginPopup.style.display = "none";
});

// =============== LOGIN FUNCTION ===============
document.getElementById("loginSubmit").addEventListener("click", () => {
    const username = document.getElementById("loginUsername").value.trim();

    if (username.length < 2) {
        alert("Enter a valid username");
        return;
    }

    // Store user
    localStorage.setItem("username", username);

    // Update navbar
    loginPopup.style.display = "none";
    loginBtnNav.style.display = "none";
    logoutBtnNav.style.display = "inline-block";

    // Update welcome text
    const welcomeBox = document.getElementById("welcomeUser");
    if (welcomeBox) welcomeBox.textContent = `Hey, ${username} 👋`;
});

// =============== LOGOUT ===============
logoutBtnNav.addEventListener("click", () => {
    localStorage.removeItem("username");
    location.reload();
});

// =============== CHECK LOGIN ON PAGE LOAD ===============
window.addEventListener("DOMContentLoaded", () => {
    const username = localStorage.getItem("username");

    if (username) {
        loginBtnNav.style.display = "none";
        logoutBtnNav.style.display = "inline-block";
    }
});
