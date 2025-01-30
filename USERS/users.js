let usersList = document.getElementById('users-list');

let users = [];

async function getUsers() {
    let response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    users = response.data.users;
    showUsers();
}

function showUsers() {
    for (let user of users) {
        let taskNomer = document.createElement('div')
        let task = document.createElement('div');
        let taskTitle = document.createElement('div');
        let taskBody= document.createElement('div');
        let deleteButton = document.createElement("button");

        function deleteTask(){
            task.remove();
        }
        deleteButton.addEventListener("click", deleteTask)

        //Добавляем HTML внутрь элемента
        no = no+1
        taskNomer.innerHTML = `<b>Номер задачи ${no}</b>`
        taskTitle.innerHTML = `<b>Название:</b> ${user.title}`;
        taskBody.innerHTML = `<b>Описание:</b> ${user.body}`;
        deleteButton.innerHTML = "Удалить";

        //Добавляем CSS-класс на элементы
        task.classList.add('task');
        taskTitle.classList.add('task-list');
        taskDescription.classList.add('task-description');

        //Добавляем название и описание задач внутрь div-элемента
        task.append(taskNomer, taskTitle, taskDescription, deleteButton);

        //Добавляем новый элемент в конец списка задач
        list.append(task);
    }
}

getUsers();