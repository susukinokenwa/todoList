// greeting.js
export {renderForm, todo};

class todo {
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;

    }
}

function renderForm(){
    const container = document.querySelector(".cont1");
    let form = document.createElement("form");


}