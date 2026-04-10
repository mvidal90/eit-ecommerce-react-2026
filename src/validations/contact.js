

export const regexPatternsContact = {
    name: /^[a-zA-ZáéíóúñÁÉÍÓÚÑ'\-\s]{2,100}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    subject: /^[\w\s.,!¡¿?\""'\-]{3,150}$/,
    body: /^[\s\S]{10,2000}$/
};

export const contactErrorsMessages = {
    name: "El nombre completo debe tener entre 2 y 100 caracteres y solo puede contener letras, espacios, apóstrofes y guiones.",
    email: "Por favor ingresa un correo electrónico válido.",
    subject: "El asunto debe tener entre 3 y 150 caracteres y puede incluir letras, números, espacios y signos de puntuación básicos.",
    body: "El mensaje debe tener entre 10 y 2000 caracteres."
}