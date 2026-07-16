// ৫০টি প্রিমিয়াম থিমের ডাটাবেস (ভিন্ন কালার স্কিম ও লেআউট আর্কিটেকচার মেটাডাটা)
const designStyles = [
    { type: 'ModernSide', primary: '#1e3a8a', secondary: '#3b82f6', name: 'Executive Sapphire' },
    { type: 'CorporateMinimal', primary: '#0f766e', secondary: '#0d9488', name: 'Minimal Teal' },
    { type: 'BoldHeader', primary: '#1e293b', secondary: '#f59e0b', name: 'Amber Metro' },
    { type: 'ElegantClassic', primary: '#7f1d1d', secondary: '#b91c1c', name: 'Crimson Royal' },
    { type: 'SplitGrid', primary: '#4c1d95', secondary: '#8b5cf6', name: 'Luxury Orchid' },
    { type: 'TechLinear', primary: '#14532d', secondary: '#22c55e', name: 'Emerald Tech' },
    { type: 'CreativeBlock', primary: '#7c2d12', secondary: '#ea580c', name: 'Nordic Amber' },
    { type: 'CleanCompact', primary: '#030712', secondary: '#4b5563', name: 'Slate Slate' },
    { type: 'ShadowBox', primary: '#1e1b4b', secondary: '#4338ca', name: 'Midnight Indigo' },
    { type: 'AccentBar', primary: '#881337', secondary: '#e11d48', name: 'Rose Accent' }
];

const templates = [];
// গ্যালারির ৫০টি কার্ডে রিয়েল ভিন্নতা আনার জন্য মেকানিজম
for (let i = 1; i <= 50; i++) {
    const baseStyle = designStyles[(i - 1) % designStyles.length];
    // প্রতি ৫টি পর পর আর্কিটেকচার চেইঞ্জ হবে
    let architecture = 'two-column-left';
    if (i % 5 === 1) architecture = 'single-clean';
    if (i % 5 === 2) architecture = 'bold-top-header';
    if (i % 5 === 3) architecture = 'split-symmetric';
    if (i % 5 === 4) architecture = 'bordered-box';

    templates.push({
        id: i,
        title: `Premium Architecture - ${i}`,
        type: baseStyle.type,
        layout: architecture,
        primaryColor: baseStyle.primary,
        secondaryColor: baseStyle.secondary,
        nameTag: baseStyle.name
    });
}

