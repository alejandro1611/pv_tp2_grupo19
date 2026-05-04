const listaEstudiantes = [];

export const guardarEstudianteEnArray = (estudiante) => {
    listaEstudiantes.unshift(estudiante);
    console.log(listaEstudiantes);
    return listaEstudiantes;
};

export const mostrarEstudianteEnDOM = (estudiante) => {

    const fichaInfo = document.createElement('div');
    fichaInfo.className = 'ficha-info';


    fichaInfo.innerHTML = `
        <h3>Los datos ingresados son:</h3>
        <p><strong>Nombre:</strong> ${estudiante.nombre}</p>
        <p><strong>Apellido:</strong> ${estudiante.apellido}</p>
        <p><strong>Libreta Universitaria:</strong> ${estudiante.lu}</p>
    `;

    return fichaInfo;
};
