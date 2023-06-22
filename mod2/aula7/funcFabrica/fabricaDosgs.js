function fabrica (nome, peso, raca){
    return {
        nome: nome,
        peso: peso,
        raca: raca,
        latir: function () {
            console.log(`${this.nome}: AUUUUUUUUU`);
        },
        rosnar: function () {
            console.log(`${this.nome}: GRRRRRRRRRRR`);
        }
    }
}


function producaoEmMassa (nomes, pesos, racas ){
    if(nomes.length === pesos.length && nomes.length === racas.length){
        var arrayObjetos = []
        for (var i = 0; i < nomes.length; i++){
            var objetoCachorro = fabrica(nomes[i], pesos[i], racas[i])
            arrayObjetos.push(objetoCachorro)
        }
        return arrayObjetos
    }else{
        console.log('Nenhum objeto criado, deve ter a mesma quantidade')
    }
}

var nome = ['max', 'mel', 'sol']
var pesos = [35.2, 18.6, 2.5]
var racas = ['labrador', 'SRD', 'pincher']