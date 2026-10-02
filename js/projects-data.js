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
// group: กลุ่มของผลงาน ตัวนี้เป็นตัวกำหนดว่าจะไปโผล่หน้าไหน ใส่ได้ 3 ค่า
//   'mainframe'    -> หน้า Hall of Frame แท็บ Mainframe (งานหุ่นยนต์/AI/วิศวะ)
//   'other-skills' -> หน้า Hall of Frame แท็บ Other Skills (ดนตรี กีฬา ภาษา)
//   'my-work'      -> หน้า My Work (mywork.html) งานซ่อมรถที่รับทำ — ไม่โผล่ใน Hall of Frame
//   ⚠️ ต้องใส่ให้ถูกทุกก้อน ถ้าใส่ผิด/ไม่ใส่ ผลงานชิ้นนั้นจะไม่โผล่ที่ไหนเลย (ไม่มีแท็บ "All" แล้ว)
// video: (ไม่บังคับ) คลิปตอนลงมือทำ ใส่ได้ 2 แบบ ระบบดูจากลิงก์เองว่าเป็นแบบไหน
//   ลิงก์ YouTube -> 'https://youtu.be/xxxxxxxxxxx'  (แนะนำแบบนี้ ไม่กินพื้นที่รีโป)
//   ไฟล์ในเว็บ    -> 'files/videos/xxx.mp4'
//   ⚠️ อย่าเอาไฟล์วิดีโอใหญ่ๆ ใส่ใน git เพราะ git เก็บประวัติไว้ตลอดไป ลบทีหลังก็ไม่คืนพื้นที่
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
    description: '&emsp;&emsp;&emsp;&emsp;พัฒนาระบบ Chatbot ที่สามารถค้นหาและตอบคำถามจากข้อมูลในไฟล์ CSV และ Google Sheets โดยผู้ใช้สามารถสอบถามข้อมูลด้วยภาษาธรรมชาติ (Natural Language) แทนการค้นหาข้อมูลด้วยตนเองหรือใช้คำสั่งที่ซับซ้อน ระบบนำเทคนิค Retrieval-Augmented Generation (RAG) มาใช้ในการค้นหาและนำข้อมูลที่เกี่ยวข้องมาประกอบการสร้างคำตอบ ทำให้การเข้าถึงข้อมูลมีความสะดวกและเป็นธรรมชาติมากขึ้น',
    descriptionEn: '&emsp;&emsp;&emsp;&emsp;Developed a chatbot system that allows users to search and retrieve information from CSV files and Google Sheets using natural language instead of manually searching through data or using complex commands. The system applies Retrieval-Augmented Generation (RAG) to retrieve relevant information and use it to generate appropriate responses, making data access more convenient and user-friendly.',
    award: 'ได้รับ Certificate of Appreciation ผลงานและงานวิจัยนี้ได้รับการรับรองและสนับสนุนโดย IEEE ร่วมกับเครือข่ายมหาวิทยาลัยและสถาบันวิจัยชั้นนำระดับนานาชาติจากญี่ปุ่น สหรัฐอเมริกา และฮ่องกง ได้แก่ Kogakuin University, JAIST, The Hong Kong Polytechnic University, University of Illinois Springfield และ Hokkaido University of Science',
    awardEn: 'Received a Certificate of Appreciation. This work and research were recognized and supported by IEEE, together with an international network of leading universities and research institutions from Japan, the United States, and Hong Kong, including Kogakuin University, JAIST, The Hong Kong Polytechnic University, University of Illinois Springfield, and Hokkaido University of Science.',
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
    description: '&emsp;&emsp;&emsp;&emsp;พัฒนาชุดแขนหุ่นยนต์ต้นทุนต่ำโดยใช้ชิ้นส่วนที่ผลิตด้วยเครื่องพิมพ์ 3 มิติจากวัสดุ PLA เพื่อให้สามารถสร้างและใช้งานระบบแขนกลได้ในต้นทุนที่เข้าถึงได้ง่าย ระบบประกอบด้วยโครงสร้างแขนกล ชุดขับเคลื่อน และอุปกรณ์ควบคุมที่ทำงานร่วมกัน เพื่อให้แขนหุ่นยนต์สามารถเคลื่อนที่และทำงานตามคำสั่งได้ โดยออกแบบชิ้นส่วนให้เหมาะสมกับการผลิตด้วยเครื่องพิมพ์ 3 มิติ รวมถึงการประกอบและทดสอบการทำงานของแต่ละส่วน ก่อนนำมาทำงานร่วมกันเป็นระบบแขนหุ่นยนต์',
    descriptionEn: '&emsp;&emsp;&emsp;&emsp;Developed a low-cost robotic arm kit using 3D-printed with PLA to make robotic systems more affordable and accessible for educational use. The system consists of the robotic arm structure, actuators, and control components working together to allow the arm to move and perform tasks according to programmed commands. The mechanical parts were designed specifically for 3D printing, followed by assembly and testing of each component before integrating them into a complete robotic arm system.',
    award: 'Certificate of Appreciation — จากงานประชุมวิชาการระดับชาติด้านนวัตกรรมการเรียนรู้ทางวิทยาศาสตร์และเทคโนโลยี ครั้งที่ 4 (NCLIST 2024)',
    awardEn: 'Certificate of Appreciation — At the 4th National Conference on Learning Innovation in Science and Technology (NCLIST 2024)',
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
    description: '&emsp;&emsp;&emsp;&emsp;ในภารกิจ Carry My Luggage หุ่นยนต์ต้องตรวจจับและระบุตำแหน่งของกระเป๋า เข้าไปหยิบกระเป๋า และติดตามบุคคลออกจากพื้นที่ตามเส้นทางที่กำหนด ส่วนภารกิจ Find My Mate หุ่นยนต์ต้องค้นหาบุคคลภายในพื้นที่ ระบุตำแหน่งและลักษณะของบุคคลจากข้อมูลที่ตรวจจับได้ ก่อนนำข้อมูลกลับมาแจ้งให้ผู้ใช้งานทราบ โดยการทำงานของระบบต้องอาศัยการทำงานร่วมกันของ Computer Vision, Speech Processing, Autonomous Navigation และ Robot Manipulation เพื่อให้หุ่นยนต์สามารถปฏิบัติภารกิจได้อย่างอัตโนมัติ',
    descriptionEn: '&emsp;&emsp;&emsp;&emsp;In the Carry My Luggage mission, the robot had to detect and locate a piece of luggage, approach and pick it up, and follow a person along a designated route. In the Find My Mate mission, the robot had to search for a person within the designated area, identify their location and characteristics based on the detected information, and report the information back to the user. The system integrated Computer Vision, Speech Processing, Autonomous Navigation, and Robot Manipulation to enable the robot to perform these tasks autonomously.',
    award: 'รับรางวัล รองชนะเลิศอันดับที่ 1 — Thailand Open ROS and Smart Robot Competition 2024',
    awardEn: 'Received 1st Runner-up — Thailand Open ROS and Smart Robot Competition 2024.',
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
      'images/projects/@Home-education/15.jpg',
      'images/projects/@Home-education/16.jpg'
    ]
  },
  {
    slug: 'sorter-robot',
    title: 'การแข่งขันหุ่นยนต์อัตโนมัติและปัญญาประดิษฐ์เยาวชน ระดับชาติ (Innovedex2026)',
    category: ['competition', 'national'],
    group: 'mainframe',
    date: 'วันที่ 4–5 กรกฎาคม 2026 · Zeer Rangsit, Pathum Thani, Thailand',
    description: '&emsp;&emsp;&emsp;&emsp;ออกแบบ สร้าง และเขียนโปรแกรมควบคุมหุ่นยนต์อัตโนมัติแบบไม่เคลื่อนที่ สำหรับจำลองการทำงานของระบบคัดแยกสินค้าในศูนย์กระจายสินค้า โดยหุ่นยนต์สามารถตรวจจับประเภทของวัตถุ หยิบจับ และเคลื่อนย้ายวัตถุไปยังตำแหน่งที่กำหนดได้โดยอัตโนมัติ ภายใต้ข้อจำกัดด้านเวลาและความแม่นยำของการทำงาน <br> &emsp;&emsp;&emsp;&emsp;ระบบได้รับการออกแบบให้ทำงานตามลำดับขั้นตอนที่กำหนด ตั้งแต่การตรวจจับและจำแนกวัตถุ การกำหนดตำแหน่งในการหยิบจับ การควบคุมการเคลื่อนที่ของแขนกล ไปจนถึงการนำวัตถุไปวางในพื้นที่คัดแยกที่ถูกต้อง โดยเน้นการทำงานที่ต่อเนื่องและลดความผิดพลาดระหว่างกระบวนการ เพื่อให้สามารถทำภารกิจได้ครบถ้วนภายในเวลาที่กำหนด',
    descriptionEn: '&emsp;&emsp;&emsp;&emsp;Designed, built, and programmed an autonomous stationary robot to simulate an automated sorting system in a distribution center. The robot was designed to detect and classify objects, pick them up, and transport them to their designated sorting locations autonomously, while operating under time and accuracy constraints. <br> &emsp;&emsp;&emsp;&emsp;The system was designed to perform the complete sorting process, including object detection and classification, determining pick-up positions, controlling the robotic arms movements, and placing each object in the correct sorting area. The system focused on maintaining continuous operation and minimizing errors throughout the process in order to complete the assigned task within the given time limit.',
    award: 'ได้รับ คะแนนระดับเหรียญทอง — การแข่งขันหุ่นยนต์อัตโนมัติและปัญญาประดิษฐ์เยาวชนระดับชาติ (Innovedex 2026) ซึ่งเป็นการแข่งขันระดับประเทศด้าน Robotics, AI และ Automation สำหรับเยาวชน โดยการแข่งขันมุ่งเน้นการประยุกต์ใช้หุ่นยนต์อัตโนมัติและการแก้ปัญหาจากสถานการณ์จำลองจริง',
    awardEn: 'Received a Gold Medal score — National Youth Autonomous Robotics and Artificial Intelligence Competition (Innovedex 2026). The competition is a national-level youth competition focused on the application of Robotics, AI, and Automation to real-world simulated challenges.',
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
    description: '&emsp;&emsp;&emsp;&emsp;ออกแบบ สร้าง และเขียนโปรแกรมควบคุมหุ่นยนต์อัตโนมัติแบบไม่เคลื่อนที่ สำหรับจำลองการทำงานของระบบคัดแยกสินค้าในศูนย์กระจายสินค้า โดยหุ่นยนต์สามารถตรวจจับประเภทของวัตถุ หยิบจับ และเคลื่อนย้ายวัตถุไปยังตำแหน่งที่กำหนดได้โดยอัตโนมัติ ภายใต้ข้อจำกัดด้านเวลาและความแม่นยำของการทำงาน <br> &emsp;&emsp;&emsp;&emsp;ระบบได้รับการออกแบบให้ทำงานตามลำดับขั้นตอนที่กำหนด ตั้งแต่การตรวจจับและจำแนกวัตถุ การกำหนดตำแหน่งในการหยิบจับ การควบคุมการเคลื่อนที่ของแขนกล ไปจนถึงการนำวัตถุไปวางในพื้นที่คัดแยกที่ถูกต้อง โดยเน้นการทำงานที่ต่อเนื่องและลดความผิดพลาดระหว่างกระบวนการ เพื่อให้สามารถทำภารกิจได้ครบถ้วนภายในเวลาที่กำหนด',
    descriptionEn: '&emsp;&emsp;&emsp;&emsp;Designed, built, and programmed an autonomous stationary robot to simulate an automated sorting system in a distribution center. The robot was designed to detect and classify objects, pick them up, and transport them to their designated sorting locations autonomously, while operating under time and accuracy constraints. <br> &emsp;&emsp;&emsp;&emsp;The system was designed to perform the complete sorting process, including object detection and classification, determining pick-up positions, controlling the robotic arms movements, and placing each object in the correct sorting area. The system focused on maintaining continuous operation and minimizing errors throughout the process in order to complete the assigned task within the given time limit.',
    award: 'ได้รับ คะแนนระดับเหรียญทอง — การแข่งขันหุ่นยนต์อัตโนมัติและปัญญาประดิษฐ์เยาวชนระดับภูมิภาค (Innovedex 2026) ซึ่งเป็นการแข่งขันระดับภูมิภาคด้าน Robotics, AI และ Automation สำหรับเยาวชน โดยการแข่งขันมุ่งเน้นการประยุกต์ใช้หุ่นยนต์อัตโนมัติและการแก้ปัญหาจากสถานการณ์จำลองจริง',
    awardEn: 'Received a Gold Medal score — Regional Youth Autonomous Robotics and Artificial Intelligence Competition (Innovedex 2026). The competition is a regional -level youth competition focused on the application of Robotics, AI, and Automation to real-world simulated challenges.',
    images: [
      'images/projects/innovedex-2026-regional/1.jpg',
      'images/projects/innovedex-2026-regional/2.jpg',
      'images/projects/innovedex-2026-regional/3.jpg',
      'images/projects/innovedex-2026-regional/4.jpg',
      'images/projects/innovedex-2026-regional/5.jpg'
    ]
  },
  {
    slug: 'PTBK2026',
    title: 'ให้ความรู้และฝึกบังคับแขนกลหุ่นยนต์แก่น้องๆผ่านการลงมือทำจริง',
    category: 'Community Outreach',
    group: 'mainframe',
    date: 'วันที่ 10 กันยายน 2026 · Prathomthanbin Kamphaensean School, Nakhon Pathom, Thailand',
    description: 'อาสาให้ความรู้น้องๆ ผ่านการลงมือทำจริง โดยให้น้องได้ฝึกควบคุมแขนกลหุ่นยนต์โดยการจำลองการทำงานในสถานีคัดแยกสินค้า พร้อมอธิบายหลักการทำงานและการนำไปใช้ในโรงงานอุตสาหกรรม เพื่อจุดประกายความสนใจด้านหุ่นยนต์ และเพิ่มโอกาสในการเข้าถึงการเรียนรู้ด้านเทคโนโลยีให้แก่น้องๆ',
    descriptionEn: 'Volunteered to teach primary students through hands-on learning, letting them practice controlling a robotic arm at a simulated product-sorting station while explaining how it works and how it is used in industry, to spark their interest in robotics and give them greater access to technology education.',
    images: [
      'images/projects/PTBK2026/1.jpg',
      'images/projects/PTBK2026/2.jpg',
      'images/projects/PTBK2026/3.jpg',
      'images/projects/PTBK2026/4.jpg',
      'images/projects/PTBK2026/5.jpg',
      'images/projects/PTBK2026/6.jpg'
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
    title: 'Heart of Care Health Fair 2025',
    category: 'music',
    group: 'other-skills',
    date: 'วันที่ 5-9 กันยายน 2025 · Central Rama2, Bangkok, Thailand',
    description: 'เข้าร่วมเล่นดนตรีในงาน Heart of Care Health Fair 2025 ในตำแหน่งมือเบส กับทางโรงพยาบาลบางปะกอก9 <span class="nowrap">(BPK9 International hospital)</span>',
    descriptionEn: "Joined as the bassist for a performance at the Heart of Care Health Fair 2025, an event held by BPK9 International Hospital",
    images: [
      'images/projects/rama2_68/1.png',
      'images/projects/rama2_68/2.jpg',
      'images/projects/rama2_68/3.jpg',
      'images/projects/rama2_68/4.jpg',
      'images/projects/rama2_68/5.jpg'
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
    title: 'MIni Heart of Care Health Fair 2024',
    category: 'music',
    group: 'other-skills',
    date: '',
    description: 'เข้าร่วมเล่นดนตรีในงาน Heart of Care Health Fair 2024 ในตำแหน่งมือเบส กับทางโรงพยาบาลบางปะกอก9 <span class="nowrap">(BPK9 International hospital)</span>',
    descriptionEn: "Joined as the bassist for a performance at the Heart of Care Health Fair 2024, an event held by BPK9 International Hospital",
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


  //===================== My Work (งานซ่อมรถ) =====================
  // ก้อนในกลุ่มนี้จะไปโผล่ที่หน้า mywork.html เท่านั้น ไม่ปนกับ Hall of Frame
  //
  // เพิ่มงานใหม่: ก๊อปก้อนข้างล่างสัก 1 ก้อน วางต่อท้าย แล้วแก้ค่า
  //   images[0] = รูป "ชิ้นส่วน" ถ่ายบนพื้นขาว  <- รูปนี้จะเป็นหน้าปกการ์ด
  //   images[1] เป็นต้นไป = รูปประกอบตอนทำ / ก่อน-หลัง
  //   video     = คลิปตอนลงมือทำ (ลิงก์ YouTube หรือไฟล์ .mp4 ในเว็บ)
  //
  // ⚠️ ข้อความ description ด้านล่างเป็นแค่โครงรอให้เจ้าของเว็บเขียนทับ
  //    ควรเล่า 3 อย่าง: เดิมมันพังยังไง -> ทำอะไรไปบ้าง -> ผลออกมาเป็นยังไง

  {
    slug: 'f10_front_air_grille',
    title: 'Front Air Grille',
    category: 'series5 f10',
    group: 'my-work',
    date: '',
    video: 'https://youtu.be/pOOG4McBHlY',
    description: '[แก้ไขตรงนี้: เล่าว่าเดิมช่องแอร์มีปัญหาอะไร ถอดเปลี่ยนยังไง ผลออกมาเป็นยังไง]',
    descriptionEn: '',
    images: [
      'images/projects/front-air-grille/1.jpg'
    ]
  },
  {
    slug: 'headliner',
    title: 'ซ่อมหลังคาภายใน',
    category: 'Headliner',
    group: 'my-work',
    date: '',
    description: '[แก้ไขตรงนี้: เล่าว่าเดิมผ้าหลังคาเป็นยังไง ซ่อมยังไง ผลออกมาเป็นยังไง]',
    descriptionEn: '',
    images: [
      'images/projects/work-headliner/part.jpg'
    ]
  },
  {
    slug: 'coin-holder',
    title: 'เปลี่ยนช่องเก็บเหรียญ',
    category: 'Console & Storage',
    group: 'my-work',
    date: '',
    description: '[แก้ไขตรงนี้: เล่าว่าเดิมช่องเก็บเหรียญมีปัญหาอะไร เปลี่ยนยังไง ผลออกมาเป็นยังไง]',
    descriptionEn: '',
    images: [
      'images/projects/work-coin-holder/part.jpg'
    ]
  },

  // ---------------------------------------------------------------------
  // 3 ก้อนล่างนี้เป็น "โครงเปล่า" รอเติม
  // ⚠️ ชื่องานเป็นแค่ตัวอย่างที่ยกมาให้เห็นภาพ ต้องแก้ให้ตรงกับงานที่ทำจริง
  //    ก้อนไหนไม่ได้ทำ ให้ลบทั้งก้อนทิ้ง (ตั้งแต่ { ถึง }, รวมคอมมาท้ายด้วย)
  //    อย่าปล่อยทิ้งไว้ เพราะหน้านี้มีไว้ให้ลูกค้าดู ถ้าโชว์งานที่ไม่ได้ทำจะเสียความน่าเชื่อถือ
  // ---------------------------------------------------------------------

  {
    slug: 'door-panel',
    title: 'เปลี่ยนแผงประตู',
    category: 'Interior Trim',
    group: 'my-work',
    date: '',
    description: '[แก้ไขตรงนี้: เดิมพังยังไง → ทำอะไรไปบ้าง → ผลออกมาเป็นยังไง]',
    descriptionEn: '',
    images: [
      'images/projects/work-door-panel/part.jpg'
    ]
  },
  {
    slug: 'armrest',
    title: 'เปลี่ยนที่พักแขนคอนโซลกลาง',
    category: 'Console & Storage',
    group: 'my-work',
    date: '',
    description: '[แก้ไขตรงนี้: เดิมพังยังไง → ทำอะไรไปบ้าง → ผลออกมาเป็นยังไง]',
    descriptionEn: '',
    images: [
      'images/projects/work-armrest/part.jpg'
    ]
  },
  {
    slug: 'side-vents',
    title: 'เปลี่ยนช่องแอร์ข้าง',
    category: 'A/C Vents',
    group: 'my-work',
    date: '',
    description: '[แก้ไขตรงนี้: เดิมพังยังไง → ทำอะไรไปบ้าง → ผลออกมาเป็นยังไง]',
    descriptionEn: '',
    images: [
      'images/projects/work-side-vents/part.jpg'
    ]
  },
];
