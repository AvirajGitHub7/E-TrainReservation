
// MENU TOGGLE (Common for all pages)
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("header .right ul");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
    });
  }
});


// INDEX PAGE FORM SUBMIT
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    window.location.href = "./trainlist.html";
  });
}

let conformation = document.querySelector(".conformation");
let bookNow = document.querySelectorAll(".bookNow");
let yesBtn = document.querySelector(".yes");
let noBtn = document.querySelector(".No");

bookNow.forEach(btn => {
    btn.addEventListener("click", () => {
        conformation.style.display = "block"; // Show confirmation dialog
    });
});

noBtn.addEventListener("click", () => {
    conformation.style.display = "none"; // Hide confirmation dialog
});

yesBtn.addEventListener("click", () => {
    alert("Registered Successfully!!!"); // Show alert message
    conformation.style.display = "none"; // Optionally, hide the dialog after alert
});