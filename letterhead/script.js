document.addEventListener('DOMContentLoaded', () => {
    // Input Fields
    const companyName = document.getElementById('companyName');
    const companySlogan = document.getElementById('companySlogan');
    const companyReg = document.getElementById('companyReg');
    const companyAddress = document.getElementById('companyAddress');
    const companyPhone = document.getElementById('companyPhone');
    const companyEmail = document.getElementById('companyEmail');
    const companyWeb = document.getElementById('companyWeb');
    
    // Design Controls
    const logoUpload = document.getElementById('logoUpload');
    const primaryColor = document.getElementById('primaryColor');
    const fontStyle = document.getElementById('fontStyle');
    const headerAlign = document.getElementById('headerAlign');
    const footerLayout = document.getElementById('footerLayout');
    
    // Output Elements
    const outCompanyName = document.getElementById('outCompanyName');
    const outCompanySlogan = document.getElementById('outCompanySlogan');
    const outCompanyReg = document.getElementById('outCompanyReg');
    const outCompanyAddress = document.getElementById('outCompanyAddress');
    const outCompanyPhone = document.getElementById('outCompanyPhone');
    const outCompanyEmail = document.getElementById('outCompanyEmail');
    const outCompanyWeb = document.getElementById('outCompanyWeb');
    
    const previewHeader = document.getElementById('previewHeader');
    const previewFooter = document.getElementById('previewFooter');
    const previewLogo = document.getElementById('previewLogo');
    const logoContainer = document.getElementById('logoContainer');
    const letterheadPage = document.getElementById('letterheadPage');
    const currentDate = document.getElementById('currentDate');

    // Set Current Date
    const today = new Date().toLocaleDateString('bn-BD');
    currentDate.textContent = today;

    // Real-time Text Binding
    function updateText() {
        outCompanyName.textContent = companyName.value;
        outCompanySlogan.textContent = companySlogan.value;
        outCompanyReg.textContent = companyReg.value;
        outCompanyAddress.textContent = companyAddress.value;
        outCompanyPhone.textContent = companyPhone.value;
        outCompanyEmail.textContent = companyEmail.value;
        outCompanyWeb.textContent = companyWeb.value;
    }

    const inputs = [companyName, companySlogan, companyReg, companyAddress, companyPhone, companyEmail, companyWeb];
    inputs.forEach(input => input.addEventListener('input', updateText));

    // Logo Upload Handler
    logoUpload.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                previewLogo.src = event.target.result;
                logoContainer.classList.remove('hidden');
            }
            reader.readAsDataURL(file);
        }
    });

    // Color & Font Customization
    primaryColor.addEventListener('input', (e) => {
        const color = e.target.value;
        letterheadPage.style.setProperty('--primary-color', color);
        previewHeader.style.borderColor = color;
        outCompanyName.style.color = color;
    });

    fontStyle.addEventListener('change', (e) => {
        letterheadPage.style.fontFamily = e.target.value;
    });

    // Layout Preferences
    headerAlign.addEventListener('change', (e) => {
        previewHeader.className = `letterhead-header ${e.target.value}`;
    });

    footerLayout.addEventListener('change', (e) => {
        previewFooter.className = `letterhead-footer ${e.target.value}`;
        if(e.target.value === 'inline') {
            previewFooter.innerHTML = `<p>${companyAddress.value} | ফোন: ${companyPhone.value} | ইমেইল: ${companyEmail.value} | ওয়েবসাইট: ${companyWeb.value}</p>`;
        } else {
            previewFooter.innerHTML = `
                <div class="footer-col">
                    <p><span>${companyAddress.value}</span></p>
                    <p>ফোন: <span>${companyPhone.value}</span></p>
                </div>
                <div class="footer-col right-align">
                    <p>ইমেইল: <span>${companyEmail.value}</span></p>
                    <p>ওয়েবসাইট: <span>${companyWeb.value}</span> | Reg: <span>${companyReg.value}</span></p>
                </div>
            `;
        }
    });

    // Print Button Action
    document.getElementById('printBtn').addEventListener('click', () => {
        window.print();
    });
});
