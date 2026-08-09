# Ayatana Website Design Guide

This file is the source of truth for visual, content, interaction, and page
structure decisions. Update it whenever a durable design decision changes.

## Brand Direction

Ayatana is a premium facility-management brand for commercial, residential,
and hospitality environments. The experience should feel calm, tailored, and
quietly luxurious. It should never resemble a loud hospitality campaign, a
generic corporate-services site, or a marketing landing page overloaded with
cards and claims.

**Brand tagline:** Luxury living. Thoughtfully managed.

### Audience And Intent

- Property owners, managers, and teams assessing dependable facility partners.
- Residents, guests, and workplace occupants experience the service indirectly.
- The site should establish confidence, show relevant capability, and guide a
  prospective client toward one next step: a consultation.

## Non-Negotiable Principles

- Luxury comes from restraint, precision, material warmth, and space with a
  purpose, not from decorative excess.
- Use one clear visual anchor in each content block. Do not pair competing
  signals such as large numbers and icons in the same card.
- Favor editorial layouts, full-width bands, and fine dividers over floating
  cards, heavy shadows, or rounded containers.
- Every piece of copy must earn its place. Avoid invented scale claims,
  unverified history, jargon, exclamation points, and superlatives.
- Preserve generous space around brand moments, but tighten arbitrary empty
  space inside service and industry items.

## Color System

| Role | Value | Intended use |
| --- | --- | --- |
| Ink | `#262221` | Primary dark color, headings, dark sections, wordmark, active navigation, and primary actions. |
| Paper | `#F4F1EA` | Default canvas and light section surface. |
| Bronze | `#B9874D` | Logo mark, eyebrow accents, icons, and fine highlights. |
| Stone | `#A7A19A` | Eyebrows and muted secondary text on Paper. |
| Line | `#D5D0C8` | Quiet dividers, borders, and form outlines. |
| White | `#FFFFFF` | Text on Ink, light actions on photographic hero, and form fields only. |

### Color Rules

- Pair Bronze with Ink or Paper, never with another prominent warm fill.
- Ink provides authority. Use it for primary buttons and high-emphasis controls.
- Bronze is jewelry, not a large fill or body-text color.
- Keep broad light surfaces Paper. Use pure white only where functionality or
  contrast requires it.
- Do not add colored blobs, large accent-color fields, or decorative gradients.
- The sole gradient exception is a tonal Ink-to-transparent overlay on imagery
  when it is needed to maintain readable text.

## Typography

| Role | Family | Use |
| --- | --- | --- |
| Display | `DM Serif Display` | Hero statements, section headings, page titles, selected industry titles, and the Ayatana wordmark. |
| Body | `Work Sans` | Navigation, labels, paragraphs, forms, buttons, and functional UI. |

### Type Rules

- Use the tagline in sentence case: **Luxury living. Thoughtfully managed.**
- Use display type sparingly so major statements retain weight.
- Hero and page titles may use `text-5xl` to `sm:text-7xl` with tight leading.
- Section titles use `text-4xl` to `sm:text-5xl`; item titles use `text-2xl`
  or display `text-4xl` only when the content warrants it.
- Body copy should use a relaxed line height. Functional text stays compact.
- All-caps are reserved for short eyebrow labels with positive letter spacing.
- Do not use negative letter spacing or viewport-scaled type.

## Layout And Spacing

- Use a generous but controlled desktop content width and consistent page
  gutters. Hero spacing is intentionally more generous than content bands.
- On desktop, section headers use an asymmetric editorial grid: roughly 35%
  heading and 65% supporting copy, with the two columns bottom-aligned.
- This aligns the supporting copy with the baseline of the display heading and
  keeps a deliberate 40px gutter between the two columns.
- Mobile collapses to a single-column reading sequence. Never rely on desktop
  side-by-side alignment at small widths.
- Keep stable dimensions for repeated items. Content must never overlap, crop,
  or create horizontal scrolling.

