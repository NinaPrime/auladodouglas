// Get the theme toggle button
const themeToggleButton = document.getElementById('theme-toggle');

// Check if dark mode is enabled from localStorage
const isDarkMode = localStorage.getItem('darkMode') === 'true';

// If dark mode was previously enabled, set it on page load
if (isDarkMode) {
    document.body.classList.add('dark-mode');
    themeToggleButton.textContent = '🌞'; // Change button text to sun icon
} else {
    document.body.classList.remove('dark-mode');
    themeToggleButton.textContent = '🌙'; // Change button text to moon icon
}

// Add event listener to toggle theme on button click
themeToggleButton.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');

    // Save the theme preference in localStorage
    localStorage.setItem('darkMode', isDark);

    // Change the button text based on theme
    themeToggleButton.textContent = isDark ? '🌞' : '🌙';
});
