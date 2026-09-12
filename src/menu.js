
export {updateMenu};

const menu = [
    ["Bruschetta al Pomodoro", "Grilled sourdough, marinated heirlooms, fresh basil, balsamic glaze.", 12],
    ["Calamari Fritti", "Lightly dusted, crispy fried squid served with spicy marinara.", 15],
    ["Pappardelle al Cinghiale", "Hand-cut ribbons of pasta with slow-braised wild boar ragù.", 26],
    ["Truffle Mushroom Risotto", "Arborio rice, wild mushrooms, Parmigiano-Reggiano, white truffle oil." , 24],
    ["Osso Buco", "Milanese-style braised veal shank over creamy saffron polenta.", 38],
    ["Branzino Livornese", "Pan-seared Mediterranean sea bass, capers, olives, cherry tomatoes.", 34],
    ["Classic Tiramisu", "Espresso-soaked ladyfingers, mascarpone cream, dark cocoa dust.", 10],
    ["Panna Cotta", "Vanilla bean infused cream with a mixed berry compote.", 9]

]

function updateMenu(){
    const content = document.querySelector("#content");
    const main = document.createElement("h1");
    main.textContent = "Menu";
    content.appendChild(main);
    menu.forEach((element) =>{
        let container = document.createElement("div");
        container.classList.add("div");
        const title = document.createElement("h2");
        title.textContent = element[0];
        const describ = document.createElement("p");
        describ.textContent = element[1];
        describ.classList.add("p");
        const price = document.createElement("p");
        price.textContent = '$' + element[2];
        container.appendChild(title);
        container.appendChild(describ);
        container.appendChild(price);
        content.appendChild(container);
    });
}