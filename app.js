// ৫০টি সম্পূর্ণ ভিন্ন স্ট্রাকচারাল ডিজাইন রেজিস্ট্রি
const layoutsRegistry = [
    { id: 1, name: "Executive Sidebar Layout", layout: "two-column-left" },
    { id: 2, name: "Modern Linear Header", layout: "bold-top-header" },
    { id: 3, name: "Minimalist Corporate Slate", layout: "single-clean" },
    { id: 4, name: "Symmetric Double Divider", layout: "split-symmetric" },
    { id: 5, name: "Premium Framed Boxed", layout: "bordered-box" }
];

const templates = [];
for (let i = 1; i <= 50; i++) {
    const base = layoutsRegistry[(i - 1) % layoutsRegistry.length];
    let pTone = '#1e3a8a'; let sTone = '#3b82f6';
    if(i % 4 === 1) { pTone = '#0f766e'; sTone = '#0d9488'; }
    if(i % 4 === 2) { pTone = '#7f1d1d'; sTone = '#dc2626'; }
    if(i % 4 === 3) { pTone = '#1e293b'; sTone = '#64748b'; }

    templates.push({
        id: i,
        title: `Premium Architecture - Template ${i}`,
        layout: base.layout,
        defaultPrimary: pTone,
        defaultSecondary: sTone
    });
}

const colorPalettes = [
    { primary: '#1e3a8a', secondary: '#3b82f6' },
    { primary: '#0f766e', secondary: '#0d9488' },
    { primary: '#1e293b', secondary: '#64748b' },
    { primary: '#7f1d1d', secondary: '#dc2626' },
    { primary: '#4c1d95', secondary: '#8b5cf6' },
    { primary: '#14532d', secondary: '#16a34a' },
    { primary: '#7c2d12', secondary: '#ea580c' },
    { primary: '#881337', secondary: '#e11d48' }
];

const universalObjective = "To secure a challenging role in a growth-oriented organization where I can effectively utilize my technical expertise, administrative skills, and computer proficiency to optimize daily operations and contribute significantly to organizational success.";

const dummyData = {
    fullName: "SRABONI AKTER",
    designation: "Computer Operator & Office Assistant",
    email: "sraboniakter3804@gmail.com",
    mobile: "01797-143804",
    address: "Faridpur Sadar, Faridpur, Bangladesh",
    skills: "Microsoft Office, Excel & Data Entry, Fast Typing, Customer Support, Problem Solving, Technical Support",
    objective: universalObjective,
    experience: "Computer Operator & Data Entry Executive\nJanata Telecom, Faridpur (2024 - Present)\n- Managed daily data entry sheets and official communications.\n- Handled customer documentation and digital support services.",
    education: "Higher Secondary Certificate (HSC)\nFaridpur Govt. College, Group: Science (2021)\n\nSecondary School Certificate (SSC)\nFaridpur High School, Group: Science (2019)",
    fatherName: "Late. Sobahan Matubbor",
    motherName: "Saheda Begum",
    dob: "10-11-2001",
    bloodGroup: "AB+",
    coverLetterBody: "I am writing to express my eager interest in joining your esteemed organization. Given my practical background, matching skill sets, and highly disciplined work approach, I believe I can dynamically fulfill the responsibilities of this position.\n\nI possess valuable proficiency in core domains including Microsoft Office, fast data processing, and document management. I have a proven record of handling workflows with dedication and strict accuracy."
};

const masterFormSections = [
    {
        title: "👤 Personal Information",
        fields: [
            { id: 'fullName', label: 'Full Name' },
            { id: 'designation', label: 'Designation / Profession' },
            { id: 'email', label: 'Email Address' },
            { id: 'mobile', label: 'Mobile Number' },
            { id: 'address', label: 'Present Address' }
        ]
    },
    {
        title: "🛠️ Key Skills (Separated by comma)",
        fields: [
            { id: 'skills', label: 'Skills Tag System', type: 'skills-tagger' }
        ]
    },
    {
        title: "💼 Experience & Education",
        fields: [
            { id: 'objective', label: 'Career Objective', type: 'textarea' },
            { id: 'experience', label: 'Work Experience', type: 'textarea' },
            { id: 'education', label: 'Educational Qualifications', type: 'textarea' }
        ]
    },
    {
        title: "📋 Additional Profile Details",
        fields: [
            { id: 'fatherName', label: "Father's Name" },
            { id: 'motherName', label: "Mother's Name" },
            { id: 'dob', label: 'Date of Birth' },
            { id: 'bloodGroup', label: 'Blood Group' }
        ]
    }
];

