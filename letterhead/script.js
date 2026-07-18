const companyInput = document.getElementById('companyName');
const taglineInput = document.getElementById('tagline');
const mobileInput = document.getElementById('mobile');
const addressInput = document.getElementById('address');
const templateSelect = document.getElementById('templateSelect');
const letterhead = document.getElementById('letterhead');

// লাইভ আপডেট
companyInput.addEventListener('input', () => document.getElementById('companyPreview').innerText = companyInput.value);
taglineInput.addEventListener('input', () => document.getElementById('taglinePreview').innerText = taglineInput.value);
mobileInput.addEventListener('input', () => document.getElementById('mobilePreview').innerText = mobileInput.value);
addressInput.addEventListener('input', () => document.getElementById('addressPreview').innerText = addressInput.value);

// ডিজাইন পরিবর্তন
templateSelect.addEventListener('change', (e) => {
    letterhead.className = 'Design' + e.target.value;
});

// PDF ডাউনলোড
document.getElementById('downloadPDF').addEventListener('click', () => {
    html2pdf().from(document.getElementById('letterhead')).save();
});
