let usersList = document.getElementById('users-list');

let users = [];

async function getUsers() {
    let response = await axios.get('https://dummyjson.com/users');
    users = response.data.users;
    showUsers();
}

function showUsers() {
    // ЦИклы в JavaScript
    // for (let элемент_массива of массив) {
    // действия для выполнения над элементом
    // }
    // Создаём карточку пользователя
    for (let user of users) {
        let userCard = document.createElement('div');
        // Создаём аватар пользователя
        let userAvatar = document.createElement('div');
        // Создаём Имя пользователя
        let userName = document.createElement('h2')
        // Создаём номер пользователя
        let userPhone = document.createElement('p')
        // Создаём почту пользователя
        let userEmail = document.createElement('p')
        // Создаём дату рождения пользователя
        let userBd = document.createElement('p')

        // Добавляем карточке пользователя класс user-card
        userCard.classList.add('user-card');
        // Добавляем аватару пользователя класс user-avatar
        userAvatar.classList.add('user-avatar');
        // Добавляем аватару пользователя класс user-name
        userName.classList.add('user-name');

        // Помещаем картинку внутрь div-элемента
        userAvatar.innerHTML = `<img src="${user.image}" alt="" >`
        // Помещаем Имя внутрь div-элемента---!?!
        userName.innerHTML = user.firstName;
        userPhone.innerHTML = `<b>Телефон: </b> ${user.phone} `;
        userEmail.innerHTML = `<b>Почта: </b> ${user.email} `;
        userBd.innerHTML = `<b>Дата рождения: </b> ${user.birthDate} `;

        // Поместим аватар, Имя, номер, почту и дату рождения пользователя внутрь созданной карточки
        userCard.append(userAvatar, userName, userPhone, userEmail, userBd);

        // Поместить карточку пользователя в конце списка
        usersList.append(userCard);
    }
}

getUsers();