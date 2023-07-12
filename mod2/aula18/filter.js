const time = [
    ["Sra.", "Paula", "Albuquerque"],
    ["Sr.", "Kelwin", "Nascimento"],
    ["Sra.", "Gabriella", "Dias", "Cruz"]
  ];
  //Atividade 1: Lista com nomes dos integrantes do time.
  /*
  Utilizando seus conhecimentos de programação funcional, componha as funções necessárias (filter, map, reduce, forEach) para que a lista com arrays de nomes e título de pessoas do time se transforme na lista abaixo:
  const gastos = [
      112.46, //conta de luz
      42.89, //conta de água
      799.00, //Aluguél
      428.9 //mercado
  ]
  */
  
  for (var i = 0; i < time.length; i++) {
    const nomes = time[i].join(' ');
    console.log(nomes);
  }

  const despesas = [
    {tipo: "Luz", valor: 112.46},
    {tipo: "Água", valor: 42.89}, 
    {tipo: "Aluguel", valor: 799.00},
    {tipo: "Mercado", valor: 428.9}
];

//Utilize reduce para calcular o total das despezas. Lembre-se, como o array contém objetos, é necessário inicializar o acumulador como zero!

const total = despesas.reduce((acumulador, despesa) => acumulador + despesa.valor, 0);

console.log(total);

//utilize reduce para criar um report com uma lista contendo os tipos de gastos e o total gasto. Lembre-se, é necessário retornar o acumulador para que ele possa ser utilizado novamente. A estrutura do report deve ser: {tipos, total}


const base ={
    tipos: [],
    total: 0
}

const report = despesas.reduce((acc, despesa) => {
    base.tipos.push(despesa.tipo)
    return acc += despesa.valor
},0)

base.total = report 
console.log(base);


console.log(report);

