const btnMode = document.getElementById('mode-selector');
const body = document.body;
const h1 = document.getElementById("page-title");
const footer = document.querySelector('footer');

btnMode.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    h1.classList.toggle("dark-mode");
    footer.classList.toggle("dark-mode");
    btnMode.classList.toggle("dark-mode");
    if (h1.innerHTML === "Light Mode ON") {
        h1.innerHTML = "Dark Mode ON";
    } else {
        h1.innerHTML = "Light Mode ON";
    }
})