## Header, Navigation, And Calls To Action

- The header is sticky, Paper-toned, and lightly translucent with a subtle blur.
- Pair the Bronze logo mark with an Ink Ayatana wordmark.
- Primary navigation contains only **Home** and **About Ayatana**.
- **Request a consultation** is the sole primary conversion label. Do not add a
  duplicate Contact navigation link.
- Footer contact details are information, not a second navigation destination.
- Primary buttons use Ink with white text on Paper. On the dark image hero, use
  a Paper button with Ink text for contrast.
- Secondary buttons use an Ink outline on Paper or a white outline on Ink.
- Use familiar icon-only controls for mobile navigation, with accessible labels.

## Hero Image Treatment

- Hero imagery should convey premium residential living integrated with mature
  greenery.
- Use a right-weighted crop so the architecture remains visible while darker
  foliage supports copy.
- Place hero copy in white over a left-to-right Ink overlay. On desktop, the
  overlay begins at 80% Ink, softens through the middle, and ends transparent.
- On mobile, retain enough tonal coverage across the image for readable white
  type. Do not place copy directly on uncontrolled photo detail.
- Always provide meaningful alt text for content imagery. Decorative imagery
  should use an empty alt attribute.

## Service And Industry Patterns

### Services

- Current items: General staffing, Security, and Housekeeping.
- Use one low-stroke Lucide icon per item: `BriefcaseBusiness`, `ShieldCheck`,
  and `Sparkles`.
- On Paper, use Bronze icons, an Ink title, a short Line rule, and muted copy.
- Present items as a three-column editorial strip with shared top and bottom
  rules and vertical dividers. Do not use numbered cards or floating panels.

### Industries

- Current items: Commercial, Residential, and Hospitality.
- Use `Building2`, `House`, and `ConciergeBell` as the corresponding Lucide
  icons.
- On Ink, use Bronze icons, white display titles, a low-contrast white rule,
  and muted white copy.
- Keep the same divider-led strip structure as services, but let the dark
  surface distinguish the section.

### Icon Rules

- Use a consistent outlined icon set, with a light stroke weight. Icons are
  quiet signposts, not illustrations.
- Icons in these editorial strips are non-interactive and do not need tooltips.
- Do not combine service or industry icons with `01`, `02`, or `03` labels.

## Page Architecture

### Home

1. Image-led hero with tagline and two actions: consultation and services.
2. Paper services strip.
3. Ink industry strip.
4. Paper consultation prompt.

### About Ayatana

- Explain the operating philosophy without inventing company history or scale.
- Lead with an editorial page title and a concise supporting statement.
- Use the three principles: Present, Considered, and Consistent.
- End with a consultation prompt on Ink.

### Consultation Page

- Explain what the visitor should share and provide email, phone, and location.

## Interaction And Accessibility

- Use short, meaningful CSS transitions for color, borders, and subtle rules.
- Avoid animation for decoration alone and respect reduced-motion needs when
  adding future motion.
- All interactive elements need a highly visible Ink focus treatment.
- Maintain readable contrast over dark surfaces and photographs.
- Use semantic headings in order and descriptive link labels.
- Test every new layout at desktop and a 390px mobile viewport for text fit,
  visible controls, and horizontal overflow.

## Content Style

- Write with confidence, restraint, care, and operational clarity.
- Prefer outcomes such as dependable, considered, responsive, and well looked
  after over vague claims of excellence.
- Describe services through the experience they create, not internal process
  jargon.
- Keep headings concise and editorial; support them with direct, plain body copy.

## Design Review Checklist

Before approving a visual change:

1. Confirm it follows the palette, typography, and single-CTA policy.
2. Check that image, icon, divider, and button usage match this guide.
3. Review desktop and mobile layouts for hierarchy, legibility, text fit, and
   horizontal overflow.
4. Update this guide only when the change establishes a lasting design rule.