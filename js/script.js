// ==========================================================================
// Panyakorn Singhadoung — Portfolio interactions
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Navbar background on scroll
  const navbar = document.getElementById('navbar');
  const scrollTopBtn = document.getElementById('scrollTop');
  const onScroll = () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    if (window.scrollY > 400) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  };
  window.addEventListener('scroll', onScroll);
  onScroll();

  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navMenu.classList.toggle('open');
  });
  // Close mobile menu when a link is clicked
  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('open');
      navMenu.classList.remove('open');
    });
  });

  // Scroll reveal animation
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach((el) => revealObserver.observe(el));

  // Scroll-to-top button behavior
  scrollTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Auto-playing photo slideshow (About page childhood story)
  const childhoodSlides = document.querySelectorAll('.childhood-slide');
  if (childhoodSlides.length > 1) {
    let currentSlide = 0;
    setInterval(() => {
      childhoodSlides[currentSlide].classList.remove('is-active');
      currentSlide = (currentSlide + 1) % childhoodSlides.length;
      childhoodSlides[currentSlide].classList.add('is-active');
    }, 4500);
  }
});
