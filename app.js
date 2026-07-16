// ১. ৫০টি প্রফেশনাল ডিজাইন কালার ও থিম মেটাডেটা
const templates = [];
const colorPalettes = [
    { primary: '#1e3a8a', secondary: '#3b82f6', name: 'কর্পোরেট ব্লু' },
    { primary: '#0f766e', secondary: '#14b8a6', name: 'এলিজেন্ট টিল' },
    { primary: '#1e293b', secondary: '#64748b', name: 'মডার্ন ডার্ক' },
    { primary: '#b91c1c', secondary: '#ef4444', name: 'রয়্যাল রেড' },
    { primary: '#6d28d9', secondary: '#a855f7', name: 'লাক্সারি পার্পল' },
    { primary: '#15803d', secondary: '#22c55e', name: 'ক্লাসিক গ্রিন' }
];

// ৫০টি ভিন্ন বৈচিত্র্যময় লেআউট জেনারেট করা
for (let i = 1; i <= 50; i++) {
    const palette = colorPalettes[(i - 1) % colorPalettes.length];
    templates.push({
        id: i,
        title: `থিম নম্বর: ${i} (${palette.name} - স্টাইল ${Math.ceil(i/6)})`,
        primaryColor: palette.primary,
        secondaryColor: palette.secondary,
        layoutStyle: i % 2 === 0 ? 'two-column' : 'classic-single'
    });
}

// ২. মুচি থেকে প্রধানমন্ত্রী সবার জন্য সয়ংসম্পূর্ণ ডাটা স্ট্রাকচার (Master Fields)
const masterFormSections = [
    {
        title: "👤 মৌলিক ও ব্যক্তিগত তথ্য (Personal Details)",
        fields: [
            { id: 'fullName', label: 'পূর্ণ নাম (Full Name)', placeholder: 'উদা: শ্রাবণী আক্তার' },
            { id: 'designation', label: 'পদবী/পেশা (Designation/Profession)', placeholder: 'উদা: ব্যাংকার / ফ্রিল্যান্সার / ব্যবসায়ী' },
            { id: 'email', label: 'ইমেইল (Email)', placeholder: 'sraboni@example.com' },
            { id: 'mobile', label: 'মোবাইল নম্বর (Mobile)', placeholder: '01700-000000' },
            { id: 'address', label: 'বর্তমান ঠিকানা (Mailing Address)', placeholder: 'গ্রাম, পোস্ট, থানা, জেলা' },
            { id: 'nid', label: 'জাতীয় পরিচয়পত্র / পাসপোর্ট নম্বর', placeholder: 'NID or Passport' }
        ]
    },
    {
        title: "🎯 ক্যারিয়ার বা প্রফেশনাল উদ্দেশ্য",
        fields: [
            { id: 'objective', label: 'ক্যারিয়ার অবজেক্টিভ (Career Objective)', placeholder: 'আপনার কাজের লক্ষ্য ও উদ্দেশ্য লিখুন...', type: 'textarea' }
        ]
    },
    {
        title: "💼 কাজের অভিজ্ঞতা ও পলিটিক্যাল/সামাজিক প্রোফাইল (যদি থাকে)",
        fields: [
            { id: 'exp_1', label: 'অভিজ্ঞতা ১ (কোম্পানি নাম, পদবী, বছর)', placeholder: 'উদা: সোনালী ব্যাংক, ক্যাশিয়ার, ২০২১-২০২৪' },
            { id: 'exp_2', label: 'অভিজ্ঞতা ২', placeholder: 'উদা: রূপালী এজেন্সী, ম্যানেজার, ২০১৮-২০২১' },
            { id: 'exp_3', label: 'অন্যান্য বিশেষ কাজের রেকর্ড', placeholder: 'মুচি/শ্রমিকদের জন্য পূর্বের কাজের বিবরণ বা ভিআইপিদের জন্য রাজনৈতিক অভিজ্ঞতা' }
        ]
    },
    {
        title: "🎓 শিক্ষাগত যোগ্যতা (Academic Credentials)",
        fields: [
            { id: 'edu_1', label: 'সর্বোচ্চ ডিগ্রী (Degree, Institute, Year, Result)', placeholder: 'উদা: BBA, Govt. Rajendra College, 2023, Appeared' },
            { id: 'edu_2', label: 'দ্বাদশ শ্রেণী / HSC', placeholder: 'উদা: HSC, Saroda Sundari Mohila College, 2019, GPA-2.92' },
            { id: 'edu_3', label: 'দশম শ্রেণী / SSC', placeholder: 'উদা: SSC, Kanipur High School, 2017, GPA-4.73' }
        ]
    },
    {
        title: "🛠️ টেকনিক্যাল স্কিল ও ভাষাগত পারদর্শিতা",
        fields: [
            { id: 'skills', label: 'কম্পিউটার/কারিগরি দক্ষতা (Skills)', placeholder: 'উদা: Ms Word, Excel, Internet Browsing' },
            { id: 'languages', label: 'ভাষাগত দক্ষতা (Language Skills)', placeholder: 'উদা: বাংলা (চমৎকার), ইংরেজি (কমিউনিকেশন ভালো)' }
        ]
    },
    {
        title: "📋 অন্যান্য ব্যক্তিগত বিবরণ (মুচি থেকে প্রধানমন্ত্রী সবার ফিটিং এর জন্য)",
        fields: [
            { id: 'fatherName', label: 'পিতার নাম (Father\'s Name)', placeholder: 'Late. Sobahan Matubbor' },
            { id: 'motherName', label: 'মাতার নাম (Mother\'s Name)', placeholder: 'Saheda Begum' },
            { id: 'dob', label: 'জন্ম তারিখ (Date of Birth)', placeholder: '10-11-1999' },
            { id: 'bloodGroup', label: 'রক্তের গ্রুপ (Blood Group)', placeholder: 'AB+' },
            { id: 'heightWeight', label: 'উচ্চতা ও ওজন (ঐচ্ছিক)', placeholder: "5' 3\" - 58 kg" },
            { id: 'hobbies', label: 'শখ ও আগ্রহ (Interests & Hobbies)', placeholder: 'Reading Novels, Drawing, Writing' }
        ]
    }
];

