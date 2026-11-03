// Mobile Navigation Menu

const menuToggle = document.getElementById("menu-toggle");

const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "✕" : "☰";

});

// Close menu after clicking a navigation link

document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute("aria-expanded", "false");

    });

});

console.log("Bright Future Academy is running!");



const enquiryForm = document.getElementById("enquiry-form");
const formMessage = document.getElementById("form-message");

enquiryForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("student-name").value;
    const email = document.getElementById("student-email").value;
    const phone = document.getElementById("student-phone").value;
    const course = document.getElementById("student-course").value;

    // Academy WhatsApp number
    const academyNumber = "918488884838";

    // Create WhatsApp message
    const message =
        "Hello Bright Future Academy!" +
        "\n\nI want to enquire about admission." +
        "\n\nName: " + name +
        "\nEmail: " + email +
        "\nPhone: " + phone +
        "\nCourse: " + course;

    // Convert message into URL format
    const whatsappURL =
        "https://wa.me/" + academyNumber +
        "?text=" + encodeURIComponent(message);

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

    formMessage.style.color = "green";
    formMessage.textContent = "Your WhatsApp enquiry is ready. Please press Send in WhatsApp.";

    enquiryForm.reset();
});

