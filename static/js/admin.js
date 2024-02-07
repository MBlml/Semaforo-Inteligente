function showMessage(option) {
    var title = "";
    var content = "";

    // Configurar título y contenido del mensaje según la opción seleccionada
    switch(option) {
        case 'usuarios':
            title = "Usuarios";
            content = "Este es el contenido de la sección Usuarios.";
            break;
        case 'monitoreo':
            title = "Monitoreo";
            content = "Este es el contenido de la sección Monitoreo.";
            break;
        case 'recursos':
            title = "Recursos";
            content = "Este es el contenido de la sección Recursos.";
            break;
        case 'configuracion':
            title = "Configuración";
            content = "Este es el contenido de la sección Configuración.";
            break;
        default:
            break;
    }

    // Mostrar el mensaje
    document.getElementById("messageTitle").innerText = title;
    document.getElementById("messageContent").innerText = content;
    document.getElementById("messageContainer").style.display = "block";
}

function hideMessage() {
    // Ocultar el mensaje
    document.getElementById("messageContainer").style.display = "none";
}
