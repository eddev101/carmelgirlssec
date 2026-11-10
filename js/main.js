/* =========================================================
   Carmel Girls Secondary School — Site Script
   Edit SCHOOL below once; header + footer on every page update.
   ========================================================= */
const SCHOOL = {
  name: "Carmel Girls",
  fullName: "Carmel Girls' Secondary School",
  tagline: "Arusha · Tanzania",
  owner: "Sisters of Apostolic Carmel",
  regNo: "S.5944",
  centreNo: "S.6697",
  motto: "Faith, Knowledge & Service",          // TODO: confirm official motto
  phone: "+255 XXX XXX XXX",                    // TODO: real school phone
  email: "carmelsch.girls@gmail.com",
  admissionsEmail: "carmelsch.girls@gmail.com",
  poBox: "P.O. Box [0000], Arusha, Tanzania",   // TODO: real P.O. Box
  location: "Olasiti Ward, Arusha District, Arusha Region",
  hours: "Mon – Fri: 7:30 AM – 4:30 PM",        // TODO: confirm office hours
  social: { facebook: "#", instagram: "#", youtube: "#", x: "#" }
};

const NAV = [
  ["index.html", "Home"],
  ["about.html", "About"],
  ["academics.html", "Academics"],
  ["admissions.html", "Admissions"],
  ["student-life.html", "Student Life"],
  ["news.html", "News & Events"],
  ["gallery.html", "Gallery"],
  ["contact.html", "Contact"]
];

const ICON = {
  phone: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>',
  pin: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  clock: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 8V6c0-.9.6-1 1-1h3V1h-4c-4 0-5 3-5 5v2H6v4h3v11h5V12h3.5l.5-4z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
  youtube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.8 15V9l5.7 3-5.7 3z"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.2 2h3.4l-7.4 8.5L23 22h-6.8l-5.3-7-6.1 7H1.4l7.9-9L1 2h7l4.8 6.4L18.2 2zm-1.2 18h1.9L7.1 4H5.1L17 20z"/></svg>'
};

/* School crest (simple placeholder emblem — replace with official logo file) */
const CREST = `<svg class="brand__crest" viewBox="0 0 64 64" aria-hidden="true">
  <path d="M32 3 56 11v20c0 15-10.5 25.5-24 30C18.5 56.5 8 46 8 31V11L32 3z" fill="#6b1d2a" stroke="#c9a24a" stroke-width="2.5"/>
  <path d="M14 42l10-12 6 7 6-11 14 16" fill="none" stroke="#e8d39c" stroke-width="2.4" stroke-linejoin="round"/>
  <path d="M32 12v14M25 18h14" stroke="#e8d39c" stroke-width="3" stroke-linecap="round"/>
  <circle cx="32" cy="50" r="2.4" fill="#c9a24a"/>
</svg>`;

function brandHTML() {
  return `<a href="index.html" class="brand" aria-label="${SCHOOL.fullName} — Home">
    ${CREST}
    <span class="brand__name">${SCHOOL.name}<span class="brand__sub">Secondary School · Arusha</span></span>
  </a>`;
}

function renderHeader() {
  const el = document.getElementById("site-header");
  if (!el) return;
  const page = location.pathname.split("/").pop() || "index.html";
  const links = NAV.map(([href, label]) =>
    `<li><a href="${href}"${href === page ? ' class="active" aria-current="page"' : ""}>${label}</a></li>`).join("");
  el.outerHTML = `
  <a class="skip-link" href="#main">Skip to content</a>
  <div class="topbar">
    <div class="container">
      <div class="topbar__info">
        <span>${ICON.phone}<a href="tel:${SCHOOL.phone.replace(/\s/g, "")}">${SCHOOL.phone}</a></span>
        <span>${ICON.mail}<a href="mailto:${SCHOOL.email}">${SCHOOL.email}</a></span>
        <span class="topbar__hide-sm">${ICON.clock}${SCHOOL.hours}</span>
      </div>
      <div class="topbar__social topbar__info">
        <a href="admissions.html">Apply for ${new Date().getFullYear() + 1}</a>
        <a href="news.html">Notices</a>
      </div>
    </div>
  </div>
  <header class="header" id="header">
    <div class="container">
      ${brandHTML()}
      <button class="nav-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="nav"><span></span><span></span><span></span></button>
      <nav class="nav" id="nav" aria-label="Main">
        <ul>${links}<li><a href="admissions.html#apply" class="btn btn--maroon">Apply Now</a></li></ul>
      </nav>
    </div>
  </header>`;
}

