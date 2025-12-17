// Admin View Instructors Page
document.addEventListener('DOMContentLoaded', function() {
    // Check authentication
    if (sessionStorage.getItem('adminLoggedIn') !== 'true') {
        window.location.href = 'login.html';
        return;
    }

    // Set username in header
    const username = sessionStorage.getItem('adminUser') || 'Admin';
    document.getElementById('adminUsername').textContent = username;

    // Instructors data (same as in admin-dashboard.js)
    const instructorsData = [
        { id: 1, name: 'Abuke, Mar Riel', initials: 'MRA', placeholder: 'B.PTL1', email: 'abuke.m@uep.edu.ph', image: 'Abuke, Mar Riel.png' },
        { id: 2, name: 'Acebuche, Nikka', initials: 'NA', placeholder: 'B.PTL3', email: 'acebuche.n@uep.edu.ph', image: 'Acebuche, Nikka.png' },
        { id: 3, name: 'Alig, Kristel Jean', initials: 'KJA', placeholder: 'B.PTL7', email: 'alig.k@uep.edu.ph', image: 'Alig, Kristel Jean.png' },
        { id: 4, name: 'Benesisto, Rogelio', initials: 'RB', placeholder: 'R. BENESISTO', email: 'benesisto.r@uep.edu.ph', image: 'Benesisto, Rogelio.jpg' },
        { id: 5, name: 'Cerbito, Rhea', initials: 'RC', placeholder: 'R. CERBITO', email: 'cerbito.r@uep.edu.ph', image: 'Cerbito, Rhea.jpg' },
        { id: 6, name: 'Chan, Celeste', initials: 'CC', placeholder: 'C. CHAN', email: 'chan.c@uep.edu.ph', image: 'Chan, Celeste.jpg' },
        { id: 7, name: 'Ching, Jose', initials: 'JC', placeholder: 'J. CHING', email: 'ching.j@uep.edu.ph', image: 'Ching, Jose.jpg' },
        { id: 8, name: 'Custorio, Jomei Andrew', initials: 'JAC', placeholder: 'B.PTL4', email: 'custorio.j@uep.edu.ph', image: 'default.png' },
        { id: 9, name: 'Demeterio, Jomar', initials: 'JD', placeholder: 'B.PTL8', email: 'demeterio.j@uep.edu.ph', image: 'default.png' },
        { id: 10, name: 'Deronia, Merry Jean', initials: 'MJD', placeholder: 'B.PTL13', email: 'deronia.m@uep.edu.ph', image: 'Deronia, Merry Jean.jpg' },
        { id: 11, name: 'Echaluche, Tomas Paolo', initials: 'TPE', placeholder: 'B.PTL2', email: 'echaluche.t@uep.edu.ph', image: 'default.png' },
        { id: 12, name: 'Edralin, Ralph Michael', initials: 'RME', placeholder: 'B.PTL10', email: 'edralin.r@uep.edu.ph', image: 'Edralin, Ralph Michael.jpg' },
        { id: 13, name: 'Entico, Christy', initials: 'CE', placeholder: 'C. ENTICO', email: 'entico.c@uep.edu.ph', image: 'Entico, Christy.jpg' },
        { id: 14, name: 'Entico, Danny Gem', initials: 'DGE', placeholder: 'D. ENTICO', email: 'entico.d@uep.edu.ph', image: 'Entico, Danny Gem.jpg' },
        { id: 15, name: 'Galing, Jonathan', initials: 'JG', placeholder: 'B.PTL6', email: 'galing.j@uep.edu.ph', image: 'default.png' },
        { id: 16, name: 'Gatongay, Riva', initials: 'RG', placeholder: 'R. GATONGAY', email: 'gatongay.r@uep.edu.ph', image: 'Gatongay, Riva.jpg' },
        { id: 17, name: 'Masloc, Danilo Isagani', initials: 'DIM', placeholder: 'D. MASLOC', email: 'masloc.d@uep.edu.ph', image: 'Masloc, Danilo Isagani.png' },
        { id: 18, name: 'Naza, Mark Niko', initials: 'MNN', placeholder: 'B.PTL12', email: 'naza.m@uep.edu.ph', image: 'Naza, Mark Niko.jpg' },
        { id: 19, name: 'Noora, Vince Carlo', initials: 'VCN', placeholder: 'B.PTL16', email: 'noora.v@uep.edu.ph', image: 'Noora, Vince Carlo.jpg' },
        { id: 20, name: 'Obieta, Antoine Jusherand', initials: 'AJO', placeholder: 'B.PTL14', email: 'obieta.a@uep.edu.ph', image: 'Obieta, Antoine Jusherand.jpg' },
        { id: 21, name: 'Ortiz, Kacie', initials: 'KO', placeholder: 'B.PTL9', email: 'ortiz.k@uep.edu.ph', image: 'Ortiz, Kacie.jpg' },
        { id: 22, name: 'Resuello, Jenny', initials: 'JR', placeholder: 'J. RESUELLO', email: 'resuello.j@uep.edu.ph', image: 'Resuello, Jenny.png' },
        { id: 23, name: 'Resuello, Maximo', initials: 'MR', placeholder: 'M. RESUELLO', email: 'resuello.m@uep.edu.ph', image: 'default.png' },
        { id: 24, name: 'Sabayo, Dinah Grace', initials: 'DGS', placeholder: 'B.PTL5', email: 'sabayo.d@uep.edu.ph', image: 'default.png' },
        { id: 25, name: 'Santos, Emmanuel', initials: 'ES', placeholder: 'E. SANTOS', email: 'santos.e@uep.edu.ph', image: 'default.png' },
        { id: 26, name: 'Zabala, Jerald', initials: 'JZ', placeholder: 'B.PTL11', email: 'zabala.j@uep.edu.ph', image: 'Zabala, Jerald.jpg' }
    ];

    // Render instructors grid
    function renderInstructors(instructors) {
        const grid = document.getElementById('instructorsGrid');
        
        if (instructors.length === 0) {
            grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px; color: #666;">No instructors found</p>';
            return;
        }

        grid.innerHTML = instructors.map(instructor => {
            const imagePath = `../assets/images/placeholders/${instructor.image}`;
            // Create filename: remove comma, replace spaces with hyphens, lowercase
            const filename = instructor.name.toLowerCase().replace(',', '').replace(/\s+/g, '-');
            const detailPageUrl = `instructor-${filename}.html`;
            
            return `
                <a href="${detailPageUrl}" class="instructor-card-link">
                    <div class="instructor-card">
                        <div class="instructor-photo">
                            <img src="${imagePath}" alt="${instructor.name}">
                        </div>
                        <div class="instructor-name">${instructor.name}</div>
                    </div>
                </a>
            `;
        }).join('');
    }

    // Search functionality
    const searchInput = document.getElementById('instructorSearch');
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase().trim();
        
        if (searchTerm === '') {
            renderInstructors(instructorsData);
            return;
        }

        const filtered = instructorsData.filter(instructor => 
            instructor.name.toLowerCase().includes(searchTerm) ||
            instructor.email.toLowerCase().includes(searchTerm) ||
            instructor.placeholder.toLowerCase().includes(searchTerm)
        );

        renderInstructors(filtered);
    });

    // Initial render
    renderInstructors(instructorsData);
});
