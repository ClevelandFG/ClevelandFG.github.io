# Personal Website: Site Structure & Blueprint

**Global Elements (On Every Page):**
* **Header:** Ultra-minimalist navigation (Logo left, Links right: Work, About, Blog, Contact).
* **Footer:** Simple copyright text, links to LinkedIn and GitHub, medium gray text.

---

## 1. Home Page (`/index.html`)
**Goal:** Introduce who I am and show my best work immediately.
* **Hero Section:** Massive center-aligned headline ("Hi, I'm [Name]"), brief sub-headline explaining what I do, and a primary blue button ("View My Work").
* **Featured Projects Grid:** A 2-column or 3-column grid showing my top 3 projects. Each card should have a soft drop shadow on hover.
* **Call to Action (Bottom):** "Let's build something together" with a secondary button ("Get in touch").

## 2. About Page (`/about.html`)
**Goal:** Share my background and skills cleanly.
* **Simple Hero:** Left-aligned page title ("About Me").
* **Bio Section:** 2-column layout. Left side: professional photo with rounded corners. Right side: 2-3 paragraphs of bio text.
* **Skills List:** A clean list or pill-shaped tags showing my main skills (e.g., UI/UX, Python, Copywriting).

## 3. Blog Page (`/blog.html` & `/post-template.html`)
**Goal:** Share my thoughts, articles, and updates in a highly readable, distraction-free format.
* **Minimalist Hero:** Center-aligned title ("Writing" or "Blog") with a generous amount of whitespace below it.
* **Article Feed:** A single-column vertical list of blog posts to maintain extreme clarity. 
* **Post Entries:** Each item in the feed should feature a small, light gray date, a bold title, a brief 2-line text excerpt, and a clean text-only "Read more" link.
* **Article Layout (Individual Post):** Narrow content container (max-width: 700px) centered on the page to ensure perfect reading ergonomics, utilizing our defined `Google Sans` typography.

## 4. Contact Page (`/contact.html`)
**Goal:** Make it incredibly easy to email me.
* **Minimalist Hero:** Center-aligned title ("Say Hello").
* **Contact Form:** Clean input fields for Name, Email, and Message. Use the primary blue button for "Send Message".
* **Direct Email Link:** Plain text fallback below the form ("or email me directly at hello@example.com").