function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;
  const s = SCHOOL.social;
  el.outerHTML = `
  <footer class="footer">
    <div class="container">
      <div class="footer__grid">
        <div>
          ${brandHTML()}
          <p>A girls' secondary school in Olasiti, Arusha, owned and managed by the ${SCHOOL.owner}, forming confident, capable and morally upright young women.</p>
          <p style="color:var(--gold-light);font-style:italic;font-family:var(--font-head)">“${SCHOOL.motto}”</p>
          <div class="socials">
            <a href="${s.facebook}" aria-label="Facebook">${ICON.facebook}</a>
            <a href="${s.instagram}" aria-label="Instagram">${ICON.instagram}</a>
            <a href="${s.youtube}" aria-label="YouTube">${ICON.youtube}</a>
            <a href="${s.x}" aria-label="X">${ICON.x}</a>
          </div>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            <li><a href="about.html">About Us</a></li>
            <li><a href="academics.html">Academics</a></li>
            <li><a href="student-life.html">Student Life</a></li>
            <li><a href="gallery.html">Gallery</a></li>
            <li><a href="news.html">News & Events</a></li>
          </ul>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="admissions.html">Admissions</a></li>
            <li><a href="admissions.html#fees">Fees Structure</a></li>
            <li><a href="admissions.html#requirements">Joining Instructions</a></li>
            <li><a href="academics.html#results">NECTA Results</a></li>
            <li><a href="academics.html#teachers">Our Teachers</a></li>
            <li><a href="admissions.html#faq">FAQs</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>${SCHOOL.poBox}</li>
            <li><a href="tel:${SCHOOL.phone.replace(/\s/g, "")}">${SCHOOL.phone}</a></li>
            <li><a href="mailto:${SCHOOL.email}">${SCHOOL.email}</a></li>
          </ul>
          <form class="newsletter" id="newsletter" novalidate>
            <input type="email" placeholder="Your email" aria-label="Email for newsletter" required>
            <button type="submit">Join</button>
          </form>
          <small id="newsletter-msg" style="display:block;margin-top:8px;color:var(--gold-light)"></small>
        </div>
      </div>
    </div>
    <div class="container footer__bottom">
      <span>© ${new Date().getFullYear()} ${SCHOOL.fullName}. All rights reserved.</span>
      <span>Reg. No. ${SCHOOL.regNo} · NECTA Centre No. ${SCHOOL.centreNo}</span>
    </div>
  </footer>
  <button class="to-top" id="toTop" aria-label="Back to top">
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 15l-6-6-6 6"/></svg>
  </button>`;
}

/* Fill any element with data-school="key" from SCHOOL */
function fillSchoolData() {
  document.querySelectorAll("[data-school]").forEach(el => {
    const v = SCHOOL[el.dataset.school];
    if (v) el.textContent = v;
  });
}

function initNav() {
  const btn = document.querySelector(".nav-toggle");
  if (btn) btn.addEventListener("click", () => {
    const open = document.body.classList.toggle("nav-open");
    btn.setAttribute("aria-expanded", open);
    btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  const header = document.getElementById("header");
  const toTop = document.getElementById("toTop");
  const onScroll = () => {
    header && header.classList.toggle("scrolled", scrollY > 10);
    toTop && toTop.classList.toggle("show", scrollY > 600);
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  toTop && toTop.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));
}

function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { items.forEach(i => i.classList.add("visible")); return; }
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
  }), { threshold: 0.12 });
  items.forEach(i => io.observe(i));
}

function initCounters() {
  const nums = document.querySelectorAll("[data-count]");
  const run = el => {
    const target = +el.dataset.count, suffix = el.dataset.suffix || "";
    const start = performance.now(), dur = 1600;
    const tick = t => {
      const p = Math.min((t - start) / dur, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  if (!("IntersectionObserver" in window)) { nums.forEach(run); return; }
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) { run(e.target); io.unobserve(e.target); }
  }), { threshold: 0.5 });
  nums.forEach(n => io.observe(n));
}

