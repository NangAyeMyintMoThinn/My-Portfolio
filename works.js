const cards = document.querySelectorAll(".project-card");

function reveal() {

    cards.forEach(card => {

        const top = card.getBoundingClientRect().top;

        if(top < window.innerHeight - 150){

            card.classList.add(
                "show",
                "animate__animated",
                "animate__fadeInUp"
            );

        }

    });

}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);