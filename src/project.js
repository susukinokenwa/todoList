

class project{
    constructor(title){
        this.title = title;
        this.todo = [];
    }
}

function addTodo(project, todo){
    project.todo.push(todo);
}