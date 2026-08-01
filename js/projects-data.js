// ==========================================================================
// Panyakorn Singhadoung — Hall of Frame project data
// แหล่งข้อมูลกลาง ใช้ทั้งในหน้า portfolio.html (การ์ดรายการ) และ project.html (หน้ารายละเอียด)
// เพิ่มผลงานใหม่: คัดลอกก้อน { ... } ด้านล่างสักก้อน แล้วแก้ค่าให้เป็นผลงานของคุณ
// category: ป้ายหมวดหมู่บนการ์ด ใส่ได้ 2 แบบ
//   ป้ายเดียว  ->  category: 'Conference'
//   หลายป้าย   ->  category: ['Conference', 'International']   (ใส่กี่ป้ายก็ได้)
//   ⚠️ ห้ามเขียน category สองบรรทัดซ้อนกัน JavaScript จะเอาบรรทัดล่างทับบรรทัดบนเงียบๆ
//      แล้วป้ายแรกจะหายไปโดยไม่มี error เตือน ต้องใช้แบบลิสต์ [...] เท่านั้น
// images: ใส่ path รูปได้กี่รูปก็ได้ รูปแรกจะถูกใช้เป็นภาพปกในหน้า Hall of Frame
// paper: (ไม่บังคับ) path ไปยังไฟล์ PDF เช่น 'files/papers/xxx.pdf' ถ้าใส่ไว้จะมีปุ่ม "View Paper" โผล่ขึ้นในหน้ารายละเอียด ถ้าไม่มีก็ไม่ต้องใส่ฟิลด์นี้เลย
// doi: (ไม่บังคับ) ลิงก์ DOI ไป paper ตัวจริงบนเว็บสำนักพิมพ์ ถ้าใส่ไว้จะมีปุ่ม "View on IEEE Xplore" (ปุ่มน้ำเงิน) โผล่ขึ้นข้างปุ่ม View Paper
//   ใส่แบบเต็มเสมอ เช่น 'https://doi.org/10.1109/xxxxx' (อย่าใส่แค่เลข 10.1109/... เฉยๆ เพราะจะกดไม่ได้)
//   DOI คือรหัสถาวรที่สำนักพิมพ์ออกให้ ลิงก์นี้จะใช้ได้ตลอดไปแม้เว็บสำนักพิมพ์ย้ายที่อยู่
//   ⚠️ ใส่เฉพาะผลงานที่ตีพิมพ์จริงและมี DOI แล้วเท่านั้น — ตอนนี้มีชิ้นเดียวคือ paper WAIE 2025
// group: กลุ่มสำหรับปุ่มกรองในหน้า Hall of Frame ใส่ค่าใดค่าหนึ่ง 'mainframe' (งานหลักด้านหุ่นยนต์/AI/วิศวะ) หรือ 'other-skills' (ความสามารถอื่นๆ เช่น ดนตรี กีฬา ขับรถ) — ต้องใส่ให้ถูกทุกก้อน ถ้าใส่ผิด/ไม่ใส่ ผลงานชิ้นนั้นจะไม่โผล่ในหน้า Hall of Frame เลย (ไม่มีแท็บ "All" ให้แสดงรวมแล้ว)
// description / descriptionEn: รายละเอียดงาน 2 ภาษา (ไทย / อังกฤษ)
// award / awardEn: รางวัล 2 ภาษา (ไทย / อังกฤษ) — ใส่ <br> กับ <em> ได้
//   สองคู่นี้คือจุดที่สลับภาษาได้ ส่วน title (ชื่องาน) กับ date (วันที่) จะแสดงตามที่พิมพ์ไว้เสมอ ไม่สลับภาษา
//   ถ้าไม่ใส่ descriptionEn / awardEn จะใช้ข้อความภาษาไทยแสดงทั้งสองภาษา
// ==========================================================================


//========================= Mainframe ==========================

