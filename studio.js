(function () {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const ease = makeEase(0.4, 0, 0.2, 1);

  document.addEventListener("DOMContentLoaded", function () {
    paintName();
    renderFromConfig();
    setupMenu();
    setupReveals();
    setupSpy();
    setupGlobe();
    setupPreview();
  });

  function paintName() {
    const rohit = document.getElementById("name-rohit");
    const ash = document.getElementById("name-ash");
    const choudhary = document.getElementById("name-choudhary");
    if (!rohit || !ash || !choudhary) return;
    rohit.innerHTML = splitWord("ROHIT", 0);
    ash.innerHTML = splitWord("ASH", 6);
    choudhary.innerHTML = splitWord("CHOUDHARY", 10);
  }

  function splitWord(word, offset) {
    return word.split("").map(function (letter, index) {
      return '<span class="char"><span style="--i:' + (offset + index) + '">' + letter + "</span></span>";
    }).join("");
  }

  function renderFromConfig() {
    if (typeof CONFIG === "undefined") return;

    const about = document.getElementById("about-copy");
    if (about) {
      about.innerHTML = [
        "Helpshift. 12TB moving from ScyllaDB to Yugabyte in Clojure and Spark, across 18 nodes that stay up while the data moves.",
        "Dual writes, validation, retries, and jobs that can resume. Internal APIs 35% faster. Production alerts down 30%.",
        "Amdocs, before that. 20+ APIs, OAuth and JWT across 8 services, through a security audit.",
        "50k messages a day under 10ms, on 100k daily transactions. SQL 50% faster. Health checks that returned 1,080 hours a year and cut recovery time by 40%."
      ].map(function (line) {
        return '<span class="about-line">' + line + "</span>";
      }).join("");
    }

    const journey = document.getElementById("journey");
    if (journey && CONFIG.work) {
      journey.innerHTML = CONFIG.work.map(function (job, index) {
        const year = formatSpan(job);
        const lines = (job.highlights || []).map(function (item) {
          return "<li>" + escapeHtml(item) + "</li>";
        }).join("");
        return (
          '<li class="reveal" style="transition-delay:' + (index * 70) + 'ms">' +
            '<p class="when">' + String(index + 1).padStart(2, "0") + " · " + escapeHtml(year) + "</p>" +
            "<h3>" + escapeHtml(job.company) + "</h3>" +
            '<p class="role">' + escapeHtml(job.role) + "</p>" +
            '<ul class="journey-points">' + lines + "</ul>" +
          "</li>"
        );
      }).join("");
    }

    const list = document.getElementById("work-list");
    if (list && CONFIG.products) {
      list.innerHTML = CONFIG.products.map(function (product, index) {
        const title = shortName(product.name);
        const alt = index % 2 === 1 ? " alt" : "";
        const live = product.link && product.link !== "#";
        const link = live
          ? '<a class="work-link" href="' + escapeHtml(product.link) + '" target="_blank" rel="noopener noreferrer">View project <span class="go">→</span></a>'
          : "";
        const tags = (product.tech || []).slice(0, 3).map(function (tech) {
          return "<span>" + escapeHtml(tech) + "</span>";
        }).join("");
        return (
          '<article class="work-row' + alt + ' reveal from-left" style="transition-delay:' + (index * 70) + 'ms" data-preview="' + index + '">' +
            '<div class="work-main">' +
              '<p class="work-kicker">' + escapeHtml(product.status === "live" ? "Live" : product.status || "Built") + "</p>" +
              "<h3>" + escapeHtml(title) + "</h3>" +
              '<p class="blurb">' + escapeHtml(trim(product.description, 140)) + "</p>" +
              link +
            "</div>" +
            '<div class="work-meta">' + tags + "</div>" +
          "</article>"
        );
      }).join("");
    }

    const bento = document.getElementById("bento");
    if (bento && CONFIG.skillsDetailed) {
      const skills = CONFIG.skillsDetailed;
      const featured = ["Clojure", "ScyllaDB", "Yugabyte", "Kafka", "Spring Boot", "Java", "Redis", "RAG", "AWS", "Grafana", "Prometheus", "Hibernate"];
      const chips = featured
        .concat(skills.databases || [], skills.programming || [], skills.ai || [], skills.tools || [], skills.frameworks || [], skills.cloudDevOps || [])
        .filter(function (item, index, all) { return all.indexOf(item) === index; })
        .slice(0, 32);
      bento.innerHTML =
        '<article class="tile large reveal">' +
          '<div><p class="label">Primary</p><h3>Java & Spring Boot</h3>' +
          "<p>APIs, security, and services meant to stay up. The core of the work at Helpshift and Amdocs.</p></div>" +
          "<p>12TB migrated · APIs down 35% · SQL down 60%</p>" +
        "</article>" +
        '<article class="tile reveal" style="transition-delay:70ms">' +
          '<p class="label">Data</p><h3>Stores that hold.</h3>' +
          "<p>ScyllaDB · Yugabyte · Redis · Cassandra</p>" +
        "</article>" +
        '<article class="tile reveal" style="transition-delay:140ms">' +
          '<p class="label">Distributed & AI</p><h3>Kafka, RAG, Spark.</h3>' +
          "<p>Event-driven services, RAG pipelines, and Grafana with Prometheus on the SLOs.</p>" +
        "</article>" +
        '<div class="chip-row reveal" style="transition-delay:200ms">' +
          chips.map(function (chip) { return '<span class="chip">' + escapeHtml(chip) + "</span>"; }).join("") +
        "</div>";
    }

    const links = document.getElementById("contact-links");
    const mail = document.getElementById("contact-mail");
    if (CONFIG.contact) {
      if (mail && CONFIG.contact.email) mail.href = "mailto:" + CONFIG.contact.email;
      if (links) {
        const items = [
          ["Email", CONFIG.contact.email ? "mailto:" + CONFIG.contact.email : ""],
          ["LinkedIn", CONFIG.contact.linkedin],
          ["GitHub", CONFIG.contact.github],
          ["X", CONFIG.contact.twitter],
          ["Instagram", CONFIG.contact.instagram]
        ];
        links.innerHTML = items.filter(function (item) { return item[1]; }).map(function (item) {
          const external = item[1].indexOf("http") === 0;
          return '<a href="' + escapeHtml(item[1]) + '"' + (external ? ' target="_blank" rel="noopener noreferrer"' : "") + ">" + escapeHtml(item[0]) + "</a>";
        }).join("");
      }
    }

    renderResume();
  }

  function renderResume() {
    const experienceLink = document.getElementById("experience-linkedin");
    if (experienceLink && CONFIG.contact && CONFIG.contact.linkedin) {
      experienceLink.href = CONFIG.contact.linkedin;
    }

    const downloadBtn = document.getElementById("resume-download-btn");
    if (downloadBtn && CONFIG.resume && CONFIG.resume.pdfPath) {
      downloadBtn.href = CONFIG.resume.pdfPath;
      downloadBtn.download = CONFIG.resume.pdfPath.split("/").pop() || "resume.pdf";
    }

    const timeline = document.getElementById("experience-timeline");
    if (timeline && CONFIG.work && CONFIG.work.length) {
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      timeline.innerHTML = CONFIG.work.map(function (job, index) {
        const tenure = formatTenure(job, months);
        const current = !job.end;
        return (
          '<article class="timeline-item' + (current ? " current" : "") + '">' +
            '<div class="exp-card">' +
              '<div class="exp-top">' +
                "<div>" +
                  '<p class="exp-index">' + String(index + 1).padStart(2, "0") + "</p>" +
                  "<h3>" + escapeHtml(job.role) + "</h3>" +
                  '<p class="exp-company">' + escapeHtml(job.company) + "</p>" +
                "</div>" +
                '<div class="exp-meta">' +
                  (current ? '<span class="now-badge"><span class="dot"></span>Now</span>' : "") +
                  '<span class="exp-dates">' + tenure.range + "</span>" +
                  '<span class="exp-duration">' + tenure.duration + (job.location ? " · " + escapeHtml(job.location) : "") + "</span>" +
                "</div>" +
              "</div>" +
              '<ul class="exp-highlights">' +
                (job.highlights || []).map(function (item) { return "<li>" + escapeHtml(item) + "</li>"; }).join("") +
              "</ul>" +
              '<div class="tech-tags">' +
                (job.tags || []).map(function (tag) { return '<span class="tech-tag">' + escapeHtml(tag) + "</span>"; }).join("") +
              "</div>" +
            "</div>" +
          "</article>"
        );
      }).join("");
    }

    const skillsSection = document.getElementById("skills-section");
    if (skillsSection && CONFIG.skillsDetailed) {
      const skills = CONFIG.skillsDetailed;
      const allSkills = []
        .concat(skills.frameworks || [], skills.ai || [], skills.tools || [], skills.databases || [], skills.programming || [], skills.cloudDevOps || [], skills.applicationServers || [])
        .filter(function (item, index, all) { return all.indexOf(item) === index; });
      skillsSection.innerHTML = allSkills.map(function (skill) {
        return '<span class="tech-tag">' + escapeHtml(skill) + "</span>";
      }).join("");
    }
  }

  function formatTenure(job, months) {
    const start = parseYm(job.start);
    const now = new Date();
    const end = job.end ? parseYm(job.end) : { year: now.getFullYear(), month: now.getMonth() + 1 };
    const total = Math.max((end.year - start.year) * 12 + (end.month - start.month), 1);
    const years = Math.floor(total / 12);
    const mos = total % 12;
    const parts = [];
    if (years) parts.push(years + (years === 1 ? " yr" : " yrs"));
    if (mos) parts.push(mos + (mos === 1 ? " mo" : " mos"));
    const range = months[start.month - 1] + " " + start.year + " — " + (job.end ? months[end.month - 1] + " " + end.year : "Present");
    return { range: range, duration: parts.join(" ") || "1 mo" };
  }

  function parseYm(value) {
    const parts = String(value || "").split("-").map(Number);
    return { year: parts[0], month: parts[1] };
  }

  function formatSpan(job) {
    if (!job.start) return "";
    const start = job.start.slice(0, 4);
    const end = job.end ? job.end.slice(0, 4) : "Now";
    return start + " — " + end;
  }

  function shortName(name) {
    return String(name).split(/[-–:]/)[0].trim();
  }

  function trim(text, max) {
    const value = String(text || "");
    if (value.length <= max) return value;
    return value.slice(0, max).replace(/\s+\S*$/, "") + "…";
  }

  function escapeHtml(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function setupMenu() {
    const button = document.getElementById("menu-btn");
    const panel = document.getElementById("menu-panel");
    if (!button || !panel) return;

    function close() {
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-label", "Open menu");
      panel.hidden = true;
      document.body.classList.remove("menu-open");
    }

    button.addEventListener("click", function () {
      const open = button.getAttribute("aria-expanded") === "true";
      if (open) {
        close();
      } else {
        button.setAttribute("aria-expanded", "true");
        button.setAttribute("aria-label", "Close menu");
        panel.hidden = false;
        document.body.classList.add("menu-open");
        const preview = document.getElementById("work-preview");
        if (preview) preview.classList.remove("show");
      }
    });

    panel.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", close);
    });
  }

  function setupReveals() {
    const nodes = document.querySelectorAll(".reveal");
    if (reduce) {
      nodes.forEach(function (node) { node.classList.add("in"); });
      return;
    }
    let busyUntil = 0;
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        const node = entry.target;
        observer.unobserve(node);
        const now = performance.now();
        const wait = Math.max(0, busyUntil - now);
        window.setTimeout(function () {
          node.classList.add("in");
          busyUntil = performance.now() + 150;
        }, wait);
      });
    }, { threshold: 0.18 });
    nodes.forEach(function (node) { observer.observe(node); });
  }

  function setupSpy() {
    const links = document.querySelectorAll(".spine a");
    const sections = ["hi", "about", "work", "skills", "contact", "resume"].map(function (id) {
      return document.getElementById(id);
    }).filter(Boolean);
    if (!links.length || !sections.length) return;

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (link) {
          link.classList.toggle("is-active", link.getAttribute("data-spy") === entry.target.id);
        });
      });
    }, { rootMargin: "-40% 0px -45% 0px" });
    sections.forEach(function (section) { observer.observe(section); });
  }

  function setupPreview() {
    const preview = document.getElementById("work-preview");
    const rows = document.querySelectorAll(".work-row");
    if (!preview || !rows.length || typeof CONFIG === "undefined" || !CONFIG.products) return;
    if (!window.matchMedia("(hover: hover) and (min-width: 981px)").matches) return;

    rows.forEach(function (row) {
      row.addEventListener("mouseenter", function (event) {
        const index = Number(row.getAttribute("data-preview"));
        const product = CONFIG.products[index];
        if (!product) return;
        const chips = (product.tech || []).slice(0, 4).map(function (tech) {
          return "<span>" + escapeHtml(tech) + "</span>";
        }).join("");
        preview.innerHTML =
          "<strong>" + escapeHtml(shortName(product.name)) + "</strong>" +
          "<p>" + escapeHtml(trim(product.description, 180)) + "</p>" +
          '<div class="chips">' + chips + "</div>";
        preview.hidden = false;
        placePreview(event, row);
        requestAnimationFrame(function () { preview.classList.add("show"); });
      });
      row.addEventListener("mousemove", function (event) { placePreview(event, row); });
      row.addEventListener("mouseleave", function () {
        preview.classList.remove("show");
      });
    });

    function placePreview(event, row) {
      const alt = row.classList.contains("alt");
      const width = preview.offsetWidth || 320;
      const x = alt ? event.clientX - width - 28 : event.clientX + 28;
      const y = event.clientY - 40;
      preview.style.left = Math.max(16, Math.min(window.innerWidth - width - 16, x)) + "px";
      preview.style.top = Math.max(80, y) + "px";
    }
  }

  function setupGlobe() {
    const canvas = document.getElementById("globe");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const count = 520;
    const points = [];
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);
      const theta = golden * i;
      const x = Math.cos(theta) * radius;
      const z = Math.sin(theta) * radius;
      const fromCenter = Math.sqrt(x * x + y * y);
      points.push({
        x: x, y: y, z: z,
        sx: (Math.random() - 0.5) * 3.2,
        sy: (Math.random() - 0.5) * 3.2,
        sz: (Math.random() - 0.5) * 3.2,
        order: fromCenter
      });
    }

    let width = 0;
    let height = 0;
    let dpr = 1;
    let rotation = 0.4;
    let tiltX = 0;
    let tiltY = 0;
    let targetX = 0;
    let targetY = 0;
    let pointerX = -9999;
    let pointerY = -9999;
    let hovering = false;
    const started = performance.now();
    let running = true;

    function resize() {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resize();
    window.addEventListener("resize", resize);

    canvas.addEventListener("pointermove", function (event) {
      const rect = canvas.getBoundingClientRect();
      pointerX = event.clientX - rect.left;
      pointerY = event.clientY - rect.top;
      const nx = (pointerX / width - 0.5) * 2;
      const ny = (pointerY / height - 0.5) * 2;
      const max = 10 * Math.PI / 180;
      targetY = nx * max;
      targetX = -ny * max;
      hovering = true;
    });
    canvas.addEventListener("pointerleave", function () {
      hovering = false;
      targetX = 0;
      targetY = 0;
      pointerX = -9999;
      pointerY = -9999;
    });

    const watch = new IntersectionObserver(function (entries) {
      running = entries.some(function (entry) { return entry.isIntersecting; });
    });
    watch.observe(canvas);

    function frame(now) {
      if (running) draw(now);
      requestAnimationFrame(frame);
    }

    function draw(now) {
      ctx.clearRect(0, 0, width, height);
      const elapsed = now - started;
      const assemble = reduce ? 1 : Math.min(1, elapsed / 1100);
      if (!reduce) rotation += 0.00042;
      if (!reduce) {
        tiltX += (targetX - tiltX) * 0.08;
        tiltY += (targetY - tiltY) * 0.08;
      }

      const cx = width * 0.5;
      const cy = height * 0.48;
      const radius = Math.min(width, height) * 0.36;
      const cosY = Math.cos(rotation + tiltY);
      const sinY = Math.sin(rotation + tiltY);
      const cosX = Math.cos(tiltX);
      const sinX = Math.sin(tiltX);

      const drawn = [];
      points.forEach(function (point) {
        const local = ease(clamp01((assemble - point.order * 0.45) / 0.55));
        const x = point.sx + (point.x - point.sx) * local;
        const y = point.sy + (point.y - point.sy) * local;
        const z = point.sz + (point.z - point.sz) * local;
        let rx = x * cosY + z * sinY;
        let rz = -x * sinY + z * cosY;
        const ry = y * cosX - rz * sinX;
        rz = y * sinX + rz * cosX;
        const depth = (rz + 1.6) / 2.6;
        const px = cx + rx * radius;
        const py = cy + ry * radius;
        drawn.push({ px: px, py: py, depth: depth, z: rz });
      });

      drawn.sort(function (a, b) { return a.z - b.z; });
      drawn.forEach(function (dot) {
        const near = hovering ? Math.hypot(dot.px - pointerX, dot.py - pointerY) : 999;
        const hot = near < 72 ? (1 - near / 72) : 0;
        const alpha = 0.18 + dot.depth * 0.62 + hot * 0.35;
        const size = 1.1 + dot.depth * 1.5 + hot * 0.8;
        ctx.beginPath();
        ctx.fillStyle = hot > 0.45
          ? "rgba(200, 149, 108, " + Math.min(alpha, 1) + ")"
          : "rgba(239, 231, 249, " + Math.min(alpha, 0.95) + ")";
        ctx.arc(dot.px, dot.py, size, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    requestAnimationFrame(frame);
  }

  function clamp01(value) {
    return Math.max(0, Math.min(1, value));
  }

  function makeEase(x1, y1, x2, y2) {
    const cx = 3 * x1;
    const bx = 3 * (x2 - x1) - cx;
    const ax = 1 - cx - bx;
    const cy = 3 * y1;
    const by = 3 * (y2 - y1) - cy;
    const ay = 1 - cy - by;
    const sampleX = function (t) { return ((ax * t + bx) * t + cx) * t; };
    const sampleY = function (t) { return ((ay * t + by) * t + cy) * t; };
    const sampleDX = function (t) { return (3 * ax * t + 2 * bx) * t + cx; };
    return function (x) {
      if (x <= 0) return 0;
      if (x >= 1) return 1;
      let t = x;
      for (let i = 0; i < 6; i++) {
        const dx = sampleX(t) - x;
        const slope = sampleDX(t);
        if (Math.abs(dx) < 1e-4 || Math.abs(slope) < 1e-4) break;
        t = Math.max(0, Math.min(1, t - dx / slope));
      }
      return sampleY(t);
    };
  }
})();
