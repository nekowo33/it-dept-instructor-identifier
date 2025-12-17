// Admin Add Subject Page
document.addEventListener('DOMContentLoaded', function() {
    // Check authentication
    if (sessionStorage.getItem('adminLoggedIn') !== 'true') {
        window.location.href = 'login.html';
        return;
    }

    // Set username in header
    const username = sessionStorage.getItem('adminUser') || 'Admin';
    document.getElementById('adminUsername').textContent = username;

    // Handle form submission
    const form = document.getElementById('addSubjectForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const newSubject = {
            code: formData.get('code'),
            name: formData.get('name'),
            units: formData.get('units'),
            category: formData.get('category')
        };

        // In a real application, this would send data to a server
        console.log('New Subject:', newSubject);
        
        // Show success message and redirect
        alert('Subject added successfully!');
        window.location.href = 'dashboard.html';
    });
});
