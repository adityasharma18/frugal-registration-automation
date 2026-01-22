const form = document.getElementById("registrationForm");
const submitBtn = form.querySelector("button");

form.addEventListener("input", validateForm);

function showError(inputId, errorId, message) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    input.classList.add("invalid");
    error.innerText = message;
}

function clearError(inputId, errorId) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    input.classList.remove("invalid");
    error.innerText = "";
}

function validateForm() {
    let isValid = true;

    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const gender = document.querySelector('input[name="gender"]:checked');
    const terms = document.getElementById("terms").checked;

    // Clear all previous errors
    clearError("firstName", "firstNameError");
    clearError("lastName", "lastNameError");
    clearError("email", "emailError");
    clearError("phone", "phoneError");
    clearError("password", "passwordError");
    clearError("confirmPassword", "confirmPasswordError");

    if (!firstName.value.trim()) {
        showError("firstName", "firstNameError", "First Name is required");
        isValid = false;
    }

    if (!lastName.value.trim()) {
        showError("lastName", "lastNameError", "Last Name is required");
        isValid = false;
    }

    if (!email.value.trim()) {
        showError("email", "emailError", "Email is required");
        isValid = false;
    }

    if (!phone.value.trim()) {
        showError("phone", "phoneError", "Phone Number is required");
        isValid = false;
    }

    if (!password.value) {
        showError("password", "passwordError", "Password is required");
        isValid = false;
    }

    if (password.value !== confirmPassword.value) {
        showError("confirmPassword", "confirmPasswordError", "Passwords do not match");
        isValid = false;
    }

    if (!gender || !terms) {
        isValid = false;
    }

    submitBtn.disabled = !isValid;
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Registration Successful!");
    form.reset();
    submitBtn.disabled = true;
});
