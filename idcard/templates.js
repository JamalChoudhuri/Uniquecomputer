/* =====================================================================
   TEMPLATE / PALETTE DATA
   100 templates = 4 categories × 5 skeletons × 5 decoration styles
   Each template can use any of 10 color palettes.
===================================================================== */

const PALETTES = [
  { name:"মিডনাইট নেভি",     primary:"#10233F", secondary:"#1B3A63", accent:"#E3B23C", text:"#101418", light:"#F4F6F9", headerText:"#FFFFFF" },
  { name:"এমারল্ড এক্সিকিউটিভ", primary:"#064E3B", secondary:"#0B6E4F", accent:"#D4AF37", text:"#0E1B16", light:"#F1F8F4", headerText:"#FFFFFF" },
  { name:"ক্রিমসন ফরমাল",     primary:"#5C0A1E", secondary:"#8C1C3B", accent:"#E8B94A", text:"#210307", light:"#FBF3F0", headerText:"#FFFFFF" },
  { name:"রয়্যাল ভায়োলেট",   primary:"#3B0764", secondary:"#5B21B6", accent:"#F5B700", text:"#1A0333", light:"#F6F1FC", headerText:"#FFFFFF" },
  { name:"স্লেট প্রফেশনাল",   primary:"#1E293B", secondary:"#334155", accent:"#38BDF8", text:"#0F172A", light:"#F1F5F9", headerText:"#FFFFFF" },
  { name:"টেরাকোটা ওয়ার্ম",   primary:"#7C2D12", secondary:"#C2410C", accent:"#FACC15", text:"#3A1206", light:"#FFF7ED", headerText:"#FFFFFF" },
  { name:"ওশান টিল",         primary:"#134E4A", secondary:"#0F766E", accent:"#F97316", text:"#04211E", light:"#F0FDFA", headerText:"#FFFFFF" },
  { name:"চারকোল গোল্ড",     primary:"#18181B", secondary:"#27272A", accent:"#D4AF37", text:"#09090B", light:"#FAFAF9", headerText:"#FFFFFF" },
  { name:"স্যাফায়ার ফ্রেশ",   primary:"#1E3A8A", secondary:"#2563EB", accent:"#22D3EE", text:"#0B1B3E", light:"#EFF6FF", headerText:"#FFFFFF" },
  { name:"রোজ এলিগেন্স",     primary:"#831843", secondary:"#BE185D", accent:"#FBBF24", text:"#33061A", light:"#FDF2F8", headerText:"#FFFFFF" },
];

const CATEGORIES = {
  employee: { label:"এমপ্লয়ি", badge:"EMPLOYEE ID", icon:"👔", idPrefix:"EMP", designationLabel:"পদবি", extraLabel:"বিভাগ" },
  student:  { label:"স্টুডেন্ট",  badge:"STUDENT ID",  icon:"🎓", idPrefix:"STU", designationLabel:"শ্রেণি / প্রোগ্রাম", extraLabel:"রোল নম্বর" },
  doctor:   { label:"চিকিৎসক",   badge:"DOCTOR ID",   icon:"🩺", idPrefix:"DOC", designationLabel:"বিশেষত্ব", extraLabel:"বিভাগ" },
  teacher:  { label:"শিক্ষক",    badge:"TEACHER ID",  icon:"📚", idPrefix:"TCH", designationLabel:"পদবি / বিষয়", extraLabel:"বিভাগ" },
};

const SKELETONS = [
  { key:"s1", name:"ক্লাসিক বার" },
  { key:"s2", name:"ডায়াগোনাল হিরো" },
  { key:"s3", name:"সাইডবার কলাম" },
  { key:"s4", name:"কর্নার-কাট মিনিমাল" },
  { key:"s5", name:"বর্ডারড ফ্রেম" },
];

