document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const messageDiv = document.createElement("div");
  messageDiv.style.color = "red";
  messageDiv.style.marginTop = "10px";
  loginForm.appendChild(messageDiv);
});
