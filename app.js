"use strict";

const formEl = document.getElementById("form");
const usernameEl = document.getElementById("username");
const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");
const passwordTwoEl = document.getElementById("passwordTwo");

function showErrorMessage(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.textContent = message;
}

function showSuccessMessage(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function showSuccess() {}

formEl.addEventListener("submit", function (e) {
  // prevent default form behaviour
  e.preventDefault();

  if (usernameEl.value === "") {
    showErrorMessage(usernameEl, "Username is required");
  } else {
    showSuccessMessage(usernameEl);
  }

  if (emailEl.value === "") {
    showErrorMessage(emailEl, "Email is required");
  } else if (!validateEmail(emailEl.value)) {
    showErrorMessage(emailEl, "Email is unacceptable");
  } else {
    showSuccessMessage(emailEl);
  }

  if (passwordEl.value === "") {
    showErrorMessage(passwordEl, "Password is required");
  } else {
    showSuccessMessage(passwordEl);
  }

  if (passwordTwoEl.value === "") {
    showErrorMessage(passwordTwoEl, "Password is required");
  } else {
    showSuccessMessage(passwordTwoEl);
  }
});
