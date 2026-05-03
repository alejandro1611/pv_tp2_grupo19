import { cambiarColor } from "../services/serviceEjercicio25.js";

let boton = document.getElementById("color");

boton.addEventListener("click", function () {
    let color = cambiarColor();

    document.body.style.backgroundColor = color;

    console.log(`Color cambiado a: ${color}`);
});