let selectedTemplate = null;
let uploadedPhotoBase64 = null;
let activeTab = 'cv';

// পেজ ইনিশিয়ালাইজেশন
document.addEventListener("DOMContentLoaded", () => {
    renderTemplateGrid();
    buildSmartForm();
});

// ৫০টি ডিজাইনের গ্যালারি গ্রিড তৈরি করা
function renderTemplateGrid() {
    const grid = document.getElementById("templateGrid");
    grid.innerHTML = "";
    templates.forEach(t => {
        const card = document.createElement("div");
        card.className = "border border-gray-200 rounded-xl overflow-hidden cursor-pointer bg-white shadow-xs hover:shadow-md hover:border-blue-500 transition block";
        card.innerHTML = `
            <div class="h-28 p-3 flex flex-col justify-between" style="background: linear-gradient(135deg, ${t.primaryColor} 0%, ${t.secondaryColor} 100%)">
                <span class="text-white text-xs font-bold px-2 py-0.5 bg-black/30 rounded w-fit">THEME ${t.id}</span>
                <div class="flex space-x-1.5">
                    <div class="w-3 h-3 bg-white/80 rounded-full"></div>
                    <div class="w-8 h-2 bg-white/40 rounded-sm"></div>
                </div>
            </div>
            <div class="p-3 bg-white text-center">
                <h4 class="text-xs font-bold text-gray-800">${t.title}</h4>
                <p class="text-[10px] text-gray-400 mt-1">${t.layoutStyle === 'two-column' ? '🔄 মডার্ন ২-কলাম' : '📃 ক্লাসিক ১-কলাম'}</p>
            </div>
        `;
        card.onclick = () => selectTemplate(t.id);
        grid.appendChild(card);
    });
}

