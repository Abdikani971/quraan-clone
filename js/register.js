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
});
