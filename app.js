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

function checkRequired(inputElArry) {
  inputElArry.forEach(function (inputEl) {
    if (inputEl.value.trim() === "") {
      showErrorMessage(inputEl, `${getFieldName(inputEl)} field is required`);
    } else {
      showSuccessMessage(inputEl);
    }
  });
}

function getFieldName(inputEl) {
  return inputEl.id.charAt(0).toUpperCase() + inputEl.id.slice(1);
}

function showSuccess() {}

formEl.addEventListener("submit", function (e) {
  // prevent default form behaviour
  e.preventDefault();

  checkRequired([usernameEl, emailEl, passwordEl, passwordTwoEl]);
});
