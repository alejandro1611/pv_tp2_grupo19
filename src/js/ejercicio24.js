import { mostrarSeleccion } from "../services/serviceEjercicio24.js";

document.addEventListener("DOMContentLoaded", () => {

    const radios = document.querySelectorAll('#formulario input[type="radio"]');
    const contenedor = document.querySelector('#resultado');

    radios.forEach(radio => {
        radio.addEventListener("change", (e) => {

            const valor = e.target.value;

            contenedor.innerHTML = ''; 
            contenedor.appendChild(mostrarSeleccion(valor));

            console.log(valor);
        });
    });

});