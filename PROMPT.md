# CODEX PROMPT — MYBIZGATE AUTO SPA DEMO IMPROVEMENT

## Role and objective

Act as a senior frontend engineer, automotive-industry UX designer, and conversion-focused product designer. Improve **three existing Auto Spa demo templates** so a prospective MyBizGate client immediately sees (1) professional design quality, (2) a website appropriate to their business type, and (3) useful working business features—not just a beautiful landing page.

Implement changes in the **current local project**, not the production website. These are three **distinct** concepts, not recolours of the same layout.

### Demo URLs (identify their actual local counterparts before editing)

- **Precision / default demo:** https://demo-autospa.mybizgate.com/
- **Aurelia:** https://demo-autospa.mybizgate.com/?template=aurelia
- **Monarch:** https://demo-autospa.mybizgate.com/?template=monarch

Confirm the correct source files and the actual `?template=` routing/mapping from the repository. Do **not** assume a specific `01-*`, `02-*`, or `04-*` directory from URL names alone. Keep Obsidian / `?template=obsidian` and its Pearl redesign **out of scope** unless changes to shared infrastructure strictly require touching it; do not overwrite its styling.

## Non-negotiable rules

1. Inspect `AGENTS.md`, README, source structure, package scripts, asset paths, routing, `git status`, current design tokens, and any existing tests. Protect uncommitted changes.
2. **Preserve the current technology stack**. If the templates are plain HTML/CSS/JS, retain that architecture; if Vue/Vite/Tailwind/Pinia is already used, retain it. Do not introduce React or a new framework simply for visual effects.
3. Preserve all existing working navigation, package selection, enquiry, forms, WhatsApp links, analytics hooks (if any), template switching, and query parameters. Do not silently change pricing, service descriptions, phone numbers, or brand details.
4. Do **not** invent business facts: no fake verified reviews, real-looking ratings, customer counts, Instagram engagement, completed bookings, certifications, real-time capacity, or guaranteed results. Clearly label any fictional demo data as **Demo / Illustration**, or replace it with neutral feature previews. Any testimonials must be genuine or explicitly labelled illustrative.
5. Prefer authentic supplied vehicle/studio/service photography. Preserve image rights and existing assets. Do not download unlicensed car brand imagery, hotlink arbitrary stock images, or present generated images as real customer work. If an appropriate image is unavailable, use an intentional designed placeholder and report what image is needed.
6. Never write into production `.env` files, access remote databases, or modify tenant/customer data.
7. **Do not commit, push, merge, deploy, or trigger GitHub Actions/FTPS.** The `deploy` branch may auto-publish to Shinjiru; leave the changes locally for review.
8. Use the `mybizgate-mobile-first` skill and Playwright/browser testing **if installed/available**. Do not claim either was executed if unavailable.

## Success criteria

A visitor can recognise in seconds which automotive business each design serves. They can discover services and prices, inspect real results, select a suitable package, and reach the correct enquiry/booking action on mobile. At the end, the three templates should have visibly different compositions, typography, imagery treatment, colour systems, and customer journeys.

---

## Implementation order: 1. PRECISION (flagship)

**Target client:** Multi-service car spa, busy detailing centre, or larger automotive care studio.

**Positioning:** The fullest, most interactive MyBizGate capability showcase. Prioritise practical features and customer confidence over decorative effects.

### Design improvements

- Strengthen the first-screen hierarchy: specific automotive service headline, one high-quality vehicle/detailing image, short benefit statement, and **Book Appointment** + **View Packages** CTAs.
- Make premium photography, spacing, layout and contrast cohesive on desktop **and** mobile; keep the existing visual identity unless it needs refinement.
- Simplify busy sections: use a clear order such as **Hero → Trust/Services → Before & After → Packages → How It Works → Booking → FAQs/Contact**. Only reorder where this improves an existing flow.
- Make service cards informative: what is included, who it suits, estimated duration only if actual data exists, and one meaningful CTA.
- Redesign package comparisons so names, prices, inclusions, differences, and action buttons are easy to scan. Use a "Most popular" badge **only when true**; otherwise say "Featured package".
- Feature genuine before/after results prominently. If unavailable, use a clearly marked demo gallery or image slot.
- Make "How It Works" explain a realistic inspection → service → quality check → handover flow, without suggesting that steps currently automated are live if they are not.

