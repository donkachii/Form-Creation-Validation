document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;
    let messages = [];

    if (username.length < 3) {
      isValid == false;
      messages.push("Your Username mush be exactly or more than 3 characters");
    } else if (!email.includes("@") && !email.includes(".")) {
      isValid == false;
      messages.push("Your email is incorrectly formatted.");
    } else if (password.length < 8) {
      isValid == false;
      messages.push("Your password mush be exactly or more than 8 characters");
    }

    feedbackDiv.style.display = "block";
    if (isValid === true) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745";
    } else {
      feedbackDiv.textContent = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545";
    }
  });
});
