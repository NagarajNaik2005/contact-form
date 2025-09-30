// Select form and input elements
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const successMsg = document.getElementById('successMsg');

// Email regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent actual form submission

    // Reset previous errors
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    successMsg.textContent = '';

    let valid = true;

    // Validate Name
    if(nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required';
        valid = false;
    }

    // Validate Email
    if(emailInput.value.trim() === '') {
        emailError.textContent = 'Email is required';
        valid = false;
    } else if(!emailRegex.test(emailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid email';
        valid = false;
    }

    // Validate Message
    if(messageInput.value.trim() === '') {
        messageError.textContent = 'Message is required';
        valid = false;
    }

    // If valid, show success message
    if(valid) {
        successMsg.textContent = 'Form submitted successfully!';
        form.reset(); // Clear form fields
    }
});
