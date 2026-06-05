emailjs.init("pfhOiOx0dCbv8uV-X");

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const templateParams = {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    emailjs.send(
        "service_3ls1d6q",
        "template_qk1i0d3",
        templateParams
    )
    .then(() => {

        alert("Message sent successfully!");

        form.reset();

    })
    .catch((error) => {

        alert("Failed to send message.");

        console.log(error);

    });

});