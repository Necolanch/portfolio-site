const aboutTab = document.querySelector(".aboutTab");
const aboutSection = document.querySelector(".aboutMe");

aboutTab.addEventListener("click",()=>{
    aboutSection.scrollIntoView({behavior:"smooth"});
})