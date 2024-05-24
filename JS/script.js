document.addEventListener("DOMContentLoaded", function() {
    // Efecto de desvanecimiento en las secciones al entrar en el campo de visión
    const sections = document.querySelectorAll('.fade-in');
    const options = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Validación en tiempo real del formulario de contacto
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const formMessage = document.getElementById('formMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            formMessage.textContent = "Formulario enviado correctamente.";
            formMessage.style.color = "#28a745";
        } else {
            formMessage.textContent = "Por favor, completa todos los campos correctamente.";
            formMessage.style.color = "#dc3545";
        }
    });

    function validateForm() {
        let isValid = true;

        if (nameInput.value.trim() === '') {
            isValid = false;
            nameInput.classList.add('is-invalid');
        } else {
            nameInput.classList.remove('is-invalid');
            nameInput.classList.add('is-valid');
        }

        if (!validateEmail(emailInput.value.trim())) {
            isValid = false;
            emailInput.classList.add('is-invalid');
        } else {
            emailInput.classList.remove('is-invalid');
            emailInput.classList.add('is-valid');
        }

        if (messageInput.value.trim() === '') {
            isValid = false;
            messageInput.classList.add('is-invalid');
        } else {
            messageInput.classList.remove('is-invalid');
            messageInput.classList.add('is-valid');
        }

        return isValid;
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});

$(window).scroll(function(){
    var navTop =  $(window).scrollTop();
    $('.model-0').css("top", navTop + 50);
   });
   
   let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;



document.addEventListener('mousemove', function(e) {
    const astronaut = document.querySelector('.astronaut');
    const gameContainer = document.querySelector('.game-container');
    const rect = gameContainer.getBoundingClientRect();

    const x = e.clientX - rect.left - astronaut.offsetWidth / 2;
    const y = e.clientY - rect.top - astronaut.offsetHeight / 2;

    astronaut.style.transform = `translate(${x}px, ${y}px)`;
});

