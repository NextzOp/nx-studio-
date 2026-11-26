
/* =========================
   NX STUDIO - INTERATIVIDADE
========================= */

// ANIMAÇÃO DE ENTRADA DAS SEÇÕES

const sections = document.querySelectorAll(
    ".about, .services, .projects, .contact"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }

    });

}, {
    threshold: 0.15
});

sections.forEach((section) => {

    section.classList.add("reveal");
    observer.observe(section);

});

// ANO AUTOMÁTICO DO RODAPÉ

const footer = document.querySelector(".footer");

if (footer) {

    const footerText = footer.querySelector("p");

    if (footerText) {

        footerText.innerHTML = footerText.innerHTML.replace(
            /\d{4}/,
            new Date().getFullYear()
        );

    }

}

console.log("NX Studio carregada com sucesso!");

// FORMULÁRIO DE ORÇAMENTO

const quoteForm = document.querySelector("#quote-form");

if (quoteForm) {

    quoteForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.querySelector("#client-name").value;
        const company = document.querySelector("#company-name").value;
        const email = document.querySelector("#client-email").value;
        const service = document.querySelector("#project-service").value;
        const description = document.querySelector("#project-description").value;

        const message = `
Olá! Conheci a NX Studio pelo site.

*SOLICITAÇÃO DE ORÇAMENTO*

Nome: ${name}
Empresa: ${company || "Não informada"}
E-mail: ${email}

Serviço desejado: ${service}

Descrição do projeto:
${description}
        `;

        const phone = "5544991498892";

        const whatsappURL =
            `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

        window.open(whatsappURL, "_blank");

    });

}

// MENU MOBILE

const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector("#nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("active");

        menuToggle.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Fechar menu" : "Abrir menu"
        );

    });

    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");
            menuToggle.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Abrir menu");

        });

    });

}