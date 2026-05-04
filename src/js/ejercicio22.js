import { mostrarTexto } from '../services/serviceEjercicio22.js';

const input = document.querySelector('#inputTexto');
const parrafo = document.querySelector('#textoMostrado');

input.addEventListener('input', () => {
    mostrarTexto(input.value, parrafo);
});