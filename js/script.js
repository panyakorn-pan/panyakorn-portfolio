// ==========================================================================
// Panyakorn Singhadoung — Portfolio interactions
// ==========================================================================

// ==========================================================================
// ม่านเปลี่ยนหน้า (page transition) — ตอนกดลิงก์ในเว็บ ให้ม่านปิดก่อนแล้วค่อยเปลี่ยนหน้า
// ตอน "เปิด" หน้าใหม่ ม่านจะจางหายเองด้วย CSS ไม่เกี่ยวกับ JS ตรงนี้
// (ถ้าโค้ดนี้พัง ลิงก์ก็ยังกดได้ปกติ แค่ไม่มีจังหวะม่าน)
// ==========================================================================
(() => {
  const EXIT_MS = 320;                 // ต้องเท่ากับ curtainIn ใน css/style.css

  // กลับมาหน้านี้ด้วยปุ่ม back ของเบราว์เซอร์ ต้องเอาม่านออก ไม่ให้จอดำค้าง
  window.addEventListener('pageshow', () => document.body.classList.remove('is-leaving'));

  document.addEventListener('click', (e) => {
    // ปล่อยผ่านถ้าผู้ใช้กดพร้อมปุ่มพิเศษ (เจตนาเปิดแท็บใหม่) หรือคลิกปุ่มกลาง
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

    const link = e.target.closest('a[href]');
    if (!link) return;

    const href = link.getAttribute('href');
    // ข้ามลิงก์ที่ไม่ใช่การเปลี่ยนหน้าในเว็บ: เปิดแท็บใหม่ / ดาวน์โหลด / อีเมล / โทร / ลิงก์สมอ (#)
    if (link.target === '_blank' || link.hasAttribute('download')) return;
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;

    const url = new URL(href, location.href);
    if (url.origin !== location.origin) return;                  // ลิงก์ออกนอกเว็บ
    if (url.href === location.href) return;                      // ลิงก์หน้าเดิม
    if (url.pathname === location.pathname && url.hash) return;  // เลื่อนภายในหน้าเดิม

    e.preventDefault();
    document.body.classList.add('is-leaving');
    setTimeout(() => { location.href = url.href; }, EXIT_MS);
    // กันเหนียว: ถ้าเปลี่ยนหน้าไม่สำเร็จ อย่าปล่อยให้จอดำค้าง
    setTimeout(() => document.body.classList.remove('is-leaving'), 2500);
  });
})();

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
