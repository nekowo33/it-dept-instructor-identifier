document.addEventListener('DOMContentLoaded', function() {
    if (sessionStorage.getItem('adminLoggedIn') !== 'true') {
        window.location.href = '../login.html';
        return;
    }

    const username = sessionStorage.getItem('adminUser') || 'Admin';
    document.getElementById('adminUsername').textContent = username;

    const classIDsData = [
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

    // Render class IDs grid
    function renderClassIDs(classIDs) {
        const grid = document.getElementById('classIDsGrid');
        
        if (classIDs.length === 0) {
            grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px; color: #666;">No class IDs found</p>';
            return;
        }

        grid.innerHTML = classIDs.map(cls => {
            return `
                <div class="classid-card">
                    <div class="classid-number">${cls.classID}</div>
                </div>
            `;
        }).join('');
    }

    
    const searchInput = document.getElementById('classIDSearch');
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase().trim();
        
        if (searchTerm === '') {
            renderClassIDs(classIDsData);
            return;
        }

        const filtered = classIDsData.filter(cls => 
            cls.classID.toLowerCase().includes(searchTerm) ||
            cls.instructor.toLowerCase().includes(searchTerm) ||
            cls.subject.toLowerCase().includes(searchTerm) ||
            cls.schedule.toLowerCase().includes(searchTerm)
        );

        renderClassIDs(filtered);
    });

    // Initial render
    renderClassIDs(classIDsData);
});
