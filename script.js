
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

