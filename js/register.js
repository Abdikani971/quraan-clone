document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("register-form");
  const messageDiv = document.createElement("div");
  messageDiv.style.color = "red";
  messageDiv.style.marginTop = "10px";
  registerForm.appendChild(messageDiv);

  if (localStorage.getItem("isLoggedIn")) {
    messageDiv.textContent = "You are already registered and logged in!";
    setTimeout(() => {
      window.location.href = "/index.html";
    }, 10);
    return;
  }

  registerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
      messageDiv.textContent = "Passwords do not match!";
      return;
    }

    const existingUser = JSON.parse(localStorage.getItem("user"));
    if (existingUser) {
      messageDiv.textContent = "User already registered. Please log in.";
      return;
    }
  });
});
