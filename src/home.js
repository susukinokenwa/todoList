// greeting.js
export {updateHome};

function updateHome(){
    const content = document.querySelector("#content");
    let mainP = document.createElement("p");
    let title = document.createElement("h1");
    title.textContent = "ROSSI's";
    mainP.textContent = "Step into a slice of Tuscany right in the heart of the city. We believe that great Italian food isn't just about feeding the stomach; it’s about warming the soul. From the rich aroma of garlic and tomatoes simmering on the stove to the lively clinking of wine glasses, every detail here is designed to make you feel like family. Whether you are grabbing a quick wood-fired pizza for lunch or settling in for a luxurious five-course dinner, our doors are open, the ovens are hot, and a table is waiting for you.";
    content.appendChild(title);
    content.appendChild(mainP);
}
