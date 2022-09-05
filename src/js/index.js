const campos = document.querySelectorAll('.campo')
const erro = document.getElementsByClassName('campoObrigatorio')

function checarCampos() {
    campos.forEach((element, index) => {
        if (!element.value) {
            erro[index].style.display = 'block'
            element.style.borderColor = '#F52E2E'
        } else {
            erro[index].style.display = 'none'
            element.style.borderColor = '#00C22B'
        }
    }
)};