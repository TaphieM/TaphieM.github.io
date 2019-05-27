// different sections in html
const home=document.getElementById("home");
const salute=document.getElementById("salute");
const projects=document.getElementById("projects");
const contact=document.getElementById("contact");
const aboutme=document.getElementById("aboutme");


//Functions to show different views
const showAboutme=()=>{
    salute.style.display="none";
    projects.style.display="none";
    contact.style.display = "none"; 
    aboutme.style.display = "block"; 
}

const showMainpages=()=>{
    salute.style.display="block";
    projects.style.display="block";
    contact.style.display = "block"; 
    aboutme.style.display = "none"; 
}

//Conecting the click with the functions
myname.addEventListener("click", () => {
    showMainpages();
})

navProjects.addEventListener("click", ()=>{
    showMainpages();
})

navContact.addEventListener("click", ()=>{
    showMainpages();
})

navAbout.addEventListener("click", ()=>{
    showAboutme();
})

//Initialazing the default view
showMainpages();