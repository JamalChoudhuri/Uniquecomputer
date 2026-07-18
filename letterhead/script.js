/*=========================================================
 Business Letterhead Generator
 script.js (PART-1)

 Features:
 - Live Text Update
 - Logo Upload
 - Monogram Upload
 - Image Preview

=========================================================*/


//==========================================================
// LIVE TEXT UPDATE FUNCTION
//==========================================================

function liveUpdate(inputID, previewID, defaultText){

    const input = document.getElementById(inputID);

    const preview = document.getElementById(previewID);


    if(input && preview){

        input.addEventListener("input", function(){

            if(this.value.trim() === ""){

                preview.innerHTML = defaultText;

            }

            else{

                preview.innerHTML = this.value;

            }

        });

    }

}



//==========================================================
// COMPANY INFORMATION LIVE UPDATE
//==========================================================


liveUpdate(
    "companyName",
    "companyPreview",
    "Company Name"
);



liveUpdate(
    "tagline",
    "taglinePreview",
    "Tag Line"
);



liveUpdate(
    "mobile",
    "mobilePreview",
    "Mobile Number"
);



liveUpdate(
    "address",
    "addressPreview",
    "Address"
);



liveUpdate(
    "owner",
    "ownerPreview",
    "Proprietor Name"
);



liveUpdate(
    "savings",
    "savingPreview",
    "Savings Name"
);





//==========================================================
// LOGO UPLOAD
//==========================================================

const logoUpload =
document.getElementById("logoUpload");


const logoPreview =
document.getElementById("logoPreview");



if(logoUpload){


logoUpload.addEventListener(
"change",
function(event){


const file =
event.target.files[0];



if(file){


const reader =
new FileReader();



reader.onload =
function(e){


logoPreview.src =
e.target.result;


logoPreview.style.display =
"block";


};



reader.readAsDataURL(file);



}



});


}






//==========================================================
// MONOGRAM UPLOAD
//==========================================================


const monoUpload =
document.getElementById("monoUpload");



const monoPreview =
document.getElementById("monoPreview");



if(monoUpload){


monoUpload.addEventListener(
"change",
function(event){


const file =
event.target.files[0];



if(file){


const reader =
new FileReader();



reader.onload =
function(e){


monoPreview.src =
e.target.result;


monoPreview.style.display =
"block";


};



reader.readAsDataURL(file);



}



});


}





//==========================================================
// IMAGE AUTO FIT
// Logo এবং Monogram সবসময়
// Box এর ভিতরে Fit হবে
//==========================================================


function imageAutoFit(imageID){


const image =
document.getElementById(imageID);



if(image){


image.onload =
function(){


this.style.objectFit =
"contain";


this.style.width =
"100%";


this.style.height =
"100%";


};


}


}



imageAutoFit("logoPreview");

imageAutoFit("monoPreview");





//==========================================================
// DEFAULT IMAGE HIDE
//==========================================================

if(logoPreview){

logoPreview.style.display="none";

}


if(monoPreview){

monoPreview.style.display="none";

}





//==========================================================
// FUTURE DESIGN SECTION
//
// Design Change Logic এখানে যোগ হবে
//
// Example:
//
// if(template=="2"){
//
// loadDesignTwo();
//
// }
//
//==========================================================

/*=========================================================
 Business Letterhead Generator
 script.js (PART-2)

 Features:
 - Color Controller
 - Template Switching
 - Design Class Manager

=========================================================*/



//==========================================================
// COLOR PICKER CONTROL
//==========================================================


const headerColor =
document.getElementById("headerColor");


const footerColor =
document.getElementById("footerColor");


const textColor =
document.getElementById("textColor");



const header =
document.querySelector(".header");


const footer =
document.querySelector(".footer");


const letterhead =
document.getElementById("letterhead");





//==========================================================
// HEADER COLOR CHANGE
//==========================================================


if(headerColor){


headerColor.addEventListener(
"input",
function(){


if(header){


header.style.background =
this.value;


}


});


}





//==========================================================
// FOOTER COLOR CHANGE
//==========================================================


if(footerColor){


footerColor.addEventListener(
"input",
function(){


if(footer){


footer.style.background =
this.value;


}


});


}





//==========================================================
// TEXT COLOR CHANGE
//==========================================================


if(textColor){


textColor.addEventListener(
"input",
function(){


if(letterhead){


letterhead.style.color =
this.value;


}


});


}







//==========================================================
// TEMPLATE SWITCH SYSTEM
//
// Design 1-50 এর জন্য এখানে
// Class পরিবর্তন হবে
//
// Example:
//
// Design 1
// letterhead-design-1
//
// Design 2
// letterhead-design-2
//
//==========================================================



const templateSelect =
document.getElementById("templateSelect");





function removeAllDesignClass(){


if(letterhead){


for(let i=1;i<=50;i++){


letterhead.classList.remove(
"design-"+i
);


}


}


}





