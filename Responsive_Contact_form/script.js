document.getElementById('contactForm').addEventListener('submit', function(event) {
    var isValid = true;

    // First Name validation
    var firstName = document.getElementById('firstName1');
    var firstNameError = document.getElementById('firstNameError');
    if (!firstName.value.trim()) {
        firstNameError.textContent = 'This field is required.';
        isValid = false;
    } else {
        firstNameError.textContent = '';
    }

    // Last Name validation
    var lastName = document.getElementById('lastName1');
    var lastNameError = document.getElementById('lastNameError');
    if (!lastName.value.trim()) {
        lastNameError.textContent = 'This field is required.';
        isValid = false;
    } else {
        lastNameError.textContent = '';
    }

    // Email validation
    var email = document.getElementById('email');
    var emailError = document.getElementById('emailError');
    if (!email.value.trim()) {
        emailError.textContent = 'Please enter a vaild email address';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    // Query Type validation
    var queryTypeError = document.getElementById('queryTypeError');
    if (!document.querySelector('input[name="queryType"]:checked')) {
        queryTypeError.textContent = 'Please select a query type.';
        isValid = false;
    } else {
        queryTypeError.textContent = '';
    }

    // Message validation
    var message = document.getElementById('message');
    var messageError = document.getElementById('messageError');
    if (!message.value.trim()) {
        messageError.textContent = 'This field is required.';
        isValid = false;
    } else {
        messageError.textContent = '';
    }

    // Agree Terms validation
    var agreeTerms = document.getElementById('agreeTerms');
    var agreeTermsError = document.getElementById('agreeTermsError');
    if (!agreeTerms.checked) {
        agreeTermsError.textContent = 'You must agree to the terms and conditions.';
        isValid = false;
    } else {
        agreeTermsError.textContent = '';
    }

    // Prevent form submission if any field is invalid
    if (!isValid) {
        event.preventDefault();
    }
});