function initTabs() {
  document.querySelectorAll("[data-tabs]").forEach(group => {
    const btns = group.querySelectorAll(".tab-btn");
    btns.forEach(b => b.addEventListener("click", () => {
      btns.forEach(x => { x.classList.remove("active"); x.setAttribute("aria-selected", "false"); });
      b.classList.add("active"); b.setAttribute("aria-selected", "true");
      group.querySelectorAll(".tab-panel").forEach(p => p.classList.toggle("active", p.id === b.dataset.tab));
    }));
    const hashBtn = location.hash && group.querySelector(`.tab-btn[data-tab="${location.hash.slice(1)}"]`);
    if (hashBtn) { hashBtn.click(); group.scrollIntoView(); }
  });
}

function initGallery() {
  const items = document.querySelectorAll(".gallery__item");
  if (!items.length) return;
  document.querySelectorAll("[data-filter]").forEach(btn => btn.addEventListener("click", () => {
    document.querySelectorAll("[data-filter]").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const f = btn.dataset.filter;
    items.forEach(i => i.classList.toggle("hidden", f !== "all" && i.dataset.cat !== f));
  }));
  const lb = document.getElementById("lightbox");
  if (!lb) return;
  const content = lb.querySelector(".lightbox__media");
  const cap = lb.querySelector(".lightbox__caption");
  const close = () => { lb.classList.remove("open"); document.body.style.overflow = ""; };
  items.forEach(i => i.addEventListener("click", () => {
    content.innerHTML = i.querySelector(".photo").outerHTML;
    cap.textContent = i.dataset.caption || "";
    lb.classList.add("open"); document.body.style.overflow = "hidden";
    lb.querySelector(".lightbox__close").focus();
  }));
  lb.addEventListener("click", e => { if (e.target === lb || e.target.closest(".lightbox__close")) close(); });
  addEventListener("keydown", e => { if (e.key === "Escape") close(); });
}

/* Form validation + sending. Forms whose `action` points to FormSubmit (formsubmit.co/ajax/<email>)
   are delivered to that inbox. The FIRST submission triggers a one-time activation email to the
   school inbox — someone must click "Activate Form" in it before later submissions arrive. */
function initForms() {
  document.querySelectorAll("form[data-validate]").forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      let ok = true;
      form.querySelectorAll("[required]").forEach(f => {
        const wrap = f.closest(".field");
        const valid = f.type === "email" ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.value.trim())
                    : f.type === "tel" ? /^[+\d\s()-]{9,}$/.test(f.value.trim())
                    : f.value.trim() !== "";
        wrap && wrap.classList.toggle("invalid", !valid);
        if (!valid) ok = false;
      });
      const msg = form.querySelector(".form-success");
      if (!ok) { form.querySelector(".invalid input, .invalid select, .invalid textarea")?.focus(); return; }
      if (form.getAttribute("action")) {
        const btn = form.querySelector('button[type="submit"]');
        const label = btn.textContent;
        btn.disabled = true; btn.textContent = "Sending…";
        msg.classList.remove("show", "form-error");
        fetch(form.action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } })
          .then(r => { if (!r.ok) throw new Error(r.status); msg.textContent = msg.dataset.ok || msg.textContent; msg.classList.add("show"); form.reset(); })
          .catch(() => {
            msg.dataset.ok = msg.dataset.ok || msg.textContent;
            msg.textContent = `Sorry, your message could not be sent. Please email us at ${SCHOOL.email}.`;
            msg.classList.add("show", "form-error");
          })
          .finally(() => { btn.disabled = false; btn.textContent = label; });
      } else {
        msg.classList.add("show"); form.reset();
      }
    });
    form.querySelectorAll("input, select, textarea").forEach(f =>
      f.addEventListener("input", () => f.closest(".field")?.classList.remove("invalid")));
  });
  const nl = document.getElementById("newsletter");
  if (nl) nl.addEventListener("submit", e => {
    e.preventDefault();
    const v = nl.querySelector("input").value.trim();
    document.getElementById("newsletter-msg").textContent =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "Thank you! You're subscribed to school updates." : "Please enter a valid email.";
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) nl.reset();
  });
}

renderHeader();
renderFooter();
fillSchoolData();
document.addEventListener("DOMContentLoaded", () => {
  initNav(); initReveal(); initCounters(); initTabs(); initGallery(); initForms();
});
