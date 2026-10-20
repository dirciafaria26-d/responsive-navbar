
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");
        menuIcon.setAttribute("aria-expanded", isOpen);
        menuIcon.setAttribute(
            "aria-label",
            isOpen ? "Close menu" : "Open menu"
        );
        menuIcon.textContent = isOpen ? "✕" : "☰";
    });
});
