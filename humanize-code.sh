#!/bin/bash

# Remove overly formal/AI-like comments from all JS files
cd assets/js

# Admin JS files
for file in admin/*.js public/*.js; do
    if [ -f "$file" ]; then
        # Remove comments that are too "professional"
        sed -i 's|// Simple admin login handler||g' "$file"
        sed -i 's|// Admin Dashboard Functionality||g' "$file"
        sed -i 's|// Admin View Instructors Page||g' "$file"
        sed -i 's|// Admin Add Instructor Page||g' "$file"
        sed -i 's|// Check authentication||g' "$file"
        sed -i 's|// Set username in header||g' "$file"
        sed -i 's|// Data storage (in production, this would be a database)||g' "$file"
        sed -i 's|// Default credentials (in production, this would be handled server-side)||g' "$file"
        sed -i 's|// Store session (in production, use proper authentication)||g' "$file"
        sed -i 's|// Redirect to dashboard||g' "$file"
        sed -i 's|// Show error||g' "$file"
        sed -i 's|// Check if already logged in||g' "$file"
        sed -i 's|// Clear previous error||g' "$file"
        sed -i 's|// Validate credentials||g' "$file"
        sed -i 's|// Modal functionality||g' "$file"
        sed -i 's|// ==================== EXPANDABLE LISTS ====================||g' "$file"
        sed -i 's|// ==================== INSTRUCTORS SECTION ====================||g' "$file"
        sed -i 's|// ==================== SUBJECTS SECTION ====================||g' "$file"
        sed -i 's|// ==================== CLASS IDs SECTION ====================||g' "$file"
        sed -i 's|// Tab switching||g' "$file"
        sed -i 's|// Photo upload||g' "$file"
        sed -i 's|// Handle form submission||g' "$file"
        sed -i 's|// Collect class data||g' "$file"
        sed -i 's|// Render instructors grid||g' "$file"
        sed -i 's|// Search functionality||g' "$file"
        sed -i 's|// Instructor database with COR format mappings||g' "$file"
        sed -i 's|// Part-Time Lecturers (B.PTL format)||g' "$file"
        sed -i 's|// Regular Faculty/Staff (Initial + Surname format)||g' "$file"
        sed -i 's|// Professor search functionality (for professors.html)||g' "$file"
        sed -i 's|// Remove active class from all tabs and contents||g' "$file"
        sed -i 's|// Add active class to clicked tab and corresponding content||g' "$file"
        sed -i 's|// Close all lists||g' "$file"
        sed -i 's|// Toggle current list||g' "$file"
        sed -i 's|// Search in both COR format and full name||g' "$file"
        sed -i 's|// Create filename: remove comma, replace spaces with hyphens, lowercase||g' "$file"
        
        echo "Processed $file"
    fi
done

echo "Done humanizing JS files!"
