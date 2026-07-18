// সব এলিমেন্ট সিলেক্ট করা
const companyInput = document.getElementById('companyName');
const taglineInput = document.getElementById('tagline');
const mobileInput = document.getElementById('mobile');
const addressInput = document.getElementById('address');
const ownerInput = document.getElementById('owner');
const savingsInput = document.getElementById('savings');
const logoInput = document.getElementById('logoUpload');
const headerColor = document.getElementById('headerColor');
const footerColor = document.getElementById('footerColor');
const textColor = document.getElementById('textColor');

// প্রিভিউ এলিমেন্ট সিলেক্ট করা
const companyPreview = document.getElementById('companyPreview');
const taglinePreview = document.getElementById('taglinePreview');
const mobilePreview = document.getElementById('mobilePreview');
const addressPreview = document.getElementById('addressPreview');
const ownerPreview = document.getElementById('ownerPreview');
const savingPreview = document.getElementById('savingPreview');
const logoPreview = document.getElementById('logoPreview');
const letterhead = document.getElementById('letterhead');

// ইনপুট পরিবর্তনের সাথে প্রিভিউ আপডেট করা
const updatePreview = () => {
    companyPreview.innerText = companyInput.value || "Company Name";
    taglinePreview.innerText = taglineInput.value || "Tag Line";
    mobilePreview.innerText = mobileInput.value ? "Mobile: " + mobileInput.value : "Mobile";
    addressPreview.innerText = addressInput.value || "Address";
    ownerPreview.innerText = ownerInput.value ? "Proprietor: " + ownerInput.value : "Proprietor Name";
    savingPreview.innerText = savingsInput.value || "Savings Name";
    
    // কালার আপডেট
    document.querySelector('.header').style.backgroundColor = headerColor.value;
    document.querySelector('.footer').style.backgroundColor = footerColor.value;
    document.body.style.color = textColor.value;
};

// লোগো আপলোড হ্যান্ডলার
logoInput.addEventListener('change', function() {
    const reader = new FileReader();
    reader.onload = (e) => { logoPreview.src = e.target.result; }
    reader.readAsDataURL(this.files[0]);
});

// ইনপুট ইভেন্ট লিসেনার যোগ করা
[companyInput, taglineInput, mobileInput, addressInput, ownerInput, savingsInput, headerColor, footerColor, textColor].forEach(el => {
    el.addEventListener('input', updatePreview);
});

// PDF ডাউনলোডের জন্য ফাংশন
document.getElementById('downloadPDF').addEventListener('click', () => {
    const element = document.getElementById('letterhead');
    html2pdf().from(element).save('Letterhead.pdf');
});
