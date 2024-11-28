let xfElement = document.getElementById('hg')
let ok = document.getElementById('ok')
ok.addEventListener('click', yh )

function yh() {
    if(xfElement.value == 'Текст внутри input'){
        xfElement.value = 'Новый текст внутри input'
    }
    else{xfElement.value = 'Текст внутри input'}
}