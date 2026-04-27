let nombres = ["Alejandro","Ezequiel","Alex","Facundo","Muricio","Rita"];

let mostrarNombres = n => {
    for (let i=0; i<n.length; i++)
        console.log(n[i]);
}
let nombreMayor = n => {
    let mayor = n[0];
    for (let i=1; i<n.length; i++)
        if (n[i].length > mayor.length)
            mayor = n[i];
    return mayor;
}

mostrarNombres(nombres);
console.log(`El nombre mas largo es: ${nombreMayor(nombres)}`);