/* EXERCICIO 1 */
const nomes = ['Gabriela', 'Junior', 'Luciana', 'Caroline', 'Lucas']

// adicione um nome ao final da lista de nome
/* seu codigo aqui */
nomes.push('Pablito')

// exiba a lista modificada
console.log('adição ao final:\n', nomes)

// retire esse nome do fim da lista
/* seu codigo aqui */
nomes.pop()
// exiba a lista modificada
console.log('retirada do final:\n', nomes)

// adicione um nome no início da lista
/* seu codigo aqui */
nomes.unshift('Maneiro')
// exiba a lista modificada
console.log('inserção ao início:\n', nomes)

// retire esse nome do início da lista
/* seu codigo aqui */
nomes.shift()
// exiba a lista modificada
console.log('retirada do início:\n', nomes)

// exiba o indice do nome 'Luciana'
/* seu codigo aqui */
nomes.indexOf('Luciana')

/* EXERCICIO 2 */

/*
o array abaixo armazena clientes, seus nomes e situação para
solicitação de emprestimo estão representados nas propriedades
*/
const clientes = [
  {
    nome: 'Felipe',
    apto: true
  },
  {
    nome: 'Eliane',
    apto: false
  },
  {
    nome: 'Jane',
    apto: false
  },
  {
    nome: 'Luiz',
    apto: true
  }
]

// Filtre apenas os clientes aptos para solicitar emprestimo
/* seu codigo aqui */
const clientesAptos = clientes.filter((cliente)=>{
    return cliente.apto === true
})
/*
Para aqueles não aptos, adicione uma propriedade verificacao
para o time de dados verificar o por quê desses clientes não
estarem aptos para solicitar emprestimo
*/

// ex.: { nome: 'Eliane', apto: false, verificacao: true }

const clientesAtualizado = clientes.map((cliente)=>{
   if(!cliente.apto){
    return {...cliente, verificacao: true}
   }else{
    return cliente
   }
})

/* EXERCICIO 3 */
/*
Nesse exercicio temos um numero desconhecido de nomes que será passado via argumentos, o que precisamos fazer com o parâmetro nomes?
*/
function exibeNomes(...nomes) {
  nomes.forEach((nome) => {
    console.log('EX 3:', nome)
  })
}

exibeNomes('nome 1', 'nome 2')

const numeros = [6, 24, 256, 47, 12, 450]

/*
como poderiamos descobrir o maior numero sem usar nenhum loop?
Dica: use o método max (Math.max)
*/

Math.max = [...numeros]

/* EXERCICIO 4 */
// faça um clone do objeto cafe
const cafe = {
  origem: 'Cerrado brasileiro',
  torra: 'media',
  moagem: 'media fina'
}

const clone = {...cafe}

cafe.torra = 'clara'

// ao exibir clone, torra deve ser 'media' e não 'clara', o que evidencia que foi, de fato, clonado
console.log(clone)

/* EXERCICIO 5 */
// transforme a função comum em uma arrow function
function multiplicacao(n1, n2, ...numeros) {
  let acimaDeDois = 1
  if(numeros.length > 0) {
    acimaDeDois = numeros.reduce((acc, atual) => acc * atual)
  }
  return n1 * n2 * acimaDeDois
}
multiplicacao(1,2,3,4,5) // retorna 120

const multiplicacao2 = (n1, n2, ...numeros)=>{
  let acimaDeDois = 1
  if(numeros.length > 0) {
    acimaDeDois = numeros.reduce((acc, atual) => acc * atual)
  }
  return n1 * n2 * acimaDeDois
}