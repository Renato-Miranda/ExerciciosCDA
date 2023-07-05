const obj1 = {
    nome: 'Externo',
    
      mostarNome:() =>{
        let oi = 2
            console.log(this.nome)
        }
}
const obj2= {
        nome: 'Interno',
        
    }

    let mostarNome = obj1.mostarNome.bind(obj2)
    mostarNome()






// var nome = 'Qualquer'
// console.log(nome);



// function teste() {
//      this.nome = 'Externo Função'
//      function teste2(){
//         this.nome = 'Interno Função'
//         console.log(this.nome);
//      }
//     teste2() 
//     console.log(this.nome);
// }

// const testeFunction = function(){
//     console.log('Function callback');
// }

// class Classe1 {
//     mostrarNome(){
//         console.log("Jojo")
//     }
// }

// class Classe2 extends Classe1 {
// }

// let objtClasse2 = new Classe2()

// objtClasse2.mostrarNome()


let testando = unico => {
    console.log(unico);
}

testando = ()=> 'Abacaxi'

testando = numeor => numero > 0 
