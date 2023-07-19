// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
const form = document.querySelector('form');
const nameInput = document.querySelector('input[type="text"]');
const emailInput = document.querySelector('input[type="email"]');
const messageInput = document.querySelector('textarea');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Perform form validation here if needed

    // Simulate form submission
    const formData = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value
    };

    // Replace the alert with your preferred form submission method (e.g., AJAX)
    alert('Form submitted!\n\n' +
        'Name: ' + formData.name + '\n' +
        'Email: ' + formData.email + '\n' +
        'Message: ' + formData.message);

    // Reset form fields
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
});
