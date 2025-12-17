document.addEventListener('DOMContentLoaded', function() {
    if (sessionStorage.getItem('adminLoggedIn') !== 'true') {
        window.location.href = '../login.html';
        return;
    }

    const username = sessionStorage.getItem('adminUser') || 'Admin';
    document.getElementById('adminUsername').textContent = username;

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

        alert('Subject added successfully!');
        window.location.href = '../dashboard.html';
    });
});