// সম্পূর্ণ মাস্টার ফর্ম স্ক্রিনে বিল্ড করা
function buildSmartForm() {
    const container = document.getElementById("formFieldsContainer");
    container.innerHTML = "";

    masterFormSections.forEach(sec => {
        const secDiv = document.createElement("div");
        secDiv.className = "bg-gray-50 p-4 rounded-xl border border-gray-200 space-y-3";
        secDiv.innerHTML = `<h3 class="text-sm font-bold text-gray-900 border-b border-gray-200 pb-1">${sec.title}</h3>`;
        
        sec.fields.forEach(f => {
            const fDiv = document.createElement("div");
            fDiv.className = "block";
            
            // ডিফল্ট ডেমো ডাটা ইনজেক্ট করা (ব্যবহারকারীর প্রোভাইড করা ডাটা)
            let defaultVal = "";
            if(f.id === 'fullName') defaultVal = "SRABONI AKTER";
            if(f.id === 'email') defaultVal = "sraboniakter3804@gmail.com";
            if(f.id === 'mobile') defaultVal = "01797-143804";
            if(f.id === 'address') defaultVal = "Vill: Roshiknagar, P.O: Kanaipur-7801, P.S: Kotwali, Dist: Faridpur";
            if(f.id === 'objective') defaultVal = "To build up career working in a challenging environment with excellent career development prospect, where hard work, strict discipline, good communications skill & creative problem solving are the corner stone of success.";
            if(f.id === 'edu_1') defaultVal = "BBA - Finance & Banking | Govt. Rajendra College, Faridpur (Passing Year: 2023, Result: Appeared)";

            if(f.type === 'textarea') {
                fDiv.innerHTML = `
                    <label class="block text-xs font-medium text-gray-600 mb-1">${f.label}</label>
                    <textarea id="inp_${f.id}" oninput="updateLivePreviews()" rows="3" class="w-full text-xs p-2 border border-gray-300 rounded bg-white">${defaultVal}</textarea>
                `;
            } else {
                fDiv.innerHTML = `
                    <label class="block text-xs font-medium text-gray-600 mb-1">${f.label}</label>
                    <input type="text" id="inp_${f.id}" value="${defaultVal}" oninput="updateLivePreviews()" class="w-full text-xs p-2 border border-gray-300 rounded bg-white" placeholder="${f.placeholder}">
                `;
            }
            secDiv.appendChild(fDiv);
        });
        container.appendChild(secDiv);
    });
}

// ইমেজ ফাইল আপলোড হ্যান্ডেল ও বেস-৬৪ এ রূপান্তর
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

// কোনো টেমপ্লেট পছন্দ করে ক্লিক করলে
function selectTemplate(id) {
    selectedTemplate = templates.find(t => t.id === id);
    document.getElementById("workspaceSection").classList.remove("hidden");
    document.getElementById("workspaceSection").scrollIntoView({ behavior: 'smooth' });
    updateLivePreviews();
}

// ট্যাব সুইচিং (সিভি বনাম কভার লেটার)
function switchTab(tab) {
    activeTab = tab;
    const cvCanvas = document.getElementById("cvCanvas");
    const letterCanvas = document.getElementById("letterCanvas");
    const cvBtn = document.getElementById("tabCvBtn");
    const letterBtn = document.getElementById("tabLetterBtn");

    if(tab === 'cv') {
        cvCanvas.classList.remove("hidden");
        letterCanvas.classList.add("hidden");
        cvBtn.className = "px-4 py-2 bg-white text-blue-600 font-bold rounded-t-lg border-t-2 border-blue-600 shadow-xs cursor-pointer";
        letterBtn.className = "px-4 py-2 bg-gray-300 text-gray-700 font-medium rounded-t-lg shadow-xs cursor-pointer";
    } else {
        cvCanvas.classList.add("hidden");
        letterCanvas.classList.remove("hidden");
        letterBtn.className = "px-4 py-2 bg-white text-blue-600 font-bold rounded-t-lg border-t-2 border-blue-600 shadow-xs cursor-pointer";
        cvBtn.className = "px-4 py-2 bg-gray-300 text-gray-700 font-medium rounded-t-lg shadow-xs cursor-pointer";
    }
}

// ইনপুট ভ্যালু গেটার অবজেক্ট
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

