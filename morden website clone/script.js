const navLinks = document.getElementById("nav-links");
const humburgerBtn = document.getElementById("humburger-toggle-btn");

humburgerBtn.addEventListener("click", ()=>{
    navLinks.classList.toggle('active');
})
