const modal = document.getElementById("playerModal");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".player-card").forEach(card => {
  card.addEventListener("click", () => {

    if (card.classList.contains("staff")) return;

    modal.style.display = "flex";

    document.getElementById("modalName").innerText = card.dataset.name;
    document.getElementById("modalPosition").innerText = card.dataset.position;

    document.getElementById("statPartidos").innerText = card.dataset.partidos;
    document.getElementById("statGoles").innerText = card.dataset.goles;
    document.getElementById("statAsistencias").innerText = card.dataset.asistencias;
  });
});

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = e => {
  if (e.target === modal) modal.style.display = "none";
};
