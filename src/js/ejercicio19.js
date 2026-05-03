import { cambiarTexto, textoNuevo, textoOriginal } from "../services/serviceEjercicio19.js";

console.log("el js esta conectado");
document.addEventListener('DOMContentLoaded', () =>{
    const parrafo = document.querySelector('#textoPrincipal');
    const boton = document.querySelector('#botonCambiar');
    if (boton && parrafo) {
         boton.addEventListener ('click', () => {
            if (parrafo.textContent === textoOriginal){
                parrafo.textContent = textoNuevo;
                parrafo.style.color = "#28a745";
            }
            else{
                parrafo.textContent = textoOriginal;
                parrafo.style.color = "#e0e0e0"
            }

        });
        
    }
    
});