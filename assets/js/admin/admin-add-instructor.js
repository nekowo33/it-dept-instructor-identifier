
document.addEventListener('DOMContentLoaded', function() {
    if (sessionStorage.getItem('adminLoggedIn') !== 'true') {
        window.location.href = '../login.html';
        return;
    }

    const username = sessionStorage.getItem('adminUser') || 'Admin';
    document.getElementById('adminUsername').textContent = username;

    // switching between tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            this.classList.add('active');
            document.getElementById(tabName + 'Tab').classList.add('active');
        });
    });

    // photo preview functionality
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

    const form = document.getElementById('instructorForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        
        
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

        alert('Instructor added successfully!');
        window.location.href = '../dashboard.html';
    });
});
