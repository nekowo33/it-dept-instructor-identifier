
document.addEventListener('DOMContentLoaded', function() {
    if (sessionStorage.getItem('adminLoggedIn') !== 'true') {
        window.location.href = 'login.html';
        return;
    }

    const username = sessionStorage.getItem('adminUser') || 'Admin';
    document.getElementById('adminUsername').textContent = username;

    // instructors list
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
        
        // close other lists first
        document.querySelectorAll('.expandable-list').forEach(list => {
            list.classList.remove('expanded');
        });
        document.querySelectorAll('.view-card').forEach(btn => {
            btn.classList.remove('active');
        });

        if (!isExpanded) {
            listElement.classList.add('expanded');
            buttonElement.classList.add('active');
        }
    }

    
    
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

    document.getElementById('viewMoreInstructors').addEventListener('click', function() {
        window.location.href = 'pages/view-instructors.html';
    });

    
    
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

    document.getElementById('viewMoreSubjects').addEventListener('click', function() {
        window.location.href = 'pages/view-subjects.html';
    });

    // class ids list
    function renderClassIDsList(limit = 8) {
        const listItems = document.getElementById('classIDsListItems');
        const displayData = classIDsData.slice(0, limit);
        
        listItems.innerHTML = displayData.map(cls => `
            <li>
                <span>${cls.classID} - ${cls.instructor}</span>
            </li>
        `).join('');
    }

    document.getElementById('addClassIDBtn').addEventListener('click', function() {
        window.location.href = 'pages/add-class.html';
    });

    document.getElementById('viewMoreClassIDs').addEventListener('click', function() {
        window.location.href = 'pages/view-classids.html';
    });

    // render all lists on page load
    renderInstructorsList();
    renderSubjectsList();
    renderClassIDsList();

    // logout
    document.getElementById('logoutBtn').addEventListener('click', function() {
        sessionStorage.removeItem('adminLoggedIn');
        sessionStorage.removeItem('adminUser');
        window.location.href = 'login.html';
    });
});