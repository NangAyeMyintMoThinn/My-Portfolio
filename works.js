const cards = document.querySelectorAll(".project-card");
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close-modal");

let currentImages = [];
let currentIndex = 0;

// reveal animation
function reveal() {
    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;

        if (top < window.innerHeight - 150) {
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

// open modal (SCOPED per project)
cards.forEach(card => {
    const images = card.querySelectorAll(".preview-image");

    images.forEach((img, index) => {
        img.addEventListener("click", () => {
            modal.style.display = "flex";

            currentImages = images;   // only this project images
            currentIndex = index;

            modalImage.src = img.src;
        });
    });
});

// close modal
function closeModal() {
    modal.style.display = "none";
}

closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// keyboard navigation (ONLY current project)
document.addEventListener("keydown", (e) => {
    if (modal.style.display !== "flex") return;

    if (e.key === "Escape") {
        closeModal();
    }

    if (e.key === "ArrowRight") {
        if (!currentImages.length) return;

        currentIndex = (currentIndex + 1) % currentImages.length;
        modalImage.src = currentImages[currentIndex].src;
    }

    if (e.key === "ArrowLeft") {
        if (!currentImages.length) return;

        currentIndex =
            (currentIndex - 1 + currentImages.length) %
            currentImages.length;

        modalImage.src = currentImages[currentIndex].src;
    }
});