# Personal Website: Site Structure & Blueprint

**Global Elements (On Every Page):**
* **Header:** Ultra-minimalist navigation (Logo left, Links right: Work, About, Blog, Papers, Contact).
* **Footer:** Simple copyright text, links to LinkedIn and GitHub, medium gray text.

---

## 1. Home Page (`/index.html`)
**Goal:** Introduce who I am and show my best work immediately.
* **Hero Section:** Massive center-aligned headline, brief sub-headline explaining what I do, and a primary blue button ("View My Work").
* **Featured Projects Grid:** A 2-column or 3-column grid showing top projects. Soft drop shadow on hover.
* **Call to Action (Bottom):** "Let's build something together" with a secondary button ("Get in touch").

## 2. About Page (`/about.html`)
**Goal:** Share my background and skills cleanly.
* **Simple Hero:** Left-aligned page title ("About Me").
* **Bio Section:** 2-column layout. Left side: professional photo. Right side: bio text.
* **Skills List:** Pill-shaped tags showing main skills.

## 3. Blog Page (`/blog.html` & `/post-template.html`)
**Goal:** Share my thoughts and updates in a distraction-free format.
* **Minimalist Hero:** Center-aligned title ("Blog").
* **Article Feed:** Vertical list of blog posts (date, bold title, excerpt, "Read more" link).
* **Article Layout:** Narrow container (max-width: 700px) centered on the page.

## 4. Papers Page (`/papers.html` & `/paper-template.html`)
**Goal:** Host academic or formal research natively on the web for optimal reading, while providing the original PDF for reference.
* **Minimalist Hero:** Center-aligned title ("Research" or "Papers").
* **Paper Feed:** A clean list of research papers. Each item includes the year, title, abstract (1-2 sentences), and a "Read Article" link.
* **Native Paper Layout (`/paper-template.html`):**
    * Narrow, highly readable content container (max-width: 800px).
    * **Top CTA:** A minimalist secondary button right below the title/authors that says "📄 Download Original PDF".
    * **Content:** Natively formatted text (clean headings, properly spaced paragraphs) using our standard `Google Sans` typography.
    * **Bottom CTA:** Repeat the "📄 Download Original PDF" button at the very end of the article.

## 5. Contact Page (`/contact.html`)
**Goal:** Make it incredibly easy to email me.
* **Minimalist Hero:** Center-aligned title ("Say Hello").
* **Contact Form:** Clean input fields. Primary blue button for "Send Message".
* **Direct Email Link:** Plain text fallback below the form.