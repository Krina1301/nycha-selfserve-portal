# NYCHA Self-Service Portal Prototype

A responsive HTML/CSS/JavaScript landing-page prototype for a modern, inclusive NYCHA self-service experience.

## Included

- Mobile-first responsive layout
- Keyboard navigation and a visible skip link
- High-contrast mode with an announced toggle state
- Large touch targets, clear focus states, and semantic landmarks
- Role-based entry points for residents, applicants, Section 8 participants, and new visitors
- Plain-language popular tasks and prominent help options
- Language selector demo for English, Spanish, Chinese, Bengali, and Haitian Creole (English fallback copy is used where demo translations are not yet supplied)
- Reduced-motion support through `prefers-reduced-motion`

## Run locally

No build step is needed. Open `index.html` in a browser, or serve the directory with a local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Next iteration recommendations

1. Replace placeholder anchors with authenticated NYCHA routes and approved content.
2. Complete professional translations and add a translation workflow rather than relying on client-side strings.
3. Test with NYCHA residents, applicants, seniors, screen-reader users, low-vision users, and mobile users.
4. Run automated and manual WCAG 2.2 AA testing (keyboard, screen reader, zoom to 200%, contrast, forms, and error states).
5. Connect the design tokens in `styles.css` to the approved NYCHA/NYC brand system.

This is a front-end concept only; links and service actions are intentionally non-production placeholders.
