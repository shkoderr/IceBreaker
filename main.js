//PARALLAX-EFFECT
const parallaxItems = document.querySelectorAll('.parallax-item');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  parallaxItems.forEach((item) => {
    const speed = 1.2;
    const initialOffset = 3800;
    const translateX = -scrollY * speed + initialOffset;

    item.style.transform = `translateX(${translateX}px)`;
  });
});