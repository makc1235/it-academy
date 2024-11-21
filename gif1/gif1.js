let button = document.getElementById('color')

button.addEventListener('click', cleanForm )

function cleanForm() {
    if (document.body.style.backgroundColor != 'green') {
        document.body.style.backgroundColor = 'green'
    }
    else {
        document.body.style.backgroundColor = 'red'
    }
}
