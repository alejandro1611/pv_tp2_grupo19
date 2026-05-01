export const mostrarTexto = (elemento, texto) => {
    elemento.textContent = texto;
};

export const cambiarColor = (elemento, texto) => {

    if (texto.length > 20) {
        elemento.style.backgroundColor = "lightcoral";
    } else {
        elemento.style.backgroundColor = "lightgray";
    }
};