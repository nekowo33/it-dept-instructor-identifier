// Instructor database with COR format mappings
const instructors = [
    // Part-Time Lecturers (B.PTL format)
    { name: "Abuke, Mar Riel", corFormat: "B.PTL1", title: "Part-Time Lecturer", profile: "profiles/profile-abuke-mar-riel.html" },
    { name: "Echaluche, Tomas Paolo", corFormat: "B.PTL2", title: "Part-Time Lecturer", profile: "profiles/profile-echaluche-tomas-paolo.html" },
    { name: "Acebuche, Nikka", corFormat: "B.PTL3", title: "Part-Time Lecturer", profile: "profiles/profile-acebuche-nikka.html" },
    { name: "Custorio, Jomei Andrew", corFormat: "B.PTL4", title: "Part-Time Lecturer", profile: "profiles/profile-custorio-jomei-andrew.html" },
    { name: "Sabayo, Dinah Grace", corFormat: "B.PTL5", title: "Part-Time Lecturer", profile: "profiles/profile-sabayo-dinah-grace.html" },
    { name: "Galing, Jonathan", corFormat: "B.PTL6", title: "Part-Time Lecturer", profile: "profiles/profile-galing-jonathan.html" },
    { name: "Alig, Kristel Jean", corFormat: "B.PTL7", title: "Part-Time Lecturer", profile: "profiles/profile-alig-kristel-jean.html" },
    { name: "Demeterio, Jomar", corFormat: "B.PTL8", title: "Part-Time Lecturer", profile: "profiles/profile-demeterio-jomar.html" },
    { name: "Ortiz, Kacie", corFormat: "B.PTL9", title: "Part-Time Lecturer", profile: "profiles/profile-ortiz-kacie.html" },
    { name: "Edralin, Ralph Michael", corFormat: "B.PTL10", title: "Part-Time Lecturer", profile: "profiles/profile-edralin-ralph-michael.html" },
    { name: "Zabala, Jerald", corFormat: "B.PTL11", title: "Part-Time Lecturer", profile: "profiles/profile-zabala-jerald.html" },
    { name: "Naza, Mark Niko", corFormat: "B.PTL12", title: "Part-Time Lecturer", profile: "profiles/profile-naza-mark-niko.html" },
    { name: "Deronia, Merry Jean", corFormat: "B.PTL13", title: "Part-Time Lecturer", profile: "profiles/profile-deronia-merry-jean.html" },
    { name: "Obieta, Antoine Jusherand", corFormat: "B.PTL14", title: "Part-Time Lecturer", profile: "profiles/profile-obieta-antoine-jusherand.html" },
    { name: "Noora, Vince Carlo", corFormat: "B.PTL16", title: "Part-Time Lecturer", profile: "profiles/profile-noora-vince-carlo.html" },
    
    // Regular Faculty/Staff (Initial + Surname format)
    { name: "Benesisto, Rogelio", corFormat: "R. BENESISTO", title: "Regular Faculty/Instructor", profile: "profiles/profile-benesisto-rogelio.html" },
    { name: "Cerbito, Rhea", corFormat: "R. CERBITO", title: "Student Services Coordinator", profile: "profiles/profile-cerbito-rhea.html" },
    { name: "Chan, Celeste", corFormat: "C. CHAN", title: "ICT Director", profile: "profiles/profile-chan-celeste.html" },
    { name: "Ching, Jose", corFormat: "J. CHING", title: "Regular Faculty/Instructor", profile: "profiles/profile-ching-jose.html" },
    { name: "Entico, Christy", corFormat: "C. ENTICO", title: "Regular Faculty/Instructor", profile: "profiles/profile-entico-christy.html" },
    { name: "Entico, Danny Gem", corFormat: "D. ENTICO", title: "Regular Faculty/Instructor", profile: "profiles/profile-entico-danny-gem.html" },
    { name: "Gatongay, Riva", corFormat: "R. GATONGAY", title: "External Services Coordinator", profile: "profiles/profile-gatongay-riva.html" },
    { name: "Masloc, Danilo Isagani", corFormat: "D. MASLOC", title: "College Department Chairman", profile: "profiles/profile-masloc-danilo-isagani.html" },
    { name: "Resuello, Jenny", corFormat: "J. RESUELLO", title: "Regular Faculty/Instructor", profile: "profiles/profile-resuello-jenny.html" },
    { name: "Resuello, Maximo", corFormat: "M. RESUELLO", title: "Regular Faculty/Instructor", profile: "profiles/profile-resuello-maximo.html" },
    { name: "Santos, Emmanuel", corFormat: "E. SANTOS", title: "ICT Staff", profile: "profiles/profile-santos-emmanuel.html" }
];

// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const query = e.target.value.trim().toUpperCase();
            
            if (query.length === 0) {
                searchResults.innerHTML = '';
                searchResults.style.display = 'none';
                return;
            }
            
            // Search in both COR format and full name
            const results = instructors.filter(instructor => {
                const corMatch = instructor.corFormat.toUpperCase().includes(query);
                const nameMatch = instructor.name.toUpperCase().includes(query);
                return corMatch || nameMatch;
            });
            
            displayResults(results);
        });
    }
});

function displayResults(results) {
    const searchResults = document.getElementById('searchResults');
    
    if (results.length === 0) {
        searchResults.innerHTML = '<div class="no-results">No instructors found</div>';
        searchResults.style.display = 'block';
        return;
    }
    
    let html = '<div class="results-container">';
    results.forEach(instructor => {
        html += `
            <a href="${instructor.profile}" class="result-item">
                <div class="result-info">
                    <div class="result-name">${instructor.name}</div>
                    <div class="result-details">
                        <span class="result-cor">${instructor.corFormat}</span>
                        <span class="result-separator">•</span>
                        <span class="result-title">${instructor.title}</span>
                    </div>
                </div>
                <svg class="result-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
            </a>
        `;
    });
    html += '</div>';
    
    searchResults.innerHTML = html;
    searchResults.style.display = 'block';
}

// Professor search functionality (for professors.html)
const professorSearch = document.getElementById('professorSearch');
if (professorSearch) {
    const professorsGrid = document.getElementById('professorsGrid');
    const allCards = Array.from(professorsGrid.children);
    
    professorSearch.addEventListener('input', function(e) {
        const query = e.target.value.trim().toLowerCase();
        
        // Clear the grid
        professorsGrid.innerHTML = '';
        
        // Filter and re-add matching cards
        allCards.forEach(card => {
            const name = card.querySelector('.professor-name').textContent.toLowerCase();
            if (name.includes(query) || query === '') {
                professorsGrid.appendChild(card);
            }
        });
        
        // If no results, show a message
        if (professorsGrid.children.length === 0) {
            professorsGrid.innerHTML = '<div class="no-professors-found">No professors found</div>';
        }
    });
}