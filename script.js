// =========================
// MENU MOBILE
// =========================

const menuButton = document.querySelector("#menuButton");

const navMenu = document.querySelector("#navMenu");


menuButton.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


// =========================
// FECHAR MENU AO CLICAR
// =========================

const navLinks = document.querySelectorAll(
    ".nav-menu a"
);


navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// =========================
// FORMULÁRIO
// =========================

const contactForm =
    document.querySelector("#contactForm");

const formMessage =
    document.querySelector("#formMessage");


// ==================================================
// NÚMERO DO WHATSAPP DA CLÍNICA
// ==================================================
//
// Formato:
// 55 + DDD + número
//
// Exemplo:
// (19) 98765-4321
//
// Fica:
// 5519987654321
//
// NÃO coloque:
// +
// espaços
// parênteses
// hífen
//
// ==================================================

const whatsappNumber =
    "5519992817355";


// =========================
// ENVIO DO FORMULÁRIO
// =========================

contactForm.addEventListener(
    "submit",
    (event) => {

        // Impede o formulário
        // de recarregar a página

        event.preventDefault();


        // =========================
        // CAPTURA DOS DADOS
        // =========================

        const name =
            document
                .querySelector("#name")
                .value
                .trim();


        const phone =
            document
                .querySelector("#phone")
                .value
                .trim();


        const message =
            document
                .querySelector("#message")
                .value
                .trim();


        // =========================
        // VALIDAÇÃO
        // =========================

        if (name === "") {

            formMessage.textContent =
                "Por favor, informe seu nome.";

            return;
        }


        if (phone === "") {

            formMessage.textContent =
                "Por favor, informe seu telefone.";

            return;
        }


        // =========================
        // MENSAGEM DO WHATSAPP
        // =========================

        const whatsappMessage =
            `Olá! Gostaria de agendar uma consulta odontológica.

Nome: ${name}

Telefone: ${phone}

Mensagem: ${
    message ||
    "Gostaria de saber os horários disponíveis."
}`;


        // =========================
        // CODIFICAR MENSAGEM
        // =========================

        const encodedMessage =
            encodeURIComponent(
                whatsappMessage
            );


        // =========================
        // CRIAR URL
        // =========================

        const whatsappUrl =
            `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;


        // =========================
        // ABRIR WHATSAPP
        // =========================

        window.location.href =
            whatsappUrl;

    }
);