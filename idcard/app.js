/* =====================================================================
   APP STATE
===================================================================== */
const state = {
  category: "employee",
  templateId: null,
  paletteIndex: 0,
  logoDataUrl: null,
  photoDataUrl: null,
  signDataUrl: null,
  side: "front",
};

function getTemplatesForCategory(cat) {
  return TEMPLATES.filter(t => t.category === cat);
}
function getTemplateById(id) {
  return TEMPLATES.find(t => t.id === id);
}

/* =====================================================================
   INIT
===================================================================== */
function init() {
  const first = getTemplatesForCategory(state.category)[0];
  state.templateId = first.id;
  state.paletteIndex = first.defaultPalette;

  renderTemplateGrid();
  renderPaletteRow();
  renderGalleryModal();
  applyTemplate();
  bindStaticContentInputs();
  bindUploaders();
  bindTopControls();
  bindTabs();
  syncCategoryFieldLabels();
  updateAllFromInputs();
}

/* =====================================================================
   TABS
===================================================================== */
function bindTabs() {
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(btn.dataset.tab).classList.add("active");
    });
  });

  document.querySelectorAll("#categoryChips .chip").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll("#categoryChips .chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      state.category = chip.dataset.cat;
      const first = getTemplatesForCategory(state.category)[0];
      state.templateId = first.id;
      state.paletteIndex = first.defaultPalette;
      renderTemplateGrid();
      renderPaletteRow();
      applyTemplate();
      syncCategoryFieldLabels();
      updateAllFromInputs();
      document.getElementById("templateCountBadge").textContent =
        getTemplatesForCategory(state.category).length + "টি";
    });
  });
}

function syncCategoryFieldLabels() {
  const cat = CATEGORIES[state.category];
  document.getElementById("lblDesignation").textContent = "(" + cat.designationLabel + ")";
  document.getElementById("lblExtraField").textContent = "(" + cat.extraLabel + ")";
}

/* =====================================================================
   TEMPLATE GRID (sidebar) + GALLERY MODAL
===================================================================== */
function makeMiniCardHTML(tpl) {
  const pal = PALETTES[tpl.defaultPalette];
  return `
    <div class="mini-card-wrap">
      <div class="id-card" data-skeleton="${tpl.skeleton}" style="
          --c-primary:${pal.primary};--c-secondary:${pal.secondary};--c-accent:${pal.accent};
          --c-text:${pal.text};--c-light:${pal.light};--c-header-text:${pal.headerText};">
        <div class="deco-layer">${buildDecoSVG(tpl.deco, pal, tpl.skeleton)}</div>
        <div class="card-header">
          <div class="org-logo"><span class="logo-fallback">${CATEGORIES[tpl.category].icon}</span></div>
          <div class="org-text"><strong>প্রতিষ্ঠানের নাম</strong><small>Tagline goes here</small></div>
          <div class="cat-badge">${CATEGORIES[tpl.category].badge}</div>
        </div>
        <div class="right-col">
          <div class="card-body">
            <div class="photo-frame"><div class="photo-placeholder">👤</div></div>
            <div class="person-info">
              <h3>নাম থাকবে এখানে</h3>
              <p class="designation">${CATEGORIES[tpl.category].designationLabel}</p>
              <div class="info-rows"><div><b>ID</b> 0000</div></div>
            </div>
          </div>
          <div class="card-footer">
            <div class="id-strip"><span class="id-label">ID NO</span><span class="id-value">0000</span></div>
            <div class="qr-box">▦▦▦</div>
          </div>
        </div>
      </div>
    </div>`;
}

function renderTemplateGrid() {
  const grid = document.getElementById("templateGrid");
  const list = getTemplatesForCategory(state.category);
  grid.innerHTML = "";
  list.forEach(tpl => {
    const el = document.createElement("div");
    el.className = "tpl-thumb" + (tpl.id === state.templateId ? " active" : "");
    el.dataset.id = tpl.id;
    el.innerHTML = makeMiniCardHTML(tpl) + `<span>${tpl.name.split("·")[1]}<br>${tpl.name.split("·")[2]}</span>`;
    el.addEventListener("click", () => {
      state.templateId = tpl.id;
      state.paletteIndex = tpl.defaultPalette;
      renderTemplateGrid();
      renderPaletteRow();
      applyTemplate();
      updateAllFromInputs();
    });
    grid.appendChild(el);
  });
  document.getElementById("templateCountBadge").textContent = list.length + "টি";
}

