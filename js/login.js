// Wait for the DOM to load completely
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector(".login-container form");
  const usernameInput = document.querySelector(".login-container input[type='text']");
  const passwordInput = document.querySelector(".login-container input[type='password']");
  const errorMessage = document.querySelector(".login-container .error-message");

  // Simulated user credentials (this could be replaced with API validation)
  const validCredentials = {
    username: "admin",  // Replace with your desired username
    password: "password123"  // Replace with your desired password
  };

  // Function to handle form submission
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from refreshing the page

    // Clear any previous error message
    errorMessage.style.display = "none";

    // Get input values
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Basic validation check
    if (username === "" || password === "") {
      displayError("Please fill in both fields.");
      return;
    }

    // Simulate a login check (replace with actual authentication logic)
    if (username === validCredentials.username && password === validCredentials.password) {
      // On successful login, redirect to dashboard or another page
      window.location.href = "dashboard.html";  // Adjust this to your actual dashboard URL
    } else {
      // On failed login, display an error message
      displayError("Invalid username or password.");
    }
  });

  // Function to display error message
  function displayError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
  }
});
