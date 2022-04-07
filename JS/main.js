const aboutTab = document.querySelector(".aboutTab");
const aboutSection = document.querySelector(".aboutMe");
const toggler = document.querySelector(".toggler");

aboutTab.addEventListener("click",()=>{
    toggler.checked=false;
    aboutSection.scrollIntoView({behavior:"smooth"});
})

const xpTab = document.querySelector(".xpTab");
const xpSection = document.querySelector(".xp");

xpTab.addEventListener("click",()=>{
    toggler.checked=false;
    xpSection.scrollIntoView({behavior:"smooth"});
})