// Admin Add Class Page
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
    const form = document.getElementById('addClassForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const newClass = {
            classID: formData.get('classID'),
            semester: formData.get('semester'),
            academicYear: formData.get('academicYear'),
            subject: formData.get('subject')
        };

        // In a real application, this would send data to a server
        
        // Show success message and redirect
        alert('Class added successfully!');
        window.location.href = 'dashboard.html';
    });
});
