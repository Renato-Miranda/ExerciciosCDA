// function simples (numero){
//     if (numero > 0){
//         console.log('Deu certo ')
//     }else {
//         throw new Error('Deu errado')
//     }
// }


// try {
//     simples()
// }catch(erro){
//     if (erro.message == 'Deu errado'){
//         console.log('Tente de novo')
//     }else{
//         console.log("não sei o que aconteceu")
//     }
// }

class Pilha{
    constructor(){
        this.armazem = []
    }
    empilhar(item){
        this.armazem.unshift(item)
    }
    desempilhar(item){
        this.armazem.shift(item)
    }
    mostraArmazem(){
        console.log(this.armazem)
    }
}

const pilhinha = new Pilha()

pilhinha.empilhar(5,)
pilhinha.mostraArmazem()

