var autonomia1 = document.getElementById('autonomia')
var rodados = document.getElementsById('rodados')


var carro = {
    cor: 'azul',
    capacidadeTanque: 60,
    quantidadeCombustivel: 40,
    consumoMedio: 10,
    autonomia: function (qtdKm){
        var autonomia = qtdKm/ this.consumoMedio
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


// montar o obejeto de resquisição
var req = new XMLHttpRequest()

// montar a resquisição em sí
var resp = req.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto')

// definir a espera da resposta 
req.onload = function () {
    console.log(req.responseText)
}

// enviar a requisição 
req.send()