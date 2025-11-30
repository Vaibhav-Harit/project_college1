// Login form validation
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const message = document.getElementById('message');

            if (username === 'admin' && password === 'password') {
                message.textContent = 'Login successful! Redirecting...';
                message.style.color = 'green';
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1000);
            } else {
                message.textContent = 'Invalid username or password.';
                message.style.color = 'red';
            }
        });
    }

    // Contact form validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
});
