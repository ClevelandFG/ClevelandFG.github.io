### 🤖 AI Agent Design System: "Modern Minimalist Tech" (Google Aesthetic)

**Core Philosophy**
Prioritize clarity, accessibility, and extreme minimalism. The design should feel breathable, optimistic, and highly functional. Emphasize negative space (whitespace) as a primary design element. Never clutter the screen; let the content breathe.

**1. Color Palette**
* **Backgrounds:** Pure White (`#FFFFFF`) or off-white (`#F8F9FA`) for the main canvas to ensure a clean, airy feel.
* **Primary Text:** Near-black (`#202124`) for maximum readability on white.
* **Secondary Text:** Medium gray (`#5F6368`) for sub-headlines, footers, and less critical information.
* **Action Accents (CTAs & Links):** Vibrant, accessible Blue (`#1A73E8`).
* **Brand Accents (Use Sparingly):** Subtle integrations of vibrant Red (`#EA4335`), Yellow (`#FBBC05`), and Green (`#34A853`). Use these only for abstract background particles, product icons, or micro-illustrations, never for large blocks of color.

**2. Typography (Script)**
* **Font Family:** Use a clean, friendly, geometric sans-serif font. Prefer `Google Sans`, `Product Sans`, `Inter`, or `Roboto`.
* **Hierarchy:**
    * *Hero Headlines:* Massive, bold, and center-aligned (e.g., 4rem - 5rem font size, tightly tracked). They should immediately grab attention.
    * *Body Text:* Highly legible, regular weight, with generous line height (e.g., 1.125rem font size, 1.6 line height).
* **Treatment:** Avoid all-caps. Use sentence case for headers to feel more conversational and approachable.

**3. Layout & Composition (Responsive)**
* **Whitespace:** Implement massive margins and padding (e.g., 120px to 160px vertical padding between sections). Elements should never feel crowded.
* **Hero Section:** Center-aligned content. A massive headline followed by a brief, muted sub-headline, and 1-2 call-to-action buttons.
* **Grid System:** Use a flexible, 12-column responsive grid.
* **Containers:** When boxing content, use rounded corners (border-radius: 12px to 24px) with very subtle, soft drop shadows (`box-shadow: 0 4px 6px rgba(0,0,0,0.05)`) only when hovering or layered. Otherwise, keep elements flat.

**4. UI Elements**
* **Buttons:** Pill-shaped (fully rounded edges) or heavily rounded rectangles. 
    * *Primary Button:* Solid fill (Black `#202124` or Blue `#1A73E8`) with white text.
    * *Secondary Button:* Transparent background with a subtle gray border and near-black text.
* **Navigation:** Ultra-minimalist top bar. Text-only links with plenty of spacing.

**5. Motion & Interaction (Sliding Speed & Animations)**
* **Easing Curve:** All animations must use standard Material Design easing for a natural, snappy feel. Use CSS: `cubic-bezier(0.4, 0.0, 0.2, 1)`. 
* **Speed/Duration:** * Micro-interactions (button hovers, color changes): Swift, ~`150ms` to `200ms`.
    * Sliding/Page load animations (fade-ins, sliding up): Smooth and deliberate, ~`300ms` to `400ms`.
* **Entry Animations:** Elements should lightly "fade in and slide up" (translateY from 20px to 0px) as the user scrolls them into view.
* **Background Movement:** If using particles or abstract shapes (like the Antigravity screenshot), make them float at an incredibly slow, almost imperceptible speed to avoid distracting from the text.