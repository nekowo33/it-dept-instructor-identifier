// Admin View Subjects Page
document.addEventListener('DOMContentLoaded', function() {
    // Check authentication
    if (sessionStorage.getItem('adminLoggedIn') !== 'true') {
        window.location.href = '../login.html';
        return;
    }

    // Set username in header
    const username = sessionStorage.getItem('adminUser') || 'Admin';
    document.getElementById('adminUsername').textContent = username;

    // Subjects data (same as in admin-dashboard.js)
    const subjectsData = [
        { id: 1, code: 'CAP101', name: 'Capstone Project 1', yearLevel: '3rd Year' },
        { id: 2, code: 'CAP102', name: 'Capstone Project 2', yearLevel: '4th Year' },
        { id: 3, code: 'CC101', name: 'Introduction to Computing', yearLevel: '1st Year' },
        { id: 4, code: 'CC102', name: 'Computer Programming 1', yearLevel: '1st Year' },
        { id: 5, code: 'CC103', name: 'Computer Programming 2', yearLevel: '1st Year' },
        { id: 6, code: 'CC105', name: 'Information Management', yearLevel: '2nd Year' },
        { id: 7, code: 'CC106', name: 'Application Development and Emerging Technologies', yearLevel: '4th Year' },
        { id: 8, code: 'HCI101', name: 'Introduction to Human Computer Interaction', yearLevel: '1st Year' },
        { id: 9, code: 'HCI102', name: 'Human Computer Interaction 2', yearLevel: '2nd Year' },
        { id: 10, code: 'IAS101', name: 'Information Assurance and Security 1', yearLevel: '3rd Year' },
        { id: 11, code: 'IAS102', name: 'Information Assurance and Security 2', yearLevel: '4th Year' },
        { id: 12, code: 'IM101', name: 'Fundamental of Database', yearLevel: '3rd Year' },
        { id: 13, code: 'IPT101', name: 'Integrative Programming and Technologies 1', yearLevel: '3rd Year' },
        { id: 14, code: 'IPT102', name: 'Integrative Programming and Technologies 2', yearLevel: '3rd Year' },
        { id: 15, code: 'IT101', name: 'Computer Bookkeeping and Accounting', yearLevel: '1st Year' },
        { id: 16, code: 'IT102', name: 'Mobile Application Development', yearLevel: '3rd Year' },
        { id: 17, code: 'ITP101', name: 'IT Professional Ethics', yearLevel: '2nd Year' },
        { id: 18, code: 'ITP102', name: 'Integrative Programming and Technologies 1', yearLevel: '3rd Year' },
        { id: 19, code: 'ITS101', name: 'IT Service Management', yearLevel: '3rd Year' },
        { id: 20, code: 'NET101', name: 'Networking 1', yearLevel: '2nd Year' },
        { id: 21, code: 'NET102', name: 'Networking 2', yearLevel: '3rd Year' },
        { id: 22, code: 'OS101', name: 'Operating System', yearLevel: '4th Year' },
        { id: 23, code: 'PF101', name: 'Object Oriented Programming', yearLevel: '2nd Year' },
        { id: 24, code: 'PT101', name: 'Platform Technologies', yearLevel: '2nd Year' },
        { id: 25, code: 'SA101', name: 'System Administration and Maintenance', yearLevel: '4th Year' },
        { id: 26, code: 'SA102', name: 'System Integration and Architecture 2', yearLevel: '3rd Year' },
        { id: 27, code: 'SIA101', name: 'System Integration and Architecture 1', yearLevel: '3rd Year' },
        { id: 28, code: 'WS101', name: 'Web Systems and Technologies', yearLevel: '3rd Year' }
    ];

    // Render subjects grid
    function renderSubjects(subjects) {
        const grid = document.getElementById('subjectsGrid');
        
        if (subjects.length === 0) {
            grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px; color: #666;">No subjects found</p>';
            return;
        }

        grid.innerHTML = subjects.map(subject => {
            return `
                <div class="subject-card">
                    <div class="subject-code">${subject.code}</div>
                    <div class="subject-name">${subject.name}</div>
                </div>
            `;
        }).join('');
    }

    // Search functionality
    const searchInput = document.getElementById('subjectSearch');
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase().trim();
        
        if (searchTerm === '') {
            renderSubjects(subjectsData);
            return;
        }

        const filtered = subjectsData.filter(subject => 
            subject.code.toLowerCase().includes(searchTerm) ||
            subject.name.toLowerCase().includes(searchTerm) ||
            subject.yearLevel.toLowerCase().includes(searchTerm)
        );

        renderSubjects(filtered);
    });

    // Initial render
    renderSubjects(subjectsData);
});
