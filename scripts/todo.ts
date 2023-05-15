type todoType = { checked: boolean, id: number, text: string };
let todoList: todoType[] = [];
const TODO = "rollingtodo";
const todoform = document.querySelector("#todoform") as HTMLFormElement;
const todobox = document.querySelector("#todoform input") as HTMLInputElement;
const todoview = document.querySelector("#todolist") as HTMLUListElement;

function saveAll() {
    localStorage.setItem(TODO, JSON.stringify(todoList));
}

function createTodo(todo: todoType) {
    const input = document.createElement("input");
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    input.type = "checkbox";
    li.id = String(todo.id);
    span.innerText = todo.text;
    button.className = "material-symbols-outlined";
    button.innerText = "delete";

    input.addEventListener("change", (e: Event) => {
        const li = (e.target as HTMLElement)!.parentElement;

        (li?.children[1] as HTMLElement).classList.toggle("line_thru");
    });
    button.addEventListener("click", (e: Event) => {
        const li = (e.target as HTMLElement)!.parentElement;
        li?.remove();
        todoList = todoList.filter(todo => todo.id !== parseInt(li!.id));
        saveAll();
    });
    
    li.appendChild(input);
    li.appendChild(span);
    li.appendChild(button);
    todoview?.appendChild(li);
}

function submitHandler(e: Event) {
    e.preventDefault();
    const todo = {
        checked: false,
        text: todobox.value,
        id: Date.now(),
    }
    todobox.value = "";
    todoList.push(todo);
    createTodo(todo);
    saveAll();
}

todoform.addEventListener("submit", submitHandler);
const savedData = localStorage.getItem(TODO);
if (savedData !== null) {
    todoList = JSON.parse(savedData);
    todoList.forEach(createTodo)
}