function renderGalleryModal() {
  const grid = document.getElementById("modalGrid");
  grid.innerHTML = "";
  TEMPLATES.forEach(tpl => {
    const el = document.createElement("div");
    el.className = "mtpl-thumb";
    el.dataset.cat = tpl.category;
    el.innerHTML = makeMiniCardHTML(tpl) + `<span>#${tpl.index} — ${tpl.name}</span>`;
    el.addEventListener("click", () => {
      state.category = tpl.category;
      state.templateId = tpl.id;
      state.paletteIndex = tpl.defaultPalette;
      document.querySelectorAll("#categoryChips .chip").forEach(c =>
        c.classList.toggle("active", c.dataset.cat === tpl.category));
      renderTemplateGrid();
      renderPaletteRow();
      applyTemplate();
      syncCategoryFieldLabels();
      updateAllFromInputs();
      closeGallery();
      showToast("✅ টেমপ্লেট প্রয়োগ করা হয়েছে: " + tpl.name);
    });
    grid.appendChild(el);
  });

  document.querySelectorAll(".modal-filters .chip").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".modal-filters .chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      const g = chip.dataset.gcat;
      document.querySelectorAll("#modalGrid .mtpl-thumb").forEach(t => {
        t.style.display = (g === "all" || t.dataset.cat === g) ? "" : "none";
      });
    });
  });
}

function openGallery() { document.getElementById("galleryModal").classList.add("open"); }
function closeGallery() { document.getElementById("galleryModal").classList.remove("open"); }

/* =====================================================================
   PALETTE ROW
===================================================================== */
function renderPaletteRow() {
  const row = document.getElementById("paletteRow");
  row.innerHTML = "";
  PALETTES.forEach((pal, i) => {
    const sw = document.createElement("div");
    sw.className = "swatch" + (i === state.paletteIndex ? " active" : "");
    sw.style.background = `linear-gradient(135deg, ${pal.primary}, ${pal.accent})`;
    sw.title = pal.name;
    sw.addEventListener("click", () => {
      state.paletteIndex = i;
      renderPaletteRow();
      applyTemplate();
    });
    row.appendChild(sw);
  });
  document.getElementById("paletteName").textContent = "নির্বাচিত: " + PALETTES[state.paletteIndex].name;
}

/* =====================================================================
   APPLY TEMPLATE + PALETTE TO LIVE PREVIEW
===================================================================== */
function applyTemplate() {
  const tpl = getTemplateById(state.templateId);
  const pal = PALETTES[state.paletteIndex];
  const wrap = document.getElementById("cardFlipWrap");
  const front = document.getElementById("idCardFront");
  const back = document.getElementById("idCardBack");

  [wrap, front, back].forEach(el => {
    el.style.setProperty("--c-primary", pal.primary);
    el.style.setProperty("--c-secondary", pal.secondary);
    el.style.setProperty("--c-accent", pal.accent);
    el.style.setProperty("--c-text", pal.text);
    el.style.setProperty("--c-light", pal.light);
    el.style.setProperty("--c-header-text", pal.headerText);
  });

  [front, back].forEach(el => el.setAttribute("data-skeleton", tpl.skeleton));

  document.getElementById("decoLayerFront").innerHTML = buildDecoSVG(tpl.deco, pal, tpl.skeleton);
  document.getElementById("decoLayerBack").innerHTML = buildDecoSVG(tpl.deco, pal, tpl.skeleton);

  document.getElementById("catBadgeFront").textContent = CATEGORIES[tpl.category].badge;
  document.getElementById("logoFallbackFront").textContent = CATEGORIES[tpl.category].icon;
}

/* =====================================================================
   CONTENT BINDING — form inputs → live preview
===================================================================== */
function bindStaticContentInputs() {
  const ids = [
    "inpOrgName","inpOrgTagline","inpName","inpDesignation","inpIdNo","inpExtra",
    "inpJoinDate","inpExpiry","inpBlood","inpPhone","inpAddress","inpTerms",
    "inpReturnTo","inpSignName",
  ];
  ids.forEach(id => {
    document.getElementById(id).addEventListener("input", updateAllFromInputs);
  });
  document.getElementById("chkShowQR").addEventListener("change", updateAllFromInputs);
  document.getElementById("chkShowBarcode").addEventListener("change", updateAllFromInputs);
}

