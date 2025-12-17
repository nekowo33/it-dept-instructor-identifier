// Admin Edit Instructor Page

// Complete instructors data from profiles
const INSTRUCTORS_DATA = {
    'abuke-mar-riel': { firstName: 'Mar Riel', lastName: 'Abuke', position: 'Part-Time Lecturer', classes: [{ subject: 'CC104a', classID: '0011910', schedule: 'Mon 1:00 -- 4:00' }, { subject: '', classID: '', schedule: 'TueThurs 1:00 -- 2:00' }, { subject: 'CC104b', classID: '0011911', schedule: 'Wed 1:00 -- 4:00' }, { subject: '', classID: '', schedule: 'TueThurs 2:00 -- 3:00' }, { subject: 'CC104c', classID: '0011912', schedule: 'Mon 7:00 -- 10:00' }, { subject: '', classID: '', schedule: 'TueThurs 7:00 -- 8:00' }] },
    'acebuche-nikka': { firstName: 'Nikka', lastName: 'Acebuche', position: 'Part-Time Lecturer', classes: [{ subject: 'HCI102a', classID: '0012080', schedule: 'Fri 7:00 -- 10:00' }, { subject: '', classID: '', schedule: 'MonWed 7:00 -- 8:00' }, { subject: 'HCI102b', classID: '0012081', schedule: 'Fri 7:00 -- 10:00' }, { subject: '', classID: '', schedule: 'MonWed 7:00 -- 8:00' }, { subject: 'HCI102c', classID: '0012082', schedule: 'Fri 7:00 -- 10:00' }, { subject: '', classID: '', schedule: 'MonWed 7:00 -- 8:00' }, { subject: 'HCI102d', classID: '0012083', schedule: 'Fri 7:00 -- 10:00' }, { subject: '', classID: '', schedule: 'MonWed 7:00 -- 8:00' }, { subject: 'HCI102e', classID: '0012084', schedule: 'Fri 7:00 -- 10:00' }, { subject: '', classID: '', schedule: 'MonWed 7:00 -- 8:00' }] },
    'alig-kristel-jean': { firstName: 'Kristel Jean', lastName: 'Alig', position: 'Part-Time Lecturer', classes: [{ subject: 'PT101a', classID: '0012320', schedule: 'Wednesday 1:00 - 4:00 TueThurs 2:00 - 3:00' }, { subject: 'PT101b', classID: '0012321', schedule: 'Monday 1:00 - 4:00 TueThurs 1:00 - 2:00' }, { subject: 'PT101c', classID: '0012322', schedule: 'Monday 7:00 - 10:00 TueThurs 7:00 - 8:00' }, { subject: 'PT101d', classID: '0012323', schedule: 'Monday 7:00 - 10:00 TueThurs 7:00 - 8:00' }, { subject: 'PT101e', classID: '0012324', schedule: 'Monday 4:00 - 7:00 TueThurs 9:00 - 10:00' }] },
    'benesisto-rogelio': { firstName: 'Rogelio', lastName: 'Benesisto', position: 'Regular Faculty/Instructor', classes: [{ subject: 'CC101a', classID: '0011890', schedule: 'MonWed 9:00 -- 10:00' }, { subject: '', classID: '', schedule: 'TueThurs 10:30 -- 11:30' }, { subject: 'CC101b', classID: '0011891', schedule: 'MonWed 10:00 -- 11:00' }, { subject: '', classID: '', schedule: 'TueThurs 8:30 -- 10:00' }, { subject: 'CC101c', classID: '0011892', schedule: 'MonWed 1:00 -- 2:00' }, { subject: '', classID: '', schedule: 'TueThurs 1:00 -- 2:30' }, { subject: 'CC101d', classID: '0011893', schedule: 'MonWed 2:00 -- 3:00' }, { subject: '', classID: '', schedule: 'TueThurs 2:30 -- 4:00' }] },
    'cerbito-rhea': { firstName: 'Rhea', lastName: 'Cerbito', position: 'Student Services Coordinator', classes: [{ subject: 'SA101A', classID: '0012330', schedule: 'MonWed 9:00 -- 10:00' }, { subject: '', classID: '', schedule: 'Tue 7:00 -- 10:00' }, { subject: 'SA101B', classID: '0012331', schedule: 'MonWed 10:00 -- 11:00' }, { subject: '', classID: '', schedule: 'Thu 7:00 -- 10:00' }, { subject: 'SA101C', classID: '0012332', schedule: 'MonWed 1:00 -- 2:00' }, { subject: '', classID: '', schedule: 'Tue 10:00 -- 1:00' }, { subject: 'SA101D', classID: '0012333', schedule: 'MonWed 2:00 -- 3:00' }, { subject: '', classID: '', schedule: 'Thu 10:00 -- 1:00' }] },
    'chan-celeste': { firstName: 'Celeste', lastName: 'Chan', position: 'ICT Director', classes: [{ subject: 'CAP102A', classID: '0011860', schedule: 'MonWed 11:00 -- 12:30' }, { subject: 'CAP102B', classID: '0011861', schedule: 'TueThurs 7:00 -- 8:30' }] },
    'ching-jose': { firstName: 'Jose', lastName: 'Ching', position: 'Regular Faculty/Instructor', classes: [{ subject: 'IT101a', classID: '0012140', schedule: 'TueThurs 8:30 -- 10:00' }, { subject: 'IT101b', classID: '0012141', schedule: 'TueThurs 10:00 -- 11:30' }, { subject: 'IT101c', classID: '0012142', schedule: 'TueThurs 1:00 -- 2:30' }, { subject: 'IT101d', classID: '0012143', schedule: 'TueThurs 2:30 -- 4:00' }, { subject: 'IT101e', classID: '0012144', schedule: 'MonWedFri 2:00 -- 3:00' }, { subject: 'IT101f', classID: '0012145', schedule: 'MonWedFri 1:00 -- 2:00' }] },
    'custorio-jomei-andrew': { firstName: 'Jomei Andrew', lastName: 'Custorio', position: 'Part-Time Lecturer', classes: [{ subject: 'IAS102d', classID: '0012103', schedule: 'Tuesday 10:00 - 1:00 MonWed 11:00 - 12:00' }, { subject: 'IPT101a', classID: '0012120', schedule: 'Friday 7:00 - 10:00 MonWed 2:00 - 3:00' }, { subject: 'IPT101b', classID: '0012121', schedule: 'Friday 10:00 - 11:00 MonWed 2:00 - 3:00' }, { subject: 'IPT101c', classID: '0012122', schedule: 'Monday 7:00 - 10:00 TueThurs 8:00 - 9:00' }, { subject: 'IPT101d', classID: '0012123', schedule: 'Wednesday 7:00 - 10:00 TueThurs 9:00 - 10:00' }] },
    'demeterio-jomar': { firstName: 'Jomar', lastName: 'Demeterio', position: 'Part-Time Lecturer', classes: [{ subject: 'OS101a', classID: '0012250', schedule: 'Friday 4:00 - 7:00 TueThurs 9:00 - 10:00' }, { subject: 'OS101b', classID: '0012251', schedule: 'Thursday 7:00 - 10:00 MonWed 4:00 - 5:00' }, { subject: 'OS101c', classID: '0012252', schedule: 'Friday 10:00 - 1:00 MonWed 9:00 - 10:00' }, { subject: 'OS101d', classID: '0012253', schedule: 'Friday 1:00 - 4:00 MonWed 12:00 - 1:00' }, { subject: 'IAS102d', classID: '0012012', schedule: 'Monday 4:00 - 7:00 TueThurs 9:00 - 10:00' }] },
    'deronia-merry-jean': { firstName: 'Merry Jean', lastName: 'Deronia', position: 'Part-Time Lecturer', classes: [{ subject: 'PT101f', classID: '0012325', schedule: 'Monday 7:00 -- 10:00' }, { subject: '', classID: '', schedule: 'TueThurs 9:00 -- 10:00' }, { subject: 'PT101g', classID: '0012326', schedule: 'Wednesday 1:00 -- 4:00' }, { subject: '', classID: '', schedule: 'TueThurs 3:00 -- 4:00' }, { subject: 'GE Elect 2b', classID: '0051622', schedule: 'TueThurs 2:30 -- 4:00' }, { subject: 'GE Elect 1a', classID: '1740770', schedule: 'TueThurs 1:00 -- 2:30' }, { subject: 'GE Elect 1e', classID: '1032824', schedule: 'MonWedFri 11:00 -- 12:00' }, { subject: 'GE Elect 1d', classID: '1032823', schedule: 'MonWedFri 10:00 -- 11:00' }] },
    'echaluche-tomas-paolo': { firstName: 'Tomas Paolo', lastName: 'Echaluche', position: 'Part-Time Lecturer', classes: [{ subject: 'WS101a', classID: '0012390', schedule: 'Fri 10:00 -- 1:00' }, { subject: '', classID: '', schedule: 'MonWed 3:00 -- 4:00' }, { subject: 'WS101b', classID: '0012391', schedule: 'Fri 1:00 -- 4:00' }, { subject: '', classID: '', schedule: 'MonWed 4:00 -- 5:00' }, { subject: 'WS101c', classID: '0012392', schedule: 'Fri 10:00 -- 1:00' }, { subject: '', classID: '', schedule: 'MonWed 9:00 -- 10:00' }, { subject: 'WS101d', classID: '0012393', schedule: 'Wed 10:00 -- 1:00' }, { subject: '', classID: '', schedule: 'TueThu 8:00 -- 9:00' }, { subject: 'IAS102b', classID: '0012101', schedule: 'Wed 4:00 -- 7:00' }, { subject: '', classID: '', schedule: 'MonFri 8:00 -- 9:00' }] },
    'edralin-ralph-michael': { firstName: 'Ralph Michael', lastName: 'Edralin', position: 'Part-Time Lecturer', classes: [{ subject: 'SIA101a', classID: '0012350', schedule: 'Monday 4:00 - 7:00 TueThurs 2:00 - 3:00' }, { subject: 'SIA101b', classID: '0012351', schedule: 'Wednesday 4:00 - 7:00 TueThurs 1:00 - 2:00' }, { subject: 'SIA101c', classID: '0012352', schedule: 'Friday 7:00 - 10:00 MonWed 9:00 - 10:00' }, { subject: 'SIA101d', classID: '0012353', schedule: 'Friday 4:00 - 7:00 MonWed 9:00 - 11:00' }] },
    'entico-christy': { firstName: 'Christy', lastName: 'Entico', position: 'Regular Faculty/Instructor', classes: [{ subject: 'ITP102e', classID: '0012164', schedule: 'TueThurs 1:00 -- 2:00' }, { subject: 'ITP102f', classID: '0012165', schedule: 'TueThurs 10:00 -- 11:30' }, { subject: 'ITP102g', classID: '0012166', schedule: 'MonWedFri 9:00 -- 10:00' }, { subject: 'ITP101g', classID: '0012146', schedule: 'MonWedFri 7:00 -- 8:00' }, { subject: 'ITP101h', classID: '0012147', schedule: 'MonWedFri 8:00 -- 9:00' }] },
    'entico-danny-gem': { firstName: 'Danny Gem', lastName: 'Entico', position: 'Regular Faculty/Instructor', classes: [{ subject: 'Net102a', classID: '0012220', schedule: 'TueThurs 11:30 -- 1:00' }, { subject: '', classID: '', schedule: 'MonWed 7:00 -- 8:00' }, { subject: 'Net102b', classID: '0012221', schedule: 'TueThurs 7:00 -- 8:30' }, { subject: '', classID: '', schedule: 'MonWed 8:00 -- 9:00' }, { subject: 'Net102c', classID: '0012222', schedule: 'Tuesday 4:00 -- 7:00' }, { subject: '', classID: '', schedule: 'MonWed 9:00 -- 10:00' }, { subject: 'Net102d', classID: '0012223', schedule: 'Thursday 4:00 -- 7:00' }, { subject: '', classID: '', schedule: 'MonWed 10:00 -- 11:00' }, { subject: 'IAS102c', classID: '0012100', schedule: 'Monday 4:00 -- 7:00' }, { subject: '', classID: '', schedule: 'WedFri 8:00 -- 9:00' }] },
    'galing-jonathan': { firstName: 'Jonathan', lastName: 'Galing', position: 'Part-Time Lecturer', classes: [{ subject: 'CC102e', classID: '0011894', schedule: 'MonWed 1:00 -- 2:00' }, { subject: '', classID: '', schedule: 'TueThurs 10:00 -- 11:30' }, { subject: 'CC102f', classID: '0011895', schedule: 'MonWed 2:00 -- 3:00' }, { subject: '', classID: '', schedule: 'TueThurs 11:30 -- 1:00' }, { subject: 'CC102g', classID: '0011896', schedule: 'MonWed 8:00 -- 9:00' }, { subject: '', classID: '', schedule: 'TueThurs 10:00 -- 11:30' }, { subject: 'CC102h', classID: '0011897', schedule: 'MonWed 9:00 -- 10:00' }, { subject: '', classID: '', schedule: 'TueThurs 8:30 -- 10:00' }, { subject: 'ITS101c', classID: '0011898', schedule: 'Monday 10:00 -- 11:30' }, { subject: '', classID: '', schedule: 'WedFri 11:00 -- 12:00' }] },
    'gatongay-riva': { firstName: 'Riva', lastName: 'Gatongay', position: 'External Services Coordinator', classes: [{ subject: 'CAP1024c', classID: '0011872', schedule: 'TueThurs 7:00 -- 8:30' }, { subject: 'CAP1024d', classID: '0011873', schedule: 'TueThurs 8:30 -- 10:00' }, { subject: 'ITS101a', classID: '0012170', schedule: 'TueThurs 10:00 -- 11:00' }, { subject: 'ITS101b', classID: '0012171', schedule: 'TueThurs 9:00 -- 10:00' }] },
    'masloc-danilo-isagani': { firstName: 'Danilo Isagani', lastName: 'Masloc', position: 'College Department Chairman', classes: [{ subject: 'IM101a', classID: '0012620', schedule: 'TueThurs 1:00 -- 2:00' }, { subject: '', classID: '', schedule: 'Mon 10:00 -- 1:00' }] },
    'naza-mark-niko': { firstName: 'Mark Niko', lastName: 'Naza', position: 'Part-Time Lecturer', classes: [{ subject: 'PF101f', classID: '0012305', schedule: 'MonWed 10:00 - 11:00 TueThurs 11:30 - 1:00' }, { subject: 'PF101g', classID: '0012306', schedule: 'Monday 1:00 - 4:00 TueThurs 1:00 - 2:00' }, { subject: 'ITS101d', classID: '0012173', schedule: 'Wednesday 4:00 -- 7:00' }, { subject: 'Math 112a', classID: '1740810', schedule: 'Thursday 7:00 -- 10:00' }, { subject: 'Math112b', classID: '1740811', schedule: 'Monday 4:00 -- 7:00' }] },
    'noora-vince-carlo': { firstName: 'Vince Carlo', lastName: 'Noora', position: 'Part-Time Lecturer', classes: [{ subject: 'CC104d', classID: '0011913', schedule: 'Wednesday 7:00 -- 10:00' }, { subject: '', classID: '', schedule: 'TueThurs 8:00 -- 9:00' }, { subject: 'CC104e', classID: '0011914', schedule: 'MonWed 12:00 -- 1:00' }, { subject: '', classID: '', schedule: 'TueThu 9:00 -- 10:00' }, { subject: 'CC104f', classID: '0011915', schedule: 'Tuesday 4:00 -- 7:00' }, { subject: '', classID: '', schedule: 'MonWedFri 10:00 -- 11:00' }, { subject: 'CC104g', classID: '0011916', schedule: 'Monday 10:00 -- 1:00' }, { subject: '', classID: '', schedule: 'TueThu 10:00 -- 11:00' }, { subject: 'GE Elect 1b', classID: '1032821', schedule: 'TueThurs 1:00 -- 2:30' }] },
    'obieta-antoine-jusherand': { firstName: 'Antoine Jusherand', lastName: 'Obieta', position: 'Part-Time Lecturer', classes: [{ subject: 'ES 112eA', classID: '2460050', schedule: 'Monday 1:00 -- 4:00' }, { subject: '', classID: '', schedule: 'Wednesday 1:00 -- 4:00' }, { subject: 'ES 112eB', classID: '2460051', schedule: 'Tuesday 1:00 -- 4:00' }, { subject: '', classID: '', schedule: 'Thursday 1:00 -- 4:00' }, { subject: 'ES 112eC', classID: '2460052', schedule: 'Tuesday 7:00 -- 10:00' }, { subject: '', classID: '', schedule: 'Thursday 7:00 -- 10:00' }, { subject: 'ES112eD', classID: '2460053', schedule: 'MonWed 7:00 -- 10:00' }, { subject: 'ES112eE', classID: '2460054', schedule: '—' }] },
    'ortiz-kacie': { firstName: 'Kacie', lastName: 'Ortiz', position: 'Part-Time Lecturer', classes: [{ subject: 'CC101f', classID: '0011885', schedule: 'Friday 4:00 - 7:00 TueThurs 10:00 - 11:00' }, { subject: 'CC101g', classID: '0011886', schedule: 'Thursday 4:00 - 7:00 MonWed 10:00 - 11:00' }, { subject: 'CC101h', classID: '0011887', schedule: 'Tuesday 4:00 - 7:00 MonWed 10:00 - 11:00' }, { subject: 'Computer 1a', classID: '0591160', schedule: 'Wednesday 4:00 - 7:00 TueThurs 9:00 - 10:00' }, { subject: 'Computer 1b', classID: '0591161', schedule: 'Monday 4:00 - 7:00 TueThurs 3:00 -4:00' }] },
    'resuello-jenny': { firstName: 'Jenny', lastName: 'Resuello', position: 'Regular Faculty/Instructor', classes: [{ subject: 'PF101a', classID: '0012300', schedule: 'MonWed 8:00 - 9:00 TueThu 7:00 - 8:30' }, { subject: 'PF101b', classID: '0012301', schedule: 'MonWed 7:00 - 8:00 TueThu 8:30 - 10:00' }, { subject: 'PF101c', classID: '0012302', schedule: 'MonWed 2:00 - 3:00 TueThu 1:00 - 2:30' }, { subject: 'PF101d', classID: '0012303', schedule: 'MonWed 1:00 - 2:00 TueThu 2:30 - 4:00' }, { subject: 'PF101e', classID: '0012304', schedule: 'MonWed 10:00 - 11:00 TueThu 10:00 - 11:30' }] },
    'resuello-maximo': { firstName: 'Maximo', lastName: 'Resuello', position: 'Regular Faculty/Instructor', classes: [{ subject: 'IT102a', classID: '0012150', schedule: 'MonWed 9:00 - 10:00 TueThu 8:30 - 10:00' }, { subject: 'IT102b', classID: '0012151', schedule: 'MonWed 8:00 - 9:00 TueThu 10:00 - 11:30' }, { subject: 'IT102c', classID: '0012152', schedule: 'MonWed 1:00 - 2:00 TueThu 1:00 - 2:30' }, { subject: 'IT102d', classID: '0012153', schedule: 'MonWed 2:00 - 3:00 TueThu 2:30 - 4:00' }] },
    'sabayo-dinah-grace': { firstName: 'Dinah Grace', lastName: 'Sabayo', position: 'Part-Time Lecturer', classes: [{ subject: 'CC101a', classID: '0011880', schedule: 'MonWed 7:00 - 10:00 TueThurs 11:30 - 1:00' }, { subject: 'CC101b', classID: '0011881', schedule: 'MonWed 10:00 - 1:00 TueThurs 9:00 - 10:00' }, { subject: 'CC101c', classID: '0011882', schedule: 'MonWed 1:00 - 4:00 TueThurs 2:00 - 3:00' }, { subject: 'CC101d', classID: '0011883', schedule: 'MonWed 4:00 - 7:00 TueThurs 3:00 - 4:00' }, { subject: 'CC101e', classID: '0011884', schedule: 'MonWed 7:00 - 10:00 TueThurs 12:00 - 1:00' }] },
    'santos-emmanuel': { firstName: 'Emmanuel', lastName: 'Santos', position: 'ICT Staff', classes: [{ subject: 'CC106a', classID: '0011930', schedule: 'Monday 1:00 - 4:00 TueThu 10:00 - 11:00' }, { subject: 'CC106b', classID: '0011931', schedule: 'MonWed 7:00 - 8:00 Friday 1:00 - 4:00' }, { subject: 'CC106c', classID: '0011932', schedule: 'MonWed 8:00 - 9:00 Friday 4:00 - 7:00' }, { subject: 'CC106d', classID: '0011933', schedule: 'Wednesday 1:00 - 4:00 TueThu 9:00 - 10:00' }] },
    'zabala-jerald': { firstName: 'Jerald', lastName: 'Zabala', position: 'Part-Time Lecturer', classes: [{ subject: 'HCI102f', classID: '0012085', schedule: 'Thu 4:00 -- 7:00' }, { subject: '', classID: '', schedule: 'MonWed 2:00 -- 3:00' }, { subject: 'HCI102g', classID: '0012086', schedule: 'Wednesday 10:00 -- 1:00' }, { subject: '', classID: '', schedule: 'TueThu 8:00 -- 9:00' }, { subject: 'IM101c', classID: '0012112', schedule: 'Wednesday 4:00 -- 7:00' }, { subject: '', classID: '', schedule: 'MonFri 11:00 -- 12:00' }, { subject: 'IM101d', classID: '0012113', schedule: 'Monday 4:00 -- 7:00' }, { subject: '', classID: '', schedule: 'WedFri 9:00 -- 10:00' }, { subject: 'GE Elective 2a', classID: '0051621', schedule: 'MonWedFri 9:00 -- 10:00' }, { subject: 'GE Elective 1c', classID: '1032822', schedule: 'TueThurs 2:30 - 4:00' }] }
};

