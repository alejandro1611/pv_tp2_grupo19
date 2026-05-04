import { mostrarTexto, cambiarColor } from "../services/serviceEjercicio23.js";

const inputTexto = document.getElementById("textoInput");
const resultado = document.getElementById("resultado");

inputTexto.addEventListener("input", () => {

    const texto = inputTexto.value;

    mostrarTexto(resultado, texto);

    cambiarColor(resultado, texto);

});