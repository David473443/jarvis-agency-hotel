#!/usr/bin/env python3
"""
Scaffold a new client website project using the agency template system.

Usage:
    python3 scaffold_client.py "Rivergate Hotel" --industry hotel \
        --location "GRA Phase 2, Port Harcourt" --phone "+234 905 777 7780" \
        --whatsapp "2349057777780"

Creates clients/<slug>/ with:
    - client.config.js   (copy of client.config.example.js, ready to edit)
    - CLAUDE.md          (filled from the agency build memory)
    - refs/              (drop reference screenshots here)
Then you build with Claude Code loaded into that folder.
"""
import argparse, os, re, shutil, datetime

AGENCY_ROOT = os.path.dirname(os.path.abspath(__file__))
CLIENTS_DIR = os.path.join(AGENCY_ROOT, "clients")
EXAMPLE = os.path.join(AGENCY_ROOT, "client.config.example.js")

def slugify(name: str) -> str:
    s = name.lower()
    s = re.sub(r"[^a-z0-9]+", "-", s).strip("-")
    return s or "client"

CLAUDE_TEMPLATE = """# Client Project: {name}

## Identity
- Client: {name}
- Industry: {industry}
- Location: {location}
- Phone: {phone}  |  WhatsApp: {whatsapp}

## Brand
- Tagline: <fill me>
- Voice: <e.g. calm authority / luxury / playful>

## Aesthetic Brief (5-8 lines — be specific)
<Describe the look: color palette, mood, typography feel, spacing, motion.
Reference the Taste Vault. Do NOT write "modern and clean" — that is slop.>

## Reference Sites (Taste Vault)
- <URL> — steal: <specific element>
- <URL> — steal: <specific element>

## Guardrails (CONSTANTS — never violate)
- Colors: pull from client.config.js brandColors, reference them don't hardcode
- Fonts: system + one display font max
- Always: real images (client's OWN, scraped), real copy, mobile-first, working wa.me CTA
- Never: AI placeholder images, generic gradient hero, one-shot builds

## Build Process
1. Scaffold done (this folder). Edit client.config.js with real data + photos.
2. Generate 3 distinct hero/layout variants (ThreeUI 3D components).
3. Compare vs Reference Sites + Guardrails. Pick winner, refine 1-2 passes.
4. Wire booking/contact to WhatsApp (wa.me/{whatsapp}).
5. git push -> Railway auto-deploys -> verify live link.

Generated: {stamp}
"""

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("name")
    ap.add_argument("--industry", default="<industry>")
    ap.add_argument("--location", default="<location>")
    ap.add_argument("--phone", default="<phone>")
    ap.add_argument("--whatsapp", default="<whatsapp>")
    args = ap.parse_args()

    slug = slugify(args.name)
    dest = os.path.join(CLIENTS_DIR, slug)
    os.makedirs(os.path.join(dest, "refs"), exist_ok=True)

    # copy config example
    if os.path.exists(EXAMPLE):
        shutil.copy(EXAMPLE, os.path.join(dest, "client.config.js"))
    else:
        print("WARN: client.config.example.js not found at", EXAMPLE)

    # write filled CLAUDE.md
    claude = CLAUDE_TEMPLATE.format(
        name=args.name, industry=args.industry, location=args.location,
        phone=args.phone, whatsapp=args.whatsapp,
        stamp=datetime.datetime.now().isoformat(timespec="seconds"),
    )
    with open(os.path.join(dest, "CLAUDE.md"), "w") as f:
        f.write(claude)

    print(f"Scaffolded client project: {dest}")
    print("Next:")
    print(f"  1. Edit {dest}/client.config.js with real data + photo paths")
    print(f"  2. Fill Aesthetic Brief + References in {dest}/CLAUDE.md")
    print(f"  3. Build 3 variants, pick winner, push to Railway")

if __name__ == "__main__":
    main()
