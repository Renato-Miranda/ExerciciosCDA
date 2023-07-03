// let qualquer = prompt('Digite se é salgado ou doce')

// switch (qualquer) {
//     case 'doce':
//     case 'saboroso':    
//         console.log("paçoca")
//         break
//     case 'salgado':
//         console.log('Risole');
//         break
//     default:
//         console.log('Não é comida');
// }

// let pessoa = prompt('qual tipo de pessoa')

// let beneficio = pessoa === 'pessoa fisica' ? 'Beneficio liberado' : 'Beneficio negado'
// alert(beneficio)

// function teste (...infinitos){
//     for (let i = 0; i < infinitos.length; i++){
//         console.log(infinitos[i]);
//     }
// }


// class Fila {
//     constructor(){
//         this.filaPessoas = []
//     }
//     chegada(...numeroFila){
//         this.filaPessoas.push(numeroFila)
//     }
//     partida(){
//         if(this.filaPessoas.length === 0){
//         console.log('Fila vazia')
//         }else{
//             this.filaPessoas.unshift()
//         }
//     }

// }

// const fila = new Fila ()

// fila.chegada(1,2,3)

// console.log(fila.filaPessoas)

// fila.partida() 

// console.log(fila.filaPessoas);

class Fila {
    constructor() {
        this.enfileirados = []
    }
    adicionar(...pessoas) {
        this.enfileirados = [...this.enfileirados, ...pessoas]
        console.log(this.enfileirados);
    }
    atender() {
        if(this.enfileirados.length <= 0){
            console.log('a fila está zerada');
        } 
        this.enfileirados.shift()
        console.log(this.enfileirados)
    }
    atenderTodos() {
        let repeat = this.enfileirados.length
        for (var i = 0; i < this.repeat; i++) {
            this.atender()
        }
        console.log("fila zerada");
    }
}