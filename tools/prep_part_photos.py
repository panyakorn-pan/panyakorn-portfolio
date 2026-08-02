"""จัดรูป "ชิ้นส่วน" สำหรับหน้า My Work ให้ขนาดเท่ากันทุกใบ

ปัญหาที่เครื่องมือนี้แก้:
    รูปสินค้าที่โหลดมามักเป็นจัตุรัสใหญ่ๆ แต่ตัวของกินพื้นที่แค่แถบกลาง
    ที่เหลือเป็นพื้นขาวเปล่าติดมากับไฟล์ พอเอามาวางในการ์ด ของเลยดูลอยเล็ก
    แก้ที่ CSS ไม่ได้ เพราะพื้นขาวอยู่ในไฟล์ ต้องตัดออกจากตัวรูปจริง

มันทำอะไร (3 ขั้น):
    1. ตัดขอบขาวรอบๆ ทิ้งให้หมด เหลือแต่ตัวของ
    2. ใส่ขอบขาวกลับเข้าไปนิดเดียวเท่ากันทุกใบ (MARGIN)
    3. เติมพื้นขาวให้ได้สัดส่วน 4:3 พอดีกรอบการ์ด

ผลคือ ทุกรูปออกมาสัดส่วนเท่ากัน ของเต็มกรอบ วางเรียงแล้วเป็นระเบียบเหมือนเว็บขายของ

วิธีรัน (ทำทุกรูปในโฟลเดอร์ My Work ทั้งหมด):
    python tools/prep_part_photos.py

ทำเฉพาะไฟล์ที่ระบุ:
    python tools/prep_part_photos.py images/projects/front-air-grille/1.jpg

⚠️ เครื่องมือนี้ "เขียนทับไฟล์เดิม" — มันจะสำรองของเดิมไว้ให้อัตโนมัติ
   ในโฟลเดอร์ _original/ ข้างๆ ถ้าผลลัพธ์ไม่ถูกใจ ก๊อปกลับมาทับได้
"""
from PIL import Image, ImageChops
import os, sys, glob, shutil

TARGET_RATIO = 4 / 3      # สัดส่วนปลายทาง ต้องตรงกับ aspect-ratio ของ .project-thumb--part ใน css
MARGIN = 0.04             # ขอบขาวรอบตัวของ 4% ของด้านที่ยาวที่สุด
WHITE_TOL = 12            # ค่าความคลาดเคลื่อนของ "สีขาว" (สแกน/ถ่ายมาอาจไม่ขาว 255 เป๊ะ)
BG = (255, 255, 255)


def trim_white(im):
    """ตัดขอบที่เป็นสีขาว (หรือเกือบขาว) รอบรูปทิ้ง"""
    rgb = im.convert('RGB')
    bg = Image.new('RGB', rgb.size, BG)
    diff = ImageChops.difference(rgb, bg).convert('L')
    # จุดไหนต่างจากขาวเกินค่า tolerance ถือว่าเป็น "ตัวของ"
    mask = diff.point(lambda p: 255 if p > WHITE_TOL else 0)
    box = mask.getbbox()
    return im.crop(box) if box else im


def fit_to_ratio(im):
    """วางรูปลงบนผืนขาวสัดส่วน 4:3 โดยเว้นขอบเท่ากันทุกใบ"""
    w, h = im.size
    long_side = max(w, h)
    pad = int(long_side * MARGIN)
    cw, ch = w + pad * 2, h + pad * 2          # ขนาดหลังใส่ขอบ

    # ขยายผืนให้ได้สัดส่วน 4:3 โดยเติมด้านที่ขาด
    if cw / ch < TARGET_RATIO:
        cw = int(round(ch * TARGET_RATIO))
    else:
        ch = int(round(cw / TARGET_RATIO))

    canvas = Image.new('RGB', (cw, ch), BG)
    canvas.paste(im.convert('RGB'), ((cw - w) // 2, (ch - h) // 2))
    return canvas


def process(path):
    im = Image.open(path)
    before = im.size

    # สำรองของเดิมไว้ก่อนเสมอ (ครั้งแรกครั้งเดียว ไม่ทับของสำรองที่มีอยู่)
    d = os.path.join(os.path.dirname(path), '_original')
    os.makedirs(d, exist_ok=True)
    backup = os.path.join(d, os.path.basename(path))
    if not os.path.exists(backup):
        shutil.copy2(path, backup)

    out = fit_to_ratio(trim_white(im))
    out.save(path, quality=92)

    # ตัวของกินพื้นที่กี่ % ของรูป — ยิ่งเยอะยิ่งเต็มกรอบ
    def fill(imx):
        t = trim_white(imx)
        return t.size[0] * t.size[1] / (imx.size[0] * imx.size[1]) * 100

    print('  %s' % path)
    print('     ก่อน %sx%s  ตัวของกินพื้นที่ %.0f%%' % (before[0], before[1], fill(Image.open(backup))))
    print('     หลัง %sx%s  ตัวของกินพื้นที่ %.0f%%' % (out.size[0], out.size[1], fill(out)))


if __name__ == '__main__':
    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    os.chdir(root)

    args = sys.argv[1:]
    if args:
        files = args
    else:
        # ไม่ระบุไฟล์ = ทำรูปแรก (part/1) ของทุกโฟลเดอร์งานซ่อม
        files = []
        for pat in ('images/projects/work-*/*.jpg', 'images/projects/work-*/*.png',
                    'images/projects/front-air-grille/*.jpg'):
            files += glob.glob(pat)
        files = [f for f in files if '_original' not in f.replace('\\', '/')]

    if not files:
        print('ไม่พบไฟล์รูป — ยังไม่ได้วางรูปลงโฟลเดอร์ใช่ไหม')
    for f in sorted(files):
        process(f)
