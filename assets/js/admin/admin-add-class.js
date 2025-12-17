document.addEventListener('DOMContentLoaded', function() {
    if (sessionStorage.getItem('adminLoggedIn') !== 'true') {
        window.location.href = '../login.html';
        return;
    }

    const username = sessionStorage.getItem('adminUser') || 'Admin';
    document.getElementById('adminUsername').textContent = username;

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

        alert('Class added successfully!');
        window.location.href = '../dashboard.html';
    });
});
