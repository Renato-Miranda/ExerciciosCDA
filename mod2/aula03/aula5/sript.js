var criar = document.getElementById('criar');
var comer = document.getElementById('comer');
var latir = document.getElementById('latir');
var exibir = document.getElementById('exibir');

var cachorro = {
    nome: "",
    dataNascimento:'',
    darNome: function(){
        var nome = prompt('de nome ao dog')
        this.nome = nome;
        alert('o dog tem o nome de ' + this.nome)
    },
    darNascimento: function(){
        var nascimento = prompt('qual a da de nascimento do dog')
        this.nascimento = nascimento;
        alert('o dog tem o nascimento em ' + this.nascimento)
    }
}

criar.addEventListener('click', function(){
    cachorro.darNome()
    cachorro.darNascimento()
})