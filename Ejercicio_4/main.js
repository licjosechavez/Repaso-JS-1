let form = document.getElementById("form");
let btn = document.getElementById("add");
let tarea = document.getElementById("tarea");
let tareasLista = document.getElementById("tareas");
let localTareas = localStorage.getItem("tareas");
let items = localTareas ? localTareas : [];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let item = tarea.value;
    tarea.value = "";
    
    items = [...items, item];
    localStorage.setItem("tareas", items);

    createHTML(items)
})

function createHTML(tareas) {
    tareasLista.innerHTML = "";
    tareas.forEach((tarea) => {
        let item = document.createElement("li");
        item.innerText = tarea;
        tareasLista.appendChild(item);
    })
}