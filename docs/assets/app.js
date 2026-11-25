// WikiGTA6 — recherche instantanée et filtres de catégories
(function () {
  const root = document.body.dataset.root || "./";
  const input = document.getElementById("search");
  const box = document.getElementById("search-results");
  const index = window.WIKI_INDEX || [];

  const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[''`]/g, "");
  const prepared = index.map((e) => ({ ...e, nn: norm(e.n), tt: norm(e.t + " " + e.s + " " + e.c) }));
  const escHtml = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  function search(q) {
    const words = norm(q).split(/\s+/).filter(Boolean);
    if (!words.length) return [];
    return prepared
      .map((e) => {
        let score = 0;
        for (const w of words) {
          if (e.nn.startsWith(w)) score += 10;
          else if (e.nn.includes(w)) score += 6;
          else if (e.tt.includes(w)) score += 2;
          else return null;
        }
        return { e, score };
      })
      .filter(Boolean)
      .sort((a, b) => b.score - a.score || a.e.n.localeCompare(b.e.n))
      .slice(0, 12)
      .map((r) => r.e);
  }

  let sel = -1;
  function render() {
    const q = input.value.trim();
    if (!q) { box.hidden = true; return; }
    const res = search(q);
    sel = res.length ? 0 : -1;
    box.innerHTML = res.length
      ? res.map((e, i) => `<a href="${root}${e.k}/" class="${i === 0 ? "sel" : ""}"><span class="ri">${e.i}</span><span><b>${escHtml(e.n)}</b><small>${escHtml(e.c)}${e.s ? " · " + escHtml(e.s) : ""}</small></span></a>`).join("")
      : `<div class="empty">Aucun résultat pour « ${escHtml(q)} »</div>`;
    box.hidden = false;
  }
  input.addEventListener("input", render);
  input.addEventListener("focus", render);
  input.addEventListener("keydown", (ev) => {
    const links = [...box.querySelectorAll("a")];
    if (ev.key === "ArrowDown" || ev.key === "ArrowUp") {
      ev.preventDefault();
      if (!links.length) return;
      sel = (sel + (ev.key === "ArrowDown" ? 1 : -1) + links.length) % links.length;
      links.forEach((l, i) => l.classList.toggle("sel", i === sel));
      links[sel].scrollIntoView({ block: "nearest" });
    } else if (ev.key === "Enter" && links[sel]) {
      location.href = links[sel].href;
    } else if (ev.key === "Escape") {
      box.hidden = true; input.blur();
    }
  });
  document.addEventListener("click", (ev) => { if (!ev.target.closest(".search")) box.hidden = true; });
  document.addEventListener("keydown", (ev) => {
    if (ev.key === "/" && document.activeElement !== input) { ev.preventDefault(); input.focus(); }
  });

  // Filtres par étiquette sur les pages de catégorie
  const chips = document.querySelectorAll(".chip[data-filter]");
  chips.forEach((chip) =>
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.toggle("active", c === chip));
      const f = chip.dataset.filter;
      document.querySelectorAll(".cards .card[data-tags]").forEach((card) => {
        card.hidden = f !== "*" && !card.dataset.tags.split("|").includes(f);
      });
    })
  );

  // Fermer le menu mobile en cliquant un lien
  document.querySelectorAll(".sidebar a").forEach((a) => a.addEventListener("click", () => document.body.classList.remove("nav-open")));
})();
