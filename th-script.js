
const checkbox = document.getElementById("agree-checkbox");
const registerButton = document.getElementById("register-button");

checkbox.addEventListener("change", function () {
  if (this.checked) {
    registerButton.disabled = false;
  } else {
    registerButton.disabled = true;
  }
});

registerButton.addEventListener("click", function () {
  window.location.href = "register.html";
});