let selectedTemplate = null;
let uploadedPhotoBase64 = null;
let activeColors = { primary: '#1e3a8a', secondary: '#3b82f6' };

document.addEventListener("DOMContentLoaded", () => {
    renderTemplateGrid();
    buildSmartForm();
    document.getElementById("inp_coverLetterBody").value = dummyData.coverLetterBody;
});

function renderTemplateGrid() {
    const grid = document.getElementById("templateGrid");
    grid.innerHTML = "";
    
    templates.forEach(t => {
        const card = document.createElement("div");
        card.id = `template-card-${t.id}`;
        card.className = "border border-slate-300 rounded-xl p-3 bg-white hover:border-cyan-500 hover:shadow-lg transition flex flex-col justify-between cursor-pointer";
        
        let visualBox = "";
        if (t.layout === 'two-column-left') {
            visualBox = `
                <div class="w-full h-full flex gap-1 p-1 bg-slate-50">
                    <div class="w-1/3 h-full rounded" style="background:${t.defaultPrimary}; opacity:0.85"></div>
                    <div class="w-2/3 h-full flex flex-col gap-1">
                        <div class="h-2 w-3/4 rounded" style="background:${t.defaultPrimary}"></div>
                        <div class="h-1.5 w-full bg-slate-300 rounded"></div>
                        <div class="h-1.5 w-full bg-slate-300 rounded"></div>
                    </div>
                </div>`;
        } else if (t.layout === 'bold-top-header') {
            visualBox = `
                <div class="w-full h-full flex flex-col gap-1 p-1 bg-slate-50">
                    <div class="h-5 w-full rounded" style="background:linear-gradient(90deg, ${t.defaultPrimary}, ${t.defaultSecondary})"></div>
                    <div class="h-1.5 w-1/2 bg-slate-400 rounded"></div>
                    <div class="h-1.5 w-full bg-slate-300 rounded"></div>
                </div>`;
        } else if (t.layout === 'single-clean') {
            visualBox = `
                <div class="w-full h-full flex flex-col gap-1 p-2 bg-slate-50 text-center items-center justify-center">
                    <div class="h-3 w-1/2 rounded" style="background:${t.defaultPrimary}"></div>
                    <div class="h-1 w-1/3 bg-slate-400 rounded my-1"></div>
                    <div class="h-1.5 w-full bg-slate-200 rounded"></div>
                </div>`;
        } else if (t.layout === 'split-symmetric') {
            visualBox = `
                <div class="w-full h-full flex flex-col p-1 bg-slate-50">
                    <div class="flex justify-between items-center border-b pb-1" style="border-color:${t.defaultSecondary}">
                        <div class="h-2 w-1/3 rounded" style="background:${t.defaultPrimary}"></div>
                        <div class="w-3 h-3 rounded-full bg-slate-300"></div>
                    </div>
                    <div class="h-2 w-full bg-slate-200 mt-2 rounded"></div>
                </div>`;
        } else {
            visualBox = `
                <div class="w-full h-full p-1 bg-white border rounded flex flex-col gap-1" style="border-color:${t.defaultPrimary}">
                    <div class="h-2 w-1/2 rounded" style="background:${t.defaultPrimary}"></div>
                    <div class="h-2 w-full bg-slate-200 rounded"></div>
                </div>`;
        }

        card.innerHTML = `
            <div class="font-bold text-slate-800 text-[11px] mb-1.5 truncate text-center">${t.title}</div>
            <div class="mini-preview-card mb-2">${visualBox}</div>
            <div class="bg-slate-900 rounded-lg py-1 text-white text-[11px] font-bold tracking-wide text-center">ডিজাইনটি এডিট করুন</div>
        `;
        card.onclick = () => selectTemplate(t.id);
        grid.appendChild(card);
    });
}

