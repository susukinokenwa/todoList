// src/index.js
import "./style.css";
//import { greeting } from "./home.js";
import { updateHome } from "./home.js";
import { updateMenu } from "./menu.js";
import { updateAbout } from "./about.js";


// check if working
console.log("nice to meet you");
updateHome();

function cleanContainer(){
    const container = document.querySelector("#content");
    if(container)
    container.textContent = "";
}
//
const homeBtn = document.querySelector(".homeBtn");
homeBtn.addEventListener("click", () =>{
    cleanContainer();
    updateHome();
});

const menuBtn = document.querySelector(".menuBtn");
menuBtn.addEventListener("click", ()=>{
    cleanContainer();
    updateMenu();
})

const aboutBtn = document.querySelector(".aboutBtn");
aboutBtn.addEventListener("click", () =>{
    cleanContainer();
    updateAbout();
});
