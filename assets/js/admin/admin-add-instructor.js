// Admin Add Instructor Page
document.addEventListener('DOMContentLoaded', function() {
    // Check authentication
    if (sessionStorage.getItem('adminLoggedIn') !== 'true') {
        window.location.href = 'login.html';
        return;
    }

    // Set username in header
    const username = sessionStorage.getItem('adminUser') || 'Admin';
    document.getElementById('adminUsername').textContent = username;

    // Tab switching
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            
            // Remove active class from all tabs and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            document.getElementById(tabName + 'Tab').classList.add('active');
        });
    });

    // Photo upload
    const uploadBtn = document.getElementById('uploadPhotoBtn');
    const photoInput = document.getElementById('photoInput');
    const previewImage = document.getElementById('previewImage');
    const photoPreview = document.getElementById('photoPreview');

    uploadBtn.addEventListener('click', function() {
        photoInput.click();
    });

    photoInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                previewImage.src = e.target.result;
                previewImage.style.display = 'block';
                photoPreview.style.background = 'none';
            };
            reader.readAsDataURL(file);
        }
    });

    // Handle form submission
    const form = document.getElementById('instructorForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        
        // Collect class data
        const classIDs = formData.getAll('classID[]').filter(val => val.trim() !== '');
        const schedules = formData.getAll('schedule[]').filter(val => val.trim() !== '');
        const rooms = formData.getAll('room[]').filter(val => val.trim() !== '');
        
        const instructorData = {
            lastName: formData.get('lastName'),
            firstName: formData.get('firstName'),
            middleName: formData.get('middleName'),
            department: formData.get('department'),
            college: formData.get('college'),
            position: formData.get('position'),
            profession: formData.get('profession'),
            subjects: formData.get('subjects'),
            communication: formData.get('communication'),
            classes: classIDs.map((id, index) => ({
                classID: id,
                schedule: schedules[index] || '',
                room: rooms[index] || ''
            }))
        };

        // In a real application, this would send data to a server
        
        // Show success message and redirect
        alert('Instructor added successfully!');
        window.location.href = 'dashboard.html';
    });

    // Add achievement button (placeholder)
    document.querySelector('.add-achievement-btn').addEventListener('click', function() {
        alert('Add achievement functionality - would open a modal or expand form');
    });

    // Add subject button (placeholder)
    document.querySelector('.add-subject-btn').addEventListener('click', function() {
        alert('Add subject functionality - would open a modal or expand form');
    });
});
