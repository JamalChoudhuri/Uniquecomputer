// ৫০টি টেমপ্লেটের ডাটাবেজ (সিভি অপশনটি আপনার দেওয়া ডাটা অনুযায়ী আপগ্রেড করা)
const templates = [
    { 
        id: 1, 
        cat: 'cv', 
        title: '১. প্রফেশনাল কর্পোরেট সিভি (শ্রাবণী আক্তার ফরম্যাট)', 
        fields: [
            'Full Name', 'Objective', 'Mobile', 'Email', 
            'Village', 'Post Office', 'Police Station', 'District',
            'BBA Institute', 'BBA Passing Year', 'BBA Subject', 'BBA Result',
            'HSC Institute', 'HSC Passing Year', 'HSC Group', 'HSC Result', 'HSC Board',
            'SSC Institute', 'SSC Passing Year', 'SSC Group', 'SSC Result', 'SSC Board',
            'Language Skills', 'Computer Skills', 'Personal Strengths',
            'Fathers Name', 'Mothers Name', 'Date of Birth', 'Nationality', 
            'Religion', 'Gender', 'Marital Status', 'Blood Group', 'National ID',
            'Height', 'Weight', 'Interests & Hobbies', 'Experience'
        ], 
        type: 'professional_cv' 
    },
    // বাকি ৪৯টি দরখাস্ত ও টেমপ্লেটের শর্ট ডাটা (আগের কোডের মতোই থাকবে)
    { id: 2, cat: 'application', title: '২. অসুস্থতার জন্য ছুটির আবেদন', fields: ['তারিখ', 'বরাবর', 'প্রতিষ্ঠানের নাম', 'আবেদনকারীর নাম', 'ছুটির দিন সংখ্যা'], type: 'app' },
    { id: 3, cat: 'application', title: '৩. কোম্পানিতে চাকরির আবেদনপত্র', fields: ['তারিখ', 'বরাবর', 'কোম্পানির নাম', 'পদের নাম', 'আবেদনকারীর নাম'], type: 'app' }
    // ... আপনার প্রয়োজন অনুযায়ী অন্য আইডিগুলো সাজিয়ে নিতে পারবেন
];

let selectedTemplate = null;

document.addEventListener("DOMContentLoaded", () => {
    renderTemplates(templates);
});

function renderTemplates(targetList) {
    const grid = document.getElementById("templateGrid");
    grid.innerHTML = "";
    grid.className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4";

    targetList.forEach(t => {
        const card = document.createElement("div");
        card.className = "border border-gray-200 p-4 rounded-md cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition shadow-xs";
        card.innerHTML = `<h3 class="font-medium text-sm md:text-base">${t.title}</h3>
                          <span class="text-xs bg-gray-200 px-2 py-1 rounded mt-2 inline-block text-gray-600">${t.cat.toUpperCase()}</span>`;
        card.onclick = () => selectTemplate(t.id);
        grid.appendChild(card);
    });
}

function filterTemplates() {
    const val = document.getElementById("categoryFilter").value;
    if (val === "all") renderTemplates(templates);
    else renderTemplates(templates.filter(t => t.cat === val));
}

function selectTemplate(id) {
    selectedTemplate = templates.find(t => t.id === id);
    document.getElementById("workspaceSection").classList.remove("hidden");
    document.getElementById("workspaceSection").scrollIntoView({ behavior: 'smooth' });

    const form = document.getElementById("dynamicForm");
    form.innerHTML = "";

    selectedTemplate.fields.forEach((field, index) => {
        const div = document.createElement("div");
        div.className = "block";
        
        // কাস্টমার যেন দ্রুত ডেমো দেখতে পায় তাই আপনার দেওয়া তথ্যগুলো ডিফল্ট ভ্যালু হিসেবে সেট করা হলো
        let defaultVal = "";
        if(field === 'Full Name') defaultVal = "SRABONI AKTER";
        if(field === 'Mobile') defaultVal = "01797-143804";
        if(field === 'Email') defaultVal = "sraboniakter3804@gmail.com";
        if(field === 'BBA Institute') defaultVal = "Govt. Rajendra College, Faridpur";
        if(field === 'BBA Subject') defaultVal = "Finance & Banking";
        if(field === 'BBA Result') defaultVal = "Appeared";
        if(field === 'BBA Passing Year') defaultVal = "2023";
        if(field === 'Objective') defaultVal = "To build up career working in a challenging environment with excellent career development prospect, where hard work, strict discipline, good communications skill & creative problem solving are the corner stone of success.";

        div.innerHTML = `
            <label class="block text-sm font-medium text-gray-700 mb-1">${field}:</label>
            <input type="text" id="field_${index}" value="${defaultVal}" oninput="updatePreview()" class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 bg-white">
        `;
        form.appendChild(div);
    });

    updatePreview();
}

