// Simple admin login handler
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('adminLoginForm');
    const errorMessage = document.getElementById('errorMessage');

    // Default credentials (in production, this would be handled server-side)
    const DEFAULT_USERNAME = 'admin';
    const DEFAULT_PASSWORD = 'admin123';

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;

        // Clear previous error
        errorMessage.classList.remove('show');
        errorMessage.textContent = '';

        // Validate credentials
        if (username === DEFAULT_USERNAME && password === DEFAULT_PASSWORD) {
            // Store session (in production, use proper authentication)
            sessionStorage.setItem('adminLoggedIn', 'true');
            sessionStorage.setItem('adminUser', username);
            
            // Redirect to dashboard
            window.location.href = 'dashboard.html';
        } else {
            // Show error
            errorMessage.textContent = 'Invalid username or password';
            errorMessage.classList.add('show');
        }
    });

    // Check if already logged in
    if (sessionStorage.getItem('adminLoggedIn') === 'true') {
        window.location.href = 'dashboard.html';
    }
});