const PROJECTS = [
  {
    slug: 'csv-chatbot',
    title: '7th International Workshop on Artificial Intelligence and Education (WAIE 2025)',
    category: ['Conference', 'International'],
    group: 'mainframe',
    date: 'วันที่ 27-29 กันยายน 2025, Yokohama, Japan',
    description: 'พัฒนาระบบค้นหาข้อมูลจากไฟล์ CSV โดยใช้ภาษาธรรมชาติ (Natural Language) ผ่าน Chatbot เพื่อช่วยให้การค้นหาข้อมูลเป็นเรื่องง่ายเหมือนพูดคุยกับผู้ช่วย',
    descriptionEn: 'Developed a system for searching data in CSV files using natural language through a chatbot, making data lookup as easy as talking to an assistant.',
    award: 'ได้รับ Certificate of Appreciation — งานวิจัยด้าน Chatbot<br>7th International Workshop on Artificial Intelligence and Education (WAIE 2025)  ในหัวข้อ Interacting with Student Information on Google Sheets Using the RAG Technique<br><em>ผลงานและงานวิจัยนี้ได้รับการรับรองและสนับสนุนโดย IEEE ร่วมกับเครือข่ายมหาวิทยาลัยและสถาบันวิจัยชั้นนำระดับนานาชาติจากญี่ปุ่น สหรัฐอเมริกา และฮ่องกง ได้แก่ Kogakuin University, JAIST, The Hong Kong Polytechnic University, University of Illinois Springfield และ Hokkaido University of Science</em>',
    awardEn: 'Received a Certificate of Appreciation — Chatbot research<br>7th International Workshop on Artificial Intelligence and Education (WAIE 2025), on the topic "Interacting with Student Information on Google Sheets Using the RAG Technique"<br><em>This work and research was endorsed and supported by IEEE, together with a network of leading international universities and research institutes from Japan, the United States, and Hong Kong — namely Kogakuin University, JAIST, The Hong Kong Polytechnic University, University of Illinois Springfield, and Hokkaido University of Science</em>',
    paper: 'files/papers/waie2025-rag-paper.pdf',
    doi: 'https://doi.org/10.1109/waie67422.2025.11381035',
    images: [
      'images/projects/WAIE2025/1.jpg',
      'images/projects/WAIE2025/2.jpg',
      'images/projects/WAIE2025/3.jpg',
      'images/projects/WAIE2025/4.jpg',
      'images/projects/WAIE2025/5.jpg',
      'images/projects/WAIE2025/6.jpg'
    ]
  },
  {
    slug: 'robot-arm-3dprint',
    title: 'การประชุมวิชาการระดับชาติ ด้านนวัตกรรมการเรียนรู้ทางวิทยาศาสตร์และเทคโนโลยี ครั้งที่ 4 (NCLIST 2024)',
    category: ['Conference', 'national'],
    group: 'mainframe',
    date: 'วันที่ 21–23 มีนาคม 2024 · Amari Hotel, Pattaya, Thailand',
    description: 'พัฒนาชุดแขนหุ่นยนต์ต้นทุนต่ำด้วยเครื่องพิมพ์ 3 มิติ เพื่อสนับสนุนการเรียนรู้ด้าน Robotics ให้เข้าถึงได้ง่ายขึ้น รับผิดชอบตำแหน่ง Head of Hardware Development',
    descriptionEn: 'Developed a low-cost robotic arm kit using 3D printing to make robotics education more accessible. Served as Head of Hardware Development.',
    award: 'Certificate of Appreciation — จาก รศ.ดร.ธเนศ ธนิตย์ธีรพันธ์ คณบดีคณะครุศาสตร์อุตสาหกรรมและเทคโนโลยี มจธ. งานประชุมวิชาการระดับชาติด้านนวัตกรรมการเรียนรู้ทางวิทยาศาสตร์และเทคโนโลยี ครั้งที่ 4 (NCLIST 2024)',
    awardEn: 'Certificate of Appreciation — presented by Assoc. Prof. Dr. Tanes Tanitteerapan, Dean of the Faculty of Industrial Education and Technology, KMUTT, at the 4th National Conference on Learning Innovation in Science and Technology (NCLIST 2024)',
    paper: 'files/papers/NCLIST2024.pdf',
    images: [
      'images/projects/NCLIST2024/1.jpg',
      'images/projects/NCLIST2024/2.jpg',
      'images/projects/NCLIST2024/3.jpg',
      'images/projects/NCLIST2024/4.jpg',
      'images/projects/NCLIST2024/5.jpg',
      'images/projects/NCLIST2024/6.jpg',
      'images/projects/NCLIST2024/7.jpg',
      'images/projects/NCLIST2024/8.jpg',
      'images/projects/NCLIST2024/9.jpg',
      'images/projects/NCLIST2024/10.jpg'
    ]
  },
  {
    slug: 'home-service-robot',
    title: 'Thailand Open ROS and Smart Robot Competition 2024',
    category: ['competition', 'national'],
    group: 'mainframe',
    date: 'วันที่ 30–31 มีนาคม 2024 · Paradise Park, Bangkok, Thailand',
    description: 'พัฒนาหุ่นยนต์จำลองการทำงานช่วยเหลือมนุษย์ในบ้าน ภารกิจ Carry My Luggage และ Find My Mate ท่ามกลางข้อจำกัดด้านเวลาและทรัพยากร ผ่านเข้ารอบ 24 ทีมจากทั้งหมด 93 ทีม (สายรุ่นมัธยมมีเพียง 4 ทีม)',
    descriptionEn: 'Developed a robot simulating in-home human assistance for the Carry My Luggage and Find My Mate missions, working under tight time and resource constraints. Advanced to the final 24 teams out of 93, of which only 4 were high-school teams.',
    award: 'รองชนะเลิศอันดับที่ 1 — Thailand Open ROS and Smart Robot Competition 2024',
    awardEn: '1st Runner-up — Thailand Open ROS and Smart Robot Competition 2024',
    paper: 'files/papers/Description-Paper-@home-education.pdf',
    images: [
      'images/projects/@Home-education/1.jpg',
      'images/projects/@Home-education/2.jpg',
      'images/projects/@Home-education/3.jpg',
      'images/projects/@Home-education/4.jpg',
      'images/projects/@Home-education/5.jpg',
      'images/projects/@Home-education/6.jpg',
      'images/projects/@Home-education/7.jpg',
      'images/projects/@Home-education/8.jpg',
      'images/projects/@Home-education/9.jpg',
      'images/projects/@Home-education/10.jpg',
      'images/projects/@Home-education/11.jpg',
      'images/projects/@Home-education/12.jpg',
      'images/projects/@Home-education/13.jpg',
      'images/projects/@Home-education/14.jpg',
      'images/projects/@Home-education/15.jpg'
    ]
  },
  {
    slug: 'sorter-robot',
    title: 'การแข่งขันหุ่นยนต์อัตโนมัติและปัญญาประดิษฐ์เยาวชน ระดับชาติ (Innovedex2026)',
    category: ['competition', 'national'],
    group: 'mainframe',
    date: 'วันที่ 4–5 กรกฎาคม 2026 · Zeer Rangsit, Pathum Thani, Thailand',
    description: 'ออกแบบ สร้าง และเขียนโปรแกรมควบคุมหุ่นยนต์อัตโนมัติแบบไม่เคลื่อนที่ ในศูนย์คัดแยกสินค้าจำลอง เพื่อขนย้ายและคัดแยกวัตถุตามประเภทที่กำหนด',
    descriptionEn: 'Designed, built, and programmed a stationary autonomous robot for a simulated sorting facility, moving and sorting objects by their assigned category.',
    award: 'เหรียญทอง — การแข่งขันหุ่นยนต์อัตโนมัติและปัญญาประดิษฐ์เยาวชนระดับชาติ (Innovedex 2026)',
    awardEn: 'Gold Medal — National Youth Autonomous Robotics and Artificial Intelligence Competition (Innovedex 2026)',
    images: [
      'images/projects/innovedex-2026-fn/1.jpg',
      'images/projects/innovedex-2026-fn/2.jpg',
      'images/projects/innovedex-2026-fn/3.jpg',
      'images/projects/innovedex-2026-fn/4.jpg',
      'images/projects/innovedex-2026-fn/5.jpg',
      'images/projects/innovedex-2026-fn/6.jpg',
      'images/projects/innovedex-2026-fn/7.jpg',
      'images/projects/innovedex-2026-fn/8.jpg'
    ]
  },
  {
    slug: 'innovedex-regional',
    title: 'การแข่งขันหุ่นยนต์อัตโนมัติและปัญญาประดิษฐ์เยาวชน — รอบภาคกลางและภาคตะวันออก (Innovedex2026)',
    category: ['competition', 'regional'],
    group: 'mainframe',
    date: 'วันที่ 23–24 พฤษภาคม 2026 · มจพ. วิทยาเขตปราจีนบุรี, Prachinburi, Thailand',
    description: 'เข้าร่วมการแข่งขันหุ่นยนต์อัตโนมัติและปัญญาประดิษฐ์เยาวชนในรอบคัดเลือกระดับภาค',
    descriptionEn: 'Competed in the regional qualifying round of the Youth Autonomous Robotics and Artificial Intelligence Competition.',
    award: 'ได้คะแนนระดับเหรียญทอง — ในรอบคัดเลือกภาคกลางและภาคตะวันออก (Innovedex)',
    awardEn: 'Achieved a gold-medal-level score — Central and Eastern regional qualifying round (Innovedex)',
    images: [
      'images/projects/innovedex-2026-regional/1.jpg',
      'images/projects/innovedex-2026-regional/2.jpg',
      'images/projects/innovedex-2026-regional/3.jpg',
      'images/projects/innovedex-2026-regional/4.jpg',
      'images/projects/innovedex-2026-regional/5.jpg'
    ]
  },
  {
    slug: 'educate',
    title: 'อบรมการขับรถแข่งกับทาง HGR Academy',
    category: 'educate',
    group: 'mainframe',
    date: 'วันที่ 26 กุมภาพันธ์ 2026 · Bira Circuit, Pattaya, Thailand',
    description: 'เข้าอบรมการขับรถแข่งในหลักสูตร level1 อบรมทั้งความรู้ในด้านทฤษฎีและการปฏิบัติ เพื่อเพิ่มความสามารถและความปลอดภัยในการขับขี่',
    descriptionEn: 'Attended a Level 1 race driving course covering both theory and hands-on practice, to improve driving skill and safety.',
    award: 'เข้าอบรมการขับรถแข่งเพื่อปูรากฐานความรู้ ทักษะ และกระบวนการคิดขั้นสูงอย่างเป็นระบบ เน้นการเปลี่ยนผ่านทฤษฎีสู่นวัตกรรมและการประยุกต์ใช้จริงในระดับมืออาชีพ โดยได้เรียนรู้ผ่านโครงสร้างการเรียนรู้แบบผสม ที่ครอบคลุมทั้งกรอบความคิด เครื่องมือเชิงเทคนิค และการแก้ปัญหาเชิงโครงสร้าง<br><em>โดยหัวข้อเนื้อหาในหลักสูตรจะประกอบด้วย<br><em>1.1 Principles of Domain Mastery: ทำความเข้าใจโครงสร้างพื้นฐาน แนวคิดหลัก และระบบนิเวศขององค์ความรู้<br><em>1.2 Analytical & First-Principles Thinking: กระบวนการวิเคราะห์ปัญหาจากฐานรากและการคิดเชิงระบบ<br><em>1.3 Strategic Goal Setting & Execution Framework: การตั้งเป้าหมายเชิงกลยุทธ์และการบริหารจัดการทรัพยากรอย่างมีประสิทธิภาพ',
    awardEn: 'Attended race driving training to build a systematic foundation of knowledge, skills, and advanced thinking processes, with an emphasis on turning theory into innovation and real-world professional application. The course used a blended learning structure covering mindset, technical tools, and structural problem-solving.<br><em>The curriculum covered the following topics:<br><em>1.1 Principles of Domain Mastery: understanding the underlying structures, core concepts, and ecosystem of the field<br><em>1.2 Analytical &amp; First-Principles Thinking: analysing problems from first principles and thinking in systems<br><em>1.3 Strategic Goal Setting &amp; Execution Framework: setting strategic goals and managing resources effectively',
    images: [
      'images/projects/HGR-Academy/1.jpg',
      'images/projects/HGR-Academy/2.jpg',
      'images/projects/HGR-Academy/3.jpg',
      'images/projects/HGR-Academy/4.jpg',
      'images/projects/HGR-Academy/5.jpg',
      'images/projects/HGR-Academy/6.jpg'
    ]
  },
  {
    slug: 'carair',
    title: 'อบรมในหลักสูตรช่างแอร์รถยนต์',
    category: 'educate',
    group: 'mainframe',
    date: 'วันที่ 27-30 เมษายน 2026 · Soi Ekachai 93/1, Bangkok, Thailand',
    description: 'ได้เข้าร่วมอบรมในหลักสูตรช่างแอร์รถยนต์ เป็นเวลา 30 ชั่วโมง โดยเริ่มปูตั้งแต่พื้นฐานทั้งในด้านทฤษฎีและปฏิบัติจริง รวมไปถึงการคำนวณราคาและค่าแรง เพื่อสามารถนำไปต่อยอดในอนาคตต่อไปได้',
    descriptionEn: 'Attended a 30-hour training course on car air conditioner repair, starting from the basics in both theory and hands-on practice, including how to calculate prices and labor costs, in order to build on this knowledge in the future',
    images: [
      'images/projects/training-course-on-car-air/1.jpg',
      'images/projects/training-course-on-car-air/2.jpg',
      'images/projects/training-course-on-car-air/3.jpg',
      'images/projects/training-course-on-car-air/4.jpg',
      'images/projects/training-course-on-car-air/5.jpg'
    ]
  },


//========================= Other skills ==========================


  {
    slug: 'goethe',
    title: 'Goethe-Zertifikat — ภาษาเยอรมันระดับ A1 ถึง B1',
    category: 'Language',
    group: 'other-skills',
    // ผลงานชิ้นนี้มีหน้ารายละเอียดเป็นของตัวเอง (goethe.html) ไม่ใช้หน้า project.html ร่วมกับงานอื่น
    // ถ้าลบบรรทัด url นี้ทิ้ง มันจะกลับไปใช้หน้ารายละเอียดแบบมาตรฐานทันที
    url: 'goethe.html',
    date: '',
    description: 'เรียนและสอบผ่านหลักสูตรภาษาเยอรมันของสถาบันเกอเธ่ ครบ 11 โมดูล ตั้งแต่ระดับ A1 จนถึง B1',
    descriptionEn: 'Completed 11 German language modules at the Goethe-Institut, progressing from level A1 through to B1.',
    images: [
      'images/projects/goethe/cover.jpg'
    ]
  },
  {
    slug: 'music-1',
    title: 'ตัวจริงเค้ายุ่งอยู่ ยังไม่ว่างมาลงงาน รอแปปนะคร้าบบบบ',
    category: 'music',
    group: 'other-skills',
    date: '',
    description: 'ตัวจริงเค้ายุ่งอยู่ ยังไม่ว่างมาลงงาน รอแปปนะคร้าบบบบ',
    descriptionEn: "The owner's a bit tied up right now and hasn't had time to put this one up. Hang tight!",
    images: [
      'images/projects/music-1/1.png'
    ]
  },
  {
    slug: 'The-Explace68',
    title: 'ตัวจริงเค้ายุ่งอยู่ ยังไม่ว่างมาลงงาน รอแปปนะคร้าบบบบ',
    category: 'music',
    group: 'other-skills',
    date: '',
    description: 'ตัวจริงเค้ายุ่งอยู่ ยังไม่ว่างมาลงงาน รอแปปนะคร้าบบบบ',
    descriptionEn: "The owner's a bit tied up right now and hasn't had time to put this one up. Hang tight!",
    images: [
      'images/projects/The-Explace68/1.jpg'
    ]
  },
  {
    slug: 'BPK67',
    title: 'ตัวจริงเค้ายุ่งอยู่ ยังไม่ว่างมาลงงาน รอแปปนะคร้าบบบบ',
    category: 'music',
    group: 'other-skills',
    date: '',
    description: 'ตัวจริงเค้ายุ่งอยู่ ยังไม่ว่างมาลงงาน รอแปปนะคร้าบบบบ',
    descriptionEn: "The owner's a bit tied up right now and hasn't had time to put this one up. Hang tight!",
    images: [
      'images/projects/BPK67/1.jpg'
    ]
  },
  {
    slug: 'sports-1',
    title: 'ตัวจริงเค้ายุ่งอยู่ ยังไม่ว่างมาลงงาน รอแปปนะคร้าบบบบ',
    category: 'Other Skills',
    group: 'other-skills',
    date: '',
    description: 'ตัวจริงเค้ายุ่งอยู่ ยังไม่ว่างมาลงงาน รอแปปนะคร้าบบบบ',
    descriptionEn: "The owner's a bit tied up right now and hasn't had time to put this one up. Hang tight!",
    images: [
      'images/projects/sports-1/1.jpg'
    ]
  },
];
