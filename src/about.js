
export {updateAbout};

function updateAbout(){
    const content = document.querySelector("#content");
    let mainP = document.createElement("p");
    let title = document.createElement("h1");
    title.textContent = "About";
    mainP.textContent = "It started with a single, handwritten recipe book passed down from Nonna Maria over fifty years ago. Growing up in a small village outside Naples, our founders learned early on that the secret to unforgettable food is remarkably simple: respect the ingredients. We do not cut corners. Our pasta is rolled fresh every morning, our tomatoes are sourced directly from San Marzano, and our olive oil comes from an independent grove in Puglia.";
    content.appendChild(title);
    content.appendChild(mainP);
     let mainPP  = document.createElement("p");
     
     mainPP.textContent = "We didn't just want to open a restaurant; we wanted to recreate the loud, joyful Sunday dinners of our childhoods. Our kitchen blends generations-old traditions with modern culinary techniques to bring you plates that are simultaneously comforting and exciting. Pull up a chair, pour a glass of Chianti, and become part of our ongoing story. Buon appetito.";
    content.appendChild(mainPP);
}