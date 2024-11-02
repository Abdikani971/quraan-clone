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

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.email === email && user.password === password) {
      localStorage.setItem("isLoggedIn", true);
      messageDiv.style.color = "green";
      messageDiv.textContent = "Login successful! Redirecting...";
      setTimeout(() => {
        window.location.href = "/index.html";
      }, 2000);
    } else {
      messageDiv.textContent = "Invalid email or password.";
    }
  });
});
