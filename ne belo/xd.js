// Массивы в JavaScript

let users = ['Иван', 'Павел', 'Анна']

// Получение элемента из массива
// Массив[индекс элемента]
// Индекс - порядковый номер, считая с нуля
console.log(users[1])

// Длина массива (количство элементов)
// Массмв length
console.log('Кол-во пользователей', users.length);

// Добавление элемента массива
users.push('Дмитрий')

// Удаление элемента из конца массива
users.pop();

// Добавление элемента массива в начало
users.unshift('Босс')

// Удаление элемента массива из начала
users.shift();

// Удаление элемента по индексу
// splice (индекс для удаления, кол во элементов)
// users.splice(1,1)

console.log(users, users.length)

// Объекты в JavaScript

users = [
    {
        avatar: 'https://cdn1.flamp.ru/baa6d870a72fea7fd70b4b866cd456fe.png',
        name: 'Иван',
        email: 'ivan@mail.ru',
        phone: '+7 (999) 143-143-14',
        birthday: '07.02.1998',
    },
    {
        avatar: 'https://www.clipartmax.com/png/full/258-2582267_circled-user-male-skin-type-1-2-icon-male-user-icon.png',
        name: 'Павел',
        email: 'pavel@mail.ru',
        phone: '+7 (989) 888-100-10',
        birthday: '09.09.1999',
    },
    {
        avatar: 'https://cdn3.iconfinder.com/data/icons/avatars-flat/33/woman_9-1024.png',
        name: 'Анна',
        email: 'anna@mail.ru',
        phone: '+7 (988) 111-100-11',
        birthday: '08.06.1996',
    },
]
// Получение значения объекта по его ключу

let firstUser = users[0]
console.log('Первый пользователь', firstUser)
console.log('Имя пользователя', firstUser.name, firstUser['name'])

// Задать новое свойство объекта
firstUser['Likes birds'] = true
firstUser['phone'] = '+7 (111) 011-00-01'

// Удалить свойство объекта
delete firstUser['Likes birds'];
console.log(users)
let usersList = document.getElementById('users-list');
// Функция для вывода пользователей на экран
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
        userAvatar.innerHTML = `<img src="${user.avatar}" alt="" >`
        // Помещаем Имя внутрь div-элемента-------------------------------------------------------------------!?!
        userName.innerHTML = user.name;
        userPhone.innerHTML = `<b>Телефон: </b> ${user.phone} `;
        userEmail.innerHTML = `<b>Почта: </b> ${user.email} `;
        userBd.innerHTML = `<b>Дата рождения: </b> ${user.birthday} `;
        // Поместить карточку пользователя в конце списка
        usersList.append(userCard);
        // Поместим аватар, Имя, номер, почту и дату рождения пользователя внутрь созданной карточки
        userCard.append(userAvatar, userName, userPhone, userEmail, userBd);
    }
}
showUsers()

// let numbers = [1, 2, 3,4, 5, 6]
// // numbers [0] = numbers [0] -1 ---------------------------|
// // console.log(numbers) -----------------------------------NO
// for (let num of numbers) { --------------------------------|
//     // console.log('Элемент массива', num) ----------------YES
//     num = num+1
// }
let avatarIN = document.getElementById('avatarIN')
let nameIN = document.getElementById('nameIN')
let phoneIN = document.getElementById('phoneIN')
let emailIN = document.getElementById('emailIN')
let bdIN = document.getElementById('bdIN')
let add = document.getElementById('ADDUS')
let delUs = document.getElementById('delUs')

let AddUsers = []

add.addEventListener('click', addUs)

function addUs() {
    AddUsers.push({
        Aavatar: avatarIN.value,
        Nname: nameIN.value,
        Pphone: phoneIN.value,
        Eemail: emailIN.value,
        Bbd: bdIN.value
    })
    usersList.innerHTML = ''
    for (let user of AddUsers) {
        let usCard = document.createElement('div');
        let usAvatar = document.createElement('div');
        let usName = document.createElement('h2');
        let usPhone = document.createElement('p');
        let usEmail = document.createElement('p');
        let usBD = document.createElement('p');

        usCard.classList.add('user-card');
        usAvatar.classList.add('user-avatar');
        usName.classList.add('user-name');

        usAvatar.innerHTML = `<img src="${user.Aavatar}" alt="" >`
        usName.innerHTML = user.Nname;
        usPhone.innerHTML = `<b>Телефон: </b> ${user.Pphone} `;
        usEmail.innerHTML = `<b>Почта: </b> ${user.Eemail} `;
        usBD.innerHTML = `<b>Дата рождения: </b> ${user.Bbd} `;
        usersList.append(usCard);
        usCard.append(usAvatar, usName, usPhone, usEmail, usBD);



    }
}
delUs.addEventListener('click', del)
function del() {


}
