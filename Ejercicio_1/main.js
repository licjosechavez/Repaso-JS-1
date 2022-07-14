let btn = document.getElementById("boton");
let opciones = document.getElementById("navItems");

btn.addEventListener("click", () => {
    opciones.classList.toggle("show");
})