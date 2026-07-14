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

        window.location.href = "age-calculator.html";

        return;

    }


    if (
        input.includes("bmi")
    ) {

        alert("BMI Calculator is coming soon!");

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