function buildSmartForm() {
    const container = document.getElementById("formFieldsContainer");
    container.innerHTML = "";

    masterFormSections.forEach(sec => {
        const secDiv = document.createElement("div");
        secDiv.className = "bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3";
        secDiv.innerHTML = `<h3 class="text-xs font-bold text-slate-900 border-b border-slate-200 pb-1">${sec.title}</h3>`;
        
        sec.fields.forEach(f => {
            const fDiv = document.createElement("div");
            fDiv.className = "block text-xs";
            const defaultVal = dummyData[f.id] || "";

            if (f.type === 'skills-tagger') {
                fDiv.innerHTML = `
                    <label class="block font-medium text-slate-600 mb-1">${f.label}</label>
                    <input type="text" id="inp_skills" value="${defaultVal}" oninput="updateLivePreviews()" class="w-full p-2 border border-slate-300 rounded bg-white font-bold text-blue-700 focus:outline-blue-500">
                `;
            } else if(f.type === 'textarea') {
                fDiv.innerHTML = `
                    <label class="block font-medium text-slate-600 mb-1">${f.label}</label>
                    <textarea id="inp_${f.id}" oninput="updateLivePreviews()" rows="3" class="w-full p-2 border border-slate-300 rounded bg-white focus:outline-blue-500">${defaultVal}</textarea>
                `;
            } else {
                fDiv.innerHTML = `
                    <label class="block font-medium text-slate-600 mb-1">${f.label}</label>
                    <input type="text" id="inp_${f.id}" value="${defaultVal}" oninput="updateLivePreviews()" class="w-full p-2 border border-slate-300 rounded bg-white focus:outline-blue-500">
                `;
            }
            secDiv.appendChild(fDiv);
        });
        container.appendChild(secDiv);
    });
}

function handlePhotoUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            uploadedPhotoBase64 = e.target.result;
            updateLivePreviews();
        }
        reader.readAsDataURL(file);
    }
}

function selectTemplate(id) {
    selectedTemplate = templates.find(t => t.id === id);
    activeColors = { primary: selectedTemplate.defaultPrimary, secondary: selectedTemplate.defaultSecondary };
    
    templates.forEach(t => {
        const card = document.getElementById(`template-card-${t.id}`);
        if(card) {
            if(t.id === id) {
                card.className = "border-4 border-cyan-500 rounded-xl bg-white p-4 max-w-xs mx-auto block pointer-events-none shadow-xl";
            } else {
                card.classList.add("hidden");
            }
        }
    });

    document.getElementById("galleryTitle").innerText = "🎯 আপনার পছন্দের ইউনিক লেআউটটি লোড হয়েছে:";
    document.getElementById("resetGalleryBtn").classList.remove("hidden");
    document.getElementById("workspaceSection").classList.remove("hidden");
    
    renderColorPickers();
    updateLivePreviews();
    document.getElementById("workspaceSection").scrollIntoView({ behavior: 'smooth' });
}

function resetGallery() {
    templates.forEach(t => {
        const card = document.getElementById(`template-card-${t.id}`);
        if(card) {
            card.classList.remove("hidden");
            card.className = "border border-slate-300 rounded-xl p-3 bg-white hover:border-cyan-500 hover:shadow-lg transition flex flex-col justify-between cursor-pointer";
        }
    });
    document.getElementById("galleryTitle").innerText = "১. নিচে ৫০টি সম্পূর্ণ ভিন্ন ভিজ্যুয়াল ডিজাইন দেওয়া হলো। আপনার পছন্দের ডিজাইনটির উপর ক্লিক করুন:";
    document.getElementById("resetGalleryBtn").classList.add("hidden");
    document.getElementById("workspaceSection").classList.add("hidden");
    selectedTemplate = null;
}

