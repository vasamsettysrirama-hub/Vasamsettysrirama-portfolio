const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {

    // Check if a theme was already saved
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.documentElement.setAttribute("data-theme", "light");
        themeToggle.textContent = "🌙 Dark Mode";
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
        themeToggle.textContent = "☀️ Light Mode";
    }


    // Change theme when button is clicked
    themeToggle.addEventListener("click", function () {

        const currentTheme =
            document.documentElement.getAttribute("data-theme");

        if (currentTheme === "light") {

            document.documentElement.setAttribute(
                "data-theme",
                "dark"
            );

            localStorage.setItem("theme", "dark");

            themeToggle.textContent = "☀️ Light Mode";

        } else {

            document.documentElement.setAttribute(
                "data-theme",
                "light"
            );

            localStorage.setItem("theme", "light");

            themeToggle.textContent = "🌙 Dark Mode";
        }
    });
}