function toggleFaq(button) {
    const faqContent = button.nextElementSibling;  // Get the content div
    const toggleIcon = button.querySelector('#faq-toggle-icon');  // Get the icon span

    // Toggle the visibility of the FAQ content
    faqContent.classList.toggle('hidden');

    // Toggle the icon between "+" and "×"
    if (faqContent.classList.contains('hidden')) {
        toggleIcon.textContent = '+';  // If content is hidden, show "+"
    } else {
        toggleIcon.textContent = '×';  // If content is visible, show "×"
    }
}


document.addEventListener('DOMContentLoaded', function () {
    // Get all forms with a specific class
    const forms = document.querySelectorAll('.contactForm');

    // Loop through each form
    forms.forEach(function (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the default form submission

            // Get the email input within the current form
            const emailInput = form.querySelector('.emailInput');
            const email = emailInput ? emailInput.value : '';

            // Check if the email is not empty
            if (email) {
                alert('Thank you for submitting your email');
                form.reset(); // Reset the current form
            } else {
                alert('Please enter a valid email address');
            }
        });
    });
});
