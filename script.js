<<<<<<< HEAD

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

=======
let conformation=document.querySelector(".conformation");
let bookNow=document.querySelectorAll(".bookNow");
let yesBtn=document.querySelector(".yes");
let NoBtn=document.querySelector(".No");

bookNow.forEach(btn => {
    btn.addEventListener("click", (e) => {
        conformation.style.display = "block";
    });
});

NoBtn.addEventListener("click",(e)=>{
    conformation.style.display="none";
   
})
yesBtn.addEventListener("click",(e)=>{
    window.location.href="./confirmation"
   
})
>>>>>>> eebcb48e29ccf399e82c34d53f9ed3b16f10a9cf
