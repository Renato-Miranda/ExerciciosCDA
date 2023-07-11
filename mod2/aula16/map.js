// const alunos = {
//     victroMathes : 2000,
//     AnaCarol: 3500,
//     Joao: 2500
// } 

// const valorAumento = {
//     victroMathes : 0,
//     AnaCarol: 0,
//     Joao: 0
// } 

// // Object.values(alunos) // pega só os valores


// const arrayDeAumentos = Object.entries(alunos).map((elemento) =>{
//     const response = [elemento[0 ], 4000 - elemento[1]]
//     valorAumento[response[0]] = response[1]
//     return response
// })

// console.log(arrayDeAumentos);
// console.log(valorAumento);


let arrayNumeros = [1, 2, 3, 4, 5, 6]

const contaArray = arrayNumeros.map((element) => {
    return element + 1
});

console.log(contaArray)


arrayNumeros.forEach((element)=>{
    arrayNumeros.pop()
})

