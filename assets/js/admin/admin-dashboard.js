// Admin Dashboard Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check authentication
    if (sessionStorage.getItem('adminLoggedIn') !== 'true') {
        window.location.href = 'login.html';
        return;
    }

    // Set username in header
    const username = sessionStorage.getItem('adminUser') || 'Admin';
    document.getElementById('adminUsername').textContent = username;

    // Data storage (in production, this would be a database)
    let instructorsData = [
        { id: 1, name: 'Abuke, Mar Riel', initials: 'MRA', placeholder: 'B.PTL1', email: 'abuke.m@uep.edu.ph' },
        { id: 2, name: 'Acebuche, Nikka', initials: 'NA', placeholder: 'B.PTL3', email: 'acebuche.n@uep.edu.ph' },
        { id: 3, name: 'Alig, Kristel Jean', initials: 'KJA', placeholder: 'B.PTL7', email: 'alig.k@uep.edu.ph' },
        { id: 4, name: 'Benesisto, Rogelio', initials: 'RB', placeholder: 'R. BENESISTO', email: 'benesisto.r@uep.edu.ph' },
        { id: 5, name: 'Cerbito, Rhea', initials: 'RC', placeholder: 'R. CERBITO', email: 'cerbito.r@uep.edu.ph' },
        { id: 6, name: 'Chan, Celeste', initials: 'CC', placeholder: 'C. CHAN', email: 'chan.c@uep.edu.ph' },
        { id: 7, name: 'Ching, Jose', initials: 'JC', placeholder: 'J. CHING', email: 'ching.j@uep.edu.ph' },
        { id: 8, name: 'Custorio, Jomei Andrew', initials: 'JAC', placeholder: 'B.PTL4', email: 'custorio.j@uep.edu.ph' },
        { id: 9, name: 'Demeterio, Jomar', initials: 'JD', placeholder: 'B.PTL8', email: 'demeterio.j@uep.edu.ph' },
        { id: 10, name: 'Deronia, Merry Jean', initials: 'MJD', placeholder: 'B.PTL13', email: 'deronia.m@uep.edu.ph' },
        { id: 11, name: 'Echaluche, Tomas Paolo', initials: 'TPE', placeholder: 'B.PTL2', email: 'echaluche.t@uep.edu.ph' },
        { id: 12, name: 'Edralin, Ralph Michael', initials: 'RME', placeholder: 'B.PTL10', email: 'edralin.r@uep.edu.ph' },
        { id: 13, name: 'Entico, Christy', initials: 'CE', placeholder: 'C. ENTICO', email: 'entico.c@uep.edu.ph' },
        { id: 14, name: 'Entico, Danny Gem', initials: 'DGE', placeholder: 'D. ENTICO', email: 'entico.d@uep.edu.ph' },
        { id: 15, name: 'Galing, Jonathan', initials: 'JG', placeholder: 'B.PTL6', email: 'galing.j@uep.edu.ph' },
        { id: 16, name: 'Gatongay, Riva', initials: 'RG', placeholder: 'R. GATONGAY', email: 'gatongay.r@uep.edu.ph' },
        { id: 17, name: 'Masloc, Danilo Isagani', initials: 'DIM', placeholder: 'D. MASLOC', email: 'masloc.d@uep.edu.ph' },
        { id: 18, name: 'Naza, Mark Niko', initials: 'MNN', placeholder: 'B.PTL12', email: 'naza.m@uep.edu.ph' },
        { id: 19, name: 'Noora, Vince Carlo', initials: 'VCN', placeholder: 'B.PTL16', email: 'noora.v@uep.edu.ph' },
        { id: 20, name: 'Obieta, Antoine Jusherand', initials: 'AJO', placeholder: 'B.PTL14', email: 'obieta.a@uep.edu.ph' },
        { id: 21, name: 'Ortiz, Kacie', initials: 'KO', placeholder: 'B.PTL9', email: 'ortiz.k@uep.edu.ph' },
        { id: 22, name: 'Resuello, Jenny', initials: 'JR', placeholder: 'J. RESUELLO', email: 'resuello.j@uep.edu.ph' },
        { id: 23, name: 'Resuello, Maximo', initials: 'MR', placeholder: 'M. RESUELLO', email: 'resuello.m@uep.edu.ph' },
        { id: 24, name: 'Sabayo, Dinah Grace', initials: 'DGS', placeholder: 'B.PTL5', email: 'sabayo.d@uep.edu.ph' },
        { id: 25, name: 'Santos, Emmanuel', initials: 'ES', placeholder: 'E. SANTOS', email: 'santos.e@uep.edu.ph' },
        { id: 26, name: 'Zabala, Jerald', initials: 'JZ', placeholder: 'B.PTL11', email: 'zabala.j@uep.edu.ph' }
    ];

    let subjectsData = [
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

    let classIDsData = [
        { id: 1, classID: '0011860', instructor: 'Chan, Celeste', subject: 'CAP102A', schedule: 'MonWed 11:00-12:30', room: 'TBA' },
        { id: 2, classID: '0011861', instructor: 'Chan, Celeste', subject: 'CAP102B', schedule: 'TueThu 7:00-8:30', room: 'TBA' },
        { id: 3, classID: '0011872', instructor: 'Gatongay, Riva', subject: 'CAP1024c', schedule: 'TueThu 7:00-8:30', room: 'TBA' },
        { id: 4, classID: '0011880', instructor: 'Sabayo, Dinah Grace', subject: 'CC101a', schedule: 'MonWed 7:00-10:00, TueThu 11:30-1:00', room: 'TBA' },
        { id: 5, classID: '0011885', instructor: 'Ortiz, Kacie', subject: 'CC101f', schedule: 'Fri 4:00-7:00, TueThu 10:00-11:00', room: 'TBA' },
        { id: 6, classID: '0011890', instructor: 'Benesisto, Rogelio', subject: 'CC101a', schedule: 'MonWed 9:00-10:00, TueThu 10:30-11:30', room: 'TBA' },
        { id: 7, classID: '0011891', instructor: 'Benesisto, Rogelio', subject: 'CC101b', schedule: 'MonWed 10:00-11:00, TueThu 8:30-10:00', room: 'TBA' },
        { id: 8, classID: '0011894', instructor: 'Galing, Jonathan', subject: 'CC102e', schedule: 'MonWed 1:00-2:00, TueThu 10:00-11:30', room: 'TBA' },
        { id: 9, classID: '0011910', instructor: 'Abuke, Mar Riel', subject: 'CC104a', schedule: 'Mon 1:00-4:00, TueThu 1:00-2:00', room: 'TBA' },
        { id: 10, classID: '0011911', instructor: 'Abuke, Mar Riel', subject: 'CC104b', schedule: 'Wed 1:00-4:00, TueThu 2:00-3:00', room: 'TBA' },
        { id: 11, classID: '0011912', instructor: 'Abuke, Mar Riel', subject: 'CC104c', schedule: 'Mon 7:00-10:00, TueThu 7:00-8:00', room: 'TBA' },
        { id: 12, classID: '0011913', instructor: 'Noora, Vince Carlo', subject: 'CC104d', schedule: 'Wed 7:00-10:00, TueThu 8:00-9:00', room: 'TBA' },
        { id: 13, classID: '0011930', instructor: 'Santos, Emmanuel', subject: 'CC106a', schedule: 'Mon 1:00-4:00, TueThu 10:00-11:00', room: 'TBA' },
        { id: 14, classID: '0012080', instructor: 'Acebuche, Nikka', subject: 'HCI102a', schedule: 'Fri 7:00-10:00, MonWed 7:00-8:00', room: 'TBA' },
        { id: 15, classID: '0012081', instructor: 'Acebuche, Nikka', subject: 'HCI102b', schedule: 'Fri 7:00-10:00, MonWed 7:00-8:00', room: 'TBA' },
        { id: 16, classID: '0012085', instructor: 'Zabala, Jerald', subject: 'HCI102f', schedule: 'Thu 4:00-7:00, MonWed 2:00-3:00', room: 'TBA' },
        { id: 17, classID: '0012120', instructor: 'Custorio, Jomei Andrew', subject: 'IPT101a', schedule: 'Fri 7:00-10:00, MonWed 2:00-3:00', room: 'TBA' },
        { id: 18, classID: '0012140', instructor: 'Ching, Jose', subject: 'IT101a', schedule: 'TueThu 8:30-10:00', room: 'TBA' },
        { id: 19, classID: '0012141', instructor: 'Ching, Jose', subject: 'IT101b', schedule: 'TueThu 10:00-11:30', room: 'TBA' },
        { id: 20, classID: '0012150', instructor: 'Resuello, Maximo', subject: 'IT102a', schedule: 'MonWed 9:00-10:00, TueThu 8:30-10:00', room: 'TBA' },
        { id: 21, classID: '0012164', instructor: 'Entico, Christy', subject: 'ITP102e', schedule: 'TueThu 1:00-2:00', room: 'TBA' },
        { id: 22, classID: '0012220', instructor: 'Entico, Danny Gem', subject: 'NET102a', schedule: 'TueThu 11:30-1:00, MonWed 7:00-8:00', room: 'TBA' },
        { id: 23, classID: '0012250', instructor: 'Demeterio, Jomar', subject: 'OS101a', schedule: 'Fri 4:00-7:00, TueThu 9:00-10:00', room: 'TBA' },
        { id: 24, classID: '0012300', instructor: 'Resuello, Jenny', subject: 'PF101a', schedule: 'MonWed 8:00-9:00, TueThu 7:00-8:30', room: 'TBA' },
        { id: 25, classID: '0012305', instructor: 'Naza, Mark Niko', subject: 'PF101f', schedule: 'MonWed 10:00-11:00, TueThu 11:30-1:00', room: 'TBA' },
        { id: 26, classID: '0012325', instructor: 'Deronia, Merry Jean', subject: 'PT101f', schedule: 'Mon 7:00-10:00, TueThu 9:00-10:00', room: 'TBA' },
        { id: 27, classID: '0012330', instructor: 'Cerbito, Rhea', subject: 'SA101A', schedule: 'MonWed 9:00-10:00, Tue 7:00-10:00', room: 'TBA' },
        { id: 28, classID: '0012350', instructor: 'Edralin, Ralph Michael', subject: 'SIA101a', schedule: 'Mon 4:00-7:00, TueThu 2:00-3:00', room: 'TBA' },
        { id: 29, classID: '0012390', instructor: 'Echaluche, Tomas Paolo', subject: 'WS101a', schedule: 'Fri 10:00-1:00, MonWed 3:00-4:00', room: 'TBA' },
        { id: 30, classID: '0012620', instructor: 'Masloc, Danilo Isagani', subject: 'IM101a', schedule: 'TueThu 1:00-2:00, Mon 10:00-1:00', room: 'TBA' },
        { id: 31, classID: '2460050', instructor: 'Obieta, Antoine Jusherand', subject: 'ES 112eA', schedule: 'Mon 1:00-4:00, Wed 1:00-4:00', room: 'TBA' }
    ];

    // Modal functionality
    const modal = document.getElementById('modal');
    const modalClose = document.querySelector('.modal-close');

    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    function openModal(content) {
        document.getElementById('modalBody').innerHTML = content;
        modal.classList.add('show');
    }

    function closeModal() {
        modal.classList.remove('show');
        document.getElementById('modalBody').innerHTML = '';
    }

    window.closeModal = closeModal;

    // ==================== EXPANDABLE LISTS ====================
    
    const viewInstructorsBtn = document.getElementById('viewInstructorsBtn');
    const viewSubjectsBtn = document.getElementById('viewSubjectsBtn');
    const viewClassIDsBtn = document.getElementById('viewClassIDsBtn');

    const instructorsList = document.getElementById('instructorsList');
    const subjectsList = document.getElementById('subjectsList');
    const classIDsList = document.getElementById('classIDsList');

    viewInstructorsBtn.addEventListener('click', function() {
        toggleList(instructorsList, viewInstructorsBtn);
    });

    viewSubjectsBtn.addEventListener('click', function() {
        toggleList(subjectsList, viewSubjectsBtn);
    });

    viewClassIDsBtn.addEventListener('click', function() {
        toggleList(classIDsList, viewClassIDsBtn);
    });

    function toggleList(listElement, buttonElement) {
        const isExpanded = listElement.classList.contains('expanded');
        
        // Close all lists
        document.querySelectorAll('.expandable-list').forEach(list => {
            list.classList.remove('expanded');
        });
        document.querySelectorAll('.view-card').forEach(btn => {
            btn.classList.remove('active');
        });

        // Toggle current list
        if (!isExpanded) {
            listElement.classList.add('expanded');
            buttonElement.classList.add('active');
        }
    }

    // ==================== INSTRUCTORS SECTION ====================
    
    function renderInstructorsList(limit = 8) {
        const listItems = document.getElementById('instructorsListItems');
        const displayData = instructorsData.slice(0, limit);
        
        listItems.innerHTML = displayData.map(inst => `
            <li>
                <span>${inst.name}</span>
            </li>
        `).join('');
    }

    document.getElementById('addInstructorBtn').addEventListener('click', function() {
        window.location.href = 'pages/add-instructor.html';
    });

    window.editInstructor = function(id) {
        const instructor = instructorsData.find(i => i.id === id);
        if (!instructor) return;

        const formHtml = `
            <h2>Edit Instructor</h2>
            <form class="modal-form" id="instructorEditForm">
                <div class="form-group">
                    <label class="form-label">Full Name</label>
                    <input type="text" name="name" class="form-input" value="${instructor.name}" required>
                </div>
                <div class="form-group">
                    <label class="form-label">Initials</label>
                    <input type="text" name="initials" class="form-input" value="${instructor.initials}" required>
                </div>
                <div class="form-group">
                    <label class="form-label">Placeholder Name</label>
                    <input type="text" name="placeholder" class="form-input" value="${instructor.placeholder}" required>
                </div>
                <div class="form-group">
                    <label class="form-label">Email</label>
                    <input type="email" name="email" class="form-input" value="${instructor.email}" required>
                </div>
                <div class="modal-form-actions">
                    <button type="button" class="btn-secondary" onclick="closeModal()">Cancel</button>
                    <button type="submit" class="btn-primary">Update Instructor</button>
                </div>
            </form>
        `;
        openModal(formHtml);

        document.getElementById('instructorEditForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            instructor.name = formData.get('name');
            instructor.initials = formData.get('initials');
            instructor.placeholder = formData.get('placeholder');
            instructor.email = formData.get('email');
            renderInstructorsList();
            closeModal();
        });
    };

    window.deleteInstructor = function(id) {
        if (confirm('Are you sure you want to delete this instructor?')) {
            instructorsData = instructorsData.filter(i => i.id !== id);
            renderInstructorsList();
        }
    };

    document.getElementById('viewMoreInstructors').addEventListener('click', function() {
        window.location.href = 'pages/view-instructors.html';
    });

    // ==================== SUBJECTS SECTION ====================
    
    function renderSubjectsList(limit = 8) {
        const listItems = document.getElementById('subjectsListItems');
        const displayData = subjectsData.slice(0, limit);
        
        listItems.innerHTML = displayData.map(subj => `
            <li>
                <span>${subj.code} - ${subj.name}</span>
            </li>
        `).join('');
    }

    document.getElementById('addSubjectBtn').addEventListener('click', function() {
        window.location.href = 'pages/add-subject.html';
    });

    window.editSubject = function(id) {
        const subject = subjectsData.find(s => s.id === id);
        if (!subject) return;

        const formHtml = `
            <h2>Edit Subject</h2>
            <form class="modal-form" id="subjectEditForm">
                <div class="form-group">
                    <label class="form-label">Subject Code</label>
                    <input type="text" name="code" class="form-input" value="${subject.code}" required>
                </div>
                <div class="form-group">
                    <label class="form-label">Subject Name</label>
                    <input type="text" name="name" class="form-input" value="${subject.name}" required>
                </div>
                <div class="form-group">
                    <label class="form-label">Year Level</label>
                    <select name="yearLevel" class="form-input" required>
                        <option value="1st Year" ${subject.yearLevel === '1st Year' ? 'selected' : ''}>1st Year</option>
                        <option value="2nd Year" ${subject.yearLevel === '2nd Year' ? 'selected' : ''}>2nd Year</option>
                        <option value="3rd Year" ${subject.yearLevel === '3rd Year' ? 'selected' : ''}>3rd Year</option>
                        <option value="4th Year" ${subject.yearLevel === '4th Year' ? 'selected' : ''}>4th Year</option>
                    </select>
                </div>
                <div class="modal-form-actions">
                    <button type="button" class="btn-secondary" onclick="closeModal()">Cancel</button>
                    <button type="submit" class="btn-primary">Update Subject</button>
                </div>
            </form>
        `;
        openModal(formHtml);

        document.getElementById('subjectEditForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            subject.code = formData.get('code');
            subject.name = formData.get('name');
            subject.yearLevel = formData.get('yearLevel');
            renderSubjectsList();
            closeModal();
        });
    };

    window.deleteSubject = function(id) {
        if (confirm('Are you sure you want to delete this subject?')) {
            subjectsData = subjectsData.filter(s => s.id !== id);
            renderSubjectsList();
        }
    };

    document.getElementById('viewMoreSubjects').addEventListener('click', function() {
        window.location.href = 'pages/view-subjects.html';
    });

    // ==================== CLASS IDs SECTION ====================
    
    function renderClassIDsList(limit = 8) {
        const listItems = document.getElementById('classIDsListItems');
        const displayData = classIDsData.slice(0, limit);
        
        listItems.innerHTML = displayData.map(cls => `
            <li>
                <span>${cls.classID}</span>
            </li>
        `).join('');
    }

    document.getElementById('addClassIDBtn').addEventListener('click', function() {
        window.location.href = 'pages/add-class.html';
    });

    window.editClassID = function(id) {
        const classID = classIDsData.find(c => c.id === id);
        if (!classID) return;

        const instructorOptions = instructorsData.map(i => 
            `<option value="${i.name}" ${i.name === classID.instructor ? 'selected' : ''}>${i.name}</option>`
        ).join('');
        
        const subjectOptions = subjectsData.map(s => 
            `<option value="${s.code}" ${s.code === classID.subject ? 'selected' : ''}>${s.code} - ${s.name}</option>`
        ).join('');

        const formHtml = `
            <h2>Edit Class ID</h2>
            <form class="modal-form" id="classIDEditForm">
                <div class="form-group">
                    <label class="form-label">Class ID</label>
                    <input type="text" name="classID" class="form-input" value="${classID.classID}" required>
                </div>
                <div class="form-group">
                    <label class="form-label">Instructor</label>
                    <select name="instructor" class="form-input" required>
                        ${instructorOptions}
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">Subject</label>
                    <select name="subject" class="form-input" required>
                        ${subjectOptions}
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">Schedule</label>
                    <input type="text" name="schedule" class="form-input" value="${classID.schedule}" required>
                </div>
                <div class="form-group">
                    <label class="form-label">Room</label>
                    <input type="text" name="room" class="form-input" value="${classID.room}" required>
                </div>
                <div class="modal-form-actions">
                    <button type="button" class="btn-secondary" onclick="closeModal()">Cancel</button>
                    <button type="submit" class="btn-primary">Update Class ID</button>
                </div>
            </form>
        `;
        openModal(formHtml);

        document.getElementById('classIDEditForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            classID.classID = formData.get('classID');
            classID.instructor = formData.get('instructor');
            classID.subject = formData.get('subject');
            classID.schedule = formData.get('schedule');
            classID.room = formData.get('room');
            renderClassIDsList();
            closeModal();
        });
    };

    window.deleteClassID = function(id) {
        if (confirm('Are you sure you want to delete this class ID?')) {
            classIDsData = classIDsData.filter(c => c.id !== id);
            renderClassIDsList();
        }
    };

    document.getElementById('viewMoreClassIDs').addEventListener('click', function() {
        window.location.href = 'pages/view-classids.html';
    });

    // Initial render
    renderInstructorsList();
    renderSubjectsList();
    renderClassIDsList();
});
