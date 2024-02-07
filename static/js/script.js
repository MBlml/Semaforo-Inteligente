document.addEventListener("DOMContentLoaded", function() {
    var loginButton = document.getElementById("loginButton");
    var loginMessage = document.getElementById("loginMessage");
    var showPassword = document.getElementById("showPassword");
    var hidePassword = document.getElementById("hidePassword");
    var passwordInput = document.getElementById("passwordInput");

    // Agregar evento al botón de inicio de sesión
    loginButton.addEventListener("click", function(event) {
        // Evitar comportamiento predeterminado del botón (evitar recargar la página)
        event.preventDefault();

        loginMessage.style.display = 'flex';

        // Mostrar el mensaje y crear el botón AgreeButton
        loginMessage.innerHTML = '<h1>Inicio de sesión exitoso</h1><button id="AgreeButton">Aceptar</button>';

        // Agregar evento al botón AgreeButton
        var AgreeButton = document.getElementById("AgreeButton");
        AgreeButton.addEventListener("click", function(event) {
            // Evitar comportamiento predeterminado del botón (evitar recargar la página)
            event.preventDefault();
            loginMessage.style.display = 'none';
        });
    });

    // Agregar evento a la imagen para alternar la visibilidad de la contraseña
    showPassword.addEventListener('click', function() {
        passwordInput.type = 'text';
        showPassword.style.display = 'none';
        hidePassword.style.display = 'block';
    });

    hidePassword.addEventListener('click', function() {
        passwordInput.type = 'password';
        showPassword.style.display = 'block';
        hidePassword.style.display = 'none';
    });
});
