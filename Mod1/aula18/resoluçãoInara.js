var gavetaPrincipal = [
    ["lápis", "caneta", "borracha"],
    ["papel", "tesoura", "videogame", "garrafa"],
    ["meia", "spray", "teclado", "presilia"]
];

var encontrar = "meia";

function encontrarItem(gaveta, item) {
    for (var pote = 0; pote < gaveta.length; pote++) {
        for (var j = 0; j < gaveta[pote].length; j++) {
            if (gaveta[pote][j] === item) {
                console.log(`O item ${item} foi encontrado no pote ${pote}`);
                return; // Encerra a função assim que o item é encontrado
            }
        }
    }
    console.log("Item não encontrado");
}

encontrarItem(gavetaPrincipal, encontrar);