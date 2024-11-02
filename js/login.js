document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const messageDiv = document.createElement("div");
  messageDiv.style.color = "red";
  messageDiv.style.marginTop = "10px";
  loginForm.appendChild(messageDiv);

  if (localStorage.getItem("isLoggedIn")) {
    messageDiv.textContent = "You are already logged in!";
    setTimeout(() => {
      window.location.href = "/index.html";
    }, 10);
  }
});
