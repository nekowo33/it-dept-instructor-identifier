// Admin View Instructor Detail Page
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
    const tabBtns = document.querySelectorAll('.detail-tab-btn');
    const tabContents = document.querySelectorAll('.detail-tab-content');

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

    // Button placeholders
    document.querySelector('.btn-change-photo')?.addEventListener('click', function() {
        alert('Change photo functionality - would open file picker');
    });

    document.querySelector('.btn-edit-details')?.addEventListener('click', function() {
        // Get instructor ID from current URL
        const currentPath = window.location.pathname;
        const filename = currentPath.split('/').pop();
        const instructorId = filename.replace('instructor-', '').replace('.html', '');
        
        // Store return URL in sessionStorage
        sessionStorage.setItem('editInstructorReturnUrl', `../instructors/${filename}`);
        
        // Navigate to edit page
        window.location.href = `../pages/edit-instructor.html?id=${instructorId}`;
    });
});
