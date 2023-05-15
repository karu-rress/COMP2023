"use strict";
let todoList = [];
const TODO = "rollingtodo";
const todoform = document.querySelector("#todoform");
const todobox = document.querySelector("#todoform input");
const todoview = document.querySelector("#todolist");
function saveAll() {
    localStorage.setItem(TODO, JSON.stringify(todoList));
}
function createTodo(todo) {
    const input = document.createElement("input");
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    input.type = "checkbox";
    li.id = String(todo.id);
    span.innerText = todo.text;
    button.className = "material-symbols-outlined";
    button.innerText = "delete";
    input.addEventListener("change", (e) => {
        const li = e.target.parentElement;
        (li === null || li === void 0 ? void 0 : li.children[1]).classList.toggle("line_thru");
    });
    button.addEventListener("click", (e) => {
        const li = e.target.parentElement;
        li === null || li === void 0 ? void 0 : li.remove();
        todoList = todoList.filter(todo => todo.id !== parseInt(li.id));
        saveAll();
    });
    li.appendChild(input);
    li.appendChild(span);
    li.appendChild(button);
    todoview === null || todoview === void 0 ? void 0 : todoview.appendChild(li);
}
function submitHandler(e) {
    e.preventDefault();
    const todo = {
        checked: false,
        text: todobox.value,
        id: Date.now(),
    };
    todobox.value = "";
    todoList.push(todo);
    createTodo(todo);
    saveAll();
}
todoform.addEventListener("submit", submitHandler);
const savedData = localStorage.getItem(TODO);
if (savedData !== null) {
    todoList = JSON.parse(savedData);
    todoList.forEach(createTodo);
}
