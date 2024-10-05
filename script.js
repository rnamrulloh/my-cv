document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-dark-mode');
    const body = document.body;
    const icon = toggleButton.querySelector('i');

    // Event listener for toggling dark mode
    toggleButton.addEventListener('click', function() {
        body.classList.toggle('dark-mode');

        // Toggle between sun and moon icon
        if (body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        } else {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    });
});
