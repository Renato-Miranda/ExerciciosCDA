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



const promessa = new Promise((resolve, reject) => {
    let hoje = 'segunda'
    if (hoje === 'segunda'){
        resolve(console.log('Segundou'));
    }else {
        reject(console.log('hoje é sabado-feira'))
    }
})

promessa.then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err);
})



