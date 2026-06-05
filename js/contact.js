const form = document.getElementById("contactForm");
const result = document.getElementById("form-result");

emailjs.init({
    publicKey: "z73CIGVxohDQ45oeI"
});

form.addEventListener("submit", function (e) {

    e.preventDefault();

    result.textContent = "Sending...";
    result.style.color = "#344e41";

    emailjs.sendForm(
        "service_42pcggg",
        "template_n0s94bm",
        this
    )
    .then(() => {

        result.textContent =
            "✓ Message sent successfully!";

        result.style.color = "green";

        form.reset();

    })
    .catch((error) => {

        console.error(error);

        result.textContent =
            "✗ Failed to send message.";

        result.style.color = "red";
    });

});