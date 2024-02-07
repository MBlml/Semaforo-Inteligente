document.addEventListener("DOMContentLoaded", function() {
    var loginButton = document.getElementById("loginButton");
    var loginMessage = document.getElementById("loginMessage");

    loginButton.addEventListener("click", function(event) {
        // Evita el comportamiento predeterminado del botón (evita recargar la página)
        event.preventDefault();

        loginMessage.style.display = 'flex';

        // Muestra el mensaje y crea el botón AgreeButton
        loginMessage.innerHTML = '<h1>Inicio de sesión exitoso</h1><button id="AgreeButton">Aceptar</button>';

        // Ahora que el botón AgreeButton existe en el DOM, podemos agregar el evento
        var AgreeButton = document.getElementById("AgreeButton");
        AgreeButton.addEventListener("click", function(event) {
            // Evita el comportamiento predeterminado del botón (evita recargar la página)
            event.preventDefault();
            loginMessage.style.display = 'none';
        });
    });
});