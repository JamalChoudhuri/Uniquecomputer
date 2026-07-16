// ৫০টি লাইভ ডিজাইন মেটাডেটা প্রিসেট
const colorOptions = [
    { primary: '#1e3a8a', secondary: '#3b82f6', name: 'কর্পোরেট ব্লু' },
    { primary: '#0f766e', secondary: '#14b8a6', name: 'এলিজেন্ট টিল' },
    { primary: '#1e293b', secondary: '#64748b', name: 'মডার্ন ডার্ক' },
    { primary: '#b91c1c', secondary: '#ef4444', name: 'রয়্যাল রেড' },
    { primary: '#6d28d9', secondary: '#a855f7', name: 'লাক্সারি পার্পল' },
    { primary: '#15803d', secondary: '#22c55e', name: 'ক্লাসিক গ্রিন' },
    { primary: '#7c2d12', secondary: '#f97316', name: 'আর্থ ব্রাউন' }
];

const templates = [];
for (let i = 1; i <= 50; i++) {
    const defaultColor = colorOptions[(i - 1) % colorOptions.length];
    templates.push({
        id: i,
        title: `প্রিমিয়াম থিম - ${i}`,
        primaryColor: defaultColor.primary,
        secondaryColor: defaultColor.secondary,
        layoutStyle: i % 2 === 0 ? 'two-column' : 'single-column'
    });
}

// বিল্ট-ইন অল-ইন-ওয়ান স্কিল ট্যাগ ডাটাবেস
const predefinedSkills = [
    "কম্পিউটার চালনা (MS Word & Excel)", "ইন্টারনেট ব্রাউজিং", "typing স্পিড (ভালো)",
    "অটো-ড্রাইভিং (লাইসেন্সধারী)", "মোটরসাইকেল ড্রাইভিং", 
    "উন্নত কৃষি চাষাবাদ", "আধুনিক দর্জি বিজ্ঞান ও কাটিং", 
    "কাস্টমার ম্যানেজমেন্ট স্কিল", "কঠোর পরিশ্রম ও ধৈর্য", 
    "সাঁতার কাটা", "ইলেকট্রিক্যাল হাউজ ওয়ার্কিং", "মোবাইল সার্ভিসিং"
];

