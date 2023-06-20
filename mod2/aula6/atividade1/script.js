// Montar o objeto de requisição
var req = new XMLHttpRequest()


var pokemonName = "ditto"
// Montar a requisição em sí
var resp = req.open("GET", `https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

// Definir a espera da resposta
req.onload = function () {
    if(req.status == 200){
       var respObj = JSON.parse(req.responseText)
        console.log(respObj)
    }
}

// Enviar a requisição
req.send()


// ------------------------------------------------------------------------------------------------


// montar o objeto
var requisicao = new XMLHttpRequest();
var pokemonName = "charmander";
// montar a requisicao


 requisicao.open("GET", `https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
// definir a espera da resposta
requisicao.onload = function () {
    if (requisicao.status == 200) {
        var respObj = JSON.parse(requisicao.responseText);

        // obter habilidades
        var abilities = respObj.abilities.map(function (ability) {
            return ability.ability.name;
        });
        console.log("Abilities: ", abilities);

        // obter movimentos
        var moves = respObj.moves.map(function (move) {
            return move.move.name;
        });
        console.log("Moves: ", moves);
    }
}

// enviar a requisicao
requisicao.send();

var req2 = new XMLHttpRequest()
var pokemonId = 10

req2.open('GET', `https://pokeapi.co/api/v2/evolution-chain/${pokemonId}/` )

req2.onload = function () {
    if (req2.status === 200) {
        var objParse = JSON.parse(req2.responseText)
        console.log(objParse)
    }
}

req2.send()