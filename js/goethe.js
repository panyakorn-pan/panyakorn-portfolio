// ==========================================================================
// Panyakorn Singhadoung — หน้าใบเซอร์ภาษาเยอรมัน (goethe.html)
// หน้าที่: กดใบเซอร์แล้วขยายเต็มจอ + เลื่อนดูใบถัดไป/ก่อนหน้าได้
// ใบเซอร์ทั้งหมดเขียนไว้ตรงๆ ใน goethe.html ไฟล์นี้แค่มาทำให้กดได้
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  const certs = [...document.querySelectorAll('.cert')];
  if (!certs.length) return;

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  if (!lightbox || !lightboxImg) return;

  // เก็บเฉพาะใบที่โหลดรูปสำเร็จ ใบที่ยังไม่ได้ใส่รูปจะกดขยายไม่ได้
  // (ไม่งั้นกดแล้วจะเจอจอดำเปล่าๆ ดูเหมือนเว็บพัง)
  const usable = [];

  certs.forEach((cert) => {
    const img = cert.querySelector('img');
    const src = cert.dataset.src;
    if (!img) return;

    const markBroken = () => {
      // ยังไม่ได้วางไฟล์รูป -> โชว์กล่องบอกว่าต้องเอารูปไปวางที่ไหน
      const box = document.createElement('span');
      box.className = 'cert__missing';
      box.textContent = 'ใส่รูปที่ ' + src;
      img.replaceWith(box);
      cert.classList.add('cert--empty');
      cert.disabled = true;
    };
    const markReady = () => {
      usable.push(cert);
      cert.addEventListener('click', () => openAt(usable.indexOf(cert)));
    };

    // ⚠️ สำคัญ: รูปในหน้านี้เขียน src ไว้ใน HTML ตรงๆ เบราว์เซอร์จึงเริ่มโหลด
    // ตั้งแต่ก่อน JS ไฟล์นี้จะทำงาน ถ้ารูปโหลดเสร็จ (หรือพัง) ไปก่อนแล้ว
    // การมาติด onload/onerror ทีหลังจะไม่มีอะไรเรียกมันอีกเลย
    // จึงต้องเช็คสถานะย้อนหลังจาก img.complete ก่อนเสมอ
    if (img.complete) {
      // naturalWidth = 0 แปลว่าโหลดจบแล้วแต่ไม่ได้รูป (ไฟล์ไม่มีจริง)
      if (img.naturalWidth === 0) markBroken(); else markReady();
    } else {
      img.addEventListener('error', markBroken, { once: true });
      img.addEventListener('load', markReady, { once: true });
    }
  });

  let current = 0;

  function show() {
    const cert = usable[current];
    if (!cert) return;
    lightboxImg.src = cert.dataset.src;
    lightboxImg.alt = 'Goethe-Zertifikat ' + cert.dataset.code;
  }

  function openAt(i) {
    if (i < 0 || !usable.length) return;
    current = i;
    show();
    lightbox.classList.add('open');
    document.body.classList.add('lightbox-active');
  }

  function close() {
    lightbox.classList.remove('open');
    document.body.classList.remove('lightbox-active');
  }

  function go(step) {
    if (!usable.length) return;
    current = (current + step + usable.length) % usable.length;
    show();
  }

  document.getElementById('lightboxClose').addEventListener('click', close);
  document.getElementById('lightboxPrev').addEventListener('click', () => go(-1));
  document.getElementById('lightboxNext').addEventListener('click', () => go(1));
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) close(); });

  // ปุ่มลูกศร/Esc ให้ทำงานเฉพาะตอนเปิดดูเต็มจอ
  // ไม่งั้นกดลูกศรตอนอ่านหน้าปกติแล้วรูปจะเปลี่ยนเองแบบงงๆ
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'ArrowLeft') go(-1);
    if (e.key === 'ArrowRight') go(1);
    if (e.key === 'Escape') close();
  });
});
