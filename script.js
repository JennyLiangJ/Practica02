document.querySelector("button").onclick = function (event) {

    event.preventDefault();

    let nombre = document.querySelector('input[type="text"]').value;
    let contacto = document.querySelector('input[type="email"]').value;
    let fecha = document.querySelector('input[type="date"]').value;
    let personas = document.querySelector('input[type="number"]').value;
    let comentarios = document.querySelector("textarea").value;

    let hoy = new Date().toISOString().split("T")[0];

    if (nombre === "" || contacto === "" || fecha === "" || personas === "" || comentarios === "") {
        alert("Debe completar todos los campos.");
    }
    else if (personas <= 0) {
        alert("Ingresar número de personas válido.");
    }
    else if (fecha < hoy) {
        alert("La fecha no puede ser anterior a la fecha actual.");
    }
    else if (!contacto.includes("@") || !contacto.includes(".")) {
        alert("Debe ingresar un contacto válido.");
    }
    else {
        alert(
            "Reserva realizada para " + nombre +
            "\nContacto: " + contacto +
            "\nFecha: " + fecha +
            "\nPersonas: " + personas +
            "\nComentarios: " + comentarios
        );
    }

};