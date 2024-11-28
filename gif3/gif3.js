
let fgElement = document.getElementById('fg')

fgElement.addEventListener('click', yh )
function yh() {
    if(fgElement.innerText == 'Текст кнопки'){
        fgElement.innerText = 'Новый текст'
    }
    else{fgElement.innerText = 'Текст кнопки'}
}