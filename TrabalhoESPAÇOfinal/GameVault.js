/* GameVault.js */
document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel');
  const slidesEl = document.querySelector('.slides');
  const slideElems = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const indicators = document.querySelector('.indicators');

  let index = 0;
  const slideCount = slideElems.length;
  let dots;
  let auto;

  function createIndicators() {
    indicators.innerHTML = '';
    for (let i = 0; i < slideCount; i++) {
      const d = document.createElement('div');
      d.className = 'dot';
      if (i === 0) d.classList.add('active');
      d.addEventListener('click', () => {
        index = i;
        updateCarousel();
        resetAuto();
      });
      indicators.appendChild(d);
    }
    dots = indicators.querySelectorAll('.dot');
  }

  function updateCarousel() {
    const offset = -index * carousel.clientWidth; // usa pixels (robusto)
    slidesEl.style.transform = `translateX(${offset}px)`;
    if (dots) {
      dots.forEach(d => d.classList.remove('active'));
      dots[index].classList.add('active');
    }
  }

  function showNext() {
    index = (index < slideCount - 1) ? index + 1 : 0;
    updateCarousel();
  }

  function showPrev() {
    index = (index > 0) ? index - 1 : slideCount - 1;
    updateCarousel();
  }

  function resetAuto() {
    clearInterval(auto);
    auto = setInterval(showNext, 4000);
  }

  // eventos
  prevBtn.addEventListener('click', () => { showPrev(); resetAuto(); });
  nextBtn.addEventListener('click', () => { showNext(); resetAuto(); });
  window.addEventListener('resize', updateCarousel);
  carousel.addEventListener('mouseenter', () => clearInterval(auto));
  carousel.addEventListener('mouseleave', resetAuto);

  // init
  createIndicators();
  window.addEventListener('load', updateCarousel);
  auto = setInterval(showNext, 4000);
});

