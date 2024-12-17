let title= document.getElementById('title')
let description = document.getElementById('description')
let button = document.getElementById('button')
let list = document.getElementById("list")
let no = 0
function addTask() {
    let taskNomer = document.createElement('div')
    let task = document.createElement('div');
    let taskTitle = document.createElement('div');
    let taskDescription= document.createElement('div');
    let deleteButton = document.createElement("button");

    function deleteTask(){
        task.remove();
    }
    deleteButton.addEventListener("click", deleteTask)

    //Добавляем HTML внутрь элемента
    no = no+1
    taskNomer.innerHTML = `<b>Номер задачи ${no}</b>`
    taskTitle.innerHTML = `<b>Название:</b> ${title.value}`;
    taskDescription.innerHTML = `<b>Описание:</b> ${description.value}`;
    deleteButton.innerHTML = "Удалить";

    //Добавляем CSS-класс на элементы
    task.classList.add('task');
    taskTitle.classList.add('task-list');
    taskDescription.classList.add('task-description');

    //Добавляем название и описание задач внутрь div-элемента
    task.append(taskNomer, taskTitle, taskDescription, deleteButton);

    //Добавляем новый элемент в конец списка задач
    list.append(task);

    //Очищаем поля формы
    title.value = "";
    description.value = "";
}

button.addEventListener('click', addTask)