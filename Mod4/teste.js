import { log } from 'console';
import readline  from 'readline';
import { createInterface } from 'readline';
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// const propriedades = [];

// function obterEntrada() {
//   rl.question('Digite uma propriedade de CSS (ou "SAIR" para encerrar): ', entrada => {
//     if (entrada.toUpperCase() === 'SAIR') {
//       rl.close();
//     } else {
//       propriedades.push(entrada);
//       obterEntrada();
//     }
//   });
// }

// rl.on('close', () => {
//   const propriedadesOrdenadas = propriedades.sort();
//   console.log('\nPropriedades ordenadas de A-Z:');
//   propriedadesOrdenadas.forEach(propriedade => {
//     console.log(propriedade);
//   });
//   process.exit(0);
// });

// obterEntrada();

class AnimalList {
  constructor(){
    this.animals = [],
    this.rl = createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  start(){
    console.log("Digite nome de animais ou digite 'SAIR' para encerrar");
    this.rl.on('line', input => {
      if (input.toUpperCase() === 'SAIR') {
        this.rl.close();
      } else {
        this.addAnimal(input.toUpperCase());
      }
    })
    this.rl.on('close', ()=> {
      this.showSortedAnimals()
      console.log("Programa encerrado");
    })
  }

  addAnimal(animal){
     this.animals.push(animal)
  }

  showSortedAnimals(){
    const sortedAnimals = this.animals.sort()
    console.log("Animais ordenados ");
    sortedAnimals.forEach(animal => console.log(animal))
  }


}

const animalList = new AnimalList()
animalList.start()