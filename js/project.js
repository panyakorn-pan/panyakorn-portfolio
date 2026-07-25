// ==========================================================================
// Panyakorn Singhadoung — Project detail page (project.html)
// อ่าน ?slug=... จาก URL แล้วดึงข้อมูลจาก PROJECTS (js/projects-data.js) มาแสดง
// พร้อมสไลด์รูปภาพ (ปุ่มลูกศร, จุดบอกตำแหน่ง, ปัดนิ้ว, ปุ่มลูกศรคีย์บอร์ด)
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
  if (typeof PROJECTS === 'undefined') return;

  const slug = new URLSearchParams(window.location.search).get('slug');
  const project = PROJECTS.find((p) => p.slug === slug) || PROJECTS[0];
  if (!project) return;

  document.title = project.title + ' | Panyakorn Singhadoung';
  document.getElementById('projectCategory').textContent = project.category;
  document.getElementById('projectTitle').textContent = project.title;
  document.getElementById('projectMeta').textContent = project.date || '';
  document.getElementById('projectDesc').textContent = project.description || '';

  const awardEl = document.getElementById('projectAward');
  if (project.award) {
    awardEl.innerHTML = project.award;
  } else {
    awardEl.remove();
  }

  const paperBtn = document.getElementById('projectPaperBtn');
  if (project.paper) {
    paperBtn.href = project.paper;
  } else {
    paperBtn.remove();
  }

  // ---------- Slider ----------
  const slider = document.getElementById('projectSlider');
  const track = document.getElementById('sliderTrack');
  const dotsWrap = document.getElementById('sliderDots');
  const thumbsWrap = document.getElementById('sliderThumbs');
  const images = (project.images && project.images.length) ? project.images : [];
  let current = 0;

  images.forEach((src, i) => {
    const slide = document.createElement('div');
    slide.className = 'project-slider__slide';
    const img = document.createElement('img');
    img.src = src;
    img.alt = project.title + ' — รูปที่ ' + (i + 1);
    img.onerror = () => {
      slide.innerHTML = '';
      slide.appendChild(buildImagePlaceholder(src));
    };
    img.addEventListener('click', () => openLightbox(i));
    slide.appendChild(img);
    track.appendChild(slide);

    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'project-slider__dot';
    dot.setAttribute('aria-label', 'ไปที่รูปที่ ' + (i + 1));
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);

    const thumb = document.createElement('button');
    thumb.type = 'button';
    thumb.className = 'project-slider__thumb';
    thumb.setAttribute('aria-label', 'ไปที่รูปที่ ' + (i + 1));
    const thumbImg = document.createElement('img');
    thumbImg.src = src;
    thumbImg.alt = '';
    thumbImg.onerror = () => { thumbImg.style.display = 'none'; };
    thumb.appendChild(thumbImg);
    thumb.addEventListener('click', () => goTo(i));
    thumbsWrap.appendChild(thumb);
  });

  if (images.length <= 1) {
    slider.classList.add('project-slider--single');
    thumbsWrap.hidden = true;
  }

  function update() {
    track.style.transform = 'translateX(-' + (current * 100) + '%)';
    dotsWrap.querySelectorAll('.project-slider__dot').forEach((d, i) => {
      d.classList.toggle('active', i === current);
    });
    const thumbs = thumbsWrap.querySelectorAll('.project-slider__thumb');
    thumbs.forEach((t, i) => t.classList.toggle('active', i === current));
    if (thumbs[current]) thumbs[current].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    if (lightbox.classList.contains('open')) updateLightboxImage();
  }

  function goTo(i) {
    if (!images.length) return;
    current = (i + images.length) % images.length;
    update();
  }

  // ---------- Lightbox (fullscreen image view) ----------
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');

  if (images.length <= 1) {
    lightbox.classList.add('lightbox--single');
  }

  function updateLightboxImage() {
    lightboxImg.src = images[current];
    lightboxImg.alt = project.title + ' — รูปที่ ' + (current + 1);
  }

  function openLightbox(i) {
    if (!images.length) return;
    current = (i + images.length) % images.length;
    update();
    updateLightboxImage();
    lightbox.classList.add('open');
    document.body.classList.add('lightbox-active');
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.classList.remove('lightbox-active');
  }

  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  document.getElementById('lightboxPrev').addEventListener('click', () => goTo(current - 1));
  document.getElementById('lightboxNext').addEventListener('click', () => goTo(current + 1));
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  const prevBtn = document.getElementById('sliderPrev');
  const nextBtn = document.getElementById('sliderNext');
  prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn.addEventListener('click', () => goTo(current + 1));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') goTo(current - 1);
    if (e.key === 'ArrowRight') goTo(current + 1);
    if (e.key === 'Escape') closeLightbox();
  });

  let startX = null;
  slider.addEventListener('pointerdown', (e) => { startX = e.clientX; });
  slider.addEventListener('pointerup', (e) => {
    if (startX === null) return;
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 40) {
      goTo(dx < 0 ? current + 1 : current - 1);
    }
    startX = null;
  });

  update();
});
