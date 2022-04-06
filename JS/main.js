const aboutTab = document.querySelector(".aboutTab");
const aboutSection = document.querySelector(".aboutMe");

aboutTab.addEventListener("click",()=>{
    aboutSection.scrollIntoView({behavior:"smooth"});
})

aboutTab.addEventListener("touchstart",()=>{
    aboutSection.scrollIntoView({behavior:"smooth"});
})

const xpTab = document.querySelector(".xpTab");
const xpSection = document.querySelector(".xp");

xpTab.addEventListener("click",()=>{
    xpSection.scrollIntoView({behavior:"smooth"});
})