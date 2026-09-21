"""make-preview.py - carousel pictures of a worksheet's pages.

    py tools/make-preview.py <source.pdf|.png> <slug> <subject-slug> [--plain] [--pages N]
    -> worksheets/<subject-slug>/<slug>/preview-1.jpg ... preview-N.jpg

    py tools/make-preview.py <source.pdf> <slug> <subject-slug> --thumb
    -> worksheets/<subject-slug>/<slug>/thumb.jpg   (page 1, 800px, never marked)

PAID sheets (the default): WATERMARKED, page 1 only. ROADMAP 40. Paul,
2026-09-09: "put something over it so noone can steal the example."
FREE sheets (--plain --pages 2): no watermark, first pages. Paul, 2026-09-10:
every worksheet gets the animal cell's product page, carousel included.

🚨 THE WATERMARK IS BAKED INTO THE PIXELS. A CSS overlay looks identical and is
defeated by right-click -> Save Image.
🚨 A PAID SHEET NEVER GETS PAGE 2. The answer key is the part worth stealing;
the carousel shows a "hidden from preview" tile instead. --pages is refused
without --plain for exactly that reason.
⚠️ DOWNSCALED to 900px wide either way. A full-resolution picture of a paid
sheet is a usable sheet once someone crops round the marks.
⚠️ A paid sheet's PDF lives OUTSIDE the repo (the paid guard fails the build on
a PDF in a paid folder). Only the jpgs this writes are committed.
build-worksheets.js puts every preview-N.jpg it finds into the carousel, in
order, so re-running with fewer pages must not leave stale ones behind; this
deletes preview-*.jpg in the folder first.

🖼️ --thumb IS THE COVER, and it exists because make-cover.js cannot make one
for a kind:"pdf" sheet. make-cover.js renders a PAGE; these sheets have no page
to render, only Paul's file. Added 2026-09-21 with the first of his own
worksheets. 800px wide to match every other thumb on the shelf, and never
watermarked - a cover is the shop window, not the goods.
⚠️ It writes thumb.jpg and touches no preview-*.jpg, so the two runs are
independent and either can be repeated on its own.

Needs PyMuPDF and Pillow: py -m pip install --user pymupdf pillow
"""
import sys, os, glob
import pymupdf
from PIL import Image, ImageDraw, ImageFont

WIDTH = 900
THUMB_WIDTH = 800
MARK = "NEXSTUDENTS  ·  PREVIEW"


def watermark(img):
    # Diagonal rows across the WHOLE page, so no crop leaves a clean diagram.
    w, h = img.size
    layer = Image.new("RGBA", (w * 2, h * 2), (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer)
    try:
        font = ImageFont.truetype("arialbd.ttf", 34)
    except OSError:
        font = ImageFont.load_default()
    step_x, step_y = 520, 150
    for row, y in enumerate(range(0, h * 2, step_y)):
        offset = (row % 2) * (step_x // 2)
        for x in range(-step_x, w * 2, step_x):
            draw.text((x + offset, y), MARK, font=font, fill=(20, 30, 45, 70))
    layer = layer.rotate(30, resample=Image.BICUBIC)
    layer = layer.crop((w // 2, h // 2, w // 2 + w, h // 2 + h))
    return Image.alpha_composite(img.convert("RGBA"), layer).convert("RGB")


def pages_of(src, n, width=WIDTH):
    if src.lower().endswith(".png") or src.lower().endswith(".jpg"):
        img = Image.open(src).convert("RGB")
        if img.width > width:
            img = img.resize((width, round(img.height * width / img.width)), Image.LANCZOS)
        return [img]
    doc = pymupdf.open(src)
    out = []
    for i in range(min(n, doc.page_count)):
        page = doc[i]
        zoom = width / page.rect.width
        pix = page.get_pixmap(matrix=pymupdf.Matrix(zoom, zoom), alpha=False)
        out.append(Image.frombytes("RGB", (pix.width, pix.height), pix.samples))
    return out


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    plain = "--plain" in sys.argv
    thumb = "--thumb" in sys.argv
    n = 1
    if "--pages" in sys.argv:
        n = int(sys.argv[sys.argv.index("--pages") + 1])
        args = [a for a in args if a != str(n)]
        if not plain and n > 1:
            sys.exit("refused: a watermarked (paid) preview is page 1 only - the answer key is never shown")
    src, slug, subj = args[:3]
    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    folder = os.path.join(root, "worksheets", subj, slug)
    if not os.path.isdir(folder):
        sys.exit("no such worksheet folder: " + folder)

    if thumb:
        img = pages_of(src, 1, THUMB_WIDTH)[0]
        out = os.path.join(folder, "thumb.jpg")
        img.save(out, "JPEG", quality=82, optimize=True)
        print(out, img.size, os.path.getsize(out), "bytes")
        return

    for old in glob.glob(os.path.join(folder, "preview-*.jpg")):
        os.remove(old)
    for i, img in enumerate(pages_of(src, n), start=1):
        if not plain:
            img = watermark(img)
        out = os.path.join(folder, "preview-%d.jpg" % i)
        img.save(out, "JPEG", quality=78, optimize=True)
        print(out, img.size, os.path.getsize(out), "bytes")


if __name__ == "__main__":
    main()
