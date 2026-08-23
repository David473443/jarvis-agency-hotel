# Agency Build Memory — J.A.R.V.I.S Web Agency

This file is the project memory for every client site we build. Claude Code reads
this so it never starts from zero and never produces "AI slop." Method adapted
from Chase AI's "Turn Claude into a Design Genius" 3-step framework.

## The 3 rules (never skip)
1. **Project, not chat.** Always build inside a project with this CLAUDE.md loaded.
2. **Tell Claude who you are.** Identity + brand + constraints up front.
3. **Iterate, never one-shot.** Generate 3 variants → compare → refine.

## Per-client workflow
1. Run `python3 scaffold_client.py "Client Name" --industry hotel --location "Port Harcourt"`
   → creates `clients/<slug>/` with `client.config.js` + a filled `CLAUDE.md`.
2. Fill the Aesthetic Brief + Reference Sites in that client's CLAUDE.md.
3. Build 3 distinct hero/layout variants using the ThreeUI 3D components.
4. Score each against Reference Sites + Guardrails. Pick the winner.
5. Wire booking/contact to WhatsApp (`wa.me/<number>`).
6. `git push` → Railway auto-deploys → verify live link.

## House style (J.A.R.V.I.S brand)
- Hard sci-fi: black background, white point-cloud particles, rotating data-core.
- Real data, real photos (scrape the client's OWN images — never AI placeholders).
- Mobile-first, fast, no bloat.

## Guardrails (CONSTANTS — never violate)
- Colors live in `client.config.js` `brandColors` — reference them, don't hardcode.
- Fonts: system + one display font max.
- Always: real images, real copy (no lorem ipsum), working WhatsApp CTA.
- Never: AI-generated placeholder images, generic gradient hero, one-shot builds,
  deploying without verifying the live link.
