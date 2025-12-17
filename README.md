# IT Department Instructor Identifier

A web-based system for identifying and managing IT department instructors at the University of Eastern Philippines.

## Features

### Public Interface
- **Home Page** (`index.html`) - Landing page with search functionality
- **View Professors** (`professors.html`) - Browse all IT department instructors with search
- **About Page** (`about.html`) - Information about the system
- **Instructor Profiles** (`profiles/instructors/`) - Individual profile pages for each instructor with:
  - Photo and basic information
  - Position/title
  - Class schedules and assignments
  - Notify teacher functionality

### Admin Panel
Accessible at `admin/login.html` (Credentials: admin/admin123)

#### Dashboard (`admin/dashboard.html`)
- View and manage instructors, subjects, and class IDs
- Quick access to all management functions
- Dropdown lists for quick reference

#### Instructor Management
- **View All Instructors** (`admin/pages/view-instructors.html`) - Grid view with search
- **Instructor Detail Pages** (`admin/instructors/instructor-*.html`) - Individual detail pages with:
  - Details tab: Name, college, department, position, communication
  - Classes tab: All assigned classes
- **Add New Instructor** (`admin/pages/add-instructor.html`) - Two-tab form:
  - Details tab: Personal and professional information
  - Classes tab: Assign classes with schedules
- **Edit Instructor** (`admin/pages/edit-instructor.html`) - Edit existing instructor data with editable class table

#### Subject Management
- **View All Subjects** (`admin/pages/view-subjects.html`) - Grid view with search
- **Add New Subject** (`admin/pages/add-subject.html`) - Form for adding subjects

#### Class ID Management
- **View All Class IDs** (`admin/pages/view-classids.html`) - Grid view with search
- **Add New Class** (`admin/pages/add-class.html`) - Form for adding class assignments

## Project Structure

```
├── index.html                      # Public home page
├── professors.html                 # Browse all professors
├── about.html                      # About page
│
├── admin/                          # Admin panel
│   ├── login.html                 # Admin login
│   ├── dashboard.html             # Admin dashboard
│   ├── pages/                     # Admin functional pages
│   │   ├── view-instructors.html  # View all instructors
│   │   ├── view-subjects.html     # View all subjects
│   │   ├── view-classids.html     # View all class IDs
│   │   ├── add-instructor.html    # Add new instructor
│   │   ├── add-subject.html       # Add new subject
│   │   ├── add-class.html         # Add new class
│   │   └── edit-instructor.html   # Edit instructor
│   └── instructors/               # Instructor detail pages (26 files)
│       └── instructor-*.html      # Individual instructor pages
│
├── profiles/                       # Public instructor profiles
│   └── instructors/               # Profile pages (26 files)
│       └── profile-*.html         # Individual profile pages
│
├── assets/                         # Static assets
│   ├── css/
│   │   ├── main.css               # Global styles
│   │   ├── public.css             # Public interface styles
│   │   └── admin.css              # Admin panel styles
│   ├── js/
│   │   ├── public/                # Public interface scripts
│   │   │   └── script.js          # Main public script
│   │   └── admin/                 # Admin panel scripts
│   │       ├── admin-login.js
│   │       ├── admin-dashboard.js
│   │       ├── admin-view-*.js    # View page scripts
│   │       ├── admin-add-*.js     # Add form scripts
│   │       └── admin-edit-*.js    # Edit form scripts
│   └── images/
│       ├── uep-logo.png           # University logo
│       ├── bg-header.png          # Header background
│       └── placeholders/          # Instructor photos
│
├── docs/                           # Documentation & reference files
│   ├── instructor-info.txt
│   ├── instructor-name-sorted.txt
│   ├── subject-codes.txt
│   └── *.pdf                      # Faculty assignment documents
│
├── README.md                       # This file
├── CLEANUP_SUMMARY.md             # Cleanup documentation
└── .gitignore                     # Git ignore rules
```

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Styling with Flexbox and Grid
- **Vanilla JavaScript** - No frameworks, pure JS
- **SessionStorage** - Admin authentication

## Design System

### Colors
- Primary Blue: `#17376e`
- Secondary Blue: `#2f68ca`
- Gold: `#ffd700`
- Background Gradient: `#ffffff` to `#dcdeed`

### Typography
- Font Family: Inter
- Admin Panel Titles: 32px Semi Bold
- Section Headings: 24-28px
- Body Text: 16-18px

## Data Management

Currently, all data is stored in JavaScript objects within the respective JS files. The system includes:
- 26 Instructors with complete information
- 28 Subjects (sorted by code)
- 31 Class IDs with assignments

For production use, this should be connected to a backend database.

## Authentication

Admin panel uses SessionStorage for authentication:
- Username: `admin`
- Password: `admin123`

**Note:** This is for demonstration only. Implement proper authentication for production.

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Future Enhancements

- Database integration (MySQL/PostgreSQL)
- Backend API (Node.js/PHP)
- Advanced search filters
- Email notifications
- File upload for instructor photos
- Export to PDF/Excel
- Role-based access control
- Audit logs

## Development

This project uses vanilla HTML, CSS, and JavaScript with no build process required. Simply open `index.html` in a web browser to view the public interface, or navigate to `admin/login.html` for the admin panel.

## License

© 2025 University of Eastern Philippines - College of Science, Department of Information Technology

---

**Developed for:** UEP IT Department
**Academic Year:** 2025-2026, 1st Semester
