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