document.addEventListener('DOMContentLoaded', function() {
    // Check authentication
    if (sessionStorage.getItem('adminLoggedIn') !== 'true') {
        window.location.href = 'login.html';
        return;
    }

    // Set username in header
    const username = sessionStorage.getItem('adminUser') || 'Admin';
    document.getElementById('adminUsername').textContent = username;

    // Get instructor ID from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const instructorId = urlParams.get('id');

    if (!instructorId) {
        alert('No instructor specified');
        window.location.href = 'view-instructors.html';
        return;
    }

    // Load instructor data (this would normally come from a database)
    loadInstructorData(instructorId);

    // Tab switching
    const tabButtons = document.querySelectorAll('.detail-tab-btn');
    const tabContents = document.querySelectorAll('.detail-tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');

            // Remove active class from all tabs
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked tab
            this.classList.add('active');
            document.getElementById(tabName + 'Tab').classList.add('active');
        });
    });

    // Back button
    document.getElementById('backBtn').addEventListener('click', function() {
        const returnUrl = sessionStorage.getItem('editInstructorReturnUrl') || 'view-instructors.html';
        window.location.href = returnUrl;
    });

    // Save Changes button
    document.getElementById('saveChangesBtn').addEventListener('click', function() {
        if (confirm('Save changes to instructor information?')) {
            // Here you would normally save to a database
            alert('Changes saved successfully!');
            const returnUrl = sessionStorage.getItem('editInstructorReturnUrl') || 'view-instructors.html';
            window.location.href = returnUrl;
        }
    });

    // Add Class Row button
    document.getElementById('addClassRowBtn').addEventListener('click', function() {
        addClassRow();
    });
});

