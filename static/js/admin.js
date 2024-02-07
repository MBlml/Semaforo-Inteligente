function showMessage(option) {
    var title = "";
    var content = "";
    var buttonsHTML = ""; // Variable para almacenar el HTML de los botones

    switch(option) {
        case 'usuarios':
            title = "Usuarios";
            content = "Este es el contenido de la sección Usuarios.";
            buttonsHTML = '<button onclick="someAction1()" class="button-message">Agregar usuario</button>' +
                          '<button onclick="someAction2()" class="button-message">Modificar usuario</button>' +
                          '<button onclick="someAction3()" class="button-message">Eliminar usuario</button>' +
                          '<button onclick="someAction4()" class="button-message">Ver usuarios</button>';
            break;
        case 'monitoreo':
            title = "Monitoreo";
            content = "Este es el contenido de la sección Monitoreo.";
            buttonsHTML = '<button onclick="someAction6()" class="button-message" class="button-message">Botón 6</button>' +
                          '<button onclick="someAction7()" class="button-message" class="button-message">Botón 7</button>' +
                          '<button onclick="someAction8()" class="button-message" class="button-message">Botón 8</button>';
            break;
        case 'recursos':
            title = "Recursos";
            content = "Este es el contenido de la sección Recursos.";
            buttonsHTML = '<button onclick="someAction9()" class="button-message">Botón 9</button>' +
                          '<button onclick="someAction10()" class="button-message">Botón 10</button>';
            break;
        case 'configuracion':
            title = "Configuración";
            content = "Este es el contenido de la sección Configuración.";
            buttonsHTML = '<button onclick="someAction11()" class="button-message">Botón 11</button>' +
                          '<button onclick="someAction12()" class="button-message">Botón 12</button>' +
                          '<button onclick="someAction13()" class="button-message">Botón 13</button>';
            break;
        default:
            break;
    }

    document.getElementById("messageTitle").innerText = title;
    document.getElementById("messageContent").innerText = content;
    document.getElementById("messageButtons").innerHTML = buttonsHTML; // Insertar los botones
    document.getElementById("messageContainer").style.display = "block";
}

function hideMessage() {
    document.getElementById("messageContainer").style.display = "none";
}