### Functional demonstration

- Selecting a package should carry its name and relevant details into the enquiry/booking flow **if the project already supports booking**. If no booking flow exists, implement a small, local-only demonstrable flow consistent with the current architecture; do not add a backend.
- If using WhatsApp handoff, prefill a properly URL-encoded message describing the chosen package; never claim an appointment is confirmed by opening WhatsApp.
- Clearly distinguish **Request Appointment** / **Send WhatsApp Enquiry** from **Confirmed Booking**.
- If showing appointment status or capacity, label it an **interactive demo**, with predictable local-only state where needed. Do not present sample `03 / 05` service bays as live operational data.
- Remove or accurately label sample Google `4.9` ratings, placeholder reviews, illustrative Instagram metrics, or other figures that could be mistaken for verified business claims.
- Ensure package, enquiry, navigation, and modal interactions still work after redesign.

**Definition of done:** Precision is visually polished and showcases at least one coherent, testable service-to-enquiry workflow without pretending demo features are connected to a real business backend.

---

## Implementation order: 2. AURELIA (approachable and high-converting)

**Target client:** Local car wash, neighbourhood detailing shop, affordable-to-midrange auto spa, owner-operated studio.

**Positioning:** Friendly, transparent, quick to understand, easy to contact. Do not make Aurelia look like another luxury showroom template.

### Design improvements

- Preserve the warm, straightforward character. Improve typography, spacing, imagery, and hierarchy rather than adding unnecessary effects.
- Use a simple hero: what the shop does, where customers are served **only if supported by real content**, and a highly visible **WhatsApp / Get a Quote** CTA.
- Present services and starting prices clearly. Make it obvious what customers get and avoid misleading "from" pricing without context.
- Add a compact before/after gallery with supplied imagery (or honest placeholder cards), plus realistic FAQs such as service duration, what affects pricing, and how to request an appointment.
- Keep contact details and operating hours easy to find, using actual project data only.
- Ensure the mobile experience reaches services, prices, and WhatsApp enquiry with minimal scrolling and taps; do not bury contact below decorative sections.
- Use clean, inviting cards and readable package comparisons, without excessive gradients, animation, or visual clutter.

### Functional demonstration

- Ensure service/price selection reaches the correct enquiry action with useful prefilled context.
- Validate forms where present, preserve entered values during navigation where possible, and provide an honest feedback state (e.g. "WhatsApp will open to send your enquiry").
- Check tel, WhatsApp, map, and navigation links. If details are demo-only, visibly label them rather than inventing a real local address.

**Definition of done:** Aurelia feels practical and approachable, with a fast, low-friction path from discovering a service to contacting the business.

---

## Implementation order: 3. MONARCH (exclusive / consultation-led)

**Target client:** Premium ceramic coating, paint protection and high-end automotive detailing studio.

**Positioning:** Refined editorial luxury with exceptional visual storytelling. It should not look like the Precision or Aurelia layout with a different colour palette.

### Design improvements

- Keep Monarch exclusive, but avoid cliché black-and-gold overload. Use a more nuanced luxury colour treatment based on its existing brand: restrained deep accents, warm neutrals, refined metallic details, and generous white/negative space where appropriate.
- Replace an overly generic illustrated-car hero with excellent **licensed/supplied real vehicle photography**, if available. Otherwise retain a polished placeholder and report required imagery.
- Reduce repeated luxury marketing claims. Use fewer, stronger sections with specific, concrete explanations of coating care, paint correction, finishing and aftercare.
- Create an editorial layout with asymmetrical images, premium typography, deliberate spacing, concise copy, and understated motion. Avoid generic feature-card grids for every section.
- Elevate **View Our Work / Portfolio** and **Request Consultation** above generic contact actions.
- Explain package/service differences clearly, even in a luxury presentation; do not hide useful information behind vague terms.
- Add a refined consultation process: **Enquire → Vehicle Assessment → Recommended Treatment → Appointment**. Do not claim any real assessment or booking was performed.

### Functional demonstration

