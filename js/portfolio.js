// ==========================================================================
// Panyakorn Singhadoung — Hall of Frame grid renderer
// วาดการ์ดผลงานจาก PROJECTS (js/projects-data.js) — การ์ดแต่ละใบกดแล้วไปหน้า project.html
// ==========================================================================

function buildImagePlaceholder(path) {
  const wrap = document.createElement('div');
  wrap.className = 'media-placeholder';
  wrap.innerHTML =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="M21 15l-5-5L5 21"/></svg>' +
    '<p>[แก้ไขตรงนี้: ใส่รูปที่ ' + path + ']</p>';
  return wrap;
}

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('portfolioGrid');
  const filtersWrap = document.getElementById('portfolioFilters');
  if (!grid || typeof PROJECTS === 'undefined') return;

  const FILTERS = [
    { key: 'mainframe', label: 'Mainframe' },
    { key: 'other-skills', label: 'Other Skills' }
  ];
  let activeFilter = 'mainframe';

  PROJECTS.forEach((project) => {
    const card = document.createElement('a');
    card.className = 'project-card reveal';
    card.href = 'project.html?slug=' + encodeURIComponent(project.slug);
    card.dataset.group = project.group || '';

    const thumb = document.createElement('div');
    thumb.className = 'project-thumb';

    // ชั้นทับรูปตอนเอาเมาส์ชี้ (รูปมืดลง + ขึ้นข้อความ) — แก้ข้อความได้ที่บรรทัดล่างนี้
    // CSS สั่งให้โผล่เฉพาะเครื่องที่มีเมาส์จริง มือถือจะไม่ขึ้น (กันค้างหลังแตะ)
    const overlay = document.createElement('span');
    overlay.className = 'project-thumb__overlay';
    overlay.textContent = 'Click here to read more details';

    const thumbSrc = project.images && project.images[0];
    if (thumbSrc) {
      const img = document.createElement('img');
      img.src = thumbSrc;
      img.alt = project.title;
      img.onerror = () => {
        // ลบแค่รูปที่พัง ห้ามล้าง thumb ทั้งก้อน ไม่งั้น overlay จะหายไปด้วย
        img.remove();
        thumb.insertBefore(buildImagePlaceholder(thumbSrc), overlay);
      };
      thumb.appendChild(img);
    }
    thumb.appendChild(overlay);   // ต่อท้ายเสมอ เพื่อให้ทับอยู่บนสุด

    const body = document.createElement('div');
    body.className = 'project-card__body';

    const badge = document.createElement('span');
    badge.className = 'project-badge';
    badge.textContent = project.category;

    const title = document.createElement('h3');
    title.className = 'project-card__title';
    title.textContent = project.title;

    // แถบท้ายการ์ด บอกให้รู้ว่ากดเข้าไปดูได้ — ต้องเห็นตลอดเวลา ไม่ใช่โผล่ตอนเอาเมาส์ชี้
    // (บนมือถือไม่มีการชี้ ถ้าใช้เอฟเฟกต์ hover อย่างเดียว คนจะไม่รู้เลยว่ากดได้)
    const cta = document.createElement('span');
    cta.className = 'project-cta';
    const ctaText = document.createElement('span');
    ctaText.textContent = 'View Project';
    const ctaArrow = document.createElement('span');
    ctaArrow.className = 'project-cta__arrow';
    ctaArrow.setAttribute('aria-hidden', 'true');
    ctaArrow.textContent = '↗';
    cta.appendChild(ctaText);
    cta.appendChild(ctaArrow);

    body.appendChild(badge);
    body.appendChild(title);
    body.appendChild(cta);

    card.appendChild(thumb);
    card.appendChild(body);
    grid.appendChild(card);
  });

  function applyFilter() {
    grid.querySelectorAll('.project-card').forEach((card) => {
      const matches = card.dataset.group === activeFilter;
      card.classList.toggle('is-hidden', !matches);
    });
    filtersWrap.querySelectorAll('.filter-pill').forEach((pill) => {
      pill.classList.toggle('active', pill.dataset.key === activeFilter);
    });
  }

  if (filtersWrap) {
    FILTERS.forEach((f) => {
      const pill = document.createElement('button');
      pill.type = 'button';
      pill.className = 'filter-pill';
      pill.dataset.key = f.key;
      pill.textContent = f.label;
      pill.addEventListener('click', () => {
        activeFilter = f.key;
        applyFilter();
      });
      filtersWrap.appendChild(pill);
    });
    applyFilter();
  }
});
