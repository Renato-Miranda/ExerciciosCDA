// const chalk = require('chalk')
// import chalk from "chalk";

// // console.log('Hello madafucking world!!!')

// // setTimeout(callback, 5000)

// // function callback() {
// //     console.log('atrasado')
// // }

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



// const chamada = 'enviada'


// const comunicacaoPerdida = new Promise ((resolve, reject) => {
//     if(chamada === 'enviada'){
//         resolve('OK, todos vivos na estação')
//     }else {
//         reject('Comunicação perdida')
//     }
// })

// comunicacaoPerdida.then((res)=>{
//     console.log('Sucesso: ' + res);
// })
// .catch((err) =>{
//     console.log('Falha: ' + err);
// })


// function comunicacaoPerdida() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const comunicaoPerdida = 'enviad'
//             if (comunicaoPerdida === 'enviada') {
//                 resolve("Ok, todos vivos na estação");
//             } else {
//                 reject("Comunicação Perdida");
//             }
//         }, 2500);
//     });
// }

// comunicacaoPerdida()
//     .then((res) => {
//         console.log(chalk.green(`Sucesso: ${res}`));
//     })
//     .catch((erro) => {
//         console.log(chalk.red(`Falha: ${erro}`));
//     });

console.log("oi");