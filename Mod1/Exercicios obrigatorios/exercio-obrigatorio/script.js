// Função principal para receber os elementos da lista
function receberElementos() {
    // Solicita a quantidade de elementos ao usuário
    var quantidade = parseInt(prompt("Digite a quantidade de elementos:"));
    var lista = []; // Array para armazenar os elementos da lista

    // Enquanto a quantidade de elementos na lista não for igual à fornecida pelo usuário, continua solicitando elementos
    while (lista.length < quantidade) {
      var elemento = prompt("Digite o próximo elemento da lista:");

      // Valida se o elemento tem um número ímpar de caracteres
      if (elemento.length % 2 !== 0) {
        lista.push(elemento); // Adiciona o elemento na lista se for válido
      } else {
        alert("Elemento inválido! Digite um novo elemento com número ímpar de caracteres.");
        // Caso contrário, exibe um alerta ao usuário e solicita um novo elemento
      }
    }

    // Cria um elemento <ul> para exibir a lista completa na página
    var listaElemento = document.createElement("ul");

    // Percorre a lista e cria um elemento <li> para cada elemento da lista
    for (var i = 0; i < lista.length; i++) {
      var itemElemento = document.createElement("li");
      itemElemento.textContent = lista[i];
      listaElemento.appendChild(itemElemento);
    }

    // Adiciona o elemento <ul> contendo a lista na página
    document.body.appendChild(listaElemento);
  }

  // Chama a função principal quando a página é carregada
  receberElementos()