// লজিক ইঞ্জিন: লাইভ রেন্ডারিং (সিভি এবং ম্যাচিং কভার লেটার)
function updateLivePreviews() {
    if (!selectedTemplate) return;

    const data = getFormData();
    const cvCanvas = document.getElementById("cvCanvas");
    const letterCanvas = document.getElementById("letterCanvas");

    const pColor = selectedTemplate.primaryColor;
    const sColor = selectedTemplate.secondaryColor;

    // ১. ছবি ব্লক ম্যানেজমেন্ট (যদি আপলোড করা থাকে তবেই দেখাবে)
    let photoHtml = "";
    if (uploadedPhotoBase64) {
        photoHtml = `<img src="${uploadedPhotoBase64}" style="width: 100px; height: 110px; border-radius: 4px; border: 2px solid ${pColor}; object-fit: cover; margin-bottom: 10px;">`;
    }

    // ২. ডাইনামিক সেকশন ফিল্টারিং (যদি তথ্য থাকে তবেই ব্লকের এইচটিএমএল রিটার্ন করবে)
    const createSection = (title, content) => {
        if (!content || content.replace(/<[^>]*>/g, '').trim() === "") return ""; 
        return `
            <div style="margin-bottom: 15px;">
                <h3 style="color: ${pColor}; border-bottom: 1.5px solid ${pColor}; padding-bottom: 3px; font-size: 11pt; font-weight: bold; text-transform: uppercase; margin-bottom: 6px;">${title}</h3>
                <div style="font-size: 9.5pt; text-align: justify;">${content}</div>
            </div>
        `;
    };

    // ৩. এক্সপেরিয়েন্স ও এডুকেশন এর ইনপুট ফিল্টারিং
    let expContent = "";
    ['exp_1', 'exp_2', 'exp_3'].forEach(id => { if(data[id]) expContent += `<p style="margin: 3px 0;">• ${data[id]}</p>`; });

    let eduContent = "";
    ['edu_1', 'edu_2', 'edu_3'].forEach(id => { if(data[id]) eduContent += `<p style="margin: 3px 0;">• ${data[id]}</p>`; });

    // ৪. পার্সোনাল ইনফরমেশন টেবিল ফিল্টারিং (যা ব্ল্যাঙ্ক তা বাদ যাবে)
    let pTableRows = "";
    const pFields = [
        {k: "Father's Name", v: data.fatherName}, {k: "Mother's Name", v: data.motherName},
        {k: "Date of Birth", v: data.dob}, {k: "Blood Group", v: data.bloodGroup},
        {k: "NID / Passport", v: data.nid}, {k: "Physical Status", v: data.heightWeight}
    ];
    pFields.forEach(f => {
        if(f.v) pTableRows += `<tr style="border:none;"><td style="width:35%; font-weight:bold; padding:2px 0; border:none; font-size:9pt;">${f.k}</td><td style="padding:2px 0; border:none; font-size:9pt;">: ${f.v}</td></tr>`;
    });

    // ৫. সিভি লেআউট রেন্ডারিং (১-কলাম বা ২-কলাম স্টাইল)
    let cvBody = "";
    if (selectedTemplate.layoutStyle === 'two-column') {
        cvBody = `
            <div style="display: flex; gap: 15px; margin-top: 15px;">
                <div style="width: 35%; background-color: #f8fafc; padding: 10px; border-right: 1px solid #e2e8f0;">
                    ${photoHtml}
                    ${createSection("Contact", `<p style="font-size:8.5pt;">📞 ${data.mobile}<br>✉️ ${data.email}<br>📍 ${data.address}</p>`)}
                    ${createSection("Skills", data.skills ? `<p style="font-size:8.5pt;">${data.skills}</p>` : "")}
                    ${createSection("Languages", data.languages ? `<p style="font-size:8.5pt;">${data.languages}</p>` : "")}
                </div>
                <div style="width: 65%;">
                    ${createSection("Career Objective", data.objective)}
                    ${createSection("Professional Experience", expContent)}
                    ${createSection("Education", eduContent)}
                    ${createSection("Personal Data", pTableRows ? `<table style="width:100%; border:none;">${pTableRows}</table>` : "")}
                    ${createSection("Hobbies", data.hobbies)}
                </div>
            </div>
        `;
    } else {
        cvBody = `
            <div style="margin-top: 15px;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px;">
                    <div>
                        <p style="margin: 2px 0; font-size: 9.5pt;">📞 <b>Phone:</b> ${data.mobile}</p>
                        <p style="margin: 2px 0; font-size: 9.5pt;">✉️ <b>Email:</b> ${data.email}</p>
                        <p style="margin: 2px 0; font-size: 9.5pt;">📍 <b>Address:</b> ${data.address}</p>
                    </div>
                    ${photoHtml}
                </div>
                ${createSection("Career Objective", data.objective)}
                ${createSection("Employment History", expContent)}
                ${createSection("Education Background", eduContent)}
                ${createSection("Key Skills & Core Competencies", data.skills)}
                ${createSection("Language Proficiency", data.languages)}
                ${createSection("Personal Information", pTableRows ? `<table style="width:100%; border:none;">${pTableRows}</table>` : "")}
                ${createSection("Interests & Hobbies", data.hobbies)}
            </div>
        `;
    }

    // মাস্টার সিভি ক্যানভাস রাইটিং
    cvCanvas.innerHTML = `
        <div style="font-family: 'Arial', sans-serif; color: #1e293b; padding: 5px;">
            <div style="border-left: 5px solid ${pColor}; padding-left: 12px; margin-bottom: 15px;">
                <h1 style="font-size: 22pt; font-weight: bold; color: ${pColor}; margin: 0; text-transform: uppercase; line-height:1;">${data.fullName || "YOUR NAME"}</h1>
                <p style="font-size: 11pt; color: ${sColor}; font-weight: 600; margin: 4px 0 0 0;">${data.designation || ""}</p>
            </div>
            ${cvBody}
            <div style="margin-top: 30px;">
                <p style="font-size: 8pt; font-style: italic; color: #64748b;">I hereby declare that all the information provided above is authentic and true.</p>
                <div style="margin-top: 20px; float: right; text-align: center; width: 150px; border-top: 1px solid #94a3b8; padding-top: 4px;">
                    <span style="font-size: 9pt; font-weight: bold;">${data.fullName}</span>
                </div>
                <div style="clear: both;"></div>
            </div>
        </div>
    `;

    // ৬. ম্যাচিং কভার লেটার জেনারেটর (একই কালার স্কিম ও থিমে ডিজাইন মিল রেখে)
    letterCanvas.innerHTML = `
        <div style="font-family: 'Arial', sans-serif; color: #1e293b; padding: 5px;">
            <div style="border-bottom: 2px solid ${pColor}; padding-bottom: 10px; margin-bottom: 25px;">
                <h1 style="font-size: 22pt; font-weight: bold; color: ${pColor}; margin: 0; text-transform: uppercase;">${data.fullName || "YOUR NAME"}</h1>
                <p style="font-size: 10pt; color: #64748b; margin: 4px 0 0 0;">📍 ${data.address} | 📞 ${data.mobile}</p>
            </div>
            
            <p style="font-size: 10pt; margin-bottom: 20px;"><b>Date:</b> ${new Date().toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>
            
            <p style="font-size: 10pt; line-height: 1.2; margin-bottom: 25px;">
                To,<br>
                <b>The HR Manager / Hiring Authority</b><br>
                Target Corporation / Destination Office
            </p>

            <p style="font-size: 10pt; font-weight: bold; color: ${pColor}; margin-bottom: 15px;">Subject: Application for the post of ${data.designation || 'Suitable Position'}.</p>

            <p style="font-size: 10pt; text-align: justify; margin-bottom: 12px;">Dear Hiring Manager,</p>
            <p style="font-size: 10pt; text-align: justify; margin-bottom: 12px; text-indent: 30px;">
                I am writing to express my strong interest in the ${data.designation || 'Job'} position. With my background and acquired skills, I am confident that I can be a valuable asset to your team.
            </p>
            <p style="font-size: 10pt; text-align: justify; margin-bottom: 12px; text-indent: 30px;">
                My qualifications align well with the requirements necessary for success in this role. I possess strong capabilities in ${data.skills || 'core corporate skills'} alongside excellent communication skills in ${data.languages || 'required fields'}. I am highly motivated to contribute to your organization's progressive goals.
            </p>
            <p style="font-size: 10pt; text-align: justify; margin-bottom: 25px; text-indent: 30px;">
                Thank you for considering my application. My enclosed resume provides additional details regarding my academic and background profile. I welcome the opportunity for a personal interview.
            </p>

            <p style="font-size: 10pt; margin-bottom: 30px;">Sincerely yours,</p>
            <div style="width: 150px; border-top: 1px solid #94a3b8; padding-top: 4px; text-align: center;">
                <span style="font-size: 10pt; font-weight: bold; color: ${pColor};">${data.fullName}</span>
            </div>
        </div>
    `;
}

// পিডিএফ ডাউনলোড ইঞ্জিন
function downloadDocument(type) {
    if (!selectedTemplate) {
        alert("অনুগ্রহ করে প্রথমে যেকোনো একটি ডিজাইন সিলেক্ট করুন।");
        return;
    }
    const element = type === 'cv' ? document.getElementById('cvCanvas') : document.getElementById('letterCanvas');
    const data = getFormData();
    
    const opt = {
        margin:       [12, 12, 12, 12],
        filename:     `${type === 'cv' ? 'CV' : 'Cover_Letter'}_${data.fullName.replace(/\s+/g, '_')}.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
}
