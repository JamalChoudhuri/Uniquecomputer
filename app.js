const colorOptions = [
    { primary: '#1e3a8a', secondary: '#3b82f6', name: 'Otago Blue' },
    { primary: '#0f766e', secondary: '#14b8a6', name: 'Berkeley Teal' },
    { primary: '#1e293b', secondary: '#64748b', name: 'Harvard Dark' },
    { primary: '#b91c1c', secondary: '#ef4444', name: 'Stanford Red' },
    { primary: '#6d28d9', secondary: '#a855f7', name: 'Oxford Purple' },
    { primary: '#15803d', secondary: '#22c55e', name: 'Cambridge Green' },
    { primary: '#7c2d12', secondary: '#f97316', name: 'Brown Earth' }
];

const templates = [];
for (let i = 1; i <= 50; i++) {
    const defaultColor = colorOptions[(i - 1) % colorOptions.length];
    templates.push({
        id: i,
        title: `Template Style-${i}`,
        primaryColor: defaultColor.primary,
        secondaryColor: defaultColor.secondary,
        layoutStyle: i % 2 === 0 ? 'two-column' : 'single-column'
    });
}

const predefinedSkills = ["Microsoft Office", "Excel & Data Entry", "Fast Typing Speed", "Customer Management", "Problem Solving", "Technical Support"];

const dummyData = {
    fullName: "SRABONI AKTER",
    designation: "Computer Operator & Office Assistant",
    email: "sraboniakter3804@gmail.com",
    mobile: "01797-143804",
    address: "Faridpur Sadar, Faridpur, Bangladesh",
    skills: "Microsoft Office, Excel & Data Entry, Fast Typing, Customer Support",
    objective: "To work in a challenging environment where I can utilize my technical skills and computer proficiency to contribute effectively to the organization's growth.",
    experience: "Computer Operator & Data Entry Executive\nJanata Telecom, Faridpur (2024 - Present)\n- Managed daily data entry sheets and official communications.",
    education: "Higher Secondary Certificate (HSC)\nFaridpur Govt. College, Group: Science (2021)",
    fatherName: "Late. Sobahan Matubbor",
    motherName: "Saheda Begum",
    dob: "10-11-2001",
    bloodGroup: "AB+"
};

const masterFormSections = [
    {
        title: "👤 Personal Information",
        fields: [
            { id: 'fullName', label: 'Full Name' },
            { id: 'designation', label: 'Designation' },
            { id: 'email', label: 'Email Address' },
            { id: 'mobile', label: 'Mobile Number' },
            { id: 'address', label: 'Address' }
        ]
    },
    {
        title: "🛠️ Key Skills (English tags separated by comma)",
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
        title: "📋 Additional Details",
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
});

