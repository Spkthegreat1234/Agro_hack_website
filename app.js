// You can add JavaScript functionality here if needed
document.addEventListener("DOMContentLoaded", function () {
    // Toggle dropdown menu
    const dropdownToggles = document.querySelectorAll("li > a");
    dropdownToggles.forEach((toggle) => {
        toggle.addEventListener("click", function (e) {
            e.preventDefault();
            const dropdown = this.nextElementSibling;
            dropdown.classList.toggle("show");
        });
    });

    // Close dropdown menu when clicking outside
    window.addEventListener("click", function (e) {
        const dropdowns = document.querySelectorAll(".dropdown-content");
        dropdowns.forEach((dropdown) => {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove("show");
            }
        });
    });
});

