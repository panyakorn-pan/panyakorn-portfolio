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

  // ชื่อที่จะโชว์บนปุ่มกรองของแต่ละกลุ่ม — เพิ่มกลุ่มใหม่ให้มาเพิ่มชื่อตรงนี้ด้วย
  const GROUP_LABELS = {
    'mainframe': 'Mainframe',
    'other-skills': 'Other Skills',
    'my-work': 'My Work'
  };

  // หน้าไหนแสดงกลุ่มไหน อ่านจาก data-groups บน #portfolioGrid ในไฟล์ .html
  //   portfolio.html -> data-groups="mainframe,other-skills"  (มีปุ่มกรอง 2 ปุ่ม)
  //   mywork.html    -> data-groups="my-work"                 (กลุ่มเดียว ไม่ต้องมีปุ่มกรอง)
  // ทำแบบนี้เพื่อให้ไฟล์นี้ใช้ซ้ำได้ทั้งสองหน้า ไม่ต้องมีโค้ดวาดการ์ดสองชุด
  const groups = (grid.dataset.groups || 'mainframe,other-skills')
    .split(',').map((s) => s.trim()).filter(Boolean);

  const FILTERS = groups.map((key) => ({ key, label: GROUP_LABELS[key] || key }));
  const DEFAULT_FILTER = groups[0];

  // จำแท็บที่เลือกไว้ เพื่อให้กด "Back to Hall of Frame" จากหน้ารายละเอียดงาน
  // แล้วกลับมาอยู่แท็บเดิม ไม่เด้งกลับ Mainframe ทุกครั้ง
  // ⚠️ ต้องครอบ try/catch เพราะ Safari โหมดส่วนตัว / เครื่องที่ปิดคุกกี้
  //    จะโยน error ทันทีที่แตะ localStorage แล้วโค้ดที่เหลือจะไม่ทำงานเลย
  const FILTER_KEY = 'hofFilter';
  const readSavedFilter = () => {
    try { return localStorage.getItem(FILTER_KEY); } catch (e) { return null; }
  };
  const saveFilter = (key) => {
    try { localStorage.setItem(FILTER_KEY, key); } catch (e) { /* จำไม่ได้ก็ไม่เป็นไร */ }
  };

  // ต้องเช็คว่าค่าที่จำไว้ยังตรงกับแท็บที่มีอยู่จริง เผื่อวันหลังเปลี่ยนชื่อ/ลบแท็บ
  // ไม่งั้นจะกรองด้วยค่าที่ไม่มีอยู่ แล้วหน้าจะว่างเปล่าโดยไม่มี error เตือน
  const saved = readSavedFilter();
  let activeFilter = FILTERS.some((f) => f.key === saved) ? saved : DEFAULT_FILTER;

  PROJECTS.forEach((project) => {
    const card = document.createElement('a');
    card.className = 'project-card reveal';
    // ปกติกดการ์ดแล้วไปหน้า project.html (หน้ารายละเอียดกลางที่ใช้ร่วมกันทุกงาน)
    // แต่ถ้าผลงานชิ้นไหนใส่ฟิลด์ url ไว้ จะลิงก์ไปหน้าพิเศษของตัวเองแทน
    card.href = project.url || ('project.html?slug=' + encodeURIComponent(project.slug));
    card.dataset.group = project.group || '';

    const thumb = document.createElement('div');
    thumb.className = 'project-thumb';
    // งานในกลุ่ม my-work ใช้รูปชิ้นส่วนถ่ายบนพื้นขาว ต้องแสดงคนละแบบ
    // (พื้นการ์ดสว่าง + เห็นชิ้นส่วนเต็มตัวไม่โดนครอป) ดูรายละเอียดที่ .project-thumb--part ใน css
    if (project.group === 'my-work') thumb.classList.add('project-thumb--part');

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

    // ป้ายหมวดหมู่ — ใส่ได้ทั้งป้ายเดียว ('Conference')
    // หรือหลายป้ายเป็นลิสต์ (['Conference', 'International'])
    const badges = document.createElement('div');
    badges.className = 'project-badges';
    const cats = Array.isArray(project.category) ? project.category : [project.category];
    cats.filter(Boolean).forEach((name) => {
      const badge = document.createElement('span');
      badge.className = 'project-badge';
      badge.textContent = name;
      badges.appendChild(badge);
    });

    const title = document.createElement('h3');
    title.className = 'project-card__title';
    title.textContent = project.title;

    // แถบท้ายการ์ด บอกให้รู้ว่ากดเข้าไปดูได้ — ต้องเห็นตลอดเวลา ไม่ใช่โผล่ตอนเอาเมาส์ชี้
    // (บนมือถือไม่มีการชี้ ถ้าใช้เอฟเฟกต์ hover อย่างเดียว คนจะไม่รู้เลยว่ากดได้)
    const cta = document.createElement('span');
    cta.className = 'project-cta';
    cta.textContent = 'View Project';

    body.appendChild(badges);
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

  // มีกลุ่มเดียว (เช่นหน้า My Work) ไม่ต้องมีปุ่มกรอง — ปุ่มเดียวโดดๆ กดแล้วไม่เกิดอะไรขึ้น ดูงง
  if (filtersWrap && FILTERS.length > 1) {
    FILTERS.forEach((f) => {
      const pill = document.createElement('button');
      pill.type = 'button';
      pill.className = 'filter-pill';
      pill.dataset.key = f.key;
      pill.textContent = f.label;
      pill.addEventListener('click', () => {
        activeFilter = f.key;
        saveFilter(f.key);   // จำไว้ เพื่อให้กลับมาหน้านี้แล้วยังอยู่แท็บเดิม
        applyFilter();
      });
      filtersWrap.appendChild(pill);
    });
  }
  // เรียกเสมอ ไม่ว่าจะมีปุ่มกรองหรือไม่ ไม่งั้นหน้าที่มีกลุ่มเดียวจะโชว์ผลงานทุกชิ้นปนกัน
  applyFilter();
});