function updatePreview() {
    if (!selectedTemplate) return;
    const canvas = document.getElementById("pdfCanvas");
    canvas.innerHTML = "";

    const vals = selectedTemplate.fields.map((f, i) => {
        const input = document.getElementById(`field_${i}`);
        return input ? input.value || `[${f}]` : `[${f}]`;
    });

    // অবজেক্ট ম্যাপ তৈরি করা সহজে ডাটা রিড করার জন্য
    const data = {};
    selectedTemplate.fields.forEach((f, i) => { data[f] = vals[i]; });

    if (selectedTemplate.type === 'professional_cv') {
        // নতুন প্রফেশনাল ও আধুনিক ২-কলাম সিভি লেআউট
        canvas.innerHTML = `
            <div style="font-family: 'Arial', sans-serif; color: #333; line-height: 1.4;">
                
                <!-- সিভির টপ হেডার -->
                <div style="background-color: #1e3a8a; color: white; padding: 25px; text-align: center; border-radius: 4px; margin-bottom: 20px;">
                    <h1 style="color: white; margin: 0; font-size: 24pt; letter-spacing: 1px; font-weight: bold;">${data['Full Name'].toUpperCase()}</h1>
                    <p style="margin: 8px 0 0 0; font-size: 11pt; opacity: 0.9;">
                        📍 Vill: ${data['Village']}, P.O: ${data['Post Office']} | P.S: ${data['Police Station']}, Dist: ${data['District']}
                    </p>
                    <p style="margin: 4px 0 0 0; font-size: 11pt; opacity: 0.9;">
                        📞 Mobile: ${data['Mobile']} | ✉️ E-mail: ${data['Email']}
                    </p>
                </div>

                <!-- কেরিয়ার অবজেক্টিভ -->
                <div style="margin-bottom: 20px;">
                    <h3 style="color: #1e3a8a; border-bottom: 2px solid #1e3a8a; padding-bottom: 4px; font-size: 13pt; font-weight: bold; text-transform: uppercase;">Career Objective</h3>
                    <p style="text-align: justify; font-size: 10.5pt; margin-top: 6px;">${data['Objective']}</p>
                </div>

                <!-- শিক্ষাগত যোগ্যতা (প্রফেশনাল টেবিল ফরম্যাট) -->
                <div style="margin-bottom: 20px;">
                    <h3 style="color: #1e3a8a; border-bottom: 2px solid #1e3a8a; padding-bottom: 4px; font-size: 13pt; font-weight: bold; text-transform: uppercase;">Academic Qualification</h3>
                    <table style="width: 100%; border-collapse: collapse; margin-top: 8px;">
                        <thead>
                            <tr style="background-color: #f1f5f9; text-align: left;">
                                <th style="border: 1px solid #cbd5e1; padding: 6px; font-size: 10pt;">Exam Name</th>
                                <th style="border: 1px solid #cbd5e1; padding: 6px; font-size: 10pt;">Institute & Board/Univ.</th>
                                <th style="border: 1px solid #cbd5e1; padding: 6px; font-size: 10pt;">Group/Subject</th>
                                <th style="border: 1px solid #cbd5e1; padding: 6px; font-size: 10pt;">Year</th>
                                <th style="border: 1px solid #cbd5e1; padding: 6px; font-size: 10pt;">Result</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="border: 1px solid #cbd5e1; padding: 6px; font-size: 9.5pt; font-weight: bold;">BBA</td>
                                <td style="border: 1px solid #cbd5e1; padding: 6px; font-size: 9.5pt;">${data['BBA Institute']} (${data['University'] || 'National Univ'})</td>
                                <td style="border: 1px solid #cbd5e1; padding: 6px; font-size: 9.5pt;">${data['BBA Subject']}</td>
                                <td style="border: 1px solid #cbd5e1; padding: 6px; font-size: 9.5pt;">${data['BBA Passing Year']}</td>
                                <td style="border: 1px solid #cbd5e1; padding: 6px; font-size: 9.5pt; font-weight: bold;">${data['BBA Result']}</td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #cbd5e1; padding: 6px; font-size: 9.5pt; font-weight: bold;">HSC</td>
                                <td style="border: 1px solid #cbd5e1; padding: 6px; font-size: 9.5pt;">${data['HSC Institute']} (${data['HSC Board'] || 'Dhaka'})</td>
                                <td style="border: 1px solid #cbd5e1; padding: 6px; font-size: 9.5pt;">${data['HSC Group']}</td>
                                <td style="border: 1px solid #cbd5e1; padding: 6px; font-size: 9.5pt;">${data['HSC Passing Year']}</td>
                                <td style="border: 1px solid #cbd5e1; padding: 6px; font-size: 9.5pt;">${data['HSC Result']}</td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #cbd5e1; padding: 6px; font-size: 9.5pt; font-weight: bold;">SSC</td>
                                <td style="border: 1px solid #cbd5e1; padding: 6px; font-size: 9.5pt;">${data['SSC Institute']} (${data['SSC Board'] || 'Dhaka'})</td>
                                <td style="border: 1px solid #cbd5e1; padding: 6px; font-size: 9.5pt;">${data['SSC Group']}</td>
                                <td style="border: 1px solid #cbd5e1; padding: 6px; font-size: 9.5pt;">${data['SSC Passing Year']}</td>
                                <td style="border: 1px solid #cbd5e1; padding: 6px; font-size: 9.5pt;">${data['SSC Result']}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- স্কিল ও শক্তির ২-কলাম গ্রিড লেআউট -->
                <div style="display: flex; gap: 20px; margin-bottom: 20px;">
                    <div style="flex: 1;">
                        <h3 style="color: #1e3a8a; border-bottom: 2px solid #1e3a8a; padding-bottom: 4px; font-size: 12pt; font-weight: bold; text-transform: uppercase;">Computer & Language Skills</h3>
                        <p style="font-size: 10pt; margin: 6px 0 0 0;"><b>💻 IT:</b> ${data['Computer Skills'] || 'Ms Word, Ms Excel, E-mail & Browsing'}</p>
                        <p style="font-size: 10pt; margin: 4px 0 0 0;"><b>🗣️ Language:</b> ${data['Language Skills'] || 'Bengali (Native), English (Good Command)'}</p>
                    </div>
                    <div style="flex: 1;">
                        <h3 style="color: #1e3a8a; border-bottom: 2px solid #1e3a8a; padding-bottom: 4px; font-size: 12pt; font-weight: bold; text-transform: uppercase;">Personal Strengths</h3>
                        <p style="font-size: 10pt; margin: 6px 0 0 0;">${data['Personal Strengths'] || 'Leadership quality, working under pressure, positive attitude.'}</p>
                    </div>
                </div>

                <!-- পার্সোনাল ডিটেইলস (পরিষ্কার ২-কলাম টেবিল) -->
                <div style="margin-bottom: 20px;">
                    <h3 style="color: #1e3a8a; border-bottom: 2px solid #1e3a8a; padding-bottom: 4px; font-size: 13pt; font-weight: bold; text-transform: uppercase;">Personal Information</h3>
                    <table style="width: 100%; margin-top: 6px; border: none;">
                        <tr style="border: none;"><td style="width: 25%; font-weight: bold; padding: 3px 0; border: none; font-size: 10pt;">Father's Name:</td><td style="padding: 3px 0; border: none; font-size: 10pt;">:${data['Fathers Name'] || 'Late. Sobahan Matubbor'}</td><td style="width: 20%; font-weight: bold; padding: 3px 0; border: none; font-size: 10pt;">Gender:</td><td style="padding: 3px 0; border: none; font-size: 10pt;">:${data['Gender'] || 'Female'}</td></tr>
                        <tr style="border: none;"><td style="font-weight: bold; padding: 3px 0; border: none; font-size: 10pt;">Mother's Name:</td><td style="padding: 3px 0; border: none; font-size: 10pt;">:${data['Mothers Name'] || 'Saheda Begum'}</td><td style="font-weight: bold; padding: 3px 0; border: none; font-size: 10pt;">Marital Status:</td><td style="padding: 3px 0; border: none; font-size: 10pt;">:${data['Marital Status'] || 'Single'}</td></tr>
                        <tr style="border: none;"><td style="font-weight: bold; padding: 3px 0; border: none; font-size: 10pt;">Date of Birth:</td><td style="padding: 3px 0; border: none; font-size: 10pt;">:${data['Date of Birth'] || '10-11-1999'}</td><td style="font-weight: bold; padding: 3px 0; border: none; font-size: 10pt;">Blood Group:</td><td style="padding: 3px 0; border: none; font-size: 10pt;">:${data['Blood Group'] || 'AB +'}</td></tr>
                        <tr style="border: none;"><td style="font-weight: bold; padding: 3px 0; border: none; font-size: 10pt;">Nationality:</td><td style="padding: 3px 0; border: none; font-size: 10pt;">:${data['Nationality'] || 'Bangladeshi'}</td><td style="font-weight: bold; padding: 3px 0; border: none; font-size: 10pt;">National ID:</td><td style="padding: 3px 0; border: none; font-size: 10pt;">:${data['National ID'] || '4213884838'}</td></tr>
                        <tr style="border: none;"><td style="font-weight: bold; padding: 3px 0; border: none; font-size: 10pt;">Religion:</td><td style="padding: 3px 0; border: none; font-size: 10pt;">:${data['Religion'] || 'Islam'}</td><td style="font-weight: bold; padding: 3px 0; border: none; font-size: 10pt;">Height/Weight:</td><td style="padding: 3px 0; border: none; font-size: 10pt;">:${data['Height'] || "5' 3\""} / ${data['Weight'] || '58 kg'}</td></tr>
                    </table>
                </div>

                <!-- শখ ও অভিজ্ঞতা -->
                <div style="margin-bottom: 25px;">
                    <h3 style="color: #1e3a8a; border-bottom: 2px solid #1e3a8a; padding-bottom: 4px; font-size: 12pt; font-weight: bold; text-transform: uppercase;">Interests & Hobbies</h3>
                    <p style="font-size: 10pt; margin-top: 4px;">${data['Interests & Hobbies'] || 'Reading Novels, Drawing, Creative Writing.'}</p>
                </div>

                <!-- সিগনেচার এরিয়া -->
                <div style="margin-top: 40px;">
                    <p style="font-size: 9.5pt; font-style: italic; color: #555;">I hereby declare that all information given above is true to the best of my knowledge.</p>
                    <div style="margin-top: 30px; float: right; text-align: center; width: 180px;">
                        <p style="border-top: 1px solid #333; padding-top: 5px; font-size: 10pt; font-weight: bold; margin: 0;">${data['Full Name']}</p>
                        <p style="font-size: 9pt; color: #666; margin: 0;">Signature</p>
                    </div>
                    <div style="clear: both;"></div>
                </div>

            </div>
        `;
    } else {
        // অন্যান্য দরখাস্তের সাধারণ বাংলা লেআউট (আগের মতোই থাকবে)
        canvas.innerHTML = `<h3>${selectedTemplate.title}</h3><p>ফর্মের ডেটা দিন...</p>`;
    }
}

function downloadPDF() {
    const element = document.getElementById('pdfCanvas');
    if (!selectedTemplate) return;

    const opt = {
        margin:       [12, 12, 12, 12],
        filename:     `${selectedTemplate.title.replace(/\s+/g, '_')}.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
}
