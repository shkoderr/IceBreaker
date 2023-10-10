const headers = document.querySelectorAll('.accordeon__item-header');

//----PARALLAX-EFFECT----
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

//----PARALLAX FOR REVIEWS----
const reviewItems = document.querySelectorAll('.review-item');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  reviewItems.forEach((item) => {
    const speed = 3;
    const initialOffset = 29100;
    const translateX = -scrollY * speed + initialOffset;

    item.style.transform = `translateX(${translateX}px)`;
  });
});

//----ACCORDEON----
function showContent() {
  this.classList.toggle('active')
  const accordeonContent = this.nextElementSibling

  if (accordeonContent.style.maxHeight) {
    accordeonContent.style.maxHeight = null
  } else {
    //Сначала пробежимся циклом 'for' и закроем все остальные ответы:
    const accordeonContents = document.querySelectorAll('.accordeon__content')
    for (let i = 0; i < accordeonContents.length; i++) {
      if (accordeonContents[i] !== accordeonContent && accordeonContents[i].style.maxHeight) {
        accordeonContents[i].style.maxHeight = null
        accordeonContents[i].previousElementSibling.classList.remove('active')
      }
    }
    //Теперь откроем необходимый ответ:
    accordeonContent.style.maxHeight = accordeonContent.scrollHeight + 'px'
  }
}

