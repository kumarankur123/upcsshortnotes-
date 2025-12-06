/**
 * UPPCS Notes - Dark Theme Toggle Script
 * Handles theme switching and persistence across all chapters
 */

// Toggle between light and dark themes
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    // Apply new theme
    html.setAttribute('data-theme', newTheme);

    // Save to localStorage for persistence
    localStorage.setItem('theme', newTheme);

    // Optional: Log for debugging
    console.log(`Theme switched to: ${newTheme}`);
}

// Load saved theme on page load
function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    console.log(`Loaded theme: ${savedTheme}`);
}

// Auto-load theme when page loads
loadTheme();
