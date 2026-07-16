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
        title: `থিম ${i}`,
        primaryColor: defaultColor.primary,
        secondaryColor: defaultColor.secondary,
        layoutStyle: i % 2 === 0 ? 'two-column' : 'single-column'
    });
}

// বিল্ট-ইন অল-ইন-ওয়ান স্কিল ট্যাগ ডাটাবেস (সবার জন্য ফিটিং)
const predefinedSkills = [
    "কম্পিউটার চালনা (MS Word & Excel)", "ইন্টারনেট ব্রাউজিং", "টাইপিং স্পিড (বাংলা ও ইংরেজি)",
    "অটো-ড্রাইভিং (হালকা/ভারী লাইসেন্স)", "মোটরসাইকেল ড্রাইভিং", 
    "উন্নত কৃষি চাষাবাদ ও বীজ প্রযুক্তি", "আধুনিক দর্জি বিজ্ঞান ও কাটিং", 
    "কাস্টমার ম্যানেজমেন্ট ও সেলস স্কিল", "কঠোর পরিশ্রম ও ধৈর্য", 
    "সাঁতার কাটা (উন্নত স্তর)", "ইলেকট্রিক্যাল হাউজ ওয়ার্কিং", "মোবাইল সার্ভিসিং",
    "দলগত নেতৃত্ব (Leadership)", "দ্রুত সমস্যা সমাধান (Problem Solving)", "হিসাবরক্ষণ (Accounting)"
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
        title: "🛠️ স্কিল বা কারিগরি দক্ষতা (সার্চ করে ট্যাগ যোগ করুন)",
        fields: [
            { id: 'skills', label: 'নির্বাচিত স্কিলসমূহ (নিচের ট্যাগ ক্লিক করে অ্যাড করুন)', placeholder: '', type: 'skills-tagger' }
        ]
    },
    {
        title: "💼 কাজের অভিজ্ঞতা ও শিক্ষাগত যোগ্যতা",
        fields: [
            { id: 'objective', label: 'ক্যারিয়ার অবজেক্টিভ', placeholder: 'কাজের লক্ষ্য...', type: 'textarea' },
            { id: 'experience', label: 'কাজের অভিজ্ঞতা (কোম্পানি/কাজের নাম, পদবী, সময়কাল)', placeholder: 'উদা: জনতা টেলিকম, কম্পিউটার অপারেটর, ২ বছর', type: 'textarea' },
            { id: 'education', label: 'শিক্ষাগত বিবরণ (ডিগ্রী, প্রতিষ্ঠান, সাল, রেজাল্ট)', placeholder: 'উদা: HSC - ফরিদপুর কলেজ, ২০১৯', type: 'textarea' }
        ]
    },
    {
        title: "📋 অন্যান্য প্রফেশনাল বিবরণ (ঐচ্ছিক)",
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
    if(document.getElementById("templateGrid")) {
        renderTemplateGrid();
        buildSmartForm();
    }
});

// টেমপ্লেট গ্যালারি মেকিং (আগে থেকেই ডিজাইন ভিউ দেখা যাবে)
function renderTemplateGrid() {
    const grid = document.getElementById("templateGrid");
    grid.innerHTML = "";
    
    templates.forEach(t => {
        const card = document.createElement("div");
        card.className = "border-2 border-gray-200 rounded-xl overflow-hidden cursor-pointer bg-white hover:border-blue-600 transition duration-300 p-2 block";
        
        // টেমপ্লেটের হুবহু মিনি-প্রিভিউ জ্যামিতিক নকশা
        const isTwoCol = t.layoutStyle === 'two-column';
        card.innerHTML = `
            <div class="h-40 bg-slate-50 border border-gray-100 rounded p-2 flex flex-col justify-between overflow-hidden relative">
                <!-- হেডার মক -->
                <div class="h-4 rounded-xs w-full mb-1" style="background-color: ${t.primaryColor}"></div>
                <div class="h-2 rounded-xs w-2/3 mb-2" style="background-color: ${t.secondaryColor}"></div>
                
                <!-- বডি মক -->
                <div class="flex flex-1 gap-1.5 w-full">
                    ${isTwoCol ? `<div class="w-1/3 bg-gray-200 rounded-xs h-full"></div>` : ''}
                    <div class="${isTwoCol ? 'w-2/3' : 'w-full'} space-y-1">
                        <div class="h-1.5 bg-gray-300 w-full rounded-xs"></div>
                        <div class="h-1.5 bg-gray-300 w-5/6 rounded-xs"></div>
                        <div class="h-1.5 bg-gray-300 w-4/5 rounded-xs"></div>
                    </div>
                </div>
                <div class="absolute inset-0 bg-black/5 opacity-0 hover:opacity-100 transition flex items-center justify-center text-white text-xs font-bold">সিলেক্ট করুন</div>
            </div>
            <div class="p-2 text-center bg-white">
                <span class="text-xs font-bold text-gray-900">${t.title} (${isTwoCol ? '২-কলাম মডার্ন' : '১-কলাম ক্লাসিক'})</span>
            </div>
        `;
        card.onclick = () => selectTemplate(t.id);
        grid.appendChild(card);
    });
}