const masterFormSections = [
    {
        title: "👤 ব্যক্তিগত মৌলিক তথ্য (Personal Info)",
        fields: [
            { id: 'fullName', label: 'পূর্ণ নাম (Full Name)', placeholder: 'উদা: শ্রাবণী আক্তার' },
            { id: 'designation', label: 'পদবী/পেশা (Designation)', placeholder: 'উদা: কম্পিউটার অপারেটর / কৃষক / ম্যানেজার' },
            { id: 'email', label: 'ইমেইল (Email)', placeholder: 'sraboni@example.com' },
            { id: 'mobile', label: 'মোবাইল (Mobile)', placeholder: '01797-143804' },
            { id: 'address', label: 'বর্তমান ঠিকানা', placeholder: 'গ্রাম, পোস্ট, থানা, জেলা' }
        ]
    },
    {
        title: "🛠️ স্কিল বা কারিগরি দক্ষতা (ক্লিক করে ট্যাগ যোগ করুন)",
        fields: [
            { id: 'skills', label: 'নির্বাচিত স্কিলসমূহ', placeholder: '', type: 'skills-tagger' }
        ]
    },
    {
        title: "💼 কাজের অভিজ্ঞতা ও শিক্ষাগত যোগ্যতা",
        fields: [
            { id: 'objective', label: 'ক্যারিয়ার অবজেক্টিভ', placeholder: 'কাজের লক্ষ্য...', type: 'textarea' },
            { id: 'experience', label: 'কাজের অভিজ্ঞতা', placeholder: 'উদা: জনতা টেলিকম, কম্পিউটার অপারেটর, ২ বছর', type: 'textarea' },
            { id: 'education', label: 'শিক্ষাগত বিবরণ', placeholder: 'উদা: HSC - ফরিদপুর কলেজ, ২০১৯', type: 'textarea' }
        ]
    },
    {
        title: "📋 অন্যান্য বিবরণ (ঐচ্ছিক)",
        fields: [
            { id: 'fatherName', label: 'পিতার নাম', placeholder: 'Late. Sobahan Matubbor' },
            { id: 'motherName', label: 'মাতার নাম', placeholder: 'Saheda Begum' },
            { id: 'dob', label: 'জন্ম তারিখ', placeholder: '10-11-1999' },
            { id: 'bloodGroup', label: 'রক্তের গ্রুপ', placeholder: 'AB+' }
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

// টেমপ্লেট গ্যালারি মেকিং (আসল কালার স্কিমে ডিজাইন স্পষ্ট দেখা যাবে)
function renderTemplateGrid() {
    const grid = document.getElementById("templateGrid");
    grid.innerHTML = "";
    
    templates.forEach(t => {
        const card = document.createElement("div");
        card.id = `template-card-${t.id}`;
        card.className = "border-2 border-slate-300 rounded-xl overflow-hidden cursor-pointer bg-white hover:border-blue-600 transition p-2 block";
        
        const isTwoCol = t.layoutStyle === 'two-column';
        card.innerHTML = `
            <div class="h-44 bg-slate-50 border border-gray-200 rounded p-2 flex flex-col justify-between overflow-hidden relative">
                <!-- হেডার কালার প্রিভিউ -->
                <div class="h-5 rounded-xs w-full mb-1 flex items-center px-1" style="background-color: ${t.primaryColor}">
                    <div class="w-2 h-2 rounded-full bg-white/70"></div>
                </div>
                <div class="h-2 rounded-xs w-2/3 mb-2" style="background-color: ${t.secondaryColor}"></div>
                
                <!-- লেআউট ভিউ -->
                <div class="flex flex-1 gap-2 w-full">
                    ${isTwoCol ? `<div class="w-1/3 bg-slate-200 rounded-xs h-full border-r border-slate-300"></div>` : ''}
                    <div class="${isTwoCol ? 'w-2/3' : 'w-full'} space-y-1.5">
                        <div class="h-2 bg-gray-300 w-full rounded-xs"></div>
                        <div class="h-2 bg-gray-300 w-5/6 rounded-xs"></div>
                        <div class="h-2 bg-gray-300 w-4/5 rounded-xs"></div>
                    </div>
                </div>
                <div class="absolute inset-0 bg-slate-900/10 hover:bg-slate-900/20 transition flex items-center justify-center text-slate-900 font-extrabold text-xs">ক্লিক করুন</div>
            </div>
            <div class="p-2 text-center bg-slate-900 mt-1 rounded text-white">
                <span class="text-xs font-bold">${t.title} (${isTwoCol ? '২-কলাম' : '১-কলাম'})</span>
            </div>
        `;
        card.onclick = () => selectTemplate(t.id);
        grid.appendChild(card);
    });
}

// ইনপুট ফর্ম তৈরি ও ট্যাগ ক্লাউড
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
            
            let defaultVal = "";
            if(f.id === 'fullName') defaultVal = "SRABONI AKTER";
            if(f.id === 'email') defaultVal = "sraboniakter3804@gmail.com";
            if(f.id === 'mobile') defaultVal = "01797-143804";
            if(f.id === 'address') defaultVal = "Faridpur, Bangladesh";
            if(f.id === 'objective') defaultVal = "To build up a career working in a challenging environment...";

            if (f.type === 'skills-tagger') {
                fDiv.innerHTML = `
                    <input type="text" id="inp_skills" value="কম্পিউটার চালনা (MS Word & Excel), ধৈর্য" oninput="updateLivePreviews()" class="w-full p-2 border border-gray-300 rounded bg-white font-bold text-blue-700">
                    <div class="flex flex-wrap gap-1 mt-2 max-h-24 overflow-y-auto bg-white p-2 border border-gray-200 rounded" id="tagCloud"></div>
                `;
            } else if(f.type === 'textarea') {
                fDiv.innerHTML = `
                    <label class="block font-medium text-gray-600 mb-1">${f.label}</label>
                    <textarea id="inp_${f.id}" oninput="updateLivePreviews()" rows="2" class="w-full p-2 border border-gray-300 rounded bg-white">${defaultVal}</textarea>
                `;
            } else {
                fDiv.innerHTML = `
                    <label class="block font-medium text-gray-600 mb-1">${f.label}</label>
                    <input type="text" id="inp_${f.id}" value="${defaultVal}" oninput="updateLivePreviews()" class="w-full p-2 border border-gray-300 rounded bg-white" placeholder="${f.placeholder}">
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

// সিলেক্ট করার সাথে সাথে বাকি সিভি হাইড করার স্মার্ট ইঞ্জিন
function selectTemplate(id) {
    selectedTemplate = templates.find(t => t.id === id);
    currentCustomColors = { primary: selectedTemplate.primaryColor, secondary: selectedTemplate.secondaryColor };
    
    // গ্যালারির বাকি সব কার্ড লুপ চালিয়ে হাইড করে দেওয়া
    templates.forEach(t => {
        const card = document.getElementById(`template-card-${t.id}`);
        if(card) {
            if(t.id === id) {
                card.classList.remove("hidden");
                card.className = "border-4 border-emerald-500 rounded-xl overflow-hidden bg-white p-2 max-w-xs mx-auto block pointer-events-none";
            } else {
                card.classList.add("hidden");
            }
        }
    });

    document.getElementById("galleryTitle").innerText = "🎯 আপনার নির্বাচিত একক টেমপ্লেট ডিজাইন:";
    document.getElementById("resetGalleryBtn").classList.remove("hidden");
    document.getElementById("workspaceSection").classList.remove("hidden");
    
    renderColorPickers();
    updateLivePreviews();
    document.getElementById("workspaceSection").scrollIntoView({ behavior: 'smooth' });
}

// রিসেট দিয়ে আবার সব ডিজাইন ফিরিয়ে আনা
function resetGallery() {
    templates.forEach(t => {
        const card = document.getElementById(`template-card-${t.id}`);
        if(card) {
            card.classList.remove("hidden");
            card.className = "border-2 border-slate-300 rounded-xl overflow-hidden cursor-pointer bg-white hover:border-blue-600 transition p-2 block";
        }
    });
    document.getElementById("galleryTitle").innerText = "১. ডিজাইন দেখে আপনার পছন্দের টেমপ্লেট চয়েজ করুন (৫০টি থিম)";
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

// রিয়েল-টাইম প্রিভিউ জেনারেটর ইঞ্জিন
function updateLivePreviews() {
    if (!selectedTemplate) return;

    const data = getFormData();
    const cvCanvas = document.getElementById("cvCanvas");
    const letterCanvas = document.getElementById("letterCanvas");

    const pColor = currentCustomColors.primary;
    const sColor = currentCustomColors.secondary;

    let photoHtml = "";
    if (uploadedPhotoBase64) {
        photoHtml = `<img src="${uploadedPhotoBase64}" style="width: 90px; height: 100px; border-radius: 4px; border: 2px solid ${pColor}; object-fit: cover; margin-bottom: 5px;">`;
    }

    const renderBlock = (title, content) => {
        if (!content || content.trim() === "") return "";
        return `
            <div style="margin-bottom: 12px; text-align: left;">
                <h3 style="color: ${pColor}; border-bottom: 2px solid ${pColor}; padding-bottom: 2px; font-size: 11pt; font-weight: bold; margin-bottom: 6px; text-transform: uppercase;">${title}</h3>
                <div style="font-size: 9.5pt; color: #334155; line-height: 1.4;">${content}</div>
            </div>
        `;
    };

    let formattedSkills = "";
    if(data.skills) {
        formattedSkills = data.skills.split(',').map(s => `<span style="display:inline-block; background:#f1f5f9; padding:3px 6px; margin:2px; border-radius:4px; border-left:3px solid ${pColor}; font-size:9pt; font-weight:bold;">${s.trim()}</span>`).join('');
    }

    let pTable = "";
    if(data.fatherName || data.motherName || data.dob || data.bloodGroup) {
        pTable += `<table style="width:100%; border-collapse:collapse; font-size:9.5pt; text-align: left;">`;
        if(data.fatherName) pTable += `<tr><td style="width:30%; font-weight:bold; padding:3px 0;">Father's Name</td><td>: ${data.fatherName}</td></tr>`;
        if(data.motherName) pTable += `<tr><td style="font-weight:bold; padding:3px 0;">Mother's Name</td><td>: ${data.motherName}</td></tr>`;
        if(data.dob) pTable += `<tr><td style="font-weight:bold; padding:3px 0;">Date of Birth</td><td>: ${data.dob}</td></tr>`;
        if(data.bloodGroup) pTable += `<tr><td style="font-weight:bold; padding:3px 0;">Blood Group</td><td>: ${data.bloodGroup}</td></tr>`;
        pTable += `</table>`;
    }

    let mainLayout = "";
    if(selectedTemplate.layoutStyle === 'two-column') {
        mainLayout = `
            <div style="display: flex; gap: 15px; margin-top: 15px; text-align: left;">
                <div style="width: 35%; background: #f8fafc; padding: 10px; border-radius: 6px; border-right: 1px solid #e2e8f0;">
                    ${photoHtml}
                    ${renderBlock("Contact", `<p style="font-size:9pt; line-height:1.4;">📞 ${data.mobile}<br>✉️ ${data.email}<br>📍 ${data.address}</p>`)}
                    ${renderBlock("Skills", formattedSkills)}
                </div>
                <div style="width: 65%;">
                    ${renderBlock("Objective", data.objective)}
                    ${renderBlock("Experience", data.experience ? data.experience.replace(/\n/g, '<br>') : '')}
                    ${renderBlock("Education", data.education ? data.education.replace(/\n/g, '<br>') : '')}
                    ${renderBlock("Personal Info", pTable)}
                </div>
            </div>
        `;
    } else {
        mainLayout = `
            <div style="margin-top: 15px; text-align: left;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px;">
                    <div style="font-size: 9.5pt; line-height: 1.4;">
                        <p>📞 <b>Phone:</b> ${data.mobile}</p>
                        <p>✉️ <b>Email:</b> ${data.email}</p>
                        <p>📍 <b>Address:</b> ${data.address}</p>
                    </div>
                    ${photoHtml}
                </div>
                ${renderBlock("Objective", data.objective)}
                ${renderBlock("Key Skills", formattedSkills)}
                ${renderBlock("Work Experience", data.experience ? data.experience.replace(/\n/g, '<br>') : '')}
                ${renderBlock("Education Background", data.education ? data.education.replace(/\n/g, '<br>') : '')}
                ${renderBlock("Personal Profile", pTable)}
            </div>
        `;
    }

    cvCanvas.innerHTML = `
        <div style="font-family: 'Arial', sans-serif; color: #1e293b; padding: 10px; text-align: left;">
            <div style="border-left: 6px solid ${pColor}; padding-left: 12px; margin-bottom: 15px;">
                <h1 style="font-size: 22pt; font-weight: bold; color: ${pColor}; margin: 0; text-transform: uppercase; letter-spacing: 0.5px;">${data.fullName || "YOUR NAME"}</h1>
                <p style="font-size: 11pt; color: ${sColor}; font-weight: 600; margin: 4px 0 0 0;">${data.designation || ""}</p>
            </div>
            ${mainLayout}
        </div>
    `;

    letterCanvas.innerHTML = `
        <div style="font-family: 'Arial', sans-serif; color: #1e293b; font-size: 10.5pt; padding: 10px; text-align: left;">
            <div style="border-bottom: 2px solid ${pColor}; padding-bottom: 8px; margin-bottom: 25px;">
                <h1 style="font-size: 22pt; font-weight: bold; color: ${pColor}; margin: 0; text-transform: uppercase;">${data.fullName || "YOUR NAME"}</h1>
                <p style="color: #64748b; margin: 4px 0 0 0; font-size: 9.5pt;">📍 ${data.address} | 📞 ${data.mobile} | ✉️ ${data.email}</p>
            </div>
            
            <p style="margin-bottom: 20px;"><b>Date:</b> ${new Date().toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>
            
            <p style="line-height: 1.4; margin-bottom: 25px;">
                To,<br>
                <b>The Hiring Specialist / HR Manager</b><br>
                Target Corporate Office
            </p>

            <p style="font-weight: bold; color: ${pColor}; margin-bottom: 15px;">Subject: Application for the position of "${data.designation || 'Suitable Post'}".</p>

            <p style="margin-bottom: 12px;">Dear Sir/Madam,</p>
            <p style="text-align: justify; margin-bottom: 12px;">
                I am writing to express my eager interest in joining your team. Given my practical background, matching skill sets, and highly disciplined work approach, I believe I can dynamically fulfill the responsibilities of this position.
            </p>
            <p style="text-align: justify; margin-bottom: 12px;">
                I possess valuable proficiency in core domains including: <b>${data.skills || 'General Professional Competencies'}</b>. I have a proven record of handling workflows with utmost patience, dedication, and strict accuracy.
            </p>
            <p style="text-align: justify; margin-bottom: 25px;">
                My attached resume outlines my complete personal history and academic qualifications. I would appreciate the opportunity to discuss my suitability with you in a personal interview. Thank you for your consideration.
            </p>

            <p style="margin-bottom: 30px;">Sincerely yours,</p>
            <div style="width: 150px; border-top: 1px solid #94a3b8; padding-top: 4px; font-weight: bold; color: ${pColor}; text-align: center;">
                ${data.fullName}
            </div>
        </div>
    `;
}

// ১০০% ওয়ার্কিং সিকিউর পিডিএফ ডাউনলোড মেকানিজম (Fixes rendering crashes)
function downloadDocument(type) {
    if (!selectedTemplate) return;
    
    const element = type === 'cv' ? document.getElementById('cvCanvas') : document.getElementById('letterCanvas');
    const data = getFormData();
    const filename = `${type === 'cv' ? 'CV' : 'Cover_Letter'}_${(data.fullName || 'User').replace(/\s+/g, '_')}.pdf`;

    const opt = {
        margin:       [12, 12, 12, 12],
        filename:     filename,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true, logging: false },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // ডাউনলোড প্রোসেস ট্রিগার
    html2pdf().set(opt).from(element).save();
}
