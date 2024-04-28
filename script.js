let pantalla = document.getElementById("display");
let borrarNumero = document.getElementById("erase");
let limpiarPantalla = document.getElementById("clear");

window.onload = () => {
    pantalla.value = "";
};

function agregarNumero(valor) {
    pantalla.value += valor;
}

function calcular() {
    const displayValue = pantalla.value
    const result = eval(displayValue);
    pantalla.value = result;
}

limpiarPantalla.addEventListener("click", () => {
    pantalla.value = "";
})

borrarNumero.addEventListener("click", () => {
    pantalla.value = pantalla.value.substring(0, pantalla.value.length - 1);
});