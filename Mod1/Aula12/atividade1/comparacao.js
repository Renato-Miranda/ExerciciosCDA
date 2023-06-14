var alimento = prompt('Qual o alimento?')
var valorSemanaPassada = prompt('Qual valor foi pago na semana passada?')
var valorSemanaAtual = prompt('qual o valor atual?')



if (alimento == 'tomate' || alimento == 'laranja' || alimento == 'abacaxi'|| alimento == 'limão'){
    var valorSemanaPassada = Number(prompt('Qual valor foi pago na semana passada?'))
    var valorSemanaAtual = Number(prompt('qual o valor atual?'))
    
    if(valorSemanaPassada > valorSemanaAtual){
        console.log('O alimento: ' + alimento + 'diminuiu em $' + 5)
    }

}else {
    console.log(Alimento + ' indisponivel na feira')
}

// comentario