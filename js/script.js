const botonAumentar = document.getElementById("aumentar");
const botonDisminuir = document.getElementById("disminuir");
const botonResetear = document.getElementById("resetear");

const mostrarValorContador = document.getElementById("contador");


let contador = 0;

botonAumentar.addEventListener("click", function aumentarValor() {
    contador = contador + 1;
    ActualizarContador();
    
});

botonDisminuir.addEventListener("click", function disminuirValor() {
    contador = contador - 1;
    ActualizarContador();
});

botonResetear.addEventListener("click", function resetearValor() {
    contador = 0;
    ActualizarContador();
});

function ActualizarContador() {
    mostrarValorContador.textContent = contador;
}

const botonCambiarTema = document.getElementById("cambiar_tema");

botonCambiarTema.addEventListener("click", function cambiarTema() {
    document.body.classList.toggle("tema-oscuro");
});