function addClassRow(subject = '', classID = '', schedule = '') {
    const tbody = document.getElementById('classesTableBody');
    const row = document.createElement('tr');
    row.className = 'editable-row';
    row.innerHTML = `
        <td><input type="text" class="table-input" value="${subject}"></td>
        <td><input type="text" class="table-input" value="${classID}"></td>
        <td><input type="text" class="table-input table-input-wide" value="${schedule}"></td>
        <td>
            <button class="btn-delete-row" onclick="deleteRow(this)">Delete</button>
        </td>
    `;
    tbody.appendChild(row);
}

function deleteRow(button) {
    if (confirm('Delete this class row?')) {
        button.closest('tr').remove();
    }
}

function loadInstructorData(instructorId) {
    const instructor = INSTRUCTORS_DATA[instructorId];
    
    if (!instructor) {
        alert('Instructor not found');
        window.location.href = 'view-instructors.html';
        return;
    }

    // Get image and COR from instructorsData (for display purposes)
    const instructorsDisplayData = {
        'abuke-mar-riel': { image: 'Abuke, Mar Riel.png', corFormat: 'B.PTL1' },
        'acebuche-nikka': { image: 'Acebuche, Nikka.png', corFormat: 'B.PTL3' },
        'alig-kristel-jean': { image: 'Alig, Kristel Jean.png', corFormat: 'B.PTL7' },
        'benesisto-rogelio': { image: 'Benesisto, Rogelio.jpg', corFormat: 'R. BENESISTO' },
        'cerbito-rhea': { image: 'Cerbito, Rhea.jpg', corFormat: 'R. CERBITO' },
        'chan-celeste': { image: 'Chan, Celeste.jpg', corFormat: 'C. CHAN' },
        'ching-jose': { image: 'Ching, Jose.jpg', corFormat: 'J. CHING' },
        'custorio-jomei-andrew': { image: 'default.png', corFormat: 'B.PTL4' },
        'demeterio-jomar': { image: 'default.png', corFormat: 'B.PTL8' },
        'deronia-merry-jean': { image: 'Deronia, Merry Jean.jpg', corFormat: 'B.PTL13' },
        'echaluche-tomas-paolo': { image: 'default.png', corFormat: 'B.PTL2' },
        'edralin-ralph-michael': { image: 'Edralin, Ralph Michael.jpg', corFormat: 'B.PTL10' },
        'entico-christy': { image: 'Entico, Christy.jpg', corFormat: 'C. ENTICO' },
        'entico-danny-gem': { image: 'Entico, Danny Gem.jpg', corFormat: 'D. ENTICO' },
        'galing-jonathan': { image: 'default.png', corFormat: 'B.PTL6' },
        'gatongay-riva': { image: 'Gatongay, Riva.jpg', corFormat: 'R. GATONGAY' },
        'masloc-danilo-isagani': { image: 'Masloc, Danilo Isagani.png', corFormat: 'D. MASLOC' },
        'naza-mark-niko': { image: 'Naza, Mark Niko.jpg', corFormat: 'B.PTL12' },
        'noora-vince-carlo': { image: 'Noora, Vince Carlo.jpg', corFormat: 'B.PTL16' },
        'obieta-antoine-jusherand': { image: 'Obieta, Antoine Jusherand.jpg', corFormat: 'B.PTL14' },
        'ortiz-kacie': { image: 'Ortiz, Kacie.jpg', corFormat: 'B.PTL9' },
        'resuello-jenny': { image: 'Resuello, Jenny.png', corFormat: 'J. RESUELLO' },
        'resuello-maximo': { image: 'default.png', corFormat: 'M. RESUELLO' },
        'sabayo-dinah-grace': { image: 'default.png', corFormat: 'B.PTL5' },
        'santos-emmanuel': { image: 'default.png', corFormat: 'E. SANTOS' },
        'zabala-jerald': { image: 'Zabala, Jerald.jpg', corFormat: 'B.PTL11' }
    };

    const displayData = instructorsDisplayData[instructorId] || { image: 'default.png', corFormat: 'N/A' };

    // Populate sidebar
    document.getElementById('instructorPhoto').src = `../assets/images/placeholders/${displayData.image}`;
    document.getElementById('sidebarName').textContent = `${instructor.lastName}, ${instructor.firstName}`;
    document.getElementById('sidebarCOR').textContent = displayData.corFormat;

    // Populate form fields
    document.getElementById('firstName').value = instructor.firstName;
    document.getElementById('lastName').value = instructor.lastName;
    document.getElementById('middleName').value = '';
    document.getElementById('college').value = 'College of Science';
    document.getElementById('department').value = 'Information Technology';
    document.getElementById('position').value = instructor.position;
    document.getElementById('modeOfCommunication').value = 'N/A';
    document.getElementById('linkOfCommunication').value = '';

    // Populate classes table with editable rows
    instructor.classes.forEach(cls => {
        addClassRow(cls.subject, cls.classID, cls.schedule);
    });
}
