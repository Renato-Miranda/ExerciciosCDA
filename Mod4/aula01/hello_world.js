// console.log('Hello madafucking world!!!')

// setTimeout(callback, 5000)

// function callback() {
//     console.log('atrasado')
// }

// function atrasado(string) {
//     setTimeout (()=> { 
//         console.log('hello friend ' + string)
// }, 5000)
// }

// atrasado('Renatera')



// const promessa = new Promise((resolve, reject) => {
//     let hoje = 'segunda'
//     if (hoje === 'segunda'){
//         resolve(console.log('Segundou'));
//     }else {
//         reject(console.log('hoje é sabado-feira'))
//     }
// })

// promessa.then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err);
// })



const chamada = 'enviada'

const comunicacaoPerdida = new Promise ((resolve, reject) => {
    if(chamada === 'enviada'){
        resolve('OK, todos vivos na estação')
    }else {
        reject('Comunicação perdida')
    }
})

comunicacaoPerdida.then((res)=>{
    console.log('Sucesso: ' + res);
})
.catch((err) =>{
    console.log('Falha: ' + err);
})