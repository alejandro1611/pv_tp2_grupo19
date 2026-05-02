export const mostrarSeleccion = (valor) => {

    const div = document.createElement('div');
    div.className = 'info-box';

    div.innerHTML = `
        <h3>Lenguaje seleccionado:</h3>
        <p>${valor}</p>
    `;

    return div;
};