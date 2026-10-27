/* ============================================================
   Render layer — turns the objects in data.js into DOM.
   Each `render*` function is a small reusable component.
   ============================================================ */
(function () {
  "use strict";

  /* ---------- helpers ---------- */
  const $ = (sel, root = document) => root.querySelector(sel);
  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );
  const set = (id, html) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  };
  const isExternal = (href) => /^(https?:)?\/\//.test(href || "");
  const attrs = (href) =>
    isExternal(href) ? ' target="_blank" rel="noopener noreferrer"' : "";
  const emphasize = (text, phrases = []) => {
    let html = esc(text);
    phrases.forEach((phrase) => {
      const safePhrase = esc(phrase);
      html = html.replace(safePhrase, `<strong>${safePhrase}</strong>`);
    });
    return html;
  };

  /* ---------- icons ---------- */
  const ICONS = {
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/>',
    github:
      '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.2-1.5 6.2-6.7A5.2 5.2 0 0 0 19.9 5a4.9 4.9 0 0 0-.1-3.6s-1.1-.3-3.7 1.4a12.6 12.6 0 0 0-6.6 0C6.9 1.1 5.8 1.4 5.8 1.4A4.9 4.9 0 0 0 5.7 5a5.2 5.2 0 0 0-1.4 3.6c0 5.2 3.2 6.4 6.2 6.7a3.4 3.4 0 0 0-.9 2.6V22"/>',
    linkedin:
      '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-13h4v1.8A6 6 0 0 1 16 8z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
    scholar: '<path d="M22 9 12 4 2 9l10 5 10-5z"/><path d="M6 11.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.5"/>',
    pen: '<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18z"/><path d="m2 2 7.6 7.6"/><circle cx="11" cy="11" r="2"/>',
    music: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
    game: '<line x1="6" y1="11" x2="10" y2="11"/><line x1="8" y1="9" x2="8" y2="13"/><line x1="15" y1="12" x2="15.01" y2="12"/><line x1="18" y1="10" x2="18.01" y2="10"/><rect x="2" y="6" width="20" height="12" rx="4"/>',
    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
    map: '<path d="m1 6 7-3 8 3 7-3v15l-7 3-8-3-7 3z"/><path d="M8 3v15M16 6v15"/>',
    sparkle: '<path d="M12 2v6M12 16v6M2 12h6M16 12h6"/><path d="m5 5 3.5 3.5M15.5 15.5 19 19M19 5l-3.5 3.5M8.5 15.5 5 19"/>',
    activity: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
  };
  const icon = (name, cls = "") =>
    ICONS[name]
      ? `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${ICONS[name]}</svg>`
      : "";

  /* ---------- components ---------- */
  const socialLink = (l, cls = "iconlink") =>
    `<a class="${cls}" href="${esc(l.href)}"${attrs(l.href)}>${icon(l.icon)}<span>${esc(l.label)}</span></a>`;

  const button = (l, primary) =>
    `<a class="btn${primary ? " btn--primary" : ""}" href="${esc(l.href)}"${attrs(l.href)}>${icon(l.icon)}<span>${esc(l.label)}</span></a>`;

  const linkList = (links = []) =>
    links.length
      ? `<div class="linkrow">${links
          .map((l) => `<a href="${esc(l.href)}"${attrs(l.href)}>${esc(l.label)}</a>`)
          .join("")}</div>`
      : "";

  function projectCard(p) {
    const media = p.youtubeId
      ? `<div class="pcard__media media-embed">
          <img src="${esc(p.image)}" alt="${esc(p.imageAlt || "")}" loading="lazy" width="1280" height="720">
          <button class="video-play" type="button" aria-label="${esc(p.videoLabel)}" data-youtube-id="${esc(p.youtubeId)}" data-video-url="${esc(p.videoUrl)}">
            <span aria-hidden="true">▶</span>
          </button>
        </div>`
      : p.image
      ? `<div class="pcard__media">
          <img src="${esc(p.image)}" alt="${esc(p.imageAlt || "")}" loading="lazy">
        </div>`
      : "";
    const more = p.detail
      ? `<a href="project.html?p=${encodeURIComponent(p.slug)}">Read more</a>`
      : "";
    const links = [
      ...(p.links || []).map(
        (l) => `<a href="${esc(l.href)}"${attrs(l.href)}>${esc(l.label)}</a>`
      ),
      more,
    ]
      .filter(Boolean)
      .join("");
    const titleInner = p.detail
      ? `<a href="project.html?p=${encodeURIComponent(p.slug)}">${esc(p.title)}</a>`
      : esc(p.title);

    return `
      <article class="pcard${p.image ? "" : " pcard--text"} reveal">
        ${media}
        <div class="pcard__body">
          ${p.year ? `<p class="pcard__year">${esc(p.year)}</p>` : ""}
          <h3 class="pcard__title">${titleInner}</h3>
          ${p.tagline ? `<p class="pcard__tagline">${esc(p.tagline)}</p>` : ""}
          <p class="pcard__desc">${esc(p.description)}</p>
          ${p.role ? `<p class="pcard__role"><b>My role:</b> ${esc(p.role)}</p>` : ""}
          ${p.note ? `<p class="pcard__note">${esc(p.note)}</p>` : ""}
          <ul class="tags">${(p.tags || []).map((t) => `<li class="tag">${esc(t)}</li>`).join("")}</ul>
          ${links ? `<div class="linkrow">${links}</div>` : ""}
        </div>
      </article>`;
  }

  function featuredProjectCard(p) {
    return `
      <article class="fproject reveal">
        <div class="fproject__media media-embed">
          <img src="${esc(p.poster)}" alt="" loading="lazy" width="1280" height="720">
          <button class="video-play" type="button" aria-label="${esc(p.videoLabel)}" data-youtube-id="${esc(p.youtubeId)}" data-video-url="${esc(p.videoUrl)}">
            <span aria-hidden="true">▶</span>
          </button>
        </div>
        <div class="fproject__body">
          <p class="fproject__context">${esc(p.context)}</p>
          <h3 class="fproject__title">${esc(p.title)}</h3>
          <p class="fproject__tagline">${esc(p.tagline)}</p>
          <ul class="fproject__highlights">${p.highlights.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>
          <p class="pcard__role"><b>${p.title.startsWith("EnSight") ? "My role" : "My contributions"}:</b> ${esc(p.role)}</p>
          <ul class="tags">${p.tags.map((tag) => `<li class="tag">${esc(tag)}</li>`).join("")}</ul>
          ${linkList(p.links)}
        </div>
      </article>`;
  }

  function timelineEntry(e) {
    return `
      <li class="tl reveal">
        <div class="tl__layout">
          <div class="tl__media">
            <img class="tl__image" src="${esc(e.image)}" alt="${esc(e.imageAlt)}" loading="lazy" width="640" height="480">
          </div>
          <div class="tl__content">
            <div class="tl__top">
              <h3 class="tl__role">${esc(e.role)}</h3>
              <span class="cat cat--${esc(e.category)}">${esc(e.category)}</span>
            </div>
            <p class="tl__meta"><b>${esc(e.org)}</b>${e.location ? ", " + esc(e.location) : ""}. ${esc(e.date)}</p>
            <ul class="tl__bullets">${(e.bullets || []).map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
          </div>
        </div>
      </li>`;
  }

  const focusStyle = (focus) => (focus ? ` style="object-position: ${esc(focus)}"` : "");

  // Second image (if any) is laid over the corner of the first as a tilted print.
  function activityCard(a, i) {
    const [main, inset] = a.images || [];
    const media = main
      ? `<div class="act__media${inset ? " act__media--stack" : ""}">
          <div class="act__frame">
            <img class="act__img" src="${esc(main)}" alt="${esc(a.imageAlt || "")}" loading="lazy"${focusStyle(a.focus)}>
          </div>
          ${inset ? `<img class="act__inset" src="${esc(inset)}" alt="" loading="lazy">` : ""}
          <span class="cat act__badge">${esc(a.category)}</span>
        </div>`
      : "";
    return `
      <article class="act reveal" id="act-${i}" data-act="${i}" style="--c:${seriesColor(i)}">
        ${media}
        <h3 class="act__title">${esc(a.title)}</h3>
        <p class="act__date">${esc(a.date)}</p>
        <p class="act__note">${esc(a.note)}</p>
      </article>`;
  }

  // Categorical series colors, assigned in fixed order (validated for CVD separation).
  const SERIES = ["#3a76c4", "#e0703f", "#1f9e74", "#6a5acd", "#e2a21a", "#d9739c"];
  const seriesColor = (i) => SERIES[i % SERIES.length];

  /* Activity donut: one slice per activity, sized by months involved. */
  const MONTHS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
  const toMonth = (s) => {
    const [mon, yr] = s.trim().split(/\s+/);
    return Number(yr) * 12 + MONTHS.indexOf(mon.slice(0, 3).toLowerCase());
  };
  const monthsOf = (a) => {
    const [from, to = from] = a.date.split(/\s+-\s+/);
    return toMonth(to) - toMonth(from) + 1;
  };
  const DONUT = { size: 220, r: 80, gap: 3, pop: 7 };

  function activityDonut(items) {
    const months = items.map(monthsOf);
    const total = months.reduce((x, y) => x + y, 0);
    const { size, r, gap, pop } = DONUT;
    const c = size / 2;
    const circ = 2 * Math.PI * r;
    let cum = 0;
    const slices = items
      .map((a, i) => {
        const frac = months[i] / total;
        const startDeg = (cum / total) * 360 - 90;
        const mid = ((cum + months[i] / 2) / total) * 2 * Math.PI;
        cum += months[i];
        const len = Math.max(frac * circ - gap, 1).toFixed(2);
        const dx = (Math.sin(mid) * pop).toFixed(2);
        const dy = (-Math.cos(mid) * pop).toFixed(2);
        return `<a class="donut__seg" href="#act-${i}" data-act="${i}" aria-label="${esc(a.title)}: ${months[i]} months"
            style="--c:${seriesColor(i)};--len:${len};--circ:${circ.toFixed(2)};--dx:${dx}px;--dy:${dy}px;--i:${i}">
            <circle cx="${c}" cy="${c}" r="${r}" transform="rotate(${startDeg.toFixed(2)} ${c} ${c})"/>
          </a>`;
      })
      .join("");
    const legend = items
      .map(
        (a, i) => `<li><a class="donut__key" href="#act-${i}" data-act="${i}" style="--c:${seriesColor(i)}">
            <span class="donut__swatch" aria-hidden="true"></span>
            <span class="donut__name">${esc(a.short || a.title)}</span>
            <span class="donut__val">${months[i]} mo</span>
          </a></li>`
      )
      .join("");
    return `
      <div class="donut__figure">
        <svg class="donut__svg" viewBox="0 0 ${size} ${size}" role="img" aria-label="Months spent on each activity">${slices}</svg>
        <div class="donut__center" aria-live="polite" data-total="${total}" data-count="${items.length}">
          <b class="donut__num">${total}</b><span class="donut__label">months across ${items.length} activities</span>
        </div>
      </div>
      <div class="donut__side">
        <p class="donut__caption">Time spent · months per activity</p>
        <ul class="donut__legend">${legend}</ul>
      </div>`;
  }

  // Hovering a slice, legend key, or card lights up all three; the donut center follows.
  function initActivityLinks() {
    const center = $(".donut__center");
    const num = center && $(".donut__num", center);
    const label = center && $(".donut__label", center);
    const reset = () => {
      if (!center) return;
      num.textContent = center.dataset.total;
      label.textContent = `months across ${center.dataset.count} activities`;
    };
    const show = (i, on) => {
      document.querySelectorAll(`[data-act="${i}"]`).forEach((n) => n.classList.toggle("is-active", on));
      $(".donut")?.classList.toggle("has-active", on);
      if (!center) return;
      if (!on) return reset();
      const a = ACTIVITIES[i];
      num.textContent = monthsOf(a);
      label.textContent = `months · ${a.short || a.title}`;
    };
    document.querySelectorAll("[data-act]").forEach((el) => {
      const i = el.dataset.act;
      el.addEventListener("mouseenter", () => show(i, true));
      el.addEventListener("mouseleave", () => show(i, false));
      if (el.matches("a")) {
        el.addEventListener("focus", () => show(i, true));
        el.addEventListener("blur", () => show(i, false));
      }
    });
  }

  /* Beyond research: floating photo bubbles, each drifting on its own rhythm. */
  const beyondBubble = (b, i) => `
      <figure class="bubble reveal" style="--c:${seriesColor(i + 1)};--i:${i}">
        <div class="bubble__float">
          <div class="bubble__photo">
            <img src="${esc(b.image)}" alt="${esc(b.imageAlt || "")}" loading="lazy"${focusStyle(b.focus)}>
          </div>
          <span class="bubble__icon">${icon(b.icon)}</span>
        </div>
        <figcaption>
          <h3 class="by__title">${esc(b.title)}</h3>
          <p class="by__body">${esc(b.body)}</p>
        </figcaption>
      </figure>`;

  /* ---------- page assembly ---------- */
  function renderShell() {
    set("footerLinks", SITE.links.map((l) => socialLink(l)).join(""));
    set("footerUpdated", esc(SITE.lastUpdated));
    set("footerName", esc(SITE.name));
    const yr = document.getElementById("footerYear");
    if (yr) yr.textContent = new Date().getFullYear();
  }

  function renderHome() {
    set("about-h", esc(SITE.name));
    set(
      "heroIntro",
      SITE.about.map((p) => `<p>${emphasize(p, SITE.aboutBold)}</p>`).join("")
    );
    set("heroInterests", SITE.interests.map((i) => `<li>${esc(i)}</li>`).join(""));
    set(
      "heroLinks",
      SITE.links.map((l, i) => button(l, i === 0)).join("")
    );

    const hp = $("#heroPhoto");
    if (hp) {
      hp.src = SITE.photo;
      hp.alt = SITE.photoAlt;
    }

    set("projectList", PROJECTS.map(projectCard).join(""));
    set("featuredProjectList", FEATURED_PROJECTS.map(featuredProjectCard).join(""));

    set("expList", EXPERIENCE.map(timelineEntry).join(""));
    set("actDonut", activityDonut(ACTIVITIES));
    set("actList", ACTIVITIES.map(activityCard).join(""));
    set(
      "beyondList",
      `<span class="bubbles__dot" aria-hidden="true"></span>`.repeat(6) + BEYOND.map(beyondBubble).join("")
    );
    initActivityLinks();
  }

  function initVideos() {
    document.querySelectorAll(".media-embed").forEach((media) => {
      const play = $(".video-play", media);
      if (!play) return;

      play.addEventListener("click", () => {
        const iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(play.dataset.youtubeId)}?autoplay=1&rel=0`;
        iframe.title = play.getAttribute("aria-label") || "Project video";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        iframe.allowFullscreen = true;
        iframe.referrerPolicy = "strict-origin-when-cross-origin";
        media.replaceChildren(iframe);
      });
    });
  }

  /* ---------- behaviors ---------- */
  // Fade-and-rise on first scroll into view; skipped under reduced motion.
  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("is-in");
          obs.unobserve(e.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    items.forEach((el) => io.observe(el));
  }

  /* ---------- project detail page ---------- */
  function renderProject() {
    const slug = new URLSearchParams(location.search).get("p");
    const p = PROJECTS.find((x) => x.slug === slug);
    const root = $("#detail");
    if (!root) return;

    if (!p) {
      root.innerHTML = `<a class="backlink" href="index.html#research">Back to research</a>
        <h1 class="detail__title">Project not found</h1>
        <p class="detail__lead">That project doesn't exist (yet). Head back to the <a href="index.html#research">research section</a>.</p>`;
      return;
    }

    document.title = `${p.title} — ${SITE.name}`;
    root.innerHTML = `
      <a class="backlink" href="index.html#research">Back to research</a>
      <h1 class="detail__title">${esc(p.title)}</h1>
      ${p.tagline ? `<p class="detail__tagline">${esc(p.tagline)}</p>` : ""}
      <ul class="tags">${(p.tags || []).map((t) => `<li class="tag">${esc(t)}</li>`).join("")}</ul>
      ${linkList(p.links)}
      <img class="detail__hero" src="${esc(p.image)}" alt="${esc(p.imageAlt)}">
      <p class="detail__lead">${esc(p.overview || p.description)}</p>
      ${p.role ? `<p class="pcard__role"><b>My role:</b> ${esc(p.role)}</p>` : ""}
      ${(p.sections || [])
        .map(
          (s) => `<section class="detail__section reveal">
            <h2>${esc(s.heading)}</h2><p>${esc(s.body)}</p>
          </section>`
        )
        .join("")}
      ${
        (p.gallery || []).length
          ? `<div class="detail__gallery">${p.gallery
              .map((g) => `<img src="${esc(g.src)}" alt="${esc(g.alt)}" loading="lazy">`)
              .join("")}</div>`
          : ""
      }`;
  }

  /* ---------- boot ---------- */
  renderShell();
  if (document.getElementById("projectList")) renderHome();
  renderProject();
  initVideos();
  initReveal();
})();
