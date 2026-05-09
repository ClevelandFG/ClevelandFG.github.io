/**
 * blog-date.js
 * Automatically displays the "Last Updated" date for blog posts
 * by fetching the most recent commit date from the GitHub API.
 *
 * Usage: Include <script src="../blog-date.js"></script> at the
 * bottom of any blog post HTML. The page must contain an element
 * with id="last-updated".
 *
 * This script is intentionally repository-aware so that new blog
 * posts get the feature for free — no manual dates required.
 */

(function () {
  'use strict';

  // ── Configuration ────────────────────────────────────────────
  const GITHUB_OWNER = 'ClevelandFG';
  const GITHUB_REPO  = 'ClevelandFG.github.io';
  const BRANCH       = 'master';

  // ── Derive the file path from the current URL ────────────────
  // e.g. "/blogs/master-ai-cloze-test.html" → "blogs/master-ai-cloze-test.html"
  const pagePath = window.location.pathname.replace(/^\//, '');

  // ── Target element ───────────────────────────────────────────
  const el = document.getElementById('last-updated');
  if (!el) return;                       // nothing to update

  // ── Clock SVG (kept in sync with the inline fallback) ────────
  const clockSVG =
    '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" ' +
    'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
    'stroke-linecap="round" stroke-linejoin="round" ' +
    'style="vertical-align:-2px;margin-right:4px;">' +
    '<circle cx="12" cy="12" r="10"/>' +
    '<polyline points="12 6 12 12 16 14"/></svg>';

  // ── Fetch the latest commit for this file ────────────────────
  const apiURL =
    'https://api.github.com/repos/' + GITHUB_OWNER + '/' + GITHUB_REPO +
    '/commits?sha=' + BRANCH +
    '&path=' + encodeURIComponent(pagePath) +
    '&per_page=1';

  fetch(apiURL)
    .then(function (res) {
      if (!res.ok) throw new Error('GitHub API ' + res.status);
      return res.json();
    })
    .then(function (commits) {
      if (!commits.length) throw new Error('No commits found');

      var date = new Date(commits[0].commit.committer.date);

      // Format: "May 8, 2026"
      var formatted = date.toLocaleDateString('en-US', {
        year:  'numeric',
        month: 'long',
        day:   'numeric'
      });

      el.innerHTML = clockSVG + ' Updated: ' + formatted;
    })
    .catch(function () {
      // Graceful degradation — hide the tag entirely if the API
      // call fails (rate-limit, offline, etc.)
      el.style.display = 'none';
    });
})();
