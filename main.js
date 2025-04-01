
const darkModeToggle = document.getElementById("dark-mode-toggle");

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
// Toggle between Sign In and Sign Up forms
document.getElementById("show-signup").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("sign-in-form").style.display = "none";
    document.getElementById("sign-up-form").style.display = "block";
});

document.getElementById("show-signin").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("sign-in-form").style.display = "block";
    document.getElementById("sign-up-form").style.display = "none";
});

// Dummy Sign In & Sign Up Handling
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Login successful!");
});

document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Sign Up successful!");
});