function fmtDate(d) {
  if (!d) return "—";
  const parts = d.split("-");
  if (parts.length !== 3) return d;
  const months = ["জানু","ফেব্রু","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগস্ট","সেপ্ট","অক্টো","নভে","ডিসে"];
  return `${parseInt(parts[2],10)} ${months[parseInt(parts[1],10)-1]} ${parts[0]}`;
}

function updateAllFromInputs() {
  const orgName = document.getElementById("inpOrgName").value || "প্রতিষ্ঠানের নাম";
  const orgTagline = document.getElementById("inpOrgTagline").value;
  const name = document.getElementById("inpName").value || "নাম";
  const desig = document.getElementById("inpDesignation").value;
  const idNo = document.getElementById("inpIdNo").value;
  const extra = document.getElementById("inpExtra").value;
  const joinDate = document.getElementById("inpJoinDate").value;
  const expiry = document.getElementById("inpExpiry").value;
  const blood = document.getElementById("inpBlood").value;
  const phone = document.getElementById("inpPhone").value;
  const address = document.getElementById("inpAddress").value;
  const terms = document.getElementById("inpTerms").value;
  const returnTo = document.getElementById("inpReturnTo").value;
  const signName = document.getElementById("inpSignName").value;
  const cat = CATEGORIES[state.category];

  // ---- FRONT ----
  document.getElementById("orgNameFront").textContent = orgName;
  document.getElementById("orgTaglineFront").textContent = orgTagline;
  document.getElementById("personNameFront").textContent = name;
  document.getElementById("personDesigFront").textContent = desig;
  document.getElementById("idNoFront").textContent = idNo;

  const rows = document.getElementById("infoRowsFront");
  rows.innerHTML = `
    <div><b>${cat.extraLabel}</b> ${extra || "—"}</div>
    <div><b>যোগদান</b> ${fmtDate(joinDate)}</div>
    <div><b>মেয়াদ</b> ${fmtDate(expiry)}</div>
    <div><b>রক্ত</b> ${blood || "—"}</div>
  `;

  document.getElementById("qrBoxFront").style.display =
    document.getElementById("chkShowQR").checked ? "flex" : "none";

  // ---- BACK ----
  document.getElementById("orgNameBack").textContent = orgName;
  document.getElementById("orgAddressBack").textContent = address + (phone ? "  |  " + phone : "");
  document.getElementById("termsBack").textContent = terms;
  document.getElementById("returnLineBack").textContent = returnTo;
  document.getElementById("barcodeNumBack").textContent = idNo;
  document.getElementById("signNameBack").textContent = signName;
  document.getElementById("barcodeBack").style.display =
    document.getElementById("chkShowBarcode").checked ? "flex" : "none";
}

/* =====================================================================
   IMAGE UPLOADS (logo / photo / signature)
===================================================================== */
function bindUploaders() {
  setupUploader("inpLogoFile", "uploaderLogoBox", (dataUrl) => {
    state.logoDataUrl = dataUrl;
    const logoEl = document.getElementById("orgLogoFront");
    logoEl.innerHTML = `<img src="${dataUrl}" alt="logo">`;
  }, "uploaderLogoBox");

  setupUploader("inpPhotoFile", "uploaderPhotoBox", (dataUrl) => {
    state.photoDataUrl = dataUrl;
    document.getElementById("photoFrameFront").innerHTML = `<img src="${dataUrl}" alt="photo">`;
  }, "uploaderPhotoBox");

  setupUploader("inpSignFile", "uploaderSignBox", (dataUrl) => {
    state.signDataUrl = dataUrl;
    document.getElementById("signatureSlotBack").innerHTML = `<img src="${dataUrl}" alt="signature">`;
  }, "uploaderSignBox");

  document.getElementById("btnRemoveLogo").addEventListener("click", () => {
    state.logoDataUrl = null;
    document.getElementById("orgLogoFront").innerHTML = `<span class="logo-fallback">${CATEGORIES[state.category].icon}</span>`;
    resetUploaderBox("uploaderLogoBox", "📤 লোগো আপলোড করুন", "PNG / JPG / SVG — স্বচ্ছ ব্যাকগ্রাউন্ড ভালো ফলাফল দেয়");
  });
  document.getElementById("btnRemovePhoto").addEventListener("click", () => {
    state.photoDataUrl = null;
    document.getElementById("photoFrameFront").innerHTML = `<div class="photo-placeholder">👤</div>`;
    resetUploaderBox("uploaderPhotoBox", "📤 ছবি আপলোড করুন", "স্কয়ার ছবি সবচেয়ে ভালো মানায়");
  });
  document.getElementById("btnRemoveSign").addEventListener("click", () => {
    state.signDataUrl = null;
    document.getElementById("signatureSlotBack").innerHTML = `<em>স্বাক্ষর</em>`;
    resetUploaderBox("uploaderSignBox", "📤 সিগনেচার আপলোড করুন", "স্বচ্ছ ব্যাকগ্রাউন্ড PNG সবচেয়ে ভালো");
  });
}

