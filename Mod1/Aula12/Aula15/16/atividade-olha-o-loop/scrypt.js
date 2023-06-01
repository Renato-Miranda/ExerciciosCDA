// var nPositivo = parseInt(prompt('Digite um numero'))

// function listaDecrescente (){
//     while (nPositivo > 0 ){
//         nPositivo = nPositivo -1
//         console.log('\n' + nPositivo )
//     }
// }

// listaDecrescente()


// function fizz (numero){
//     var controle = 0
//     var resposta = ' '
//     while(controle <= numero){
//         if (controle % 3 === 0) {
//             resposta = resposta + '\nfizz'
//         }else{
//             resposta = resposta + '\n${controle}'
//         }
//         controle++
//     }
//     console.log(resposta)

// }

// fizz(10)

function fizz(numero) {
    var controle = 0;
    var resposta = '';
  
    while (controle <= numero) {
      if (controle % 3 === 0) {
        resposta = resposta + `\nfizz`;
      } else {
        resposta = resposta + `\n${controle}`
      }
      controle++;
    }
  
    console.log(resposta);
  }
  
  fizz(10);