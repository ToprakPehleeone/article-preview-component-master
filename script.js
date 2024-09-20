const shareBtn = document.querySelector(".share_btn")
const share = document.querySelector(".share")
const trng = document.querySelector(".triangle")
shareBtn.addEventListener("click", () => {
    
    share.classList.toggle("none")
    trng.classList.toggle("none")
    
})