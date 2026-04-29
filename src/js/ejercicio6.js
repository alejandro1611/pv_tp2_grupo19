const edades = [15, 23, 37, 42, 19, 28, 54, 31];

const mostrarEdades = arr => {
    for (let i = 0; i < arr.length; i++) {
        console.log(`Edad ${i + 1}: ${arr[i]}`);
    }
};

const calcularPromedio = arr => {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];
    }
    return suma / arr.length;
};

mostrarEdades(edades);
console.log(`Promedio de edades: ${calcularPromedio(edades)}`);