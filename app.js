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

function checkEmail(inputEl) {
  const re = /\S+@\S+\.\S+/;
  if (re.test(inputEl.value.trim())) {
    showSuccessMessage();
  } else {
    showErrorMessage(inputEl, "Email is not valid");
  }
}

function checkLength(inputEl, min, max) {
  if (inputEl.value.length < min) {
    showErrorMessage(
      inputEl,
      `${getFieldName(inputEl)} must be at least ${min} characters`
    );
  } else if (inputEl.value.length > max) {
    showErrorMessage(
      inputEl,
      `${getFieldName(inputEl)} must be at most ${max} characters`
    );
  } else {
    showSuccessMessage(inputEl);
  }
}

function checkPassword(input1, input2) {
  if (input1.value !== input2.value) {
    showErrorMessage(input2, "Passwords do not match");
  }
}

formEl.addEventListener("submit", function (e) {
  // prevent default form behaviour
  e.preventDefault();

  checkRequired([usernameEl, emailEl, passwordEl, passwordTwoEl]);
  checkLength(usernameEl, 3, 20);
  checkLength(passwordEl, 5, 25);
  checkEmail(emailEl);
  checkPassword(passwordEl, passwordTwoEl);
});