// ৫০টি কার্ডের ওপরেই ফুল ডামি ডাটা দিয়ে রিয়েল লেআউট প্রিভিউ মেকিং
function renderTemplateGrid() {
    const grid = document.getElementById("templateGrid");
    grid.innerHTML = "";
    
    templates.forEach(t => {
        const card = document.createElement("div");
        card.id = `template-card-${t.id}`;
        card.className = "border border-gray-300 rounded-lg p-3 cursor-pointer bg-white hover:border-blue-600 hover:shadow-lg transition flex flex-col justify-between";
        
        const isTwoCol = t.layoutStyle === 'two-column';
        
        // ডামি ডাটা দিয়ে মিনি লেআউট জেনারেশন
        card.innerHTML = `
            <div class="text-center font-bold text-gray-700 text-xs mb-2">${t.title}</div>
            <div class="border border-gray-200 rounded p-2 bg-white shadow-xs min-h-[160px] overflow-hidden select-none" style="font-family: Arial; text-align: left; color: #334155;">
                <div style="border-left: 3px solid ${t.primaryColor}; padding-left: 4px; margin-bottom: 5px;">
                    <div style="font-size: 8px; font-weight: bold; color: ${t.primaryColor};">${dummyData.fullName}</div>
                    <div style="font-size: 5px; color: ${t.secondaryColor}; font-weight: 600;">${dummyData.designation}</div>
                </div>
                <div style="display: flex; gap: 5px; font-size: 4px; line-height: 1.2;">
                    ${isTwoCol ? `<div style="width: 35%; background: #f8fafc; padding: 2px; border-right: 0.5px solid #e2e8f0;">
                        <b>Contact:</b><br>${dummyData.mobile}<br>
                        <b>Skills:</b><br><span style="background:${t.primaryColor}; color:white; padding:1px; border-radius:1px;">Office</span>
                    </div>` : ''}
                    <div style="${isTwoCol ? 'width: 65%;' : 'width: 100%;'}">
                        <div style="border-bottom: 0.5px solid ${t.primaryColor}; font-weight: bold; font-size: 5px; color: ${t.primaryColor};">OBJECTIVE</div>
                        <div style="font-size: 4px; margin-bottom: 3px;">Utilize my technical computer skills...</div>
                        <div style="border-bottom: 0.5px solid ${t.primaryColor}; font-weight: bold; font-size: 5px; color: ${t.primaryColor};">EDUCATION</div>
                        <div style="font-size: 4px;">HSC - Faridpur College (2021)</div>
                    </div>
                </div>
            </div>
            <div class="mt-2 text-center bg-slate-900 rounded py-1 text-white text-[10px] font-bold">Select Layout</div>
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
        secDiv.className = "bg-gray-50 p-4 rounded-xl border border-gray-200 space-y-3";
        secDiv.innerHTML = `<h3 class="text-xs font-bold text-gray-900 border-b border-gray-200 pb-1">${sec.title}</h3>`;
        
        sec.fields.forEach(f => {
            const fDiv = document.createElement("div");
            fDiv.className = "block text-xs";
            const defaultVal = dummyData[f.id] || "";

            if (f.type === 'skills-tagger') {
                fDiv.innerHTML = `
                    <label class="block font-medium text-gray-600 mb-1">${f.label}</label>
                    <input type="text" id="inp_skills" value="${defaultVal}" oninput="updateLivePreviews()" class="w-full p-2 border border-gray-300 rounded bg-white font-bold text-blue-700">
                    <div class="flex flex-wrap gap-1 mt-2 max-h-24 overflow-y-auto bg-white p-2 border border-gray-200 rounded" id="tagCloud"></div>
                `;
            } else if(f.type === 'textarea') {
                fDiv.innerHTML = `
                    <label class="block font-medium text-gray-600 mb-1">${f.label}</label>
                    <textarea id="inp_${f.id}" oninput="updateLivePreviews()" rows="3" class="w-full p-2 border border-gray-300 rounded bg-white">${defaultVal}</textarea>
                `;
            } else {
                fDiv.innerHTML = `
                    <label class="block font-medium text-gray-600 mb-1">${f.label}</label>
                    <input type="text" id="inp_${f.id}" value="${defaultVal}" oninput="updateLivePreviews()" class="w-full p-2 border border-gray-300 rounded bg-white">
                `;
            }
            secDiv.appendChild(fDiv);
        });
        container.appendChild(secDiv);
    });
    populateSkillTags();
}

function populateSkillTags() {
    const cloud = document.getElementById("tagCloud");
    if(!cloud) return;
    cloud.innerHTML = "";
    predefinedSkills.forEach(skill => {
        const span = document.createElement("span");
        span.className = "bg-slate-200 hover:bg-blue-600 hover:text-white px-2 py-0.5 rounded text-[11px] cursor-pointer transition font-medium text-gray-700";
        span.innerText = `+ ${skill}`;
        span.onclick = () => {
            const input = document.getElementById("inp_skills");
            if(input) {
                let currentVals = input.value.split(',').map(s => s.trim()).filter(s => s !== "");
                if(!currentVals.includes(skill)) {
                    currentVals.push(skill);
                    input.value = currentVals.join(', ');
                    updateLivePreviews();
                }
            }
        };
        cloud.appendChild(span);
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

// সিলেক্ট করার সাথে সাথে বাকিগুলো হাওয়া বা গায়েব হয়ে যাওয়ার লজিক
function selectTemplate(id) {
    selectedTemplate = templates.find(t => t.id === id);
    currentCustomColors = { primary: selectedTemplate.primaryColor, secondary: selectedTemplate.secondaryColor };
    
    templates.forEach(t => {
        const card = document.getElementById(`template-card-${t.id}`);
        if(card) {
            if(t.id === id) {
                card.className = "border-4 border-emerald-500 rounded-xl bg-white p-4 max-w-sm mx-auto block pointer-events-none shadow-md";
            } else {
                card.classList.add("hidden"); // বাকি সব সিভি গায়েব
            }
        }
    });

    document.getElementById("galleryTitle").innerText = "🎯 Selected Template Design Look:";
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
            card.className = "border border-gray-300 rounded-lg p-3 cursor-pointer bg-white hover:border-blue-600 hover:shadow-lg transition flex flex-col justify-between";
        }
    });
    document.getElementById("galleryTitle").innerText = "Choose Your Professional Template (50 Themes Available)";
    document.getElementById("resetGalleryBtn").classList.add("hidden");
    document.getElementById("workspaceSection").classList.add("hidden");
    selectedTemplate = null;
}

function renderColorPickers() {
    const container = document.getElementById("colorPickerContainer");
    container.innerHTML = "";
    colorOptions.forEach(color => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "w-7 h-7 rounded-full border-2 border-white shadow-xs cursor-pointer transform hover:scale-110 transition";
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
        cvBtn.className = "px-4 py-2 bg-white text-blue-600 font-bold rounded-t-lg text-xs shadow-xs cursor-pointer";
        letterBtn.className = "px-4 py-2 bg-gray-200 text-gray-600 font-medium rounded-t-lg text-xs shadow-xs cursor-pointer";
    } else {
        cvCanvas.classList.add("hidden");
        letterCanvas.classList.remove("hidden");
        letterBtn.className = "px-4 py-2 bg-white text-blue-600 font-bold rounded-t-lg text-xs shadow-xs cursor-pointer";
        cvBtn.className = "px-4 py-2 bg-gray-200 text-gray-600 font-medium rounded-t-lg text-xs shadow-xs cursor-pointer";
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
    return data;
}

function updateLivePreviews() {
    if (!selectedTemplate) return;

    const data = getFormData();
    const cvCanvas = document.getElementById("cvCanvas");
    const letterCanvas = document.getElementById("letterCanvas");

    const pColor = currentCustomColors.primary;
    const sColor = currentCustomColors.secondary;

    let photoHtml = `<div style="width: 100px; height: 110px; border: 1px dashed ${pColor}; background: #f8fafc; display: flex; align-items: center; justify-content: center; font-size: 9pt; color: #94a3b8;">Photo</div>`;
    if (uploadedPhotoBase64) {
        photoHtml = `<img src="${uploadedPhotoBase64}" style="width: 100px; height: 110px; border: 2px solid ${pColor}; object-fit: cover; border-radius: 4px;">`;
    }

    const renderBlock = (title, content) => {
        if (!content || content.trim() === "") return "";
        return `
            <div style="margin-bottom: 18px;">
                <h3 style="color: ${pColor}; border-bottom: 1.5px solid ${pColor}; padding-bottom: 3px; font-size: 12pt; font-weight: bold; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.5px;">${title}</h3>
                <div style="font-size: 10pt; color: #334155; line-height: 1.5; white-space: pre-line;">${content}</div>
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
        pTable += `<table style="width:100%; border-collapse:collapse; font-size:10pt; text-align: left;">`;
        if(data.fatherName) pTable += `<tr><td style="width:35%; font-weight:bold; padding:4px 0;">Father's Name</td><td>: ${data.fatherName}</td></tr>`;
        if(data.motherName) pTable += `<tr><td style="font-weight:bold; padding:4px 0;">Mother's Name</td><td>: ${data.motherName}</td></tr>`;
        if(data.dob) pTable += `<tr><td style="font-weight:bold; padding:4px 0;">Date of Birth</td><td>: ${data.dob}</td></tr>`;
        if(data.bloodGroup) pTable += `<tr><td style="font-weight:bold; padding:4px 0;">Blood Group</td><td>: ${data.bloodGroup}</td></tr>`;
        pTable += `</table>`;
    }

    // সিভি লেআউট রেন্ডারিং
    let mainLayout = "";
    if(selectedTemplate.layoutStyle === 'two-column') {
        mainLayout = `
            <div style="display: flex; gap: 20px; margin-top: 20px;">
                <div style="width: 35%; background: #f8fafc; padding: 15px; border-radius: 6px; border: 1px solid #e2e8f0;">
                    <div style="display:flex; justify-content:center; margin-bottom:15px;">${photoHtml}</div>
                    ${renderBlock("Contact", `<p style="font-size:9.5pt; line-height:1.6;"><b>Phone:</b><br>${data.mobile}<br><br><b>Email:</b><br>${data.email}<br><br><b>Address:</b><br>${data.address}</p>`)}
                    ${renderBlock("Skills", formattedSkills)}
                </div>
                <div style="width: 65%;">
                    ${renderBlock("Objective", data.objective)}
                    ${renderBlock("Experience", data.experience)}
                    ${renderBlock("Education", data.education)}
                    ${renderBlock("Personal Info", pTable)}
                </div>
            </div>
        `;
    } else {
        mainLayout = `
            <div style="margin-top: 20px;">
                <div style="display: flex; justify-content: space-between; align-items: center; background:#f8fafc; padding:12px; border-radius:6px; border:1px solid #e2e8f0; margin-bottom: 20px;">
                    <div style="font-size: 10pt; line-height: 1.6;">
                        <b>Phone:</b> ${data.mobile} | <b>Email:</b> ${data.email}<br>
                        <b>Address:</b> ${data.address}
                    </div>
                    ${photoHtml}
                </div>
                ${renderBlock("Objective", data.objective)}
                ${renderBlock("Key Skills", formattedSkills)}
                ${renderBlock("Work Experience", data.experience)}
                ${renderBlock("Education Background", data.education)}
                ${renderBlock("Personal Profile", pTable)}
            </div>
        `;
    }

    cvCanvas.innerHTML = `
        <div style="font-family: Arial, sans-serif; color: #1e293b;">
            <div style="border-left: 6px solid ${pColor}; padding-left: 15px; margin-bottom: 20px;">
                <h1 style="font-size: 24pt; font-weight: bold; color: ${pColor}; margin: 0; text-transform: uppercase; letter-spacing: 0.5px;">${data.fullName || "YOUR NAME"}</h1>
                <p style="font-size: 12pt; color: ${sColor}; font-weight: 600; margin: 5px 0 0 0;">${data.designation || ""}</p>
            </div>
            ${mainLayout}
        </div>
    `;

    // সেম ডিজাইনের কভার পেজ রেন্ডারিং ফিক্স
    letterCanvas.innerHTML = `
        <div style="font-family: Arial, sans-serif; color: #1e293b; font-size: 11pt;">
            <div style="border-bottom: 3px solid ${pColor}; padding-bottom: 12px; margin-bottom: 30px; display:flex; justify-content:space-between; align-items:flex-end;">
                <div>
                    <h1 style="font-size: 24pt; font-weight: bold; color: ${pColor}; margin: 0; text-transform: uppercase;">${data.fullName || "YOUR NAME"}</h1>
                    <p style="font-size: 12pt; color: ${sColor}; font-weight: 600; margin: 4px 0 0 0;">${data.designation || ""}</p>
                </div>
                <div style="font-size: 9.5pt; text-align:right; color: #64748b; line-height:1.4;">
                    📞 ${data.mobile}<br>✉️ ${data.email}<br>📍 ${data.address}
                </div>
            </div>
            
            <p style="margin-bottom: 25px;"><b>Date:</b> ${new Date().toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>
            
            <p style="line-height: 1.5; margin-bottom: 25px;">
                To,<br>
                <b>The Hiring Authority / Human Resources</b><br>
                Target Organization Office
            </p>

            <p style="font-weight: bold; color: ${pColor}; margin-bottom: 20px; font-size:12pt;">Subject: Application for the position of "${data.designation || 'Suitable Post'}".</p>

            <p style="margin-bottom: 15px;">Dear Sir/Madam,</p>
            <p style="text-align: justify; margin-bottom: 15px; line-height:1.6;">
                I am writing to express my eager interest in joining your esteemed organization. Given my practical background, matching skill sets, and highly disciplined work approach, I believe I can dynamically fulfill the responsibilities of this position.
            </p>
            <p style="text-align: justify; margin-bottom: 15px; line-height:1.6;">
                I possess valuable proficiency in core domains including: <b>${data.skills || 'General Professional Competencies'}</b>. I have a proven record of handling workflows with dedication, performance precision, and strict deadline alignment.
            </p>
            <p style="text-align: justify; margin-bottom: 35px; line-height:1.6;">
                My enclosed resume details my full qualifications and background. I would welcome the opportunity to discuss my suitability further during a personal interview. Thank you for your time and consideration.
            </p>

            <p style="margin-bottom: 40px;">Sincerely yours,</p>
            <div style="width: 180px; border-top: 1px solid #94a3b8; padding-top: 5px; font-weight: bold; color: ${pColor}; text-align: center;">
                ${data.fullName || 'Applicant'}
            </div>
        </div>
    `;
}

// ১০০% ওয়ার্কিং ডিরেক্ট পিডিএফ প্রিন্ট/ডাউনলোড মেকানিজম
function downloadPDF(type) {
    if (!selectedTemplate) return;
    
    // প্রিভিউ মোড সিলেকশন কন্ট্রোল
    switchTab(type);
    
    // ব্রাউজারের মূল প্রিন্ট উইন্ডো ফায়ার করা হবে যা রিয়েল ও ক্রাশ-ফ্রি A4 পিডিএফ জেনারেট করে
    window.print();
}
