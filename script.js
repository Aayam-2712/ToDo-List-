// const taskInput = document.querySelector(".task-input input"),
// filters = document.querySelectorAll(".filters span"),
// clearAll = document.querySelector(".clear-btn"),
// taskBox = document.querySelector(".task-box");
// let editId,
// isEditTask = false,
// todos = JSON.parse(localStorage.getItem("todo-list"));
// filters.forEach(btn => {
//     btn.addEventListener("click", () => {
//         document.querySelector("span.active").classList.remove("active");
//         btn.classList.add("active");
//         showTodo(btn.id);
//     });
// });
// function showTodo(filter) {
//     let liTag = "";
//     if(todos) {
//         todos.forEach((todo, id) => {
//             let completed = todo.status == "completed" ? "checked" : "";
//             if(filter == todo.status || filter == "all") {
//                 liTag += `<li class="task">
//                             <label for="${id}">
//                                 <input onclick="updateStatus(this)" type="checkbox" id="${id}" ${completed}>
//                                 <p class="${completed}">${todo.name}</p>
//                             </label>
//                             <div class="settings">
//                                 <i onclick="showMenu(this)" class="uil uil-ellipsis-h"></i>
//                                 <ul class="task-menu">
//                                     <li onclick='editTask(${id}, "${todo.name}")'><i class="uil uil-pen"></i>Edit</li>
//                                     <li onclick='deleteTask(${id}, "${filter}")'><i class="uil uil-trash"></i>Delete</li>
//                                 </ul>
//                             </div>
//                         </li>`;
//             }
//         });
//     }
//     taskBox.innerHTML = liTag || `<span>You don't have any task here</span>`;
//     let checkTask = taskBox.querySelectorAll(".task");
//     !checkTask.length ? clearAll.classList.remove("active") : clearAll.classList.add("active");
//     taskBox.offsetHeight >= 300 ? taskBox.classList.add("overflow") : taskBox.classList.remove("overflow");
// }
// showTodo("all");
// function showMenu(selectedTask) {
//     let menuDiv = selectedTask.parentElement.lastElementChild;
//     menuDiv.classList.add("show");
//     document.addEventListener("click", e => {
//         if(e.target.tagName != "I" || e.target != selectedTask) {
//             menuDiv.classList.remove("show");
//         }
//     });
// }
// function updateStatus(selectedTask) {
//     let taskName = selectedTask.parentElement.lastElementChild;
//     if(selectedTask.checked) {
//         taskName.classList.add("checked");
//         todos[selectedTask.id].status = "completed";
//     } else {
//         taskName.classList.remove("checked");
//         todos[selectedTask.id].status = "pending";
//     }
//     localStorage.setItem("todo-list", JSON.stringify(todos))
// }
// function editTask(taskId, textName) {
//     editId = taskId;
//     isEditTask = true;
//     taskInput.value = textName;
//     taskInput.focus();
//     taskInput.classList.add("active");
// }
// function deleteTask(deleteId, filter) {
//     isEditTask = false;
//     todos.splice(deleteId, 1);
//     localStorage.setItem("todo-list", JSON.stringify(todos));
//     showTodo(filter);
// }
// clearAll.addEventListener("click", () => {
//     isEditTask = false;
//     todos.splice(0, todos.length);
//     localStorage.setItem("todo-list", JSON.stringify(todos));
//     showTodo()
// });
// taskInput.addEventListener("keyup", e => {
//     let userTask = taskInput.value.trim();
//     if(e.key == "Enter" && userTask) {
//         if(!isEditTask) {
//             todos = !todos ? [] : todos;
//             let taskInfo = {name: userTask, status: "pending"};
//             todos.push(taskInfo);
//         } else {
//             isEditTask = false;
//             todos[editId].name = userTask;
//         }
//         taskInput.value = "";
//         localStorage.setItem("todo-list", JSON.stringify(todos));
//         showTodo(document.querySelector("span.active").id);
//     }
// });















// Function called while clicking add button
// function add_item() {

//     // Getting box and ul by selecting id;
//     let item = document.getElementById("box");
//     let list_item = document.getElementById("list_item");
//     if(item.value != ""){
    
//         // Creating element and adding value to it
//         let make_li = document.createElement("LI");
//         make_li.appendChild(document.createTextNode(item.value));
    
//         // Adding li to ul
//         list_item.appendChild(make_li);
    
//         // Reset the value of box
//         item.value=""
        
//         // Delete a li item on click
//         make_li.onclick = function(){
//             this.parentNode.removeChild(this);
//         }
    
//     }
//     else{
    
//         // Alert msg when value of box is "" empty.
//         alert("plz add a value to item");
//     }
    
//     }
    











const submitForm = document.querySelector(".add");
const addButton = document.querySelector(".add-todo");
const todoList = document.querySelector(".todos");
const list = document.querySelectorAll(".todos li");

const lang = navigator.language;

let date = new Date();

let dayName = date.toLocaleString(lang, {
  weekday: "long"
});

let listLenght = list.lenght;

const generateTempalate = (todo) => {
  const html = `<li>
                  <input type="checkbox" id="todo_${listLenght}">
                  <label for="todo_${listLenght}">
                    <span class="check"></span>
                    ${todo}
                  </label>
                  <i class="far fa-trash-alt delete"></i>
                </li>`;
  todoList.innerHTML += html;
};

function addTodos(e) {
  e.preventDefault();
  const todo = submitForm.add.value.trim();
  if (todo.length) {
    listLenght = listLenght + 1;
    generateTempalate(todo);
    submitForm.reset();
  }
}

submitForm.addEventListener("submit", addTodos);
addButton.addEventListener("click", addTodos);

function deleteTodos(e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
}

todoList.addEventListener("click", deleteTodos);



