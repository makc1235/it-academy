let kn1 = document.getElementById("kn1");
let kn2 = document.getElementById("kn2");
let kn3 = document.getElementById("kn3");
let kn4 = document.getElementById("kn4");
let number = 0
function dddElement() {

}
function appendElement() {
    const kn1 = document.createElement("h3")
    number = number - 10
    tic.innerHTML = `<span>Добавлено товаров: ${number}</span>`;
}
function appenElement() {
    const kn2 = document.createElement("h3")
    number = number - 1
    tic.innerHTML = `<span>Добавлено товаров: ${number}</span>`;
}
function appeElement() {
    const kn3 = document.createElement("h3")
    number = number + 1
    tic.innerHTML = `<span>Добавлено товаров: ${number}</span>`;
}
function appElement() {
    const kn4 = document.createElement("h3")
    number = number + 10
    tic.innerHTML = `<span>Добавлено товаров: ${number}</span>`;
}

tic.innerHTML = `<span>Текущее число: ${ number }</span>`;
ButtonAdd.addEventListener('click', appendElement);
ButtonAdd.addEventListener('click', appenElement);
ButtonAdd.addEventListener('click', appeElement);
ButtonAdd.addEventListener('click', appElement);