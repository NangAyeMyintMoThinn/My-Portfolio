document.querySelectorAll('.menus a').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const destination = this.href;

        document.body.classList.add('fade-out');

        setTimeout(() => {
            window.location.href = destination;
        }, 400);

    });

});
const themeBtn = document.querySelector(".themetoggle");

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-theme");
    themeBtn.textContent = "Light Mode";
}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")){

        localStorage.setItem("theme","dark");

        themeBtn.textContent = "Light Mode";
    }
    else{

        localStorage.setItem("theme","light");

        themeBtn.textContent = "Dark Mode";
    }
});
const menuToggle = document.querySelector(".menu-toggle");
const menus = document.querySelector(".menus");

menuToggle.addEventListener("click", () => {
    menus.classList.toggle("active");
});
// function showPage(pageId) {

//     document.querySelectorAll("section")
//         .forEach(section => {
//             section.style.display = "none";
//         });

//     document.getElementById(pageId).style.display = "block";
// }