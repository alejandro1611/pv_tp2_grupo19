/*import { servicioAlfredoEzequielGonzalezLopez } from "../services/serviceAlfredoEzequielGonzalezLopez";
import { servicioRitaOntiveros } from "../services/serviceRitaOntiveros.js";
import { servicioCruzAlejandro } from "../services/serviceCruzAlejandro";
import { servicioFarfanFacundo } from "../services/serviceFarfanFacundoJoaquin";
import { servicioMorañaRoberto } from "../services/serviceMorañaRoberto";
import { servicioMauricioJosueVirazateTolaba } from "../services/serviceMauricioJosueVirazateTolaba";*/

import { guardarEstudianteEnArray, mostrarEstudianteEnDOM } from '../services/serviceEjercicio20.js';

document.addEventListener('DOMContentLoaded', () => {

    const formulario = document.querySelector('#form-carga');
    const contenedorResultado = document.querySelector('#resultado');

    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();

        const inputNombre = document.querySelector('#nombre');
        const inputApellido = document.querySelector('#apellido');
        const inputLU = document.querySelector('#lu');

        const estudiante = {
            id: Date.now(),
            nombre: inputNombre.value,
            apellido: inputApellido.value,
            lu: inputLU.value
        };

        guardarEstudianteEnArray(estudiante);

        contenedorResultado.innerHTML = '';
        contenedorResultado.appendChild(mostrarEstudianteEnDOM(estudiante));

        formulario.reset();
    });
});
