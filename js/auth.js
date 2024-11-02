document.addEventListener("DOMContentLoaded", () => {
  const logoutButton = document.getElementById("logout-button");
  const loginButton = document.getElementById("login-button");
  const registerButton = document.getElementById("register-button");

  if (localStorage.getItem("isLoggedIn")) {
    loginButton.style.display = "none";
    registerButton.style.display = "none";
    logoutButton.style.display = "inline";

    logoutButton.addEventListener("click", () => {
      localStorage.removeItem("isLoggedIn");
      alert("You have been logged out.");
      window.location.reload();
    });
  } else {
    logoutButton.style.display = "none";
  }
});
