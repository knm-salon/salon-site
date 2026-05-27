const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const closeBtn = document.getElementById('closeBtn');

hamburger.addEventListener('click', () => {
  nav.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  nav.classList.remove('active');
});

const fadeElements = document.querySelectorAll('.fade-in');

const fadeInOnScroll = () => {

  fadeElements.forEach((element) => {

    const elementTop =
      element.getBoundingClientRect().top;

    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      element.classList.add('show');
    }

  });

};

window.addEventListener('scroll', fadeInOnScroll);

fadeInOnScroll();