function loadTemplate(number){



removeAllDesignClass();



if(letterhead){


letterhead.classList.add(
"Design-"+number
);



}


}





//==========================================================
// TEMPLATE CHANGE EVENT
//==========================================================


if(templateSelect){


templateSelect.addEventListener(
"change",
function(){


let DesignNumber =
this.value;



loadTemplate(DesignNumber);



});


}





// Default Design Load

loadTemplate(1);






//==========================================================
// DESIGN CUSTOM FUNCTION AREA
//
// নিচে Design অনুযায়ী
// আলাদা Function যোগ করতে পারবেন
//
//==========================================================


function loadTemplate(number){

    removeAllDesignClass();

    letterhead.classList.add("design-"+number);

}






function runDesignFunction(number){


if(designFunctions[number]){


designFunctions[number]();


}


}






if(templateSelect){


templateSelect.addEventListener(
"change",
function(){







//==========================================================
// FUTURE DESIGN ADD AREA
//
// Design 3-50 এখানে যোগ করবেন:
//
// function designThree(){}
//
// function designFour(){}
//
// ...
//
// function designFifty(){}
//
//=========================================================

/*=========================================================
 Business Letterhead Generator
 script.js (PART-3)

 Features:
 - PDF Download
 - Print
 - Export Settings
 - Utility Functions

=========================================================*/



//==========================================================
// PDF DOWNLOAD
// html2pdf library ব্যবহার করা হয়েছে
//==========================================================


const downloadPDF =
document.getElementById("downloadPDF");



if(downloadPDF){


downloadPDF.addEventListener(
"click",
function(){


generatePDF();


});


}





function generatePDF(){



const element =
document.getElementById("letterhead");



if(!element){


alert("Letterhead Preview পাওয়া যায়নি");


return;


}





//==========================================================
// PDF SETTINGS
//==========================================================


const options = {


margin:0,


filename:
"Business-Letterhead.pdf",



image:{


type:"jpeg",


quality:1


},



html2canvas:{


scale:3,


useCORS:true,


allowTaint:true


},



jsPDF:{


unit:"mm",


format:"a4",


orientation:"portrait"


}



};






//==========================================================
// PDF CREATE
//==========================================================



if(typeof html2pdf !== "undefined"){



html2pdf()

.set(options)

.from(element)

.save();



}

else{


alert(
"PDF Library পাওয়া যায়নি। html2pdf.js Link করুন।"
);


}




}








//==========================================================
// PRINT FUNCTION
//==========================================================


function printLetterhead(){


window.print();


}





//==========================================================
// KEYBOARD SHORTCUT
//
// Ctrl + P = Print
//==========================================================


document.addEventListener(
"keydown",
function(event){



if(event.ctrlKey &&
event.key==="p"){



event.preventDefault();



printLetterhead();



}



});








//==========================================================
// CHANGE PDF FILE NAME
//
// ভবিষ্যতে Company Name অনুযায়ী
// PDF নাম করা যাবে
//==========================================================


function getPDFFileName(){



let company =
document.getElementById(
"companyName"
);



if(company &&
company.value.trim()!==""){


return company.value+
"-Letterhead.pdf";


}


return "Business-Letterhead.pdf";


}







//==========================================================
// UPDATE PDF NAME
//==========================================================


function generateCustomPDF(){



const element =
document.getElementById(
"letterhead"
);



let filename =
getPDFFileName();





const options={


margin:0,


filename:filename,


image:{


type:"jpeg",


quality:1


},



html2canvas:{


scale:3,


useCORS:true


},



jsPDF:{


unit:"mm",


format:"a4",


orientation:"portrait"


}



};




html2pdf()

.set(options)

.from(element)

.save();



}







//==========================================================
// RESET FORM
//==========================================================


function resetGenerator(){



const inputs =
document.querySelectorAll(
"input, textarea"
);



inputs.forEach(
function(input){



if(input.type!=="color"){


input.value="";


}



});





document.getElementById(
"companyPreview"
).innerHTML="Company Name";



document.getElementById(
"taglinePreview"
).innerHTML="Tag Line";



document.getElementById(
"mobilePreview"
).innerHTML="Mobile Number";



document.getElementById(
"addressPreview"
).innerHTML="Address";



document.getElementById(
"ownerPreview"
).innerHTML="Proprietor Name";



document.getElementById(
"savingPreview"
).innerHTML="Savings Name";



}





//==========================================================
// DATE ADD FUNCTION
// প্রয়োজনে Letterhead এ তারিখ দেখাতে পারবেন
//==========================================================


function currentDate(){


let today =
new Date();



return today.toLocaleDateString();



}





//==========================================================
// FINAL INITIALIZATION
//==========================================================


console.log(
"Business Letterhead Generator Loaded Successfully"
);



//==========================================================
// FUTURE DEVELOPMENT AREA
//
// এখানে যোগ করা যাবে:
//
// - Save Template
// - User Account
// - Cloud Storage
// - More Designs
// - Database Connection
//
//=========================================================
