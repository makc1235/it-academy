let ButtonAdd = document.getElementById("ButtonAdd");
let elements = document.getElementById('contt2');
let Name = document.getElementById("Name");
let Price = document.getElementById("Price");
let Kolvo = document.getElementById("Kolvo");
let Art = document.getElementById("Art");
let OP = document.getElementById('OP')
let button = document.getElementById('button');
let ButtonClear = document.getElementById('ButtonClear')
let an = document.getElementById('an')
let tic = document.getElementById('tic')
let number = 0
let number2 = 0
let clearAll = document.getElementById('clearAll')
let tik2 = document.getElementById('tik2')

function delAl() {
    let question = 'Вы точно хотите удалить все товары?'
    const result = confirm(question)
    if (result){
        elements.innerHTML = ''
        number = 0
        tic.innerHTML = `<span>Добавлено товаров: ${ number }</span>`;
        number2 = 0
        tik2.innerHTML = `<span> Общая сумма: ${ number2 }</span>`;
    }
    else {

    }
}



clearAll.addEventListener('click', delAl)

function appendElement() {
    const newDiv = document.createElement("div");
    newDiv.classList.add('element')
    elements.append(newDiv);
    const TxT = document.createElement('h1');
    TxT.classList.add('text')
    TxT.innerHTML = Name.value
    newDiv.append(TxT)
    TxT.classList.add('title');
    const price = document.createElement('h3');
    price.classList.add('text')
    price.innerHTML = 'Цена: ' + Price.value;
    newDiv.append(price)
    price.classList.add('price');
    const kolvo = document.createElement('h3');
    kolvo.classList.add('text')
    kolvo.innerHTML = 'Кол-во: ' + Kolvo.value;
    newDiv.append(kolvo)
    kolvo.classList.add('kolvo');
    const art = document.createElement('h3');
    art.classList.add('text')
    art.innerHTML = 'Артикул: ' + Art.value;
    newDiv.append(art)
    art.classList.add('art');
    const op = document.createElement('h3');
    op.classList.add('text')
    op.innerHTML = 'Описание: ' + OP.value;
    newDiv.append(op)
    op.classList.add('op');
    const del = document.createElement('button');
    newDiv.append(del)
    del.innerHTML = 'Удалить'
    del.classList.add('del')
    number2 = number2 + +Price.value
    let newPrice = +Price.value
    Name.value = ''
    Price.value = ''
    Kolvo.value = ''
    Art.value = ''
    OP.value = ''
    number = number+1
    tic.innerHTML = `<span>Добавлено товаров: ${ number }</span>`;
    tik2.innerHTML = `<span> Общая сумма: ${ number2 }</span>`;

    const an = document.createElement('button');
    newDiv.append(an)
    an.innerHTML = 'Купить'
    an.classList.add('an')
    function xp() {
        window.location.href = 'https://sun9-77.userapi.com/impg/oy7_T3Pr5JGQPLH4RuAbM3yATU_oKCBl6u6BfA/mf0A2ZSfd_4.jpg?size=1080x881&quality=95&sign=6f2a429711e4aea502ba22bd75df4014&c_uniq_tag=ZbOYSz69jZvjkywHdaMz6yJr0GxX5UK-WLRn9ELJ2fI&type=album';
    }
    an.addEventListener('click', xp)
    function delet() {
        TxT.remove();
        price.remove();
        kolvo.remove();
        art.remove();
        op.remove();
        newDiv.remove();
        let question = 'Вы точно хотите удалить этот товар?'
        const result = confirm(question)
        number = number-1
        tic.innerHTML = `<span>Добавлено товаров: ${ number }</span>`;
        number2 = number2 - newPrice
        tik2.innerHTML = `<span> Общая сумма: ${ number2 }</span>`;
    }
    del.addEventListener('click', delet)}

function deleteA() {
    Name.value =''
    Price.value =''
    Kolvo.value =''
    Art.value =''
    OP.value =''
}


ButtonAdd.addEventListener('click', appendElement);
ButtonClear.addEventListener('click', deleteA)