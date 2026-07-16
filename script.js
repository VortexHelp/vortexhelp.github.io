/* ===========================
   VortexHelp - Main Script
=========================== */

// Mobile Menu

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", function () {

        navbar.classList.toggle("active");

    });

}



// Search Function

function searchTool() {

    const input = document
        .getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();

    if (input === "") {

        alert("Please enter a tool name.");

        return;

    }


    if (
        input.includes("age")
    ) {

        window.location.href = "tools/age-calculator.html";

        return;

    }


    if (
    input.includes("bmi")
) {

    window.location.href = "tools/bmi-calculator.html";

    return;

}


    if (
        input.includes("password")
    ) {

        alert("Password Generator is coming soon!");

        return;

    }


    if (
        input.includes("pdf")
    ) {

        alert("PDF Tools are coming soon!");

        return;

    }


    if (
        input.includes("image")
    ) {

        alert("Image Tools are coming soon!");

        return;

    }


    alert("Tool not found.");

}



// Press Enter To Search

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keypress", function (event) {

        if (event.key === "Enter") {

            searchTool();

        }

    });

}
/* ===========================
   Image Compressor
=========================== */

const imageInput = document.getElementById("imageInput");
const previewImage = document.getElementById("previewImage");
const qualitySlider = document.getElementById("quality");
const qualityValue = document.getElementById("qualityValue");
const downloadBtn = document.getElementById("downloadBtn");
const result = document.getElementById("result");

let selectedImage = null;

// Show Preview

if (imageInput) {

    imageInput.addEventListener("change", function () {

        const file = this.files[0];

        if (!file) return;

        selectedImage = file;

        const reader = new FileReader();

        reader.onload = function (e) {

    if(previewImage){
        previewImage.src = e.target.result;
        previewImage.style.display = "block";
    }

};

        reader.readAsDataURL(file);

    });

}

// Quality Slider

if (qualitySlider) {

    qualitySlider.addEventListener("input", function () {

        qualityValue.innerHTML = this.value + "%";

    });

}

// Compress Image

function compressImage() {

    if (!selectedImage) {

        alert("Please select an image.");

        return;

    }

    const quality = qualitySlider.value / 100;

    const reader = new FileReader();

    reader.onload = function (event) {

        const img = new Image();

        img.onload = function () {

            const canvas = document.createElement("canvas");

            canvas.width = img.width;
            canvas.height = img.height;

            const ctx = canvas.getContext("2d");

            ctx.drawImage(img, 0, 0);

            canvas.toBlob(function (blob) {

                const url = URL.createObjectURL(blob);

                downloadBtn.href = url;
                downloadBtn.style.display = "inline-block";

                const originalSize = (selectedImage.size / 1024).toFixed(2);
                const compressedSize = (blob.size / 1024).toFixed(2);

                result.innerHTML =
                    "Original Size: <b>" + originalSize + " KB</b><br>" +
                    "Compressed Size: <b>" + compressedSize + " KB</b>";

            }, "image/jpeg", quality);

        };

        img.src = event.target.result;

    };

    reader.readAsDataURL(selectedImage);

}
/* ===========================
   Image Compressor - Premium Features
=========================== */

// Reset Tool

function resetCompressor() {

    if(imageInput){
        imageInput.value = "";
    }

    if(previewImage){
        previewImage.src = "";
        previewImage.style.display = "none";
    }

    if(downloadBtn){
        downloadBtn.style.display = "none";
        downloadBtn.removeAttribute("href");
    }

    if(result){
        result.innerHTML = "";
    }

    if(qualitySlider){
        qualitySlider.value = 80;
    }

    if(qualityValue){
        qualityValue.innerHTML = "80%";
    }

    selectedImage = null;

}


// Allow only Images

if(imageInput){

imageInput.addEventListener("change",function(){

const file=this.files[0];

if(!file) return;

if(!file.type.startsWith("image/")){

alert("Please select a valid image.");

resetCompressor();

return;

}

});

}


// Drag & Drop Support

const calculatorBox=document.querySelector(".calculator-box");

if(calculatorBox){

calculatorBox.addEventListener("dragover",function(e){

e.preventDefault();

calculatorBox.style.borderColor="#00c6ff";

});

calculatorBox.addEventListener("dragleave",function(){

calculatorBox.style.borderColor="#263244";

});

calculatorBox.addEventListener("drop",function(e){

e.preventDefault();

calculatorBox.style.borderColor="#263244";

const file=e.dataTransfer.files[0];

if(!file) return;

if(!file.type.startsWith("image/")){

alert("Please drop an image file.");

return;

}

imageInput.files=e.dataTransfer.files;

if(imageInput){
    imageInput.dispatchEvent(new Event("change"));
}

});

}