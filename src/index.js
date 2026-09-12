// src/index.js
import "./style.css";
//import { greeting } from "./home.js";



// check if working
console.log("nice to meet you");
//updateHome();

function cleanContainer(){
    const container = document.querySelector("#content");
    if(container)
    container.textContent = "";
}
//