var autonomia1 = document.getElementById('autonomia')
var rodados = document.getElementsById('rodados')


var carro = {
    cor: 'azul',
    capacidadeTanque: 60,
    quantidadeCombustivel: 40,
    consumoMedio: 10,
    autonomia: function (){
        var autonomia = this.quantidadeCombustivel * this.consumoMedio
        alert(`autonomia de: ${autonomia} km`)
        
    },
    avanco: function (){
       var qtdKm = prompt('Quantos km o carro andou?')
       this.quantidadeCombustivel = this.quantidadeCombustivel - qtdKm * this.consumoMedio
        alert('Combustivel restante: ' + this.quantidadeCombustivel)
    }
}

autonomia1 = addEventListener('click', function (){
    carro.autonomia()
}
)

rodados = addEventListener('click', function (){
    carro.avanco()
})
