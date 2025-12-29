const noticias = [
  {
    titulo: "Victoria clave en casa",
    fecha: "29 Dic 2025",
    imagen: "img/noticia1.jpg",
    resumen: "El equipo logró una victoria importante...",
    link: "#"
  },
  {
    titulo: "Nuevo refuerzo confirmado",
    fecha: "27 Dic 2025",
    imagen: "img/noticia2.jpg",
    resumen: "El club anuncia una nueva incorporación...",
    link: "#"
  }
];

const grid = document.querySelector(".news-grid");

noticias.forEach(noticia => {
  grid.innerHTML += `
    <article class="news-card fade-up">
      <img src="${noticia.imagen}">
      <div class="news-content">
        <span class="news-date">${noticia.fecha}</span>
        <h3>${noticia.titulo}</h3>
        <p>${noticia.resumen}</p>
        <a href="${noticia.link}">Leer más →</a>
      </div>
    </article>
  `;
});
