import { peliculas } from './peliculas.js';
let cards = document.getElementById("cards");

peliculas.forEach((peli) => {
    let card = document.createElement("div")
    card.classList.add("card");
    let img = document.createElement("img");
    img.src = peli.imagen;
    let title = document.createElement("h2");
    title.innerText = peli.titulo;
    let descripcion = document.createElement("p");
    descripcion.innerText = peli.descripcion;
    let director = document.createElement("p");
    director.innerText = peli.director;
    let anio = document.createElement("p");
    anio.innerText = peli.anio;

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(descripcion);
    card.appendChild(director);
    card.appendChild(anio);

    cards.appendChild(card)
})