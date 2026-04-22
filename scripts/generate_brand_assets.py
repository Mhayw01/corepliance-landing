#!/usr/bin/env python3
"""Regenerate favicons, apple-touch-icon, and OG meta image from the new brand icon.

Run from repo root:
    python3 scripts/generate_brand_assets.py

Outputs written to public/ and public/assets/.
"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
ICON_DARK = ROOT / "public/assets/v2/icon-dark.png"       # navy hex, transparent bg
ICON_CYAN = ROOT / "public/assets/v2/icon-light.png"  # cyan hex, transparent bg (no wordmark)
ICON_WHITE = ROOT / "public/assets/v2/icon-white.png"     # white hex, transparent bg

NAVY = (21, 24, 46, 255)       # #15182e
CYAN = (33, 233, 245, 255)     # #21e9f5
WHITE = (255, 255, 255, 255)

DIDOT = "/System/Library/Fonts/Supplemental/Didot.ttc"
GEORGIA = "/System/Library/Fonts/Supplemental/Georgia.ttf"
GEORGIA_BOLD = "/System/Library/Fonts/Supplemental/Georgia Bold.ttf"
HELVETICA = "/System/Library/Fonts/HelveticaNeue.ttc"


def composite_icon(icon_path: Path, size: int, bg: tuple, icon_scale: float = 1.0) -> Image.Image:
    """Place the icon PNG (with alpha) onto a solid-colour square, optionally padded."""
    canvas = Image.new("RGBA", (size, size), bg)
    icon = Image.open(icon_path).convert("RGBA")
    target = int(size * icon_scale)
    icon = icon.resize((target, target), Image.LANCZOS)
    offset = (size - target) // 2
    canvas.paste(icon, (offset, offset), icon)
    return canvas


def save_favicons() -> None:
    # Browser tab favicons: navy hex on white, tight (no padding) so it's legible at 16px.
    for size in (16, 32):
        img = composite_icon(ICON_DARK, size, WHITE, icon_scale=1.0)
        out = ROOT / f"public/favicon-{size}.png"
        img.save(out, optimize=True)
        print(f"  wrote {out.relative_to(ROOT)} ({size}x{size})")

    # Apple touch icon: cyan hex on navy, slight padding — iOS renders with rounded corners.
    apple = composite_icon(ICON_CYAN, 180, NAVY, icon_scale=0.68)
    apple_out = ROOT / "public/apple-touch-icon.png"
    apple.save(apple_out, optimize=True)
    print(f"  wrote {apple_out.relative_to(ROOT)} (180x180)")

    # 512x512 for PWA/high-density — useful for social/manifest.
    big = composite_icon(ICON_CYAN, 512, NAVY, icon_scale=0.68)
    big_out = ROOT / "public/icon-512.png"
    big.save(big_out, optimize=True)
    print(f"  wrote {big_out.relative_to(ROOT)} (512x512)")


def save_favicon_svg() -> None:
    """SVG favicon referencing the navy icon PNG inline as base64, so the tab icon is vector-sized."""
    import base64
    png_bytes = ICON_DARK.read_bytes()
    b64 = base64.b64encode(png_bytes).decode()
    svg = (
        "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n"
        "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\">\n"
        f"  <image href=\"data:image/png;base64,{b64}\" x=\"0\" y=\"0\" width=\"32\" height=\"32\" />\n"
        "</svg>\n"
    )
    out = ROOT / "public/favicon.svg"
    out.write_text(svg)
    print(f"  wrote {out.relative_to(ROOT)} (32x32 vector wrapper)")


def save_og_image() -> None:
    """1200x630 social meta card: navy bg, cyan icon + wordmark, Playfair-style headline."""
    W, H = 1200, 630
    card = Image.new("RGBA", (W, H), NAVY)
    draw = ImageDraw.Draw(card)

    # Cyan icon, top-left
    icon_size = 88
    icon = Image.open(ICON_CYAN).convert("RGBA").resize((icon_size, icon_size), Image.LANCZOS)
    icon_x, icon_y = 80, 80
    card.paste(icon, (icon_x, icon_y), icon)

    # Wordmark "COREPLIANCE" next to icon, using Georgia Bold (Playfair stand-in)
    wordmark_font = ImageFont.truetype(GEORGIA_BOLD, 42)
    wordmark_y = icon_y + (icon_size - 42) // 2 - 4
    draw.text((icon_x + icon_size + 20, wordmark_y), "COREPLIANCE", font=wordmark_font, fill=WHITE)

    # Headline — Playfair-style serif, cyan, 2 lines max
    headline_font = ImageFont.truetype(GEORGIA, 64)
    headline_lines = [
        "Regulator-ready AML compliance",
        "for conveyancing lawyers.",
    ]
    y = 240
    for line in headline_lines:
        draw.text((80, y), line, font=headline_font, fill=CYAN)
        y += 78

    # Sub-tagline — Lato-style sans, white, light
    sub_font = ImageFont.truetype(HELVETICA, 28)
    draw.text((80, 470), "Built by lawyers, for lawyers.", font=sub_font, fill=WHITE)

    # URL bottom-right, small
    url_font = ImageFont.truetype(HELVETICA, 22)
    url_text = "corepliance.co.uk"
    url_bbox = draw.textbbox((0, 0), url_text, font=url_font)
    url_w = url_bbox[2] - url_bbox[0]
    draw.text((W - url_w - 80, H - 60), url_text, font=url_font, fill=CYAN)

    out = ROOT / "public/assets/meta.png"
    card.convert("RGB").save(out, optimize=True, quality=92)
    print(f"  wrote {out.relative_to(ROOT)} (1200x630)")


if __name__ == "__main__":
    print("Generating brand assets...")
    save_favicons()
    save_favicon_svg()
    save_og_image()
    print("Done.")