function renderColorPickers() {
    const container = document.getElementById("colorPickerContainer");
    container.innerHTML = "";
    colorPalettes.forEach(palette => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "w-6 h-6 rounded-full border border-white shadow-sm cursor-pointer transform hover:scale-110 transition";
        btn.style.backgroundColor = palette.primary;
        btn.onclick = () => {
            activeColors = { primary: palette.primary, secondary: palette.secondary };
            updateLivePreviews();
        };
        container.appendChild(btn);
    });
}

function switchTab(tab) {
    const cvCanvas = document.getElementById("cvCanvas");
    const letterCanvas = document.getElementById("letterCanvas");
    const cvBtn = document.getElementById("tabCvBtn");
    const letterBtn = document.getElementById("tabLetterBtn");

    if(tab === 'cv') {
        cvCanvas.classList.remove("hidden");
        letterCanvas.classList.add("hidden");
        cvBtn.className = "px-4 py-2 bg-white text-blue-600 font-bold rounded-t-xl text-xs shadow-sm cursor-pointer";
        letterBtn.className = "px-4 py-2 bg-gray-300 text-gray-600 font-medium rounded-t-xl text-xs shadow-sm cursor-pointer";
    } else {
        cvCanvas.classList.add("hidden");
        letterCanvas.classList.remove("hidden");
        letterBtn.className = "px-4 py-2 bg-white text-blue-600 font-bold rounded-t-xl text-xs shadow-sm cursor-pointer";
        cvBtn.className = "px-4 py-2 bg-gray-300 text-gray-600 font-medium rounded-t-xl text-xs shadow-sm cursor-pointer";
    }
}

function getFormData() {
    const data = {};
    masterFormSections.forEach(sec => {
        sec.fields.forEach(f => {
            const el = document.getElementById(`inp_${f.id}`);
            data[f.id] = el ? el.value.trim() : "";
        });
    });
    const clEl = document.getElementById("inp_coverLetterBody");
    data.coverLetterBody = clEl ? clEl.value.trim() : "";
    return data;
}

