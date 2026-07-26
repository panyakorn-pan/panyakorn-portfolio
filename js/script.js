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

  // Language switch (TH / EN) — สลับข้อความที่มี data-lang="th" / data-lang="en"
  // ต้องทำงานก่อน reveal observer ด้านล่าง เพื่อไม่ให้ไปจับข้อความภาษาที่ถูกซ่อนอยู่
  const langSwitch = document.getElementById('langSwitch');
  if (langSwitch) {
    const applyLang = (lang, isInitial) => {
      // การซ่อน/แสดงข้อความ ทำโดย CSS ผ่านค่านี้ (ดู [data-lang] ใน css/style.css)
      document.documentElement.dataset.activeLang = lang;
      // ตอนกดสลับภาษา ต้องบังคับให้เห็นเลย เพราะ reveal observer ไม่จับ element ที่เคยถูกซ่อนอยู่
      if (!isInitial) {
        document.querySelectorAll('[data-lang="' + lang + '"]').forEach((el) => {
          el.classList.add('visible');
        });
      }
      langSwitch.querySelectorAll('.lang-btn').forEach((btn) => {
        btn.classList.toggle('active', btn.dataset.setLang === lang);
      });
      localStorage.setItem('siteLang', lang);
    };
    langSwitch.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => applyLang(btn.dataset.setLang, false));
    });
    applyLang(localStorage.getItem('siteLang') || 'th', true);
  }

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