function setupUploader(inputId, boxId, onLoad) {
  const input = document.getElementById(inputId);
  const box = document.getElementById(boxId);
  box.addEventListener("click", () => input.click());
  input.addEventListener("change", () => {
    const file = input.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      showToast("⚠️ শুধুমাত্র ছবি ফাইল আপলোড করুন");
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      onLoad(e.target.result);
      box.classList.add("has-image");
      box.innerHTML = `<img class="preview-thumb" src="${e.target.result}" alt="preview"><small>✅ আপলোড সম্পন্ন — পরিবর্তন করতে ক্লিক করুন</small>`;
      showToast("✅ ছবি সফলভাবে আপলোড হয়েছে");
    };
    reader.readAsDataURL(file);
  });
}

function resetUploaderBox(boxId, title, sub) {
  const box = document.getElementById(boxId);
  box.classList.remove("has-image");
  box.innerHTML = `<span>${title}</span><small>${sub}</small>`;
}

/* =====================================================================
   TOP CONTROLS: flip / gallery / download
===================================================================== */
function bindTopControls() {
  document.getElementById("btnFlip").addEventListener("click", toggleFlip);
  document.getElementById("btnGallery").addEventListener("click", openGallery);
  document.getElementById("closeGalleryModal").addEventListener("click", closeGallery);
  document.getElementById("galleryModal").addEventListener("click", (e) => {
    if (e.target.id === "galleryModal") closeGallery();
  });

  document.querySelectorAll(".side-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".side-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const wantFront = btn.dataset.side === "front";
      setFlip(!wantFront);
    });
  });

  document.getElementById("btnDownloadFront").addEventListener("click", () => downloadCard("front"));
  document.getElementById("btnDownloadBack").addEventListener("click", () => downloadCard("back"));
}

function toggleFlip() {
  const flipped = document.getElementById("cardFlipWrap").classList.toggle("flipped");
  document.querySelectorAll(".side-btn").forEach(b =>
    b.classList.toggle("active", (b.dataset.side === "back") === flipped));
}
function setFlip(flipped) {
  document.getElementById("cardFlipWrap").classList.toggle("flipped", flipped);
}

/* =====================================================================
   PNG EXPORT
===================================================================== */
function downloadCard(side) {
  const el = document.getElementById(side === "front" ? "idCardFront" : "idCardBack");
  const wrap = document.getElementById("cardFlipWrap");
  const wasFlipped = wrap.classList.contains("flipped");

  // Temporarily bring the target side into normal (unrotated) view for a clean capture
  const originalTransform = wrap.style.transition;
  wrap.style.transition = "none";
  wrap.classList.toggle("flipped", side === "back");
  el.style.transform = "none";

  showToast("⏳ হাই-কোয়ালিটি PNG তৈরি হচ্ছে...");

  setTimeout(() => {
    html2canvas(el, {
      backgroundColor: null,
      scale: 4,
      useCORS: true,
      logging: false,
    }).then(canvas => {
      const link = document.createElement("a");
      const name = document.getElementById("inpName").value.trim().replace(/\s+/g, "_") || "id_card";
      link.download = `${name}_${side === "front" ? "front" : "back"}.png`;
      link.href = canvas.toDataURL("image/png", 1.0);
      link.click();
      showToast("✅ ডাউনলোড সম্পন্ন হয়েছে!");

      el.style.transform = "";
      wrap.classList.toggle("flipped", wasFlipped);
      wrap.style.transition = originalTransform;
    }).catch(err => {
      console.error(err);
      showToast("❌ ডাউনলোডে সমস্যা হয়েছে, আবার চেষ্টা করুন");
      el.style.transform = "";
      wrap.classList.toggle("flipped", wasFlipped);
      wrap.style.transition = originalTransform;
    });
  }, 60);
}

/* =====================================================================
   TOAST
===================================================================== */
let toastTimer = null;
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2600);
}

/* =====================================================================
   BOOT
===================================================================== */
document.addEventListener("DOMContentLoaded", init);
