const minhaCole = db.createCollection ('cabetudo');

const iserir = db.insertMany ({

    nome: 'Lucca',
    raca: 'Labratop',
    peso: '25kg',
    cor: 'Champagne',
    porte: 'médio'

},
{
    modelo: 'Gol',
    ano: '2013',
    cor: 'cinza-escuro',
    nPortas: '5',
    tramissao: 'manual',
    combustivel: 'gasolina',
},
{
    nome: 'Germânia',
    animal: 'calopsita',
    comidas:['mamaão', 'maça']
}
)
