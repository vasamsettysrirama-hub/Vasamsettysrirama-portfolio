document.addEventListener("DOMContentLoaded", function () {

    const button = document.getElementById("theme-toggle");

    button.addEventListener("click", function () {

        document.documentElement.classList.toggle("light-mode");

        if (document.documentElement.classList.contains("light-mode")) {
            button.textContent = "🌙 Dark Mode";
        } else {
            button.textContent = "☀️ Light Mode";
        }

    });

});