let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOK = false

nome.style.width = '100%'
email.style.width = '100%'


function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'nome invalido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'nome valido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'email invalido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'email valido'
        txtEmail.style.color = 'green'
        emailOk = true

    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#assunto')
    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'texto é muito grande ,digite no maximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none'
        assuntoOK = true

    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOK == true) {
        alert('formulario enviado com sucesso')
    } else {
        alert('preencha corretamente o formulario antes de enviar...')
    }
}