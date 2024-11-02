document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("register-form");
  const messageDiv = document.createElement("div");
  messageDiv.style.color = "red";
  messageDiv.style.marginTop = "10px";
  registerForm.appendChild(messageDiv);
});
