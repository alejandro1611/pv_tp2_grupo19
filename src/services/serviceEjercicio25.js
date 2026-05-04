export function cambiarColor() {
    let colores = ["red", "blue", "green", "yellow", "purple", "white", "maroon"];
    let indice = Math.floor(Math.random() * colores.length);
    return colores[indice];
}