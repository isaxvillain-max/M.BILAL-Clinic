const loginBtnNav = document.getElementById("loginBtnNav");
const logoutBtnNav = document.getElementById("logoutBtnNav");
const loginPopup = document.getElementById("loginPopup");
const closeLogin = document.getElementById("closeLogin");

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

const goSignup = document.getElementById("goSignup");
const goLogin = document.getElementById("goLogin");
const panelTitle = document.getElementById("panelTitle");

// OPEN POPUP
loginBtnNav.addEventListener("click", () => {
    loginPopup.style.display = "flex";
});

// CLOSE POPUP
closeLogin.addEventListener("click", () => {
    loginPopup.style.display = "none";
});

// SWITCH TO SIGNUP
goSignup.addEventListener("click", () => {
    loginForm.style.display = "none";
    signupForm.style.display = "block";
    panelTitle.textContent = "WELCOME!";
});

// SWITCH TO LOGIN
goLogin.addEventListener("click", () => {
    signupForm.style.display = "none";
    loginForm.style.display = "block";
    panelTitle.textContent = "WELCOME BACK!";
});

// LOGIN ACTION
document.getElementById("loginSubmit").addEventListener("click", () => {
    const username = document.getElementById("loginUsername").value.trim();
    if (username.length < 2) return alert("Enter valid username");

    localStorage.setItem("username", username);

    loginPopup.style.display = "none";
    loginBtnNav.style.display = "none";
    logoutBtnNav.style.display = "inline-block";

    const welcome = document.getElementById("welcomeUser");
    if (welcome) welcome.textContent = `Hey, ${username} 👋`;
});

// SIGNUP ACTION
document.getElementById("signupSubmit").addEventListener("click", () => {
    const username = document.getElementById("signupUsername").value.trim();
    if (username.length < 2) return alert("Enter valid username");

    localStorage.setItem("username", username);

    loginPopup.style.display = "none";
    loginBtnNav.style.display = "none";
    logoutBtnNav.style.display = "inline-block";

    const welcome = document.getElementById("welcomeUser");
    if (welcome) welcome.textContent = `Hey, ${username} 👋`;
});

// LOGOUT
logoutBtnNav.addEventListener("click", () => {
    localStorage.removeItem("username");
    location.reload();
});

// AUTO CHECK LOGIN
window.addEventListener("DOMContentLoaded", () => {
    const username = localStorage.getItem("username");

    if (username) {
        loginBtnNav.style.display = "none";
        logoutBtnNav.style.display = "inline-block";
    } else {
        // First launch → show login popup automatically
        loginPopup.style.display = "flex";
    }
});
