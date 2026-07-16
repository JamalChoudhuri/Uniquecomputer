// ৫০টি ভিন্ন ধরনের প্রফেশনাল দরখাস্ত ও সিভির টেমপ্লেট ডাটাবেজ
const templates = [
    // === ক্যাটাগরি: সিভি ও জীবনবৃত্তান্ত (CV) - ৫০টি আলাদা প্রকারভেদ ===
    { id: 1, cat: 'cv', title: '১. কম্পিউটার অপারেটর সিভি', fields: ['নাম', 'পিতা', 'মাতা', 'ঠিকানা', 'মোবাইল', 'টাইপিং স্পিড', 'অভিজ্ঞতা', 'শিক্ষাগত যোগ্যতা'], type: 'cv' },
    { id: 2, cat: 'cv', title: '২. সফটওয়্যার ইঞ্জিনিয়ার রিজিউমি', fields: ['Full Name', 'Email', 'Phone', 'GitHub Link', 'Skills', 'Experience', 'Education'], type: 'cv_eng' },
    { id: 3, cat: 'cv', title: '৩. স্কুল শিক্ষক জীবনবৃত্তান্ত', fields: ['নাম', 'পিতা', 'বর্তমান ঠিকানা', 'মোবাইল', 'বিষয়ভিত্তিক দক্ষতা', 'শিক্ষকতা অভিজ্ঞতা', 'বিএড ডিগ্রী'], type: 'cv' },
    { id: 4, cat: 'cv', title: '৪. ড্রাইভার পদের সিভি', fields: ['নাম', 'পিতা', 'লাইসেন্স নম্বর', 'রক্তের গ্রুপ', 'অভিজ্ঞতা বছর', 'যোগাযোগ'], type: 'cv' },
    { id: 5, cat: 'cv', title: '৫. ব্যাংক অফিসার সিভি', fields: ['নাম', 'ইমেইল', 'মোবাইল', 'অ্যাকাউন্টিং জ্ঞান', 'পূর্ববর্তী ব্যাংক', 'ডিগ্রী'], type: 'cv' },
    { id: 6, cat: 'cv', title: '৬. গ্রাফিক্স ডিজাইনার পোর্টফোলিও সিভি', fields: ['নাম', 'পোর্টফোলিও লিংক', 'সফটওয়্যার দক্ষতা', 'কাজের অভিজ্ঞতা', 'যোগাযোগ'], type: 'cv' },
    { id: 7, cat: 'cv', title: '৭. সেলস এক্সিকিউটিভ সিভি', fields: ['নাম', 'মোবাইল', 'ঠিকানা', 'টার্গেট অ্যাচিভমেন্ট রেকর্ড', 'ভাষাগত দক্ষতা', 'শিক্ষা'], type: 'cv' },
    { id: 8, cat: 'cv', title: '৮. অফিস সহকারী জীবনবৃত্তান্ত', fields: ['নাম', 'পিতা', 'মাতা', 'কম্পিউটার জ্ঞান', 'টাইপিং গতি', 'ঠিকানা', 'ফোন'], type: 'cv' },
    { id: 9, cat: 'cv', title: '৯. নার্সিং প্রফেশনাল সিভি', fields: ['নাম', 'বিএমডিসি রেজি নম্বর', 'হাসপাতালের অভিজ্ঞতা', 'ডিপ্লোমা/বিএসসি', 'যোগাযোগ'], type: 'cv' },
    { id: 10, cat: 'cv', title: '১০. হোটেল ম্যানেজার সিভি', fields: ['নাম', 'হসপিটালিটি ম্যানেজমেন্ট ডিগ্রী', 'ভাষাগত দক্ষতা', 'অভিজ্ঞতা', 'ফোন'], type: 'cv' },
    { id: 11, cat: 'cv', title: '১১. ডিজিটাল মার্কেটার রিজিউমি', fields: ['নাম', 'এসইও স্কিল', 'সোশ্যাল মিডিয়া হ্যান্ডেল', 'সফল ক্যাম্পেইন সমূহ', 'যোগাযোগ'], type: 'cv' },
    { id: 12, cat: 'cv', title: '১২. একাউন্টেন্ট জীবনবৃত্তান্ত', fields: ['নাম', 'পিতা', 'ট্যালি/এক্সেল দক্ষতা', 'সিএ সিসি কোর্স বিবরণ', 'অভিজ্ঞতা'], type: 'cv' },
    { id: 13, cat: 'cv', title: '১৩. সিকিউরিটি গার্ড সিভি', fields: ['নাম', 'উচ্চতা', 'ওজন', 'অবসরপ্রাপ্ত সামরিক রেকর্ড (যদি থাকে)', 'ঠিকানা', 'ফোন'], type: 'cv' },
    { id: 14, cat: 'cv', title: '১৪. ডেলিভারি রাইডার সিভি', fields: ['নাম', 'স্মার্টফোন মডেল', 'বাইক/সাইকেল লাইসেন্স', 'জাতীয় পরিচয়পত্র', 'যোগাযোগ'], type: 'cv' },
    { id: 15, cat: 'cv', title: '১৫. ফ্রন্ট ডেস্ক এক্সিকিউটিভ সিভি', fields: ['নাম', 'যোগাযোগ', 'বাচনভঙ্গি ও ভাষা', 'কম্পিউটার দক্ষতা', 'শিক্ষা'], type: 'cv' },
    { id: 16, cat: 'cv', title: '১৬. সিভিল ইঞ্জিনিয়ার সিভি', fields: ['নাম', 'আইইবি রেজি নম্বর', 'সাইট ম্যানেজমেন্ট স্কিল', 'মেজর প্রজেক্টস', 'ফোন'], type: 'cv' },
    { id: 17, cat: 'cv', title: '১৭. ইলেকট্রিশিয়ান জীবনবৃত্তান্ত', fields: ['নাম', 'কারিগরি সার্টিফিকেট', 'কাজের ক্ষেত্র', 'অভিজ্ঞতা বছর', 'ফোন'], type: 'cv' },
    { id: 18, cat: 'cv', title: '১৮. ডাটা এন্ট্রি অপারেটর সিভি', fields: ['নাম', 'টাইপিং স্পিড (WPM)', 'এক্সেল অ্যাডভান্সড টুলস', 'ঠিকানা', 'মোবাইল'], type: 'cv' },
    { id: 19, cat: 'cv', title: '১৯. শেফ/পাচক জীবনবৃত্তান্ত', fields: ['নাম', 'রন্ধনশৈলী স্পেশালিটি', 'পূর্ববর্তী রেস্টুরেন্ট', 'ঠিকানা', 'যোগাযোগ'], type: 'cv' },
    { id: 20, cat: 'cv', title: '২০. কন্টেন্ট রাইটার রিজিউমি', fields: ['নাম', 'ব্লগ/রাইটিং স্যাম্পল', 'ভাষাগত দক্ষতা', 'শিক্ষা', 'যোগাযোগ'], type: 'cv' },
    { id: 21, cat: 'cv', title: '২১. ভিডিও এডিটর সিভি', fields: ['নাম', 'এডিটিং সফটওয়্যারসমূহ', 'শো-রিল লিংক', 'অভিজ্ঞতা', 'মোবাইল'], type: 'cv' },
    { id: 22, cat: 'cv', title: '২২. কল সেন্টার এজেন্ট সিভি', fields: ['নাম', 'ইংরেজি ও বাংলা ফ্লুয়েন্সি', 'লিসেনিং স্কিল', 'শিক্ষাগত যোগ্যতা', 'ফোন'], type: 'cv' },
    { id: 23, cat: 'cv', title: '২৩. ওয়েব ডিজাইনার সিভি', fields: ['নাম', 'UI/UX স্কিল', 'পোর্টফোলিও', 'টেকনিক্যাল নলেজ', 'যোগাযোগ'], type: 'cv' },
    { id: 24, cat: 'cv', title: '২৪. ফ্যাশন ডিজাইনার সিভি', fields: ['নাম', 'ডিজাইন ইনস্টিটিউট', 'কাজের কালেকশন', 'অভিজ্ঞতা', 'মোবাইল'], type: 'cv' },
    { id: 25, cat: 'cv', title: '২৫. ডাটা অ্যানালিস্ট সিভি', fields: ['নাম', 'পাইথন/এসকিউএল জ্ঞান', 'ভিজুয়ালাইজেশন টুলস', 'শিক্ষা', 'ইমেইল'], type: 'cv' },
    { id: 26, cat: 'cv', title: '২৬. ল্যাব টেকনিশিয়ান সিভি', fields: ['নাম', 'ডিপ্লোমা সাবজেক্ট', 'মেডিকেল ল্যাব অভিজ্ঞতা', 'ঠিকানা', 'মোবাইল'], type: 'cv' },
    { id: 27, cat: 'cv', title: '২৭. বিউটিশিয়ান জীবনবৃত্তান্ত', fields: ['নাম', 'কাজের পারদর্শিতা', 'পার্লার বা সেলুন অভিজ্ঞতা', 'ঠিকানা', 'ফোন'], type: 'cv' },
    { id: 28, cat: 'cv', title: '২৮. ট্রাভেল গাইড সিভি', fields: ['নাম', 'অঞ্চলভিত্তিক জ্ঞান', 'ভাষাসমূহ', 'ট্যুরিজম কোর্স', 'যোগাযোগ'], type: 'cv' },
    { id: 29, cat: 'cv', title: '২৯. মেকানিকাল টেকনিশিয়ান সিভি', fields: ['নাম', 'ইঞ্জিন ট্রাবলশুটিং দক্ষতা', 'অভিজ্ঞতা বছর', 'মোবাইল'], type: 'cv' },
    { id: 30, cat: 'cv', title: '৩০. ই-কমার্স ম্যানেজার সিভি', fields: ['নাম', 'স্টোর ম্যানেজমেন্ট রেকর্ড', 'অ্যাড রান করার দক্ষতা', 'ফোন'], type: 'cv' },
    { id: 31, cat: 'cv', title: '৩১. ইভেন্ট প্ল্যানার সিভি', fields: ['নাম', 'ম্যানেজমেন্ট প্রজেক্ট হিস্ট্রি', 'বাজেটিং স্কিল', 'যোগাযোগ'], type: 'cv' },
    { id: 32, cat: 'cv', title: '৩২. ফটোগ্রাফার রিজিউমি', fields: ['নাম', 'ক্যামেরা ইকুইপমেন্ট', 'ফটোগ্রাফি জেনার', 'কাজের লিংক', 'ফোন'], type: 'cv' },
    { id: 33, cat: 'cv', title: '৩৩. ফার্মাসিস্ট জীবনবৃত্তান্ত', fields: ['নাম', 'ফার্মেসী কাউন্সিল রেজি নং', 'ড্রাগ নলেজ', 'শিক্ষা', 'মোবাইল'], type: 'cv' },
    { id: 34, cat: 'cv', title: '৩৪. আর্কিটেক্ট প্রফেশনাল সিভি', fields: ['নাম', 'অটোক্যাড/থ্রিডি ম্যাক্স স্কিল', 'ডিজাইন মেথডলজি', 'ফোন'], type: 'cv' },
    { id: 35, cat: 'cv', title: '৩৫. ফিটনেস ট্রেইনার সিভি', fields: ['নাম', 'সার্টিফিকেশন', 'বডি বিল্ডিং/ইয়োগা স্পেশালিটি', 'ফোন'], type: 'cv' },
    { id: 36, cat: 'cv', title: '৩৬. এইচ আর এক্সিকিউটিভ সিভি', fields: ['নাম', 'এমবিএ মেজর', 'রিক্রুটমেন্ট স্ট্রাটেজি', 'যোগাযোগ'], type: 'cv' },
    { id: 37, cat: 'cv', title: '৩৭. লজিস্টিক অফিসার সিভি', fields: ['নাম', 'সাপ্লাই চেইন নলেজ', 'ওয়ারহাউজ ম্যানেজমেন্ট', 'মোবাইল'], type: 'cv' },
    { id: 38, cat: 'cv', title: '৩৮. রিয়েল এস্টেট এজেন্ট সিভি', fields: ['নাম', 'সেলস নেটওয়ার্ক', 'ডকুমেন্টেশন নলেজ', 'ঠিকানা', 'ফোন'], type: 'cv' },
    { id: 39, cat: 'cv', title: '৩৯. লাইব্রেরিয়ান জীবনবৃত্তান্ত', fields: ['নাম', 'তথ্য বিজ্ঞান ডিগ্রী', 'ক্যাটালগিং স্কিল', 'ঠিকানা', 'ফোন'], type: 'cv' },
    { id: 40, cat: 'cv', title: '৪০. পি আর স্পেশালিস্ট সিভি', fields: ['নাম', 'মিডিয়া রিলেশনস', 'কমিউনিকেশন স্কিল', 'শিক্ষা', 'ইমেইল'], type: 'cv' },

    // === ক্যাটাগরি: দরখাস্ত ও অন্যান্য অফিসিয়াল লেটার ===
    { id: 41, cat: 'application', title: '৪১. অসুস্থতার জন্য ছুটির আবেদন', fields: ['তারিখ', 'বরাবর', 'প্রতিষ্ঠানের নাম', 'আবেদনকারীর নাম', 'পদবী/শ্রেণী', 'ছুটির দিন সংখ্যা'], type: 'app' },
    { id: 42, cat: 'application', title: '৪২. অগ্রিম ছুটির দরখাস্ত', fields: ['তারিখ', 'বরাবর', 'কারণ', 'আবেদনকারীর নাম', 'তারিখ হতে', 'তারিখ পর্যন্ত'], type: 'app' },
    { id: 43, cat: 'application', title: '৪৩. বিনা বেতনে ছুটির আবেদন', fields: ['তারিখ', 'বরাবর', 'যুক্তিসঙ্গত কারণ', 'আবেদনকারীর নাম', 'মোবাইল'], type: 'app' },
    { id: 44, cat: 'application', title: '৪৪. কোম্পানিতে চাকরির আবেদনপত্র', fields: ['তারিখ', 'বরাবর', 'কোম্পানির নাম', 'পদের নাম', 'আবেদনকারীর নাম', 'যোগ্যতার বিবরণ'], type: 'app' },
    { id: 45, cat: 'application', title: '৪৫. প্রাথমিক বিদ্যালয়ের শিক্ষক পদের আবেদন', fields: ['তারিখ', 'জেলা শিক্ষা অফিসার', 'উপজেলা', 'আবেদনকারীর নাম', 'শিক্ষা স্কোর'], type: 'app' },
    { id: 46, cat: 'official', title: '৪৬. চরিত্রগত প্রশংসাপত্র আবেদন', fields: ['তারিখ', 'চেয়ারম্যান/অধ্যক্ষ', 'আবেদনকারীর নাম', 'পিতা', 'গ্রাম', 'রোল/ভোটার আইডি'], type: 'app' },
    { id: 47, cat: 'official', title: '৪৭. প্রত্যয়ন পত্রের আবেদন ফর্ম', fields: ['তারিখ', 'কর্তৃপক্ষ', 'আবেদনকারীর নাম', 'পিতা', 'সেশনের নাম', 'বিভাগ'], type: 'app' },
    { id: 48, cat: 'official', title: '৪৮. পরিচয়পত্র হারানোর সাধারণ ডায়েরি (GD) ফরম্যাট', fields: ['তারিখ', 'ভারপ্রাপ্ত কর্মকর্তা (OC)', 'থানার নাম', 'নাম', 'পিতা', 'হারানো কার্ডের বিবরণ'], type: 'app' },
    { id: 49, cat: 'official', title: '৪৯. মেয়রের কাছে নাগরিক সনদের আবেদন', fields: ['তারিখ', 'মাননীয় মেয়র', 'পৌরসভা/সিটি কর্পোরেশন', 'আবেদনকারীর নাম', 'ওয়ার্ড নম্বর'], type: 'app' },
    { id: 50, cat: 'official', title: '৫০. ব্যাংক অ্যাকাউন্ট বন্ধ করার আবেদন', fields: ['তারিখ', 'শাখা ব্যবস্থাপক', 'ব্যাংকের নাম', 'অ্যাকাউন্ট নম্বর', 'অ্যাকাউন্ট ধারীর নাম'], type: 'app' }
];

