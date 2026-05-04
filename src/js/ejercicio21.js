const selectPaises = document.getElementById('paises');
const selectCapitales = document.getElementById('capitales');
selectPaises.addEventListener('change', function() {
    const valorSeleccionado = selectPaises.value;
    selectCapitales.value = valorSeleccionado;
    const nombrePais = selectPaises.options[selectPaises.selectedIndex].text;
    const nombreCapital = selectCapitales.options[selectCapitales.selectedIndex].text;
    console.log(`Selección actual -> País: ${nombrePais} | Capital: ${nombreCapital}`);
});