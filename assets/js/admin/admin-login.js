document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('adminLoginForm');
    const errorMessage = document.getElementById('errorMessage');

    const DEFAULT_USERNAME = 'admin';
    const DEFAULT_PASSWORD = 'admin123';

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;

        errorMessage.classList.remove('show');
        errorMessage.textContent = '';

        if (username === DEFAULT_USERNAME && password === DEFAULT_PASSWORD) {
            sessionStorage.setItem('adminLoggedIn', 'true');
            sessionStorage.setItem('adminUser', username);
            window.location.href = 'dashboard.html';
        } else {
            errorMessage.textContent = 'Invalid username or password';
            errorMessage.classList.add('show');
        }
    });

    if (sessionStorage.getItem('adminLoggedIn') === 'true') {
        window.location.href = 'dashboard.html';
    }
});
