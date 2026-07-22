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
   parameterized by the palette colors, sized to a 290x460 portrait card.
   Each pattern is deliberately layered (multiple shape generations,
   varying scale/opacity) for a richer, premium faceted look.
--------------------------------------------------------------------- */
function buildDecoSVG(decoKey, palette, skeleton) {
  const P = palette.primary, S = palette.secondary, A = palette.accent;
  const W = 290, H = 460;

  if (decoKey === "d5") {
    // Clean minimal: soft gradient wash + one delicate hairline hexagon accent
    const cx = W - 46, cy = 54, r = 40;
    const hexPts = Array.from({length:6}, (_,i) => {
      const ang = Math.PI/180 * (60*i - 30);
      return `${(cx+r*Math.cos(ang)).toFixed(1)},${(cy+r*Math.sin(ang)).toFixed(1)}`;
    }).join(" ");
    return `<svg width="100%" height="100%" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none">
      <defs><linearGradient id="g5" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${S}" stop-opacity="0.10"/>
        <stop offset="1" stop-color="${A}" stop-opacity="0.05"/>
      </linearGradient></defs>
      <rect width="${W}" height="${H}" fill="url(#g5)"/>
      <polygon points="${hexPts}" fill="none" stroke="${A}" stroke-width="1" opacity="0.5"/>
      <circle cx="${cx}" cy="${cy}" r="4" fill="${A}" opacity="0.5"/>
    </svg>`;
  }

  if (decoKey === "d1") {
    // Layered concentric orbit rings (top-right) + mirrored micro-cluster (bottom-left)
    const cx1 = W - 34, cy1 = 40;
    let rings = "";
    [98, 74, 52, 33].forEach((r, i) => {
      rings += `<circle cx="${cx1}" cy="${cy1}" r="${r}" fill="none" stroke="${i % 2 === 0 ? S : A}" stroke-width="${i === 3 ? 2 : 1}" opacity="${0.22 - i*0.03}"/>`;
    });
    // small orbiting dots along the outer ring
    let orbitDots = "";
    for (let i = 0; i < 7; i++) {
      const ang = (Math.PI * 2 / 7) * i;
      orbitDots += `<circle cx="${(cx1+98*Math.cos(ang)).toFixed(1)}" cy="${(cy1+98*Math.sin(ang)).toFixed(1)}" r="3" fill="${A}" opacity="0.35"/>`;
    }
    const cx2 = 36, cy2 = H - 46;
    let rings2 = "";
    [60, 40, 24].forEach((r, i) => {
      rings2 += `<circle cx="${cx2}" cy="${cy2}" r="${r}" fill="${i === 2 ? A : P}" opacity="${i === 2 ? 0.18 : 0.08 - i*0.02}"/>`;
    });
    return `<svg width="100%" height="100%" viewBox="0 0 ${W} ${H}">
      <circle cx="${cx1}" cy="${cy1}" r="118" fill="${S}" opacity="0.08"/>
      ${rings}${orbitDots}${rings2}
    </svg>`;
  }

  if (decoKey === "d2") {
    // Dense hex-packed dot lattice in the top corner, opacity fades with distance from corner
    const originX = W, originY = 0;
    let dots = "";
    const rows = 9, cols = 8, spacing = 15;
    for (let r = 0; r < rows; r++) {
      const rowOffset = (r % 2) * (spacing / 2);
      for (let c = 0; c < cols; c++) {
        const x = originX - 14 - rowOffset - c * spacing;
        const y = 14 + r * (spacing * 0.86);
        if (x < W * 0.32) continue;
        const dist = Math.hypot(originX - x, originY - y);
        const op = Math.max(0, 0.55 - dist / 260);
        if (op <= 0.02) continue;
        dots += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="1.7" fill="${A}" opacity="${op.toFixed(2)}"/>`;
      }
    }
    return `<svg width="100%" height="100%" viewBox="0 0 ${W} ${H}">
      <circle cx="${W}" cy="0" r="150" fill="${S}" opacity="0.05"/>
      ${dots}
    </svg>`;
  }

  if (decoKey === "d3") {
    // Faceted low-poly triangle mesh filling the top-right corner
    const gridSize = 4, cell = 42, ox = W - gridSize * cell + 18, oy = -18;
    const colors = [A, S, P];
    let tris = "";
    let seed = 17;
    const rnd = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
    for (let r = 0; r < gridSize; r++) {
      for (let c = 0; c < gridSize; c++) {
        if (r + c > gridSize) continue; // trim to a triangular corner region
        const x0 = ox + c*cell, y0 = oy + r*cell;
        const jitter = () => (rnd()-0.5)*8;
        const x1 = x0+cell+jitter(), y1 = y0+jitter();
        const x2 = x0+jitter(), y2 = y0+cell+jitter();
        const x3 = x1, y3 = y0+cell+jitter();
        const col1 = colors[(r+c) % colors.length];
        const col2 = colors[(r+c+1) % colors.length];
        const op1 = (0.06 + rnd()*0.10).toFixed(2);
        const op2 = (0.05 + rnd()*0.09).toFixed(2);
        tris += `<polygon points="${x0.toFixed(1)},${y0.toFixed(1)} ${x1.toFixed(1)},${y1.toFixed(1)} ${x2.toFixed(1)},${y2.toFixed(1)}" fill="${col1}" opacity="${op1}"/>`;
        tris += `<polygon points="${x1.toFixed(1)},${y1.toFixed(1)} ${x3.toFixed(1)},${y3.toFixed(1)} ${x2.toFixed(1)},${y2.toFixed(1)}" fill="${col2}" opacity="${op2}"/>`;
      }
    }
    // echo a smaller faceted cluster bottom-left, plus a thin hexagon outline for polish
    const hx = 40, hy = H - 54, hr = 34;
    const hexPts = Array.from({length:6}, (_,i) => {
      const ang = Math.PI/180*(60*i);
      return `${(hx+hr*Math.cos(ang)).toFixed(1)},${(hy+hr*Math.sin(ang)).toFixed(1)}`;
    }).join(" ");
    return `<svg width="100%" height="100%" viewBox="0 0 ${W} ${H}">
      ${tris}
      <polygon points="${hexPts}" fill="${P}" opacity="0.07"/>
      <polygon points="${hexPts}" fill="none" stroke="${A}" stroke-width="1.2" opacity="0.28"/>
    </svg>`;
  }

  if (decoKey === "d4") {
    // Layered herringbone / chevron band across the header-to-mid region
    let chevrons = "";
    const rowsN = 6, colsN = 5, cw = 60, ch = 26;
    for (let r = 0; r < rowsN; r++) {
      for (let c = 0; c < colsN; c++) {
        const x = -40 + c*cw + (r % 2 === 0 ? 0 : cw/2);
        const y = -10 + r*ch;
        const flip = (r + c) % 2 === 0;
        const col = flip ? A : S;
        const op = flip ? 0.09 : 0.055;
        const pts = flip
          ? `${x},${y+ch} ${x+cw/2},${y} ${x+cw},${y+ch} ${x+cw/2},${y+ch*0.55}`
          : `${x},${y} ${x+cw/2},${y+ch} ${x+cw},${y} ${x+cw/2},${y+ch*0.45}`;
        chevrons += `<polygon points="${pts}" fill="${col}" opacity="${op}"/>`;
      }
    }
    return `<svg width="100%" height="100%" viewBox="0 0 ${W} ${H}">
      <g>${chevrons}</g>
      <rect x="0" y="0" width="${W}" height="150" fill="none"/>
    </svg>`;
  }

  return "";
}
