function initSlider() {
  const sliderRow = document.querySelector('.slider-row');
  const prevBtn = document.querySelector('.button-prev');
  const nextBtn = document.querySelector('.button-next');
  const indicators = document.querySelectorAll('.controls');
  const totalSlides = document.querySelectorAll('.slide').length;
  let currentIndex = 0;

  function updateIndicators() {
    indicators.forEach((el, i) => {
      el.classList.toggle('active', i === currentIndex);
    });
  }

  function goToSlide(index) {
    currentIndex = (index + totalSlides) % totalSlides;
    sliderRow.scrollTo({
      left: currentIndex * sliderRow.clientWidth,
      behavior: 'smooth'
    });
    updateIndicators();
  }

  prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
  nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));

  indicators.forEach((el, i) => {
    el.addEventListener('click', () => goToSlide(i));
  });

  
  updateIndicators();

 
  window.addEventListener('resize', () => {
    sliderRow.scrollLeft = currentIndex * sliderRow.clientWidth;
  });
}

document.addEventListener('DOMContentLoaded', function() {
  initSlider();
});