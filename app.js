"use strict";

// Get form and input elements
const formEl = document.getElementById("form");
const usernameEl = document.getElementById("username");
const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");
const passwordTwoEl = document.getElementById("passwordTwo");

// Function to display error message
function showErrorMessage(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.textContent = message;
}

// Function to display success message
function showSuccessMessage(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// Function to check if required fields are filled
function checkRequired(inputElArry) {
  inputElArry.forEach(function (inputEl) {
    if (inputEl.value.trim() === "") {
      showErrorMessage(inputEl, `${getFieldName(inputEl)} field is required`);
    } else {
      showSuccessMessage(inputEl);
    }
  });
}

// Function to get formatted field name
function getFieldName(inputEl) {
  return inputEl.id.charAt(0).toUpperCase() + inputEl.id.slice(1);
}

// Function to check email validity
function checkEmail(inputEl) {
  const re = /\S+@\S+\.\S+/;
  if (re.test(inputEl.value.trim())) {
    showSuccessMessage(inputEl);
  } else {
    showErrorMessage(inputEl, "Email is not valid");
  }
}

// Function to check input length
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

// Function to check if passwords match
function checkPassword(input1, input2) {
  if (input1.value !== input2.value) {
    showErrorMessage(input2, "Passwords do not match");
  }
}

// Add form submit event listener
formEl.addEventListener("submit", function (e) {
  // Prevent default form behavior
  e.preventDefault();

  // Perform form validation checks
  checkRequired([usernameEl, emailEl, passwordEl, passwordTwoEl]);
  checkLength(usernameEl, 3, 20);
  checkLength(passwordEl, 5, 25);
  checkEmail(emailEl);
  checkPassword(passwordEl, passwordTwoEl);
});
