
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Mobile navigation
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close menu after clicking a navigation link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
    });
});



// FORGEFIT WHATSAPP ENQUIRY FORM

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("contactName").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const phone = document.getElementById("contactPhone").value.trim();
        const message = document.getElementById("contactMessage").value.trim();

        const whatsappNumber = "918488884838";

        const whatsappMessage =
            `Hello FORGEFIT!\n\n` +
            `I am interested in joining your gym.\n\n` +
            `Name: ${name}\n` +
            `Email: ${email}\n` +
            `Phone: ${phone}\n` +
            `Message: ${message}`;

        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(whatsappURL, "_blank");
    });
}


// FORGEFIT MEMBERSHIP WHATSAPP ENQUIRY

const membershipButtons = document.querySelectorAll(".membership-button");

membershipButtons.forEach(button => {

    button.addEventListener("click", function (event) {

        event.preventDefault();

        const plan = this.dataset.membership;
        const price = this.dataset.price;

        const whatsappNumber = "918488884838";

        const message =
            `Hello FORGEFIT!\n\n` +
            `I am interested in joining your gym.\n\n` +
            `Membership Plan: ${plan}\n` +
            `Price: ${price}\n\n` +
            `Please share more details about this membership.`;

        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappURL, "_blank");

    });

});

// FORGEFIT PROGRAM WHATSAPP ENQUIRY

document.querySelectorAll(".program-card a[data-program]").forEach(button => {

    button.addEventListener("click", function (event) {

        event.preventDefault();

        const program = this.getAttribute("data-program");

        const whatsappNumber = "918488884838";

        const message =
            `Hello FORGEFIT!\n\n` +
            `I am interested in your fitness program.\n\n` +
            `Program: ${program}\n\n` +
            `Please share more details about this program.`;

        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappURL, "_blank");

    });

});