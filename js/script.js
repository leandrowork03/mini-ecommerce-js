
/*script.js*/
document.getElementById('modo-noturno').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function mostrarSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function mudarSlide(direcao) {
  slideIndex = (slideIndex + direcao + slides.length) % slides.length;
  mostrarSlide(slideIndex);
}

// ⏱️ Avanço automático
setInterval(() => {
  mudarSlide(1);
}, 4000); // 4 segundos