let selectedTemplate = null;

// পেজ লোড হলে প্রাথমিক টেমপ্লেট গ্রিড লোড করা
document.addEventListener("DOMContentLoaded", () => {
    renderTemplates(templates);
});

// টেমপ্লেট গ্রিড রেন্ডার করার ফাংশন
function renderTemplates(targetList) {
    const grid = document.getElementById("templateGrid");
    grid.innerHTML = "";
    
    if(targetList.length === 0) {
        grid.innerHTML = "<p class='text-gray-500'>কোনো টেমপ্লেট পাওয়া যায়নি।</p>";
        return;
    }
    
    // Grid container CSS custom layout
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

// ক্যাটাগরি অনুযায়ী ফিল্টার করা
function filterTemplates() {
    const val = document.getElementById("categoryFilter").value;
    if (val === "all") {
        renderTemplates(templates);
    } else {
        const filtered = templates.filter(t => t.cat === val);
        renderTemplates(filtered);
    }
}

// কোনো একটি টেমপ্লেট সিলেক্ট করলে ফর্ম ও প্রিভিউ রেডি করা
function selectTemplate(id) {
    selectedTemplate = templates.find(t => t.id === id);
    
    // ওয়ার্কস্পেস সেকশন দৃশ্যমান করা
    const workspace = document.getElementById("workspaceSection");
    workspace.classList.remove("hidden");
    workspace.scrollIntoView({ behavior: 'smooth' });

    // ডাইনামিক ফর্ম তৈরি
    const form = document.getElementById("dynamicForm");
    form.innerHTML = "";

    selectedTemplate.fields.forEach((field, index) => {
        const div = document.createElement("div");
        div.className = "block";
        div.innerHTML = `
            <label class="block text-sm font-medium text-gray-700 mb-1">${field}:</label>
            <input type="text" id="field_${index}" oninput="updatePreview()" class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 bg-white" placeholder="${field} লিখুন">
        `;
        form.appendChild(div);
    });

    updatePreview();
}

// কাস্টমার টাইপ করার সাথে সাথে ডাইনামিক লাইভ প্রিভিউ আপডেট হওয়া
function updatePreview() {
    if (!selectedTemplate) return;

    const canvas = document.getElementById("pdfCanvas");
    canvas.innerHTML = ""; // আগের প্রিভিউ ক্লিন করা

    // ইনপুট থেকে সব ডেটা নেওয়া
    const values = selectedTemplate.fields.map((f, i) => {
        const input = document.getElementById(`field_${i}`);
        return input ? input.value || `[ ${f} ]` : `[ ${f} ]`;
    });

    // টেমপ্লেটের ধরণ অনুযায়ী প্রিভিউ লেআউট তৈরি করা
    if (selectedTemplate.type.startsWith('cv')) {
        // জীবনবৃত্তান্ত বা সিভির স্টাইল লেআউট
        let htmlContent = `
            <div style="text-align: center; border-bottom: 2px solid #1e3a8a; padding-bottom: 10px; margin-bottom: 20px;">
                <h1>জীবনবৃত্তান্ত (Curriculum Vitae)</h1>
                <p style="font-size: 14pt; font-weight: bold; margin: 0;">${values[0]}</p>
                <p style="margin: 3px 0;">যোগাযোগ: ${values[selectedTemplate.fields.indexOf('মোবাইল') >= 0 ? selectedTemplate.fields.indexOf('মোবাইল') : 4] || 'মোবাইল নম্বর'}</p>
            </div>
            
            <h2>ব্যক্তিগত তথ্যাবলী (Personal Profile)</h2>
            <table>
        `;
        
        selectedTemplate.fields.forEach((field, i) => {
            if (i > 0 && field !== 'অভিজ্ঞতা' && field !== 'শিক্ষাগত যোগ্যতা' && field !== 'Skills' && field !== 'Experience' && field !== 'Education') {
                htmlContent += `
                    <tr>
                        <td style="width: 30%; font-weight: bold; background-color: #fafafa;">${field}</td>
                        <td>${values[i]}</td>
                    </tr>
                `;
            }
        });
        
        htmlContent += `</table>`;

        // সিভির জন্য অন্যান্য বড় ফিল্ডগুলো নিচে সুন্দর প্যারাগ্রাফ আকারে সাজানো
        selectedTemplate.fields.forEach((field, i) => {
            if (field === 'অভিজ্ঞতা' || field === 'শিক্ষাগত যোগ্যতা' || field === 'Skills' || field === 'Experience' || field === 'Education' || field === 'টাইপিং স্পিড' || field === 'সফটওয়্যার দক্ষতা') {
                htmlContent += `
                    <h2>${field}</h2>
                    <p style="background-color: #f8fafc; padding: 8px; border-left: 3px solid #1e40af;">${values[i]}</p>
                `;
            }
        });

        canvas.innerHTML = htmlContent;

    } else {
        // সাধারণ দরখাস্ত বা অফিসিয়াল অ্যাপ্লিকেশনের স্টাইল লেআউট
        const dateIdx = selectedTemplate.fields.indexOf('তারিখ');
        const toIdx = selectedTemplate.fields.indexOf('বরাবর');
        const nameIdx = selectedTemplate.fields.indexOf('আবেদনকারীর নাম');

        let htmlContent = `
            <p>তারিখ: ${values[dateIdx >= 0 ? dateIdx : 0]}</p>
            <p style="margin-top: 15px;">বরাবর,<br>${values[toIdx >= 0 ? toIdx : 1]}</p>
            <p>${values[2] || 'প্রতিষ্ঠানের নাম ও ঠিকানা'}</p>
            
            <p style="margin-top: 20px; font-weight: bold;">বিষয়: ${selectedTemplate.title.substring(3)} প্রসংগে।</p>
            
            <p style="margin-top: 15px;">মহোদয়,</p>
            <p style="text-indent: 40px; margin-top: 5px;">
                বিনীত নিবেদন এই যে, আমি আপনার প্রতিষ্ঠানে একনিষ্ঠভাবে নিয়োজিত আছি। আমার বর্তমান বিশেষ পরিস্থিতির কারণে জরুরি ভিত্তিতে উক্ত সেবা/ছুটি বা ডকুমেন্টটি প্রয়োজন। নিচে আমার প্রয়োজনীয় তথ্যাদি উপস্থাপন করা হলো:
            </p>
            
            <table style="margin-top: 15px;">
        `;

        selectedTemplate.fields.forEach((field, i) => {
            if (field !== 'তারিখ' && field !== 'বরাবর') {
                htmlContent += `
                    <tr>
                        <td style="width: 35%; font-weight: bold; background-color: #fafafa;">${field}</td>
                        <td>${values[i]}</td>
                    </tr>
                `;
            }
        });

        htmlContent += `
            </table>
            
            <p style="margin-top: 30px;">অতএব, মহোদয়ের নিকট আকুল আবেদন এই যে, আমার উপরোক্ত বিষয়টি বিবেচনা করে উক্ত ডকুমেন্ট বা আবেদনটি মঞ্জুর করতে যেন আপনার সদয় মর্জি হয়।</p>
            
            <div style="margin-top: 50px; float: right; text-align: center; width: 200px;">
                <p style="border-top: 1px solid #000; padding-top: 5px;">বিনীত নিবেদক,</p>
                <p style="font-weight: bold;">${values[nameIdx >= 0 ? nameIdx : 3] || 'আবেদনকারী'}</p>
            </div>
            <div style="clear: both;"></div>
        `;

        canvas.innerHTML = htmlContent;
    }
}

// html2pdf লাইব্রেরি ব্যবহার করে প্রিভিউ এরিয়াকে সরাসরি ক্লায়েন্ট-সাইডে PDF ফাইল আকারে ডাউনলোড করা
function downloadPDF() {
    const element = document.getElementById('pdfCanvas');
    if (!selectedTemplate) {
        alert("অনুগ্রহ করে প্রথমে একটি টেমপ্লেট সিলেক্ট করুন।");
        return;
    }

    // পিডিএফ অপশন কনফিগারেশন
    const opt = {
        margin:       [15, 12, 15, 12], // টপ, লেফট, বটম, রাইট মার্জিন মিলিমিটারে
        filename:     `${selectedTemplate.title.replace(/[^a-zA-Z0-9অ-হ]/g, "_")}.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true }, // নিখুঁত ফন্ট ও হাই রেজোলিউশনের জন্য
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // ডাউনলোড শুরু
    html2pdf().set(opt).from(element).save();
}