const DECOS = [
  { key:"d1", name:"বৃত্তচিত্র" },
  { key:"d2", name:"ডট গ্রিড" },
  { key:"d3", name:"জ্যামিতিক" },
  { key:"d4", name:"তির্যক স্ট্রাইপ" },
  { key:"d5", name:"ক্লিন মিনিমাল" },
];

// Build 100 templates
const TEMPLATES = [];
let tCounter = 0;
Object.keys(CATEGORIES).forEach((catKey, ci) => {
  SKELETONS.forEach((sk, si) => {
    DECOS.forEach((dc, di) => {
      tCounter++;
      TEMPLATES.push({
        id: `${catKey}-${sk.key}-${dc.key}`,
        category: catKey,
        skeleton: sk.key,
        deco: dc.key,
        name: `${CATEGORIES[catKey].label} · ${sk.name} · ${dc.name}`,
        defaultPalette: (ci * 7 + si * 3 + di) % PALETTES.length,
        index: tCounter,
      });
    });
  });
});

/* ---------------------------------------------------------------------
   Decoration SVG generator — produces a background pattern layer
   parameterized by the palette colors, sized to a 460x290 card.
--------------------------------------------------------------------- */
function buildDecoSVG(decoKey, palette, skeleton) {
  const P = palette.primary, S = palette.secondary, A = palette.accent;
  const W = 460, H = 290;

  if (decoKey === "d5") {
    // Clean minimal: soft single gradient wash, no shapes
    return `<svg width="100%" height="100%" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none">
      <defs><linearGradient id="g5" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${S}" stop-opacity="0.10"/>
        <stop offset="1" stop-color="${A}" stop-opacity="0.05"/>
      </linearGradient></defs>
      <rect width="${W}" height="${H}" fill="url(#g5)"/>
    </svg>`;
  }

  if (decoKey === "d1") {
    // Circles cluster, top-right + bottom-left
    return `<svg width="100%" height="100%" viewBox="0 0 ${W} ${H}">
      <circle cx="${W-40}" cy="30" r="90" fill="${S}" opacity="0.14"/>
      <circle cx="${W-10}" cy="20" r="45" fill="${A}" opacity="0.20"/>
      <circle cx="30" cy="${H-20}" r="70" fill="${P}" opacity="0.10"/>
      <circle cx="60" cy="${H+10}" r="35" fill="${A}" opacity="0.14"/>
    </svg>`;
  }

  if (decoKey === "d2") {
    // Dot grid, top band
    let dots = "";
    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 14; c++) {
        dots += `<circle cx="${W - 20 - c*13}" cy="${16 + r*13}" r="1.6" fill="${A}" opacity="${0.5 - r*0.08}"/>`;
      }
    }
    return `<svg width="100%" height="100%" viewBox="0 0 ${W} ${H}">${dots}</svg>`;
  }

  if (decoKey === "d3") {
    // Geometric triangles cluster corner
    return `<svg width="100%" height="100%" viewBox="0 0 ${W} ${H}">
      <polygon points="${W},0 ${W},110 ${W-110},0" fill="${S}" opacity="0.16"/>
      <polygon points="${W},0 ${W},60 ${W-60},0" fill="${A}" opacity="0.22"/>
      <polygon points="0,${H} 90,${H} 0,${H-90}" fill="${P}" opacity="0.12"/>
      <polygon points="0,${H} 40,${H} 0,${H-40}" fill="${A}" opacity="0.16"/>
    </svg>`;
  }

  if (decoKey === "d4") {
    // Diagonal stripes band
    let stripes = "";
    for (let i = -4; i < 12; i++) {
      stripes += `<rect x="${i*36}" y="0" width="14" height="${H*1.6}" transform="rotate(22 ${i*36} 0)" fill="${i % 2 === 0 ? A : S}" opacity="${i % 2 === 0 ? 0.10 : 0.06}"/>`;
    }
    return `<svg width="100%" height="100%" viewBox="0 0 ${W} ${H}"><g>${stripes}</g></svg>`;
  }

  return "";
}