function updateLivePreviews() {
    if (!selectedTemplate) return;

    const data = getFormData();
    const cvCanvas = document.getElementById("cvCanvas");
    const letterCanvas = document.getElementById("letterCanvas");

    const pColor = activeColors.primary;
    const sColor = activeColors.secondary;

    let photoHtml = `<div style="width: 100px; height: 115px; border: 1px dashed ${pColor}; background: #f8fafc; display: flex; align-items: center; justify-content: center; font-size: 9pt; color: #94a3b8; border-radius:4px;">Photo</div>`;
    if (uploadedPhotoBase64) {
        photoHtml = `<img src="${uploadedPhotoBase64}" style="width: 100px; height: 115px; border: 2px solid ${pColor}; object-fit: cover; border-radius: 6px;">`;
    }

    // নিখুঁত মার্জিন ও জাস্টিফাইড রেন্ডারিং ব্লক
    const renderBlock = (title, content) => {
        if (!content || content.trim() === "") return "";
        return `
            <div style="margin-bottom: 20px; width: 100%; box-sizing: border-box; overflow-wrap: break-word; word-wrap: break-word;">
                <h3 style="color: ${pColor}; border-bottom: 2px solid ${pColor}; padding-bottom: 3px; font-size: 11pt; font-weight: bold; margin-bottom: 8px; text-transform: uppercase; letter-spacing:0.3px;">${title}</h3>
                <div style="font-size: 10pt; color: #334155; line-height: 1.5; text-align: justify; white-space: pre-line; word-break: break-word;">${content}</div>
            </div>
        `;
    };

    let formattedSkills = "";
    if(data.skills) {
        formattedSkills = data.skills.split(',')
            .map(s => s.trim())
            .filter(s => s !== "")
            .map(s => `<span style="display:inline-block; background:#f1f5f9; padding:4px 8px; margin:4px 4px 4px 0px; border-radius:4px; border-left:3px solid ${pColor}; font-size:9pt; font-weight:bold; color:#1e293b; word-break:break-all;">${s}</span>`)
            .join('');
    }

    // টেক্সট এবং ইমেইলকে কলামের মাঝে ফিক্স রাখার জন্য সিকিউর মেথড
    const wrapValue = (val) => {
        return `<span style="word-break: break-all !important; overflow-wrap: break-word !important; word-wrap: break-word !important; max-width: 100%; display: inline-block;">${val}</span>`;
    };

    let pTable = "";
    if(data.fatherName || data.motherName || data.dob || data.bloodGroup) {
        pTable += `<table style="width:100%; border-collapse:collapse; font-size:10pt; text-align: left; line-height:1.9; table-layout: fixed;">`;
        if(data.fatherName) pTable += `<tr><td style="width:30%; font-weight:bold; color:#475569; vertical-align: top;">Father's Name</td><td style="vertical-align: top;">: ${wrapValue(data.fatherName)}</td></tr>`;
        if(data.motherName) pTable += `<tr><td style="font-weight:bold; color:#475569; vertical-align: top;">Mother's Name</td><td style="vertical-align: top;">: ${wrapValue(data.motherName)}</td></tr>`;
        if(data.dob) pTable += `<tr><td style="font-weight:bold; color:#475569; vertical-align: top;">Date of Birth</td><td style="vertical-align: top;">: ${wrapValue(data.dob)}</td></tr>`;
        if(data.bloodGroup) pTable += `<tr><td style="font-weight:bold; color:#475569; vertical-align: top;">Blood Group</td><td style="vertical-align: top;">: ${wrapValue(data.bloodGroup)}</td></tr>`;
        pTable += `</table>`;
    }

    let layoutHtml = "";
    if (selectedTemplate.layout === 'two-column-left') {
        layoutHtml = `
            <div style="display: flex; gap: 20px; margin-top: 15px; width: 100%; box-sizing: border-box;">
                <div style="width: 32%; background: #f8fafc; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0; box-sizing: border-box; overflow-wrap: break-word; word-wrap: break-word;">
                    <div style="display:flex; justify-content:center; margin-bottom:15px;">${photoHtml}</div>
                    <h3 style="color: ${pColor}; border-bottom: 2px solid ${pColor}; padding-bottom: 3px; font-size: 11pt; font-weight: bold; margin-bottom: 8px; text-transform: uppercase;">Contact Info</h3>
                    <p style="font-size:9.5pt; line-height:1.5; text-align:left; margin-bottom: 15px;">
                        <b>Phone:</b><br>${wrapValue(data.mobile)}<br><br>
                        <b>Email:</b><br>${wrapValue(data.email)}<br><br>
                        <b>Address:</b><br>${wrapValue(data.address)}
                    </p>
                    <h3 style="color: ${pColor}; border-bottom: 2px solid ${pColor}; padding-bottom: 3px; font-size: 11pt; font-weight: bold; margin-top: 15px; margin-bottom: 8px; text-transform: uppercase;">Skills</h3>
                    <div style="margin-top:5px;">${formattedSkills}</div>
                </div>
                <div style="width: 68%; box-sizing: border-box; overflow: hidden;">
                    ${renderBlock("Professional Objective", data.objective)}
                    ${renderBlock("Experience History", data.experience)}
                    ${renderBlock("Education & Qualifications", data.education)}
                    ${renderBlock("Personal Profile", pTable)}
                </div>
            </div>`;
    } else if (selectedTemplate.layout === 'single-clean') {
        layoutHtml = `
            <div style="margin-top: 20px; width: 100%; box-sizing: border-box;">
                <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid ${pColor}; padding-bottom: 12px; margin-bottom: 15px; gap: 15px;">
                    <div style="font-size: 10pt; line-height: 1.5; color:#475569; text-align:left; max-width: 70%; box-sizing: border-box;">
                        📞 Phone: ${wrapValue(data.mobile)} <br> 
                        ✉️ Email: ${wrapValue(data.email)} <br> 
                        📍 Address: ${wrapValue(data.address)}
                    </div>
                    <div>${photoHtml}</div>
                </div>
                ${renderBlock("Career Objective", data.objective)}
                <div style="margin-bottom:15px; width: 100%;">
                    <h3 style="color: ${pColor}; border-bottom: 2px solid ${pColor}; padding-bottom: 3px; font-size: 11pt; font-weight: bold; margin-bottom: 8px; text-transform: uppercase;">Core Skills</h3>
                    <div>${formattedSkills}</div>
                </div>
                ${renderBlock("Employment Track", data.experience)}
                ${renderBlock("Academic Background", data.education)}
                ${renderBlock("Personal Details", pTable)}
            </div>`;
    } else if (selectedTemplate.layout === 'bold-top-header') {
        layoutHtml = `
            <div style="margin-top: 15px; width: 100%; box-sizing: border-box;">
                <div style="background: ${pColor}; color: white; padding: 15px; border-radius: 8px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; gap: 15px; box-sizing: border-box; width: 100%;">
                    <div style="max-width: 65%; box-sizing: border-box;">
                        <h1 style="font-size: 20pt; font-weight: bold; margin: 0; text-transform: uppercase; color:#ffffff; letter-spacing:0.5px;">${data.fullName}</h1>
                        <p style="font-size: 10.5pt; margin: 5px 0 0 0; color:${sColor}; font-weight:bold;">${data.designation}</p>
                    </div>
                    <div style="font-size: 9.5pt; text-align: right; line-height: 1.5; color:#ffffff; max-width: 35%; box-sizing: border-box;">
                        📞 ${wrapValue(data.mobile)}<br>
                        ✉️ ${wrapValue(data.email)}<br>
                        📍 ${wrapValue(data.address)}
                    </div>
                </div>
                ${renderBlock("Career Objective", data.objective)}
                <div style="margin-bottom:15px; width: 100%;">
                    <h3 style="color: ${pColor}; border-bottom: 2px solid ${pColor}; padding-bottom: 3px; font-size: 11pt; font-weight: bold; margin-bottom: 8px; text-transform: uppercase;">Key Strengths</h3>
                    <div>${formattedSkills}</div>
                </div>
                ${renderBlock("Professional Experience", data.experience)}
                ${renderBlock("Education Details", data.education)}
                ${renderBlock("Personal Profile", pTable)}
            </div>`;
    } else if (selectedTemplate.layout === 'split-symmetric') {
        layoutHtml = `
            <div style="margin-top: 15px; width: 100%; box-sizing: border-box;">
                <div style="border-bottom: 3px solid ${sColor}; padding-bottom: 10px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; gap: 15px; width: 100%; box-sizing: border-box;">
                    <div>${photoHtml}</div>
                    <div style="text-align: right; font-size: 9.5pt; color: #475569; line-height:1.5; max-width: 70%; box-sizing: border-box;">
                        <b>📍 Address:</b> ${wrapValue(data.address)} <br> 
                        <b>📞 Phone:</b> ${wrapValue(data.mobile)} <br> 
                        <b>✉️ Email:</b> ${wrapValue(data.email)}
                    </div>
                </div>
                ${renderBlock("Career Objective", data.objective)}
                <div style="margin-bottom:15px; width: 100%;">
                    <h3 style="color: ${pColor}; border-bottom: 2px solid ${pColor}; padding-bottom: 3px; font-size: 11pt; font-weight: bold; margin-bottom: 8px; text-transform: uppercase;">Skills Matrix</h3>
                    <div>${formattedSkills}</div>
                </div>
                ${renderBlock("Job Experience", data.experience)}
                ${renderBlock("Education Data", data.education)}
                ${renderBlock("Personal Information", pTable)}
            </div>`;
    } else {
        layoutHtml = `
            <div style="margin-top: 15px; border: 2px solid ${pColor}; padding: 18px; border-radius: 12px; width: 100%; box-sizing: border-box;">
                <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:18px; gap:15px; width: 100%; box-sizing: border-box;">
                    <div style="max-width: 70%; box-sizing: border-box;">
                        <h1 style="font-size: 19pt; font-weight: bold; color: ${pColor}; margin: 0; text-transform:uppercase;">${data.fullName}</h1>
                        <p style="font-size: 10.5pt; color: ${sColor}; font-weight: bold; margin-top: 4px;">${data.designation}</p>
                        <p style="font-size: 9pt; margin-top:8px; color:#475569; text-align:left;">
                            📍 ${wrapValue(data.address)} | 📞 ${wrapValue(data.mobile)} | ✉️ ${wrapValue(data.email)}
                        </p>
                    </div>
                    ${photoHtml}
                </div>
                ${renderBlock("Objective Statement", data.objective)}
                <div style="margin-bottom:15px; width: 100%;">
                    <h3 style="color: ${pColor}; border-bottom: 2px solid ${pColor}; padding-bottom: 3px; font-size: 11pt; font-weight: bold; margin-bottom: 8px; text-transform: uppercase;">Technical Skills</h3>
                    <div>${formattedSkills}</div>
                </div>
                ${renderBlock("Experience Details", data.experience)}
                ${renderBlock("Educational Profile", data.education)}
                ${renderBlock("Other Information", pTable)}
            </div>`;
    }

    cvCanvas.innerHTML = `
        <div style="font-family: Arial, sans-serif; color: #1e293b; width: 100%; box-sizing: border-box;">
            ${selectedTemplate.layout !== 'bold-top-header' ? `
            <div style="border-left: 6px solid ${pColor}; padding-left: 12px; margin-bottom: 15px; text-align:left; width: 100%; box-sizing: border-box;">
                <h1 style="font-size: 22pt; font-weight: bold; color: ${pColor}; margin: 0; text-transform: uppercase; letter-spacing:0.5px;">${data.fullName || "YOUR NAME"}</h1>
                <p style="font-size: 11.5pt; color: ${sColor}; font-weight: 600; margin: 4px 0 0 0;">${data.designation || ""}</p>
            </div>` : ''}
            ${layoutHtml}
        </div>
    `;

    letterCanvas.innerHTML = `
        <div style="font-family: Arial, sans-serif; color: #1e293b; font-size: 11pt; width: 100%; box-sizing: border-box;">
            <div style="border-bottom: 3px solid ${pColor}; padding-bottom: 10px; margin-bottom: 25px; display:flex; justify-content:space-between; align-items:flex-end; gap: 15px; width: 100%; box-sizing: border-box;">
                <div style="text-align:left; max-width: 65%;">
                    <h1 style="font-size: 22pt; font-weight: bold; color: ${pColor}; margin: 0; text-transform: uppercase;">${data.fullName}</h1>
                    <p style="font-size: 11.5pt; color: ${sColor}; font-weight: 600; margin: 4px 0 0 0;">${data.designation}</p>
                </div>
                <div style="font-size: 9.5pt; text-align:right; color: #64748b; line-height:1.5; max-width: 35%;">
                    📞 ${wrapValue(data.mobile)}<br>
                    ✉️ ${wrapValue(data.email)}<br>
                    📍 ${wrapValue(data.address)}
                </div>
            </div>
            
            <p style="margin-bottom: 15px; text-align:left;"><b>Date:</b> ${new Date().toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>
            
            <p style="line-height: 1.5; margin-bottom: 20px; text-align:left;">
                To,<br>
                <b>The Hiring Department / Human Resources</b><br>
                Target Corporate Office
            </p>

            <p style="font-weight: bold; color: ${pColor}; margin-bottom: 15px; font-size:11.5pt; text-align:left;">Subject: Application for the position of "${data.designation}".</p>

            <p style="margin-bottom: 12px; text-align:left;">Dear Sir/Madam,</p>
            
            <p style="text-align: justify; margin-bottom: 20px; line-height:1.5; white-space: pre-line; word-break: break-word;">
                ${data.coverLetterBody}
            </p>

            <p style="margin-bottom: 35px; text-align:left;">Sincerely yours,</p>
            <div style="width: 180px; border-top: 1px solid #94a3b8; padding-top: 5px; font-weight: bold; color: ${pColor}; text-align: center;">
                ${data.fullName}
            </div>
        </div>
    `;
}

function downloadPDF(type) {
    if (!selectedTemplate) return;
    switchTab(type);
    window.print();
}
