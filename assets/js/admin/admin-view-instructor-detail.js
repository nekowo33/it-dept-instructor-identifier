document.addEventListener('DOMContentLoaded', function() {
    if (sessionStorage.getItem('adminLoggedIn') !== 'true') {
        window.location.href = '../../login.html';
        return;
    }

    const username = sessionStorage.getItem('adminUser') || 'Admin';
    document.getElementById('adminUsername').textContent = username;

    const tabBtns = document.querySelectorAll('.detail-tab-btn');
    const tabContents = document.querySelectorAll('.detail-tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            this.classList.add('active');
            document.getElementById(tabName + 'Tab').classList.add('active');
        });
    });

    document.querySelector('.btn-edit-details')?.addEventListener('click', function() {
        const currentPath = window.location.pathname;
        const filename = currentPath.split('/').pop();
        const instructorId = filename.replace('instructor-', '').replace('.html', '');
        
        // Store return URL in sessionStorage
        sessionStorage.setItem('editInstructorReturnUrl', `../instructors/${filename}`);
        
        // Navigate to edit page
        window.location.href = `../pages/edit-instructor.html?id=${instructorId}`;
    });
});
