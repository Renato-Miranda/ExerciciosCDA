var aberto = document.querySelector('#aberto')
var fechado = document.querySelector('#fechado')

aberto.addEventListener('click', abrir)
fechado.addEventListener('click', fechar)

function abrir (){
    var a = document.createElement('div')
    a.innerHTML = `<p>Estamos Abertos</p>`
    document.body.appendChild(a)

}

function fechar(){
    var b = document.createElement('div')
    b.innerHTML = `<p>Estamos Fechados!</p>`
    document.body.appendChild(b)
}