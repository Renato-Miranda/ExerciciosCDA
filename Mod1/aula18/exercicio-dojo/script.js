var gaveta = [["lapis","caneta","borracha"] ["chaves","anel"]]

function encontrarIndice(entrada) {
  for (let i = 0; i < gaveta.length; i++) {
    const pote = gaveta[i];
    for (let j = 0; j < pote.length; j++) {
      const item = pote[j];
      if (item === entrada) {
        return `A string '${entrada}' foi encontrada no pote ${i} na posição ${j}.`;
      }
    }
  }
  return "A string não foi encontrada.";
}

// Exemplo de uso:
const array = [["item1", "item2", "item3"], ["item4", "item5", "item6"]];
const entrada = "item5";

const resultado = encontrarIndice(entrada, array);
console.log(resultado);