// লাইভ কালার অপশন প্যালেট তৈরি
function renderColorPickers() {
    const container = document.getElementById("colorPickerContainer");
    container.innerHTML = "";
    
    colorOptions.forEach(color => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "w-7 h-7 rounded-full border-2 border-white shadow-xs cursor-pointer transform hover:scale-110 transition";
        btn.style.backgroundColor = color.primary;
        btn.title = color.name;
        btn.onclick = () => {
            currentCustomColors = { primary: color.primary, secondary: color.secondary };
            updateLivePreviews();
        };
        container.appendChild(btn);
    });
}

// অল-ইন-ওয়ান ডায়নামিক ফরম রেন্ডারিং
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
            
            // ডিফল্ট ডেমো ভ্যালু
            let defaultVal = "";
            if(f.id === 'fullName') defaultVal = "SRABONI AKTER";
            if(f.id === 'email') defaultVal = "sraboniakter3804@gmail.com";
            if(f.id === 'mobile') defaultVal = "01797-143804";
            if(f.id === 'address') defaultVal = "Vill: Roshiknagar, Faridpur";
            if(f.id === 'objective') defaultVal = "To build up a career working in a challenging environment with excellent career prospect...";

            if (f.type === 'skills-tagger') {
                fDiv.innerHTML = `
                    <label class="block font-medium text-gray-700 mb-1">${f.label}</label>
                    <input type="text" id="inp_skills" value="কম্পিউটার চালনা (MS Word & Excel), ধৈর্য" oninput="updateLivePreviews()" class="w-full p-2 border border-gray-300 rounded bg-white font-bold text-blue-700">
                    <div class="mt-2 font-semibold text-gray-500 mb-1 text-[10px]">💡 সার্চ বা ক্লিক করে স্কিল যোগ করুন:</div>
                    <div class="flex flex-wrap gap-1 max-h-24 overflow-y-auto bg-white p-2 border border-gray-200 rounded" id="tagCloud"></div>
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
    
    // স্কিল ক্লাউড ফিলআপ করা
    populateSkillTags();
}

// স্কিল ট্যাগ অপশন তৈরি
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

function selectTemplate(id) {
    selectedTemplate = templates.find(t => t.id === id);
    currentCustomColors = { primary: selectedTemplate.primaryColor, secondary: selectedTemplate.secondaryColor };
    
    document.getElementById("workspaceSection").classList.remove("hidden");
    renderColorPickers();
    updateLivePreviews();
    document.getElementById("workspaceSection").scrollIntoView({ behavior: 'smooth' });
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

// লজিক ইঞ্জিন: কন্ডিশনাল হাইড ফিল্টারিং ও রেন্ডারিং
function updateLivePreviews() {
    if (!selectedTemplate) return;

    const data = getFormData();
    const cvCanvas = document.getElementById("cvCanvas");
    const letterCanvas = document.getElementById("letterCanvas");

    const pColor = currentCustomColors.primary;
    const sColor = currentCustomColors.secondary;

    let photoHtml = "";
    if (uploadedPhotoBase64) {
        photoHtml = `<img src="${uploadedPhotoBase64}" style="width: 85px; height: 95px; border-radius: 4px; border: 2px solid ${pColor}; object-fit: cover; margin-bottom: 5px;">`;
    }

    const renderBlock = (title, content) => {
        if (!content || content.trim() === "") return "";
        return `
            <div style="margin-bottom: 12px;">
                <h3 style="color: ${pColor}; border-bottom: 1.5px solid ${pColor}; padding-bottom: 2px; font-size: 10.5pt; font-weight: bold; margin-bottom: 4px; text-transform: uppercase;">${title}</h3>
                <div style="font-size: 9pt; color: #334155; line-height: 1.4;">${content}</div>
            </div>
        `;
    };

    // স্কিল ট্যাগ ফরম্যাটিং
    let formattedSkills = "";
    if(data.skills) {
        formattedSkills = data.skills.split(',').map(s => `<span style="display:inline-block; background:#f1f5f9; padding:2px 6px; margin:2px; border-radius:3px; border-left:2.5px solid ${pColor}; font-size:8.5pt;">${s.trim()}</span>`).join('');
    }

    // পার্সোনাল ডাটা টেবিল ফিল্টারিং
    let pTable = "";
    if(data.fatherName || data.motherName || data.dob || data.bloodGroup) {
        pTable += `<table style="width:100%; border-collapse:collapse; font-size:9pt;">`;
        if(data.fatherName) pTable += `<tr><td style="width:30%; font-weight:bold; padding:2px 0;">Father's Name</td><td>: ${data.fatherName}</td></tr>`;
        if(data.motherName) pTable += `<tr><td style="font-weight:bold; padding:2px 0;">Mother's Name</td><td>: ${data.motherName}</td></tr>`;
        if(data.dob) pTable += `<tr><td style="font-weight:bold; padding:2px 0;">Date of Birth</td><td>: ${data.dob}</td></tr>`;
        if(data.bloodGroup) pTable += `<tr><td style="font-weight:bold; padding:2px 0;">Blood Group</td><td>: ${data.bloodGroup}</td></tr>`;
        pTable += `</table>`;
    }

    // লেআউট আর্কিটেকচার রেন্ডারিং
    let mainLayout = "";
    if(selectedTemplate.layoutStyle === 'two-column') {
        mainLayout = `
            <div style="display: flex; gap: 12px; margin-top: 12px;">
                <div style="width: 35%; background: #f8fafc; padding: 8px; border-radius: 6px;">
                    ${photoHtml}
                    ${renderBlock("Contact", `<p style="font-size:8.5pt; line-height:1.3;">📞 ${data.mobile}<br>✉️ ${data.email}<br>📍 ${data.address}</p>`)}
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
            <div style="margin-top: 12px;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
                    <div style="font-size: 9pt; line-height: 1.3;">
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

    // সিভি ভিউ ইন্টারফেস
    cvCanvas.innerHTML = `
        <div style="font-family: 'Arial', sans-serif; color: #1e293b;">
            <div style="border-left: 5px solid ${pColor}; padding-left: 10px; margin-bottom: 12px;">
                <h1 style="font-size: 20pt; font-weight: bold; color: ${pColor}; margin: 0; text-transform: uppercase;">${data.fullName || "YOUR NAME"}</h1>
                <p style="font-size: 10.5pt; color: ${sColor}; font-weight: 600; margin: 2px 0 0 0;">${data.designation || ""}</p>
            </div>
            ${mainLayout}
        </div>
    `;

    // কভার লেটার ভিউ ইন্টারফেস
    letterCanvas.innerHTML = `
        <div style="font-family: 'Arial', sans-serif; color: #1e293b; font-size: 9.5pt;">
            <div style="border-bottom: 2px solid ${pColor}; padding-bottom: 6px; margin-bottom: 20px;">
                <h1 style="font-size: 20pt; font-weight: bold; color: ${pColor}; margin: 0; text-transform: uppercase;">${data.fullName || "YOUR NAME"}</h1>
                <p style="color: #64748b; margin: 2px 0 0 0;">📍 ${data.address} | 📞 ${data.mobile} | ✉️ ${data.email}</p>
            </div>
            
            <p style="margin-bottom: 15px;"><b>Date:</b> ${new Date().toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>
            
            <p style="line-height: 1.3; margin-bottom: 20px;">
                To,<br>
                <b>The Hiring Specialist / HR Team</b><br>
                Respected Organization Office
            </p>

            <p style="font-weight: bold; color: ${pColor}; margin-bottom: 12px;">Subject: Application for the position of "${data.designation || 'Suitable Post'}".</p>

            <p style="margin-bottom: 10px;">Dear Sir/Madam,</p>
            <p style="text-align: justify; margin-bottom: 10px; text-indent: 20px;">
                I am writing to express my eager interest in working with your esteemed team. Given my practical background, specialized skills, and solid work ethic, I believe I can dynamically fulfill the responsibilities of this position.
            </p>
            <p style="text-align: justify; margin-bottom: 10px; text-indent: 20px;">
                I possess valuable proficiency in core domains including: <b>${data.skills || 'General Professional Competencies'}</b>. I have a proven record of handling workloads with utmost patience, dedication, and strict accuracy.
            </p>
            <p style="text-align: justify; margin-bottom: 20px; text-indent: 20px;">
                My attached resume outlines my complete personal history and qualifications. I would appreciate the opportunity to discuss my suitability with you in an interview. Thank you for your consideration.
            </p>

            <p style="margin-bottom: 25px;">Sincerely yours,</p>
            <div style="width: 140px; border-top: 1px solid #94a3b8; padding-top: 3px; font-weight: bold; color: ${pColor};">
                ${data.fullName}
            </div>
        </div>
    `;
}

// ১০০% ওয়ার্কিং ডাইনামিক পিডিএফ মেকার
function downloadDocument(type) {
    if (!selectedTemplate) return;
    
    const element = type === 'cv' ? document.getElementById('cvCanvas') : document.getElementById('letterCanvas');
    const data = getFormData();
    const filename = `${type === 'cv' ? 'CV' : 'Cover_Letter'}_${(data.fullName || 'User').replace(/\s+/g, '_')}.pdf`;

    const opt = {
        margin:       [10, 10, 10, 10],
        filename:     filename,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true, logging: false },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
}
