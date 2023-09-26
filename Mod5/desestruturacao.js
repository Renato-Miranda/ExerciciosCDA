/* EXERCICIO 1 */
const alunos = ['Alice', 'Gabriela', 'João', 'Francisco', 'Natália', 'Giovana', 'Gabriel']

const [a1, a2, a3, a4, a5, a6, a7] = alunos

/* EXERCICIO 2 */
const disciplinas = ['Matemática', 'Física', 'Química', 'Língua Portuguesa', 'Biologia']

const [d1, d2, , d4, d5] = disciplinas

/* EXERCICIO 3 */
const dadosCliente = {
    nome: 'Fabio',
    idade: 45,
    endereco: {
        logradouro: 'Rua das Palmeiras',
        numero: 42,
        bairro: 'Barra da Tijuca',
        cidade: 'Rio de Janeiro'
    },
    assinanteDesde: 2017
}
const {nome, idade, endereco: {logradouro, numero, bairro, cidade} , assinanteDesde} = dadosCliente

/* EXERCICIO 4 */
const vestimenta = {
    camisa: {
        listrada: true,
        cor: 'Vermelha e branca',
        colecao: 'Outono/Inverno 2019'
    },
    calca: {
        cor: 'Azul escuro',
        colecao: 'Primavera/Verão 2021'
    }
}

const {camisa: {listrada, cor, colecao}, calca:{cor:colore, colecao:colezzione}} = vestimenta

console.log(colore);
console.log(colezzione);