- Consultation CTA must lead to an actual usable form or correctly prepared WhatsApp enquiry, depending on the existing architecture.
- Portfolio filtering/lightbox may be improved if already present; no major new dependency without good reason.
- Preserve mobile usability, keyboard controls, readable contrast, form labels, and reduced-motion support despite the editorial styling.

**Definition of done:** Monarch looks tailored to a high-ticket detailing specialist and leads visitors confidently toward consultation.

---

## Shared experience: show MyBizGate business flexibility

If a template selector already exists, improve it **without redesigning the whole platform**:

- Present each option by business fit rather than theme name alone:
  - **Precision — Multi-service Auto Spa**
  - **Aurelia — Local Detailing & Car Wash**
  - **Monarch — Premium Coating Studio**
- Provide a short distinction and a working **View Live Demo** action.
- Preserve the `?template=` links and correct back/forward navigation.
- Optionally add a small, nonintrusive **Built by MyBizGate** or **Demo website** footer link / strip where appropriate; never obstruct the client-facing design.
- If showing functionality badges ("WhatsApp enquiry", "Package selection", "Appointment demo"), only include features that actually work; clearly label prototype-only features.

Do **not** consolidate all templates into one generic component layout or overwrite their unique branding.

## Mobile-first and accessibility acceptance tests

Implement responsive layouts with **320, 375, 390, 430, 768, 1024, 1440 CSS px** as review widths. At minimum, confirm:

- No unintended horizontal overflow, clipped text, oversized image, hidden buttons, or sticky UI obstructing content.
- Navigation and menus work with touch, mouse and keyboard; sufficient contrast and visible focus indicators.
- Mobile hero does not consume the entire screen unnecessarily; service value and primary action are immediately clear.
- Cards and package comparisons stack appropriately and remain readable at 320 px.
- Interactive controls have approximately **44x44 CSS px** effective touch targets or equivalent spacing.
- Form labels, keyboard types, validation and feedback are clear; sticky CTAs respect safe-area inset and keyboard.
- Images are sized/cropped intelligently, lazy-loaded where appropriate and not unnecessarily heavy. Maintain aspect ratios; avoid layout shift.
- Respect `prefers-reduced-motion`; avoid autoplay/carousel behaviour that makes navigation difficult.
- SEO basics: correct page titles, descriptions, headings, image alt text and canonical/template indexing strategy where applicable. Preserve real domain and template switching behaviour; do not claim guaranteed SEO scores.

If Playwright is available, capture before-and-after screenshots for key mobile and desktop widths, inspect console errors, and test booking/WhatsApp interactions. If it is not available, use available checks and note the visual-verification gap.

## Implementation workflow

1. **Audit** all three templates and identify their actual local files/routes, existing behaviour, assets, and design tokens. Record a concise baseline. Verify current `git status` before editing.
2. **Improve Precision first.** Complete its visual design and one working conversion journey before proceeding.
3. **Improve Aurelia second.** Focus on transparent service presentation and fast enquiry.
4. **Improve Monarch third.** Focus on premium differentiated visual direction and consultation.
5. **Validate** all three routes and the template selector, and make sure Obsidian remains unchanged.
6. Use existing scripts from `package.json` when present, such as tests, lint and production build. For static sites, use an appropriate simple local server and avoid unnecessary tooling.
7. Summarise modifications with paths, test evidence, before/after screenshots if available, known limitations, and **explicit confirmation that nothing was pushed or deployed**.

## Required final report from Codex

Use this format:

### Templates improved
| Template | Business target | Major UI changes | Functional improvements |
|---|---|---|---|
| Precision | Multi-service car spa | ... | ... |
| Aurelia | Local detailing | ... | ... |
| Monarch | Premium coating | ... | ... |

### Validation
- Commands executed and their results
- Routes and viewport widths actually tested
- Booking, WhatsApp, forms and template switching results
- Screenshots/report paths, if generated
- Any issues left open or not testable
- Git changes and **deployment status: NOT DEPLOYED**

## Start now

Inspect the repository and implement these improvements **directly in the existing local codebase**. Use good judgement where details are unspecified, keep the three designs intentionally distinct, and prioritise working customer journeys and trustworthy presentation over decorative effects. Do not stop after providing a design plan; implement and validate as far as the local environment allows, without deploying.
