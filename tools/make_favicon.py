"""สร้างไฟล์ favicon ทุกขนาดให้เว็บพอร์ตของปัณยกร

ลาย: ลายเซ็นตัว P เส้นพริ้วแบบปากกาคัดลายมือ
     วาดเส้นเองด้วยเส้นโค้งเบซิเยร์ ไม่ได้ใช้ฟอนต์สำเร็จ จะได้คุมความหนาบางได้ทุกจุด
     (ปากกาจริงจะหนักตอนลากลง เบาตอนสะบัดปลาย — เลียนแบบด้วยการไล่ค่าความหนา)

วาดที่ความละเอียด 2048 แล้วย่อด้วย LANCZOS
เพราะ Pillow ไม่ทำ anti-alias ให้รูปทรง ถ้าวาดขนาดจริงเลยขอบจะหยักเป็นบันได

วิธีรัน:  python tools/make_favicon.py
"""
from PIL import Image, ImageDraw
import os

OUT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SUP = 2048                      # ความละเอียดที่วาดจริงก่อนย่อ
UNIT = 1000.0                   # ระบบพิกัดที่ใช้ออกแบบ (แล้วค่อยสเกลขึ้น)

BG   = (10, 10, 10, 255)        # --bg ของเว็บ
INK  = (245, 245, 242, 255)     # --text ของเว็บ = สีหมึก


def bezier(p0, p1, p2, p3, t):
    """จุดบนเส้นโค้งเบซิเยร์กำลังสาม ที่ตำแหน่ง t (0..1)"""
    u = 1 - t
    x = (u * u * u * p0[0] + 3 * u * u * t * p1[0]
         + 3 * u * t * t * p2[0] + t * t * t * p3[0])
    y = (u * u * u * p0[1] + 3 * u * u * t * p1[1]
         + 3 * u * t * t * p2[1] + t * t * t * p3[1])
    return x, y


def stroke(draw, seg, scale):
    """ลากเส้นหนึ่งช่วง โดยไล่ความหนาจาก w0 -> wm (กลาง) -> w1 (ปลาย)

    ใช้วิธีวาดวงกลมถี่ๆ ไล่ไปตามเส้นแล้วค่อยๆ เปลี่ยนรัศมี
    ได้ผลเป็นเส้นหนาบางไม่เท่ากันเหมือนหัวปากกาจริง
    """
    p0, p1, p2, p3, w0, wm, w1 = seg
    steps = 700
    for i in range(steps + 1):
        t = i / steps
        x, y = bezier(p0, p1, p2, p3, t)
        if t < 0.5:
            w = w0 + (wm - w0) * (t / 0.5)
        else:
            w = wm + (w1 - wm) * ((t - 0.5) / 0.5)
        r = w * scale / 2.0
        cx, cy = x * scale, y * scale
        draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=INK)


# ---------------------------------------------------------------------------
# รูปร่างตัว P — ออกแบบบนผืน 1000x1000
#   แต่ละช่วง = (จุดเริ่ม, คุมโค้ง1, คุมโค้ง2, จุดจบ, หนาต้น, หนากลาง, หนาปลาย)
#   ลำดับการลากเหมือนเวลาเซ็นชื่อจริง: สะบัดเข้า -> ลากลง -> วนหัว -> สะบัดหาง
#   อยากปรับทรง ให้ขยับตัวเลขพวกนี้แล้วรันใหม่ ไม่ต้องแตะโค้ดส่วนอื่น
# ---------------------------------------------------------------------------
STROKES = [
    # 1) เส้นหลักลากลง — เริ่มบางเหมือนปลายปากกาเพิ่งแตะกระดาษ
    #    แล้วหนักสุดช่วงกลาง ก่อนเรียวลงตอนใกล้ก้น
    #    (ไม่มีเส้นสะบัดเข้าแยกต่างหาก เพราะย่อเล็กแล้วมันหายจนเหลือรูปทรงแปลกๆ)
    ((392, 150), (352, 400), (300, 620), (252, 828),
     14, 76, 36),

    # 2) หางสะบัดออกขวา เหมือนขีดใต้ลายเซ็น เรียวจนแหลมเป็นปลายเข็ม
    ((252, 828), (348, 918), (612, 884), (792, 742),
     36, 26, 4),

    # 3) วงหัวตัว P ครึ่งบน — โค้งกางออกขวา
    ((392, 158), (566, 116), (706, 196), (706, 340),
     30, 46, 40),

    # 4) วงหัวตัว P ครึ่งล่าง — โค้งกลับเข้าหาเส้นหลัก เรียวจบเป็นปลายบาง
    ((706, 340), (706, 482), (520, 542), (300, 520),
     40, 34, 12),
]


def rounded_mask(size, radius_ratio=0.22):
    m = Image.new("L", (size, size), 0)
    ImageDraw.Draw(m).rounded_rectangle(
        [0, 0, size - 1, size - 1], radius=int(size * radius_ratio), fill=255)
    return m


def build(size=SUP):
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    d.rounded_rectangle([0, 0, size - 1, size - 1],
                        radius=int(size * 0.22), fill=BG)

    scale = size / UNIT
    for seg in STROKES:
        stroke(d, seg, scale)

    img.putalpha(rounded_mask(size))
    return img


if __name__ == "__main__":
    master = build()
    os.makedirs(os.path.join(OUT, "images"), exist_ok=True)

    def save_png(px, rel):
        master.resize((px, px), Image.LANCZOS).save(os.path.join(OUT, rel))
        print("  %-34s %6d bytes" % (rel, os.path.getsize(os.path.join(OUT, rel))))

    # Google แนะนำให้ favicon เป็นสี่เหลี่ยมจัตุรัส ขนาดหารด้วย 48 ลงตัว
    save_png(48,  "images/favicon-48.png")
    save_png(96,  "images/favicon-96.png")
    save_png(192, "images/favicon-192.png")
    save_png(512, "images/favicon-512.png")
    save_png(180, "images/apple-touch-icon.png")

    master.resize((256, 256), Image.LANCZOS).save(
        os.path.join(OUT, "favicon.ico"), format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
    print("  %-34s %6d bytes" % ("favicon.ico",
                                 os.path.getsize(os.path.join(OUT, "favicon.ico"))))
