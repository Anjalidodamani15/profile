document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {

        event.preventDefault(); // stop form default submit

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (name === "") {
            alert("Please enter your name.");
            return;
        }

        if (!email.match(emailPattern)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (message === "") {
            alert("Please enter your message.");
            return;
        }

        alert("Message sent successfully!");
        form.reset(); // clear form after success
    });

});