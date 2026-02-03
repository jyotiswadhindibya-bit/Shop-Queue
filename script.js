let login=document.querySelector(".login-btns");
let owner=document.querySelector("#owner");
let ownerlog=document.querySelector(".owner-login");
owner.addEventListener("click",function () {
    login.style.display="none";
    ownerlog.style.display="flex";
})