const dummyData = {
    fullName: "SRABONI AKTER",
    designation: "Computer Operator & Office Assistant",
    email: "sraboniakter3804@gmail.com",
    mobile: "01797-143804",
    address: "Faridpur Sadar, Faridpur, Bangladesh",
    skills: "Microsoft Office, Excel & Data Entry, Fast Typing, Customer Support, Problem Solving, Technical Support",
    objective: "To work in a challenging environment where I can utilize my technical skills and computer proficiency to contribute effectively to the organization's growth.",
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
let currentCustomColors = null;

document.addEventListener("DOMContentLoaded", () => {
    renderTemplateGrid();
    buildSmartForm();
    // কভার লেটারের ডিফল্ট টেক্সট লোড
    document.getElementById("inp_coverLetterBody").value = dummyData.coverLetterBody;
});

// ৫০টি কার্ডের ভেতরে সম্পূর্ণ ভিন্ন এবং বাস্তবসম্মত ফুল প্রিভিউ লেআউট রেন্ডার করা
function renderTemplateGrid() {
    const grid = document.getElementById("templateGrid");
    grid.innerHTML = "";
    
    templates.forEach(t => {
        const card = document.createElement("div");
        card.id = `template-card-${t.id}`;
        card.className = "border border-slate-300 rounded-xl p-3 bg-white hover:border-blue-600 hover:shadow-xl transition flex flex-col justify-between";
        
        // জেনারেট করা সিভির ভেতরের প্রিভিউ কনটেন্ট যা দেখতে হুবহু ফাইনাল সিভির মতো
        let innerPreviewHtml = "";
        if (t.layout === 'two-column-left') {
            innerPreviewHtml = `
                <div style="background:${t.primaryColor}; color:white; padding:4px; font-size:6px; font-weight:bold;">${dummyData.fullName}</div>
                <div style="display:flex; gap:4px; margin-top:4px; font-size:4px;">
                    <div style="width:35%; background:#f1f5f9; padding:2px; font-size:3.5px;">📞 ${dummyData.mobile}<br>🔵 Skill: Office</div>
                    <div style="width:65%; border-left:1px solid #e2e8f0; padding-left:2px;"><b>Objective:</b> Advance growth...</div>
                </div>`;
        } else if (t.layout === 'single-clean') {
            innerPreviewHtml = `
                <div style="text-align:center; margin-bottom:4px;">
                    <div style="font-size:7px; font-weight:bold; color:${t.primaryColor};">${dummyData.fullName}</div>
                    <div style="font-size:4px; color:${t.secondaryColor};">${dummyData.designation}</div>
                </div>
                <div style="font-size:3.5px; border-top:1px solid ${t.primaryColor}; padding-top:2px;">
                    <b>Experience:</b> Data Entry Exec at Janata Telecom.
                </div>`;
        } else if (t.layout === 'bold-top-header') {
            innerPreviewHtml = `
                <div style="background:linear-gradient(135deg, ${t.primaryColor}, ${t.secondaryColor}); color:white; padding:6px 4px; border-radius:3px;">
                    <div style="font-size:7px; font-weight:bold;">${dummyData.fullName}</div>
                </div>
                <div style="font-size:3.5px; margin-top:4px;">
                    📍 ${dummyData.address} | ✉️ ${dummyData.email}
                </div>`;
        } else if (t.layout === 'split-symmetric') {
            innerPreviewHtml = `
                <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:2px solid ${t.secondaryColor}; padding-bottom:2px;">
                    <div style="font-size:6px; font-weight:bold; color:${t.primaryColor};">${dummyData.fullName}</div>
                    <div style="font-size:4px; background:${t.primaryColor}; color:white; padding:1px 3px;">Active</div>
                </div>
                <div style="font-size:3.5px; margin-top:3px;"><b>Skills:</b> Fast Typing, Excel, Support</div>`;
        } else {
            innerPreviewHtml = `
                <div style="border: 1px solid ${t.primaryColor}; padding:4px; border-radius:4px; min-height:100px;">
                    <div style="font-size:6px; font-weight:bold; color:${t.primaryColor};">${dummyData.fullName}</div>
                    <div style="font-size:3.5px; color:#475569; margin-top:2px;">Education: HSC Science (2021)</div>
                </div>`;
        }

        card.innerHTML = `
            <div class="text-center font-extrabold text-slate-800 text-[11px] mb-2 truncate">${t.title}</div>
            <div class="border border-slate-200 rounded-lg p-2 bg-white shadow-xs min-h-[140px] overflow-hidden select-none relative" style="font-family: Arial;">
                ${innerPreviewHtml}
            </div>
            <div class="mt-2 text-center bg-slate-900 rounded-lg py-1.5 text-white text-[10px] font-bold tracking-wide transition">Use This Layout</div>
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

// একটি চয়েজ করার সাথে সাথে বাকিগুলো গায়েব করার পারফেক্ট লজিক
function selectTemplate(id) {
    selectedTemplate = templates.find(t => t.id === id);
    currentCustomColors = { primary: selectedTemplate.primaryColor, secondary: selectedTemplate.secondaryColor };
    
    templates.forEach(t => {
        const card = document.getElementById(`template-card-${t.id}`);
        if(card) {
            if(t.id === id) {
                card.className = "border-4 border-cyan-500 rounded-xl bg-white p-4 max-w-sm mx-auto block pointer-events-none shadow-lg";
            } else {
                card.classList.add("hidden"); // বাকি ৪৯টি সিভি সম্পূর্ণ উধাও বা গায়েব
            }
        }
    });

    document.getElementById("galleryTitle").innerText = "🎯 আপনার সিলেক্ট করা সিভি টেমপ্লেটের লাইভ লুক:";
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
            card.className = "border border-slate-300 rounded-xl p-3 bg-white hover:border-blue-600 hover:shadow-xl transition flex flex-col justify-between";
        }
    });
    document.getElementById("galleryTitle").innerText = "১. নিচে ৫০টি সম্পূর্ণ ভিন্ন ও প্রিমিয়াম ডিজাইন রয়েছে, আপনার পছন্দটি বেছে নিন:";
    document.getElementById("resetGalleryBtn").classList.add("hidden");
    document.getElementById("workspaceSection").classList.add("hidden");
    selectedTemplate = null;
}

function renderColorPickers() {
    const container = document.getElementById("colorPickerContainer");
    container.innerHTML = "";
    designStyles.forEach(color => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "w-6 h-6 rounded-full border border-white shadow-xs cursor-pointer transform hover:scale-110 transition";
        btn.style.backgroundColor = color.primary;
        btn.onclick = () => {
            currentCustomColors = { primary: color.primary, secondary: color.secondary };
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
        cvBtn.className = "px-4 py-2 bg-white text-blue-600 font-bold rounded-t-xl text-xs shadow-xs cursor-pointer";
        letterBtn.className = "px-4 py-2 bg-gray-300 text-gray-600 font-medium rounded-t-xl text-xs shadow-xs cursor-pointer";
    } else {
        cvCanvas.classList.add("hidden");
        letterCanvas.classList.remove("hidden");
        letterBtn.className = "px-4 py-2 bg-white text-blue-600 font-bold rounded-t-xl text-xs shadow-xs cursor-pointer";
        cvBtn.className = "px-4 py-2 bg-gray-300 text-gray-600 font-medium rounded-t-xl text-xs shadow-xs cursor-pointer";
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
    // কভার লেটারের কাস্টম টেক্সট ডেটা ক্যাচ করা
    const clEl = document.getElementById("inp_coverLetterBody");
    data.coverLetterBody = clEl ? clEl.value.trim() : "";
    return data;
}

// ফুল ডামি ডাটা এবং ৫০টি ভিন্ন ভিন্ন ইউনিক ভিউ রেন্ডার সিস্টেম
function updateLivePreviews() {
    if (!selectedTemplate) return;

    const data = getFormData();
    const cvCanvas = document.getElementById("cvCanvas");
    const letterCanvas = document.getElementById("letterCanvas");

    const pColor = currentCustomColors.primary;
    const sColor = currentCustomColors.secondary;

    let photoHtml = `<div style="width: 100px; height: 115px; border: 1px dashed ${pColor}; background: #f8fafc; display: flex; align-items: center; justify-content: center; font-size: 9pt; color: #94a3b8; border-radius:4px;">Photo</div>`;
    if (uploadedPhotoBase64) {
        photoHtml = `<img src="${uploadedPhotoBase64}" style="width: 100px; height: 115px; border: 2px solid ${pColor}; object-fit: cover; border-radius: 6px;">`;
    }

    const renderBlock = (title, content) => {
        if (!content || content.trim() === "") return "";
        return `
            <div style="margin-bottom: 20px;">
                <h3 style="color: ${pColor}; border-bottom: 2px solid ${pColor}; padding-bottom: 4px; font-size: 12pt; font-weight: bold; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.5px;">${title}</h3>
                <div style="font-size: 10pt; color: #334155; line-height: 1.6; white-space: pre-line;">${content}</div>
            </div>
        `;
    };

    let formattedSkills = "";
    if(data.skills) {
        formattedSkills = data.skills.split(',')
            .map(s => s.trim())
            .filter(s => s !== "")
            .map(s => `<span style="display:inline-block; background:#f1f5f9; padding:4px 8px; margin:3px; border-radius:4px; border-left:3px solid ${pColor}; font-size:9.5pt; font-weight:bold; color:#1e293b;">${s}</span>`)
            .join('');
    }

    let pTable = "";
    if(data.fatherName || data.motherName || data.dob || data.bloodGroup) {
        pTable += `<table style="width:100%; border-collapse:collapse; font-size:10pt; text-align: left; line-height:1.8;">`;
        if(data.fatherName) pTable += `<tr><td style="width:35%; font-weight:bold;">Father's Name</td><td>: ${data.fatherName}</td></tr>`;
        if(data.motherName) pTable += `<tr><td style="font-weight:bold;">Mother's Name</td><td>: ${data.motherName}</td></tr>`;
        if(data.dob) pTable += `<tr><td style="font-weight:bold;">Date of Birth</td><td>: ${data.dob}</td></tr>`;
        if(data.bloodGroup) pTable += `<tr><td style="font-weight:bold;">Blood Group</td><td>: ${data.bloodGroup}</td></tr>`;
        pTable += `</table>`;
    }

    // ৫০টি ভিন্ন আর্কিটেকচারের জন্য আলাদা লাইভ ইঞ্জিন সুইচার
    let layoutHtml = "";
    if (selectedTemplate.layout === 'two-column-left') {
        layoutHtml = `
            <div style="display: flex; gap: 20px; margin-top: 20px;">
                <div style="width: 35%; background: #f8fafc; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0;">
                    <div style="display:flex; justify-content:center; margin-bottom:15px;">${photoHtml}</div>
                    ${renderBlock("Contact Info", `<p style="font-size:9.5pt; line-height:1.6;"><b>Phone:</b><br>${data.mobile}<br><br><b>Email:</b><br>${data.email}<br><br><b>Address:</b><br>${data.address}</p>`)}
                    ${renderBlock("Expertise", formattedSkills)}
                </div>
                <div style="width: 65%;">
                    ${renderBlock("Professional Objective", data.objective)}
                    ${renderBlock("Experience History", data.experience)}
                    ${renderBlock("Education", data.education)}
                    ${renderBlock("Personal Details", pTable)}
                </div>
            </div>`;
    } else if (selectedTemplate.layout === 'single-clean') {
        layoutHtml = `
            <div style="margin-top: 25px;">
                <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid ${pColor}; padding-bottom: 15px; margin-bottom: 20px;">
                    <div style="font-size: 10pt; line-height: 1.6; color:#475569;">
                        📞 ${data.mobile} | ✉️ ${data.email}<br>📍 ${data.address}
                    </div>
                    ${photoHtml}
                </div>
                ${renderBlock("Career Objective", data.objective)}
                ${renderBlock("Core Skills", formattedSkills)}
                ${renderBlock("Employment Track", data.experience)}
                ${renderBlock("Academic Background", data.education)}
                ${renderBlock("Bio Data", pTable)}
            </div>`;
    } else if (selectedTemplate.layout === 'bold-top-header') {
        layoutHtml = `
            <div style="margin-top: 20px;">
                <div style="background: linear-gradient(135deg, ${pColor}, ${sColor}); color: white; padding: 20px; border-radius: 8px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px;">
                    <div>
                        <h1 style="font-size: 24pt; font-weight: bold; margin: 0; text-transform: uppercase;">${data.fullName}</h1>
                        <p style="font-size: 12pt; margin: 5px 0 0 0; opacity: 0.9;">${data.designation}</p>
                    </div>
                    <div style="font-size: 9.5pt; text-align: right; opacity: 0.9; line-height: 1.5;">
                        📞 ${data.mobile}<br>✉️ ${data.email}<br>📍 ${data.address}
                    </div>
                </div>
                ${renderBlock("Objective", data.objective)}
                ${renderBlock("Key Strengths", formattedSkills)}
                ${renderBlock("Professional Experience", data.experience)}
                ${renderBlock("Education Details", data.education)}
                ${renderBlock("Personal Profile", pTable)}
            </div>`;
    } else {
        // রিলেটিভ স্প্লিট ও বোর্ডার লেআউট
        layoutHtml = `
            <div style="margin-top: 20px; border: 3px double ${pColor}; padding: 15px; border-radius: 8px;">
                <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:20px;">
                    <div>
                        <h1 style="font-size: 22pt; font-weight: bold; color: ${pColor}; margin: 0;">${data.fullName}</h1>
                        <p style="font-size: 11pt; color: ${sColor}; font-weight: bold; margin-top: 4px;">${data.designation}</p>
                        <p style="font-size: 9.5pt; margin-top:8px; color:#555;">📍 ${data.address} | 📞 ${data.mobile}</p>
                    </div>
                    ${photoHtml}
                </div>
                ${renderBlock("Objective Statement", data.objective)}
                ${renderBlock("Technical Skills", formattedSkills)}
                ${renderBlock("Experience Details", data.experience)}
                ${renderBlock("Educational Profile", data.education)}
                ${renderBlock("Other Informations", pTable)}
            </div>`;
    }

    cvCanvas.innerHTML = `
        <div style="font-family: Arial, sans-serif; color: #1e293b;">
            ${selectedTemplate.layout !== 'bold-top-header' ? `
            <div style="border-left: 6px solid ${pColor}; padding-left: 15px; margin-bottom: 20px;">
                <h1 style="font-size: 24pt; font-weight: bold; color: ${pColor}; margin: 0; text-transform: uppercase;">${data.fullName || "YOUR NAME"}</h1>
                <p style="font-size: 12pt; color: ${sColor}; font-weight: 600; margin: 5px 0 0 0;">${data.designation || ""}</p>
            </div>` : ''}
            ${layoutHtml}
        </div>
    `;

    // সেম ডিজাইনের প্রিমিয়াম ম্যাচিং কভার লেটার উইথ ফুল কাস্টম বডি এডিট
    letterCanvas.innerHTML = `
        <div style="font-family: Arial, sans-serif; color: #1e293b; font-size: 11pt;">
            <div style="border-bottom: 3px solid ${pColor}; padding-bottom: 12px; margin-bottom: 30px; display:flex; justify-content:space-between; align-items:flex-end;">
                <div>
                    <h1 style="font-size: 24pt; font-weight: bold; color: ${pColor}; margin: 0; text-transform: uppercase;">${data.fullName}</h1>
                    <p style="font-size: 12pt; color: ${sColor}; font-weight: 600; margin: 4px 0 0 0;">${data.designation}</p>
                </div>
                <div style="font-size: 9.5pt; text-align:right; color: #64748b; line-height:1.4;">
                    📞 ${data.mobile}<br>✉️ ${data.email}<br>📍 ${data.address}
                </div>
            </div>
            
            <p style="margin-bottom: 20px;"><b>Date:</b> ${new Date().toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>
            
            <p style="line-height: 1.5; margin-bottom: 25px;">
                To,<br>
                <b>The Hiring Department / Human Resources</b><br>
                Target Corporate Office
            </p>

            <p style="font-weight: bold; color: ${pColor}; margin-bottom: 20px; font-size:12pt;">Subject: Application for the position of "${data.designation}".</p>

            <p style="margin-bottom: 15px;">Dear Sir/Madam,</p>
            
            <!-- এডিটেবল কভার লেটার বডি এরিয়া লাইভ রিফ্লেকশন -->
            <p style="text-align: justify; margin-bottom: 25px; line-height:1.6; white-space: pre-line;">
                ${data.coverLetterBody}
            </p>

            <p style="margin-bottom: 40px;">Sincerely yours,</p>
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
