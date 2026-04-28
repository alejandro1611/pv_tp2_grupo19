const volumenEsfera = (radio) => (4 / 3) * Math.PI * Math.pow(radio, 3);

const radio = 4;

const volumen = volumenEsfera(radio);

console.log(`El volumen de la esfera es: ${volumen.toFixed(2)} m³`);