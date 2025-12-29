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



const reveals = document.querySelectorAll(".player-card");

const revealOnScroll = () => {
  reveals.forEach(card => {
    const top = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      card.classList.add("active");
      card.classList.add("reveal");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);




const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));



const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
