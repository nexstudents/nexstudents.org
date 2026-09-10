"""make-preview.py - a WATERMARKED, DOWNSCALED picture of page 1 of a paid sheet.

    py tools/make-preview.py <source.pdf> <slug> <subject-slug>
    -> worksheets/<subject-slug>/<slug>/preview-1.jpg

ROADMAP 40. Paul, 2026-09-09: "it should show a template of the worksheet and
perhaps you can put something over it so noone can steal the example."

🚨 THE WATERMARK IS BAKED INTO THE PIXELS. A CSS overlay looks identical and is
defeated by right-click -> Save Image. That is the difference between a
watermark and a decoration.
🚨 PAGE 1 ONLY. The answer key is the part worth stealing and never gets a
preview; the carousel shows a "hidden from preview" tile in its place.
⚠️ DOWNSCALED to 900px wide. A watermarked full-resolution sheet is still a
usable sheet once someone crops round the marks.
⚠️ The source PDF lives OUTSIDE the repo (the paid guard in check-links.js fails
the build on a PDF in a paid folder). Only the jpg this writes is committed.

Needs PyMuPDF and Pillow: py -m pip install --user pymupdf pillow
"""
import sys, os
import pymupdf
from PIL import Image, ImageDraw, ImageFont

WIDTH = 900
MARK = "NEXSTUDENTS  ·  PREVIEW"

def main():
    src, slug, subj = sys.argv[1:4]
    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    out = os.path.join(root, "worksheets", subj, slug, "preview-1.jpg")
    if not os.path.isdir(os.path.dirname(out)):
        sys.exit("no such worksheet folder: " + os.path.dirname(out))

    page = pymupdf.open(src)[0]
    zoom = WIDTH / page.rect.width
    pix = page.get_pixmap(matrix=pymupdf.Matrix(zoom, zoom), alpha=False)
    img = Image.frombytes("RGB", (pix.width, pix.height), pix.samples)

    # Diagonal rows of the mark across the WHOLE page, not one stamp in a corner,
    # so no crop leaves a clean diagram.
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
    img = Image.alpha_composite(img.convert("RGBA"), layer).convert("RGB")

    img.save(out, "JPEG", quality=78, optimize=True)
    print(out, img.size, os.path.getsize(out), "bytes")

if __name__ == "__